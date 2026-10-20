---
title: Power Players
summary: "Blockbusters, regional niches, and the long tail: our team used Python clustering and visual analytics to explore video-game sales."
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
  - matplotlib
  - seaborn
  - networkx
  - jupyter
role: "Helped choose the dataset and mining task; contributed exploratory analysis, visualization, and interpretation."
repository: https://github.com/jg2alv/tp4-md
featured: false
order: 202601
visual: game-sales
---
What separates a global blockbuster from a regional niche? Our team investigated unsupervised market segmentation using historical video-game sales, comparing K-Means and DBSCAN on regional sales profiles. The goal was to explore patterns in the recorded market—not to predict whether a future release would succeed.

My contribution began with helping choose the dataset and define clustering as the main mining task. I participated in exploratory analysis and in creating and interpreting visualizations of sales distributions, publishers, genres, and release years. Examining missing values, highly skewed sales, and a small number of exceptional titles helped connect the raw data to the team’s modeling decisions, including logarithmic transformations and standardized regional inputs.

Efficiency and scalability informed the comparison of algorithm costs, while usability and accessibility shaped the communication of results. Cluster profiles received descriptive names, and heatmaps, regional radar charts, temporal views, and a publisher–genre network helped make the groupings interpretable beyond numerical labels. I contributed to turning those visual patterns into explanations that remained tied to the data.

The comparison exposed a useful tension: stronger internal clustering scores did not automatically produce more useful market segments. DBSCAN isolated unusual sales profiles as noise, whereas K-Means offered a broader partition for examining regional niches and the long tail. Interpreting those results required accounting for excluded noise points and the historical dataset’s coverage limits. The key lesson was to balance numerical evaluation with readable, carefully bounded conclusions—not to mistake descriptive clusters for causal explanations or investment forecasts.

