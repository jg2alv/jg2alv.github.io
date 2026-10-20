---
title: Cache Flow
summary: "Follow memory accesses through a team-built Python cache simulator, revealing how associativity and FIFO replacement turn addresses into hits and misses."
period: "2025-01"
origin: academic
discipline: Organização de Computadores 1
disciplineTags:
  - oc1
technologyTags:
  - python
  - jupyter
  - pandas
  - ipywidgets
role: Implemented the cache and hit-and-miss logic and documented the code with inline comments in a team project.
repository: https://github.com/jg2alv/tp3-oc1
featured: false
order: 202501
visual: cache-simulator
---
Cache Flow makes memory placement decisions visible one access at a time. Built by our team, the Python simulator processes hexadecimal address traces under direct-mapped, set-associative, and fully associative configurations. Cache capacity, line size, and associativity determine the organization; the model tracks block placement rather than the data stored in main memory.

I implemented the cache and all hit-and-miss logic, including block identification, set selection, access accounting, and FIFO replacement. Each set fills its available lines before evicting its oldest entry, while hits leave the replacement order unchanged. I also documented the code with inline comments explaining these decisions.

The key implementation problem was keeping address decomposition, cache state, and access history consistent across configurations. Notebook tables, counters, and an interactive slider expose those state changes step by step. The work deepened my understanding of memory hierarchies, associativity, and how replacement policies shape the behavior of repeated memory accesses.
