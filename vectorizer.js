"use strict";

(function initializeScamShieldModelRuntime() {
  function tokenize(text) {
    const normalized = String(text || "").normalize("NFC").toLocaleLowerCase();
    const tokens = normalized.match(/[\p{L}\p{N}_]{2,}/gu) || [];
    const grams = tokens.slice();
    for (let index = 0; index < tokens.length - 1; index += 1) {
      grams.push(`${tokens[index]} ${tokens[index + 1]}`);
    }
    return grams;
  }

  window.SCS_vectorize = function vectorize(text, vocabulary, idf) {
    const counts = Object.create(null);
    tokenize(text).forEach((gram) => {
      const vectorIndex = vocabulary?.[gram];
      if (vectorIndex !== undefined) {
        counts[vectorIndex] = (counts[vectorIndex] || 0) + 1;
      }
    });

    let squaredLength = 0;
    Object.keys(counts).forEach((key) => {
      counts[key] *= Number(idf?.[key] ?? 1);
      squaredLength += counts[key] ** 2;
    });

    if (squaredLength > 0) {
      const inverseLength = 1 / Math.sqrt(squaredLength);
      Object.keys(counts).forEach((key) => {
        counts[key] *= inverseLength;
      });
    }
    return counts;
  };

  window.SCS_mlProb = function mlProbability(text) {
    const model = window.SCS_MODEL;
    const binary = model?.binary;
    if (!model?.vocab || !model?.idf || !binary?.coef || !Number.isFinite(binary.intercept)) {
      return null;
    }

    const vector = window.SCS_vectorize(text, model.vocab, model.idf);
    let logit = binary.intercept;
    Object.keys(vector).forEach((key) => {
      logit += vector[key] * Number(binary.coef[key] || 0);
    });
    return 1 / (1 + Math.exp(-logit));
  };
}());
