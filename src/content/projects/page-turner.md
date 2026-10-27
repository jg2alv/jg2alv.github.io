---
title: Page Turner
summary: "What stays in RAM when space runs out? A C simulator developed by a two-person team compares page-replacement policies and page-table designs, with my analysis in the final report."
period: "2026-01"
origin: academic
discipline: Sistemas Operacionais
disciplineTags:
  - so
technologyTags:
  - c
role: "Authored the final report, covering design rationale, architecture, experimental comparisons, page-table trade-offs, and conclusions."
repository: https://github.com/jg2alv/tp2-so
featured: false
order: 202601
visual: virtual-memory
---
Built in a pair, this C simulator replays read and write traces to examine virtual-memory management without modifying the operating system. It models Random, FIFO, LRU, and Second Chance replacement, alongside dense, two-level, three-level, and inverted page tables, recording page faults, dirty-page write-backs, and table storage costs.

I was responsible for the final report, explaining the rationale for the selected policies and page-table structures, the simulator’s architecture and key data structures, and the design decisions used to interpret the specification. I connected these implementation choices to expectations about access locality, memory pressure, and the overhead of address translation.

The report compares compiler, matrix-processing, compression, and particle-simulation traces under two experimental settings: increasing physical memory with 4 KiB pages, and holding memory constant while varying page sizes from 2 to 64 KiB. It also examines page-table storage and lookup trade-offs, relates observed behavior to the initial hypotheses, discusses divergences, and identifies possible extensions.

A central lesson was separating replacement quality from translation cost: the number of page faults alone does not capture a memory-management design’s resource trade-offs. Synthesizing the experiments into a clear technical narrative strengthened my ability to interpret systems behavior and communicate evidence-based conclusions.
