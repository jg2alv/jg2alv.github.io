---
title: Trie Hard
summary: "Search BBC news with Centi!, a team-built Python and Flask engine combining a custom compressed trie, Boolean queries, and statistically ranked results."
period: "2025-02"
origin: academic
discipline: Algoritmos 2
disciplineTags:
  - alg2
technologyTags:
  - python
  - flask
  - html
  - css
role: "Designed the backend architecture and routes, implemented trie and information-retrieval algorithms, and built the initial frontend integration mockup."
repository: https://github.com/jg2alv/tp1-alg2
featured: false
order: 202502
visual: trie-search
---
Searching a news archive calls for more than matching strings. Working in a team, I developed the backend of Centi!, a Python and Flask search engine for BBC articles, defining its routes, module boundaries, and integration flow. I also prepared the initial frontend mockup so the interface and retrieval pipeline could be developed against a shared structure.

I implemented the compressed trie and information-retrieval algorithms behind the application. The index associates terms with document identifiers and frequencies, persists the tree in a custom binary format, and stores document metadata separately. Boolean expressions are converted to Reverse Polish Notation, respecting AND/OR precedence and parentheses; matching articles are ranked by average term-frequency z-score and delivered as paginated results with highlighted snippets.

Key engineering challenges included splitting trie edges correctly, preserving the index across sessions, and connecting query evaluation to usable web responses. The project connected data-structure design, expression parsing, statistical ranking, and backend architecture in an end-to-end retrieval workflow.

