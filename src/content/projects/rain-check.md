---
title: Rain Check
summary: "Find a dry route through a rain-soaked festival: Python graph algorithms connect shelters, trace shortest paths, and identify critical points of failure."
period: "2025-01"
origin: academic
discipline: Algoritmos 1
disciplineTags:
  - alg1
technologyTags:
  - python
role: "Implemented geometric graph modeling, breadth-first traversal, and articulation-point detection."
repository: https://github.com/jg2alv/tp1-alg1
featured: false
order: 202501
visual: shelter-network
---
Rain Check turns a festival caught in a storm into a graph problem. I built a Python command-line application that models circular shelters as vertices and connects overlapping or tangent shelters, allowing movement without leaving cover. An adjacency list separates the geometric model from the algorithms that analyze it.

I implemented breadth-first search to find the minimum number of shelter transitions between two people and identify connected regions. A depth-first traversal with Tarjan’s discovery times and low-link values identifies articulation points: shelters whose removal would disconnect previously accessible areas. A two-pass BFS routine also estimates distances across each connected component.

The most demanding part was identifying critical shelters while handling disconnected regions and the special case of a DFS root. This work strengthened my understanding of graph modeling, traversal invariants, and connectivity analysis. The accompanying report connects the algorithmic choices to their time and space costs.
