---
title: Flight Club
summary: "Route, budget, travel time: a C++ search engine combines AVL indexes and custom ranking to turn flight filters into a shortlist."
period: "2024-02"
origin: academic
discipline: Estrutura de Dados
disciplineTags:
  - ed
technologyTags:
  - cpp
  - make
role: Independently implemented the flight model, AVL indexes, query parser, linked lists, and result-ranking algorithm.
repository: https://github.com/jg2alv/tp3-ed
featured: false
order: 202402
visual: flight-search
---
Choosing a flight involves more than finding the lowest fare. Flight Club translates combinations of route, price, availability, and travel-time constraints into a ranked shortlist, with the priority of price, duration, and stops defined separately for each query.

I implemented the C++ search pipeline around eight AVL attribute indexes and a shared collection of flight records. Linked lists group records with the same attribute value, while a custom parser breaks conjunctive queries into comparison clauses. Candidate flights are retrieved through the indexes and checked against every clause before a custom QuickSort orders their pointers according to the requested ranking.

Bringing this pipeline together required consistent comparison rules across text, numeric fields, filtering, and tie-breaking. It also meant coordinating several indexes without duplicating the underlying flight records. The project deepened my understanding of balanced trees, query processing, and multi-criteria sorting, connecting low-level data structures to a complete search workflow with user-defined constraints.
