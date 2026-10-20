---
title: Royal Cut
summary: "How few soldiers can protect a capital? Python transforms a battlefield into a flow network to calculate the minimum cost of defense."
period: "2025-01"
origin: academic
discipline: Algoritmos 1
disciplineTags:
  - alg1
technologyTags:
  - python
role: "Modeled grid defense as a flow network and implemented residual capacities and augmenting-path search."
repository: https://github.com/jg2alv/tp2-alg1
featured: false
order: 202501
visual: defense-cut
---
Royal Cut turns a kingdom’s defense problem into a minimum-cut calculation: determine the smallest number of soldiers needed to block every route from the map’s boundary to the capital. I implemented the solver in Python, representing traversable terrain as a directed graph and excluding impassable mountains.

The central challenge was encoding the cost of defending a location rather than simply blocking a road. I split each traversable cell into entry and exit vertices, connected by an edge whose capacity represents its troop requirement. Infinite-capacity connections preserve movement between neighboring cells, while a super-source represents possible invasions along the border.

I then implemented a BFS-based Ford–Fulkerson routine with reverse edges and dynamically updated residual capacities. Working through vertex identifiers, graph connections, and augmenting paths strengthened my understanding of how maximum flow certifies a minimum cut. The accompanying report explains the reduction and analyzes time and memory requirements, connecting the implementation to the optimization principle behind its result.
