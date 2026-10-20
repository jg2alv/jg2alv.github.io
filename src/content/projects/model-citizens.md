---
title: Model Citizens
summary: "Five optimization problems, one modeling toolkit: packing, production planning, and graph optimization with Julia, JuMP, and Gurobi."
period: "2025-02"
origin: academic
discipline: Pesquisa Operacional
disciplineTags:
  - po
technologyTags:
  - julia
  - jump
  - gurobi
role: "Formulated and implemented five optimization models with Julia, JuMP, and Gurobi."
repository: https://github.com/jg2alv/tp1-po
featured: false
order: 202502
visual: optimization-models
---
Model Citizens turns five optimization problems into executable mathematical models. Using Julia, JuMP, and Gurobi, I formulated bin packing, maximum clique, production planning with backlogs, minimum graph coloring, and achromatic coloring. The problems share a solver, but each requires a different definition of variables, constraints, and objectives.

The modeling challenge is preserving the meaning of each decision: assignment and capacity in packing, mutual adjacency in cliques, inventory and late-delivery balances in production, and compatibility between vertex colors. Achromatic coloring adds a further requirement: every pair of used colors must appear across an edge.

The project connects mathematical formulation with implementation, from parsing problem instances to obtaining and interpreting objective values. It highlights why a solver is only as useful as the model it receives.

