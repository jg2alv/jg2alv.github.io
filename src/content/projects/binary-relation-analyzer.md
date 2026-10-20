---
title: Closure Issues
summary: "Binary relations, explained—not just classified. A C analyzer checks mathematical properties, identifies missing connections, and constructs reflexive, symmetric, and transitive closures."
period: "2024-01"
origin: academic
discipline: Matemática Discreta
disciplineTags:
  - mdisc
technologyTags:
  - c
role: Independently implemented the relation model, property checks, closure routines, and command-line report.
repository: https://github.com/jg2alv/tp1-mdisc
featured: false
order: 202401
visual: binary-relations
---
A relation can look simple on paper while hiding subtle rules about symmetry, direction, and reachability. I translated those definitions into a C command-line analyzer that examines six relation properties, classifies equivalence relations and partial orders, and reports the ordered pairs behind its conclusions.

I implemented structures for sets and relations, pair-membership searches, property-checking routines, and the construction of reflexive, symmetric, and transitive closures. Transitive closure required more than a single pass: newly added connections can reveal further missing pairs, so the implementation repeats composition and merging until no additional connections are found. The report presents pairs in lexicographic order to make the output easier to inspect.

The central challenge was converting mathematical conditions into explicit operations without confusing related concepts such as symmetry and antisymmetry. Working through pair composition, duplicate detection, and iterative closure connected discrete mathematics with algorithmic reasoning, dynamic data structures, and explainable command-line output.
