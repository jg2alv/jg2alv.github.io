---
title: Sound Judgment
summary: "Hit or niche? A team study in Python compares baseline and guideline-driven LLM advice for classifying Spotify tracks from acoustic features."
period: "2026-01"
origin: academic
discipline: Mineração de Dados
disciplineTags:
  - md
technologyTags:
  - python
  - pandas
  - numpy
  - scikit-learn
  - xgboost
  - shap
  - jupyter
role: "Prepared the data and popularity-derived target for acoustic classification, with exploratory analysis and quality checks."
repository: https://github.com/jg2alv/tp3-md
featured: false
order: 202601
visual: hit-classification
---
Can acoustic features distinguish a hit from a niche track? Our team explored binary classification with the Spotify Tracks Dataset, using popularity-defined labels and comparing standard LLM prompts with a guided track centered on efficiency and scalability, plus usability and accessibility. The objective was not simply to select a classifier, but to examine how explicit constraints changed the LLM’s recommendations and where human review remained essential.

On the data side, I examined feature distributions and correlations, checked missing values and repeated tracks, and prepared the acoustic inputs for modeling. My work covered deduplication by artist and track name, deriving the Hit/Niche label from popularity, removing identifiers and the target’s source column, and applying robust scaling while retaining legitimate acoustic extremes. The work highlighted how label definitions and the exclusion of artist and marketing context shape both class imbalance and the limits of the question being asked.

The guided track made computational cost and methodological risks more explicit, prioritizing a lightweight logistic-regression reference and bounded Random Forest configurations. It was not uniformly better: the baseline modeling response suggested SHAP, while the guided response omitted it despite the accessibility objective. Both initial modeling proposals left class imbalance insufficiently addressed, showing that naming responsible-AI principles does not ensure a complete implementation.

The team’s final workflow combined Random Forest and XGBoost, class weighting, stratified cross-validation, and feature-importance and SHAP visualizations. Reviewing recall and F1 alongside accuracy exposed how a superficially strong score could conceal missed hits. My main takeaway was that useful LLM assistance depends on translating guidelines into inspectable data decisions and checking competing recommendations against the actual distribution—not treating the guided track as automatically superior.

