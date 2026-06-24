"""Train and export the optional Scam Shield browser model."""

from __future__ import annotations

import argparse
import csv
import json
import unicodedata
from datetime import date
from pathlib import Path

from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import StratifiedKFold, cross_validate
from sklearn.pipeline import Pipeline


def normalize_text(value: str) -> str:
    return unicodedata.normalize("NFC", str(value)).lower()


def read_dataset(path: Path) -> tuple[list[str], list[int]]:
    texts: list[str] = []
    labels: list[int] = []
    with path.open("r", encoding="utf-8-sig", newline="") as handle:
        for row_number, row in enumerate(csv.DictReader(handle), start=2):
            text = (row.get("text") or "").strip()
            label = (row.get("label") or "").strip()
            if not text:
                continue
            if label not in {"0", "1"}:
                raise ValueError(f"Row {row_number}: label must be 0 or 1")
            texts.append(text)
            labels.append(int(label))
    if len(texts) < 20 or len(set(labels)) < 2:
        raise ValueError("Dataset needs at least 20 rows and both labels 0/1")
    return texts, labels


def build_pipeline() -> Pipeline:
    return Pipeline(
        [
            (
                "tfidf",
                TfidfVectorizer(
                    preprocessor=normalize_text,
                    token_pattern=r"(?u)\b\w\w+\b",
                    ngram_range=(1, 2),
                    min_df=1,
                ),
            ),
            (
                "classifier",
                LogisticRegression(
                    C=3.0,
                    class_weight="balanced",
                    max_iter=4000,
                    random_state=42,
                ),
            ),
        ]
    )


def train_and_export(dataset: Path, output: Path, folds: int) -> None:
    texts, labels = read_dataset(dataset)
    minority_count = min(labels.count(0), labels.count(1))
    effective_folds = min(folds, minority_count)
    if effective_folds < 2:
        raise ValueError("Each class needs at least two samples for cross-validation")

    pipeline = build_pipeline()
    cv = StratifiedKFold(n_splits=effective_folds, shuffle=True, random_state=42)
    scores = cross_validate(
        pipeline,
        texts,
        labels,
        cv=cv,
        scoring=["precision", "recall", "f1", "accuracy"],
    )
    metrics = {
        name: float(scores[f"test_{name}"].mean())
        for name in ("precision", "recall", "f1", "accuracy")
    }

    pipeline.fit(texts, labels)
    vectorizer = pipeline.named_steps["tfidf"]
    classifier = pipeline.named_steps["classifier"]
    model = {
        "version": date.today().isoformat(),
        "sampleCount": len(texts),
        "classBalance": {
            "safe": labels.count(0),
            "scam": labels.count(1),
        },
        "metrics": metrics,
        "vocab": vectorizer.vocabulary_,
        "idf": {str(index): float(value) for index, value in enumerate(vectorizer.idf_)},
        "binary": {
            "coef": classifier.coef_[0].tolist(),
            "intercept": float(classifier.intercept_[0]),
        },
    }

    output.parent.mkdir(parents=True, exist_ok=True)
    payload = json.dumps(model, ensure_ascii=False, separators=(",", ":"))
    output.write_text(f"window.SCS_MODEL={payload};\n", encoding="utf-8")
    print(json.dumps({"output": str(output), "metrics": metrics}, ensure_ascii=False, indent=2))


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("dataset", type=Path, help="CSV with text,label columns")
    parser.add_argument(
        "--output",
        type=Path,
        default=Path("../web_app/js/model.js"),
        help="Destination model.js",
    )
    parser.add_argument("--folds", type=int, default=5)
    args = parser.parse_args()
    train_and_export(args.dataset, args.output, args.folds)


if __name__ == "__main__":
    main()
