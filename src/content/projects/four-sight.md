---
title: Four Sight
summary: "Four in a row, several moves ahead: competitive search in Python with Minimax, Alpha–Beta pruning, and time-aware iterative deepening."
period: "2026-02"
origin: academic
discipline: Introdução à Inteligência Artificial
disciplineTags:
  - iia
technologyTags:
  - python
role: "Implemented and evaluated a Connect Four search agent with Minimax, Alpha–Beta pruning, and time-bounded iterative deepening."
repository: https://github.com/jg2alv/tp1-iia
featured: false
order: 202602
visual: adversarial-search
---
I implemented a Python agent for Connect Four, replacing the random-move baseline in the course-provided game. The agent evaluates a 6×7 board and selects a legal move through a configurable search interface. The existing Flask server and p5.js client supplied the playing and testing environment; my implementation focused on the decision-making engine.

The search combines depth-limited Minimax, terminal-state scoring, and heuristic evaluation of unfinished positions. Alpha–Beta pruning eliminates branches that cannot affect the Minimax result, while iterative deepening progressively explores greater depths and retains the best move found within the search budget. The central engineering trade-off is looking further ahead without losing control of response time.

The experimental analysis compared search depths from two to five and time limits of one and two seconds, tracking win rates, time per move, visited states, and reached depth where applicable. Games against a human opponent added qualitative observations. The project strengthened my understanding of adversarial search, heuristic decision-making, and the relationship between computational cost and playing behavior, without treating a single metric as a complete measure of the agent.
