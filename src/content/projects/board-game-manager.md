---
title: Board Meeting
summary: "Four board games, one C++ system. Our team combined reusable game interfaces, persistent player statistics, and a simplified chess prototype."
period: "2024-01"
origin: academic
discipline: Programação e Desenvolvimento de Software II
disciplineTags:
  - pds2
technologyTags:
  - cpp
  - doctest
  - doxygen
  - make
role: Designed class interactions and implemented and tested the Sistema and Xadrez classes.
repository: https://github.com/jg2alv/tp1-pds2
featured: false
order: 202401
visual: board-games
---
Our team built a C++ terminal application that brings player registration, board-game matches, and persistent results into one system. Reversi and Connect Four share the platform with Tic-Tac-Toe and a simplified chess prototype, using an abstract game interface to separate common match behavior from individual rules.

My contribution centered on defining the architecture and how the classes interact. I created, implemented, and tested `Sistema`, which coordinates player management, match execution, command handling, and file-based persistence. I also developed and tested `Xadrez`, covering move-input handling and piece movement within the prototype’s simplified rule set.

A key design challenge was defining game interfaces that integrated with the system while remaining independently testable. Addressing that boundary connected inheritance and polymorphism with practical decisions about responsibility, exception handling, and input/output streams. The project reinforced modular design and collaborative development, with doctest cases and Doxygen documentation supporting the team’s implementation.
