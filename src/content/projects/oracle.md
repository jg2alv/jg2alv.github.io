---
title: oracle
summary: "Tiny grids, enormous possibilities: a Python and Pillow experiment in pixel combinations, theoretical image counts, and JPEG storage estimates."
period: "2021-01"
origin: personal
technologyTags:
  - python
  - cli
role: ""
repository: https://github.com/jg2alv/oracle
featured: false
order: 202101
visual: pixel-combinations
---
oracle turns a tiny pixel grid into a combinatorics experiment. I built a Python generator that constructs Pillow images from Cartesian products of pixel colors, supporting full RGB values or a two-color black-and-white palette.

A separate counting function calculates the palette size raised to the number of pixels. The storage estimator creates three sample JPEGs and scales their average encoded size by that theoretical count, while the generation path saves images under UUID-based filenames.

The key lesson was separating a theoretical search space from a practical representation of it. Small increases in grid size cause exponential growth, while JPEG compression makes exact pixel enumeration different from generating distinct saved files. The prototype also exposes implementation limits in rectangular-grid indexing and output-directory initialization, keeping its useful scope centered on tiny square-grid experiments.
