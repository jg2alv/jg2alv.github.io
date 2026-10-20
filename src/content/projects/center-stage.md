---
title: Center Stage
summary: "How far can approximation take clustering? Python implementations of k-center algorithms meet K-Means across synthetic and real-world datasets, distance metrics, and runtime comparisons."
period: "2025-02"
origin: academic
discipline: Algoritmos 2
disciplineTags:
  - alg2
technologyTags:
  - python
  - numpy
  - pandas
  - scikit-learn
role: "Implemented the clustering algorithms, distance metrics, and experimental evaluation pipeline."
repository: https://github.com/jg2alv/tp2-alg2
featured: false
order: 202502
visual: clustering
---
I implemented two approaches to k-center clustering in Python: farthest-first center selection and interval refinement over the covering radius. Both work with precomputed distance matrices. I also built Minkowski and Mahalanobis distance functions from their mathematical definitions using NumPy, then integrated scikit-learn's K-Means as a baseline for comparison.

The experimental pipeline combines synthetic datasets with ten real-world UCI datasets. It generates different cluster shapes and overlap levels, normalizes numerical features, and subsamples large datasets to keep full distance matrices manageable. For each configuration, the pipeline records clustering radius, silhouette score, adjusted Rand index, and execution time across repeated runs, then exports aggregated results with means and standard deviations.

A central challenge was comparing methods that optimize different objectives without reducing quality to a single score. Varying distance metrics and refinement tolerances connected approximation algorithms with empirical evaluation, while managing quadratic distance-matrix storage brought the practical cost of algorithmic choices into focus.

