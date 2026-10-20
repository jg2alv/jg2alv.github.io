---
title: Sort Trek
summary: "Six tie-breakers, one cosmic ranking: a C implementation prioritizes solar systems from nested star, planet, and moon records."
period: "2023-02"
origin: academic
discipline: Programação e Desenvolvimento de Software I
disciplineTags:
  - pds1
technologyTags:
  - c
role: Independently implemented the hierarchical parser, data model, multi-criteria comparison, and recursive in-place sorting routine.
repository: https://github.com/jg2alv/tp1-pds1
featured: false
order: 202302
visual: solar-sorting
---
Choosing which solar systems to explore first becomes an exercise in data modeling and algorithm design. I built a C program that reads astronomical records and ranks systems by six ordered criteria, from stellar radius to discovery time. Each rule applies only when the preceding criteria tie, turning a narrative requirement into a precise comparison strategy.

I represented systems, planets, and moons with nested structures and dynamically allocated arrays, then implemented the file parser, routines for planetary and lunar metrics, and a dedicated comparator. The sorting routine follows a recursive partitioning algorithm, rearranging system records in place around a pivot rather than duplicating their nested data.

The technical challenge was keeping the hierarchy, comparison rules, and recursive boundaries consistent. The work connected pointers and dynamic allocation with divide-and-conquer reasoning, while input and expected-output fixtures provided concrete scenarios for examining tie-breaking behavior. It also highlighted how data representation and repeated metric calculations influence a sorting algorithm’s practical cost.
