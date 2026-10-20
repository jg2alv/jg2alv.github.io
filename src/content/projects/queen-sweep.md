---
title: Queen Sweep
summary: "One queen, many targets: Python combines breadth-first search, bitmask dynamic programming, and a greedy strategy to compare capture routes on obstructed chessboards."
period: "2025-01"
origin: academic
discipline: Algoritmos 1
disciplineTags:
  - alg1
technologyTags:
  - python
role: "Implemented queen-move distance searches, subset dynamic programming, and a nearest-pawn heuristic."
repository: https://github.com/jg2alv/tp3-alg1
featured: false
order: 202501
visual: queen-route
---
Capturing every pawn with a queen becomes a routing problem once obstacles reshape the board. I implemented two Python approaches for this challenge: a dynamic-programming strategy for finding a minimum-move capture order and a greedy alternative that repeatedly selects the nearest remaining pawn.

In the dynamic-programming approach, breadth-first searches compute movement distances between the queen and the pawns. A Held–Karp recurrence then uses bitmasks to represent visited targets and evaluate capture sequences without enumerating every permutation. The greedy implementation instead builds an explicit graph of queen moves and uses successive breadth-first searches to choose its next target.

Separating movement on the board from optimization over target subsets was the central design challenge. The accompanying report compares both approaches across eight cases, discussing execution time and solution quality. This work connected graph modeling, state compression, and algorithm analysis, showing why a locally attractive capture does not necessarily produce the best overall route.
