"use strict";

/*
 * Replace null with the exported model object from train_export.py.
 * This file is reserved for ML weights. Do not paste the older
 * analyzeScamText regex engine here; its useful rules and combos now live
 * in app.js and use accent folding plus URL-aware scoring.
 * Optional metadata:
 * metrics: { precision, recall, f1, accuracy }
 * version: "2026-06"
 * sampleCount: 1200
 */
window.SCS_MODEL = window.SCS_MODEL || null;
