---
title: "Darwin's Math"
summary: "Let evolution write the equation: a Python framework for symbolic regression with three selection strategies and reproducible experiment tooling."
period: "2026-02"
origin: academic
discipline: Computação Natural
disciplineTags:
  - compnat
technologyTags:
  - python
  - numpy
  - matplotlib
  - pytest
role: "Implemented the GP framework, selection methods, genetic operators, and experimental tooling."
repository: https://github.com/jg2alv/tp1-compnat
featured: false
order: 202602
visual: genetic-programming
---
Darwin's Math treats equation discovery as an evolutionary search. I built a Python framework for symbolic regression, representing mathematical expressions as immutable trees and scoring them with RMSE. The same implementation works with two synthetic datasets and a concrete compressive-strength dataset.

I implemented ramped half-and-half initialization, subtree crossover and mutation, elitism, and three parent-selection strategies: roulette, tournament, and epsilon-lexicase. The last uses case-level errors and a median-absolute-deviation threshold, allowing selection to respond to performance on individual training examples rather than only a single aggregate score.

Keeping the search numerically stable and the experiments interpretable required protected arithmetic, depth limits, and separate tracking of structural duplicates, tree growth, and operator outcomes. I also built seeded experiment and reporting commands that preserve configurations, log each generation, and evaluate the best training expression on held-out test data. The work connected evolutionary search with parameter sensitivity, reproducibility, and the distinction between training fit and generalization.
