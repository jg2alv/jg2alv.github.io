---
title: rockyou
summary: "Small alphabets, exponential possibilities: a Python experiment in exhaustive string generation, configurable output, and resource estimation."
period: "2021-01"
origin: personal
technologyTags:
  - python
  - cli
  - argparse
  - itertools
  - decimal
  - combinatorics
role: ""
repository: https://github.com/jg2alv/rockyou
featured: false
order: 202101
visual: combination-tree
---
rockyou explores how quickly a small alphabet becomes a large search space. I implemented a Python generator that enumerates Cartesian products over an inclusive range of lengths, with separate command-line controls for alphabet selection and output formatting.

The core uses itertools.product to yield character tuples lazily. A formatting layer joins them into strings with optional prefixes, suffixes, and separators, while an estimator computes combination counts, approximates output size, and extrapolates generation time from a temporary local sample.

The central lesson was that a compact generator does not make an exponential workload inexpensive. The project connected generator functions, combinatorial counting, and practical file-output costs, including the gap between an estimate and a measured benchmark. The current CLI has a length-validation typo that prevents normal use, and its writer still adds avoidable memory overhead.
