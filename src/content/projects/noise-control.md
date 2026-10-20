---
title: Noise Control
summary: "How much noise can learning take? Our team used Python, Flower, and Flautim to study differential-privacy mechanisms under uneven client data."
period: "2026-01"
origin: academic
discipline: Proteção e Privacidade em Aprendizado de Máquina
disciplineTags:
  - ppml
technologyTags:
  - python
  - pytorch
  - flower
  - flautim
  - scikit-learn
role: "Helped define the research topic, ran Flautim experiments, interpreted results, and proposed further differential-privacy experiments in federated learning."
repository: https://github.com/jg2alv/tp1-ppml
featured: false
order: 202601
visual: federated-privacy
---
Our team investigated how differential-privacy mechanisms affect federated learning when clients hold different data distributions. Using Python, PyTorch, Flower, and Flautim, we trained a Fashion-MNIST clothing classifier with Federated Averaging and Dirichlet-based client partitions. The study compared training without privacy mechanisms against fixed and adaptive server-side clipping with Gaussian noise, under a trusted-server assumption.

I helped define the research topic and was responsible for running the experiments on Flautim, the platform developed by FutureLab, where I am a laboratory member. I interpreted accuracy, macro-F1, and loss trajectories, examined differences across clients, and proposed further experiments on differential privacy in federated learning. This connected the research question to hands-on experimentation and critical analysis of the results.

In the runs documented in our report, fixed clipping at C = 1.0 remained competitive with the non-private heterogeneous baseline, while C = 5.0 and the tested adaptive configuration performed substantially worse. These observations highlighted the interaction between client heterogeneity, clipping, and noise—not a general rule that adding noise improves learning or that adaptive clipping is inherently weaker.

The project gave me practical experience with Flower and federated experimentation, while sharpening my understanding of privacy–utility trade-offs. A key lesson was to distinguish useful experimental observations from formal privacy guarantees: model accuracy alone does not establish a privacy budget, and conclusions must remain tied to the tested configuration.
