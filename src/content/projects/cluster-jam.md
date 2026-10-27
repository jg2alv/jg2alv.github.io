---
title: Cluster Jam
summary: "Spotify tracks meet MiniBatchKMeans in this team-built Python clustering study, comparing baseline LLM advice with guidance focused on scalability and interpretable musical profiles."
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
role: "Explored data quality and feature distributions and prepared the Spotify data for clustering."
repository: https://github.com/jg2alv/tp2-md
featured: false
order: 202601
visual: music-clustering
---
Grouping music by sound is not the same as recovering genre labels. Our team explored unsupervised clustering of Spotify tracks using Python, pandas, and scikit-learn, while comparing baseline LLM recommendations with a second track explicitly guided by responsible-AI principles. I was responsible for Data Understanding and Data Preparation: examining distributions, missing values, repeated tracks, identifier columns, and the uneven scales of musical attributes before preparing the data for modeling.

The comparison centered on efficiency and scalability, alongside usability and accessibility. The baseline already recommended standardization, optional PCA, and summaries of cluster characteristics. Guided prompts made computational constraints and communication needs more explicit: MiniBatchKMeans became a stronger recommendation, costly hierarchical clustering was deprioritized, and radar charts complemented heatmaps to make acoustic profiles easier to interpret. In preparation, the guided advice also expanded discussion of commercial bias, outlier handling, and the trade-off between dimensionality reduction and interpretability.

The team’s final pipeline combined StandardScaler, PCA retaining 90% of variance, and MiniBatchKMeans with 15 clusters. Internal clustering metrics were read alongside feature-profile visualizations and genre distributions, rather than treated as the sole measure of usefulness. A low silhouette score highlighted overlapping groups and the need to present the clusters as exploratory musical profiles, not definitive categories or a validated recommendation system.

The main lesson was that explicit guidelines changed the LLM’s priorities more than its evaluation criteria: both tracks proposed the same core metrics, but the guided track connected algorithm selection and presentation more closely to project constraints. My preparation work also reinforced that recommendations about extreme values, feature encoding, and information loss still require human review; a more detailed answer is not automatically the best choice for the dataset.

