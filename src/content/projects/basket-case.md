---
title: Basket Case
summary: "What belongs in the same basket? Our team mined retail association rules in Python while comparing baseline LLM advice with guidance on scalability and accessible results."
period: "2026-01"
origin: academic
discipline: Mineração de Dados
disciplineTags:
  - md
technologyTags:
  - python
  - pandas
  - mlxtend
  - jupyter
  - matplotlib
  - networkx
role: "Owned data understanding and preparation, including quality diagnostics, cleaning, transaction construction, and critical comparison of LLM recommendations."
repository: https://github.com/jg2alv/tp1-md
featured: false
order: 202601
visual: basket-mining
---
Purchase histories hide relationships that raw sales totals miss. Our team used frequent-pattern mining on Online Retail II to identify products bought together, extracting association rules with FP-Growth and examining support, confidence, lift, and conviction. The project also compared baseline LLM assistance with a guided track centered on efficiency and scalability, plus usability and accessibility.

My responsibility was understanding and preparing the data. I examined missing values, inconsistent product descriptions, cancellations, and the long tail of rarely purchased items. I built the cleaning and transaction-preparation workflow around invoices and stable product codes, removed invalid purchases and unnecessary customer identifiers, and retained product descriptions to make the resulting rules readable. Binary item presence kept the representation aligned with the question of what was purchased together.

The baseline already outlined a workable basket structure, but the guided responses made filtering decisions, information loss, and documentation more explicit. Across the team’s modeling comparison, that emphasis also shifted attention from Apriori as the default toward FP-Growth and presentations suited to nontechnical readers. We still corrected suggestions that expanded the task unnecessarily, such as discretizing quantities, and treated rare-item filtering as a documented trade-off rather than an automatic cleanup rule.

The main lesson was that explicit guidelines can redirect an LLM toward practical constraints without making its advice self-validating. Human review remained essential to keep the analysis focused, check parameter choices, and distinguish useful associations from narrow patterns within themed product collections. Clearer recommendations helped the team reason about the pipeline; they did not remove the need to verify its assumptions.

