---
title: RISC Business
summary: "From ordered arrays to nested inventory calculations, RISC-V assembly exposes the registers, branches, and stack operations behind everyday algorithms."
period: "2025-01"
origin: academic
discipline: Organização de Computadores 1
disciplineTags:
  - oc1
technologyTags:
  - assembly
  - risc-v
role: Individually implemented the sequence-checking and inventory-total routines in RISC-V assembly.
repository: https://github.com/jg2alv/tp1-oc1
featured: false
order: 202501
visual: risc-assembly
---
RISC Business brings two familiar algorithms down to the instruction level. I implemented a RISC-V procedure that checks whether an integer array is strictly increasing, using word-sized memory access and conditional branches. It rejects equal or decreasing adjacent values and handles arrays with zero or one element without reading beyond their bounds.

The second exercise calculates adjusted inventory totals through three nested procedures: summation, price adjustment, and an additional integer multiplier. Each routine saves and restores its return address on the stack, preserving the call sequence while the program traverses the price array.

The main challenges were controlling array boundaries and maintaining correct returns across nested calls. Embedded verification harnesses compare returned values with expected results. The work strengthened my understanding of pointer arithmetic, argument registers, stack management, and the low-level responsibilities hidden by higher-level function calls.
