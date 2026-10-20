---
title: High Five
summary: "Four-bit readings, three-bit answers: SystemVerilog logic translates sensor inputs into modulo-five remainders, connecting Boolean design to a waveform-generating testbench."
period: "2024-02"
origin: academic
discipline: Introdução aos Sistemas Lógicos
disciplineTags:
  - isl
technologyTags:
  - systemverilog
role: Individually designed and documented the combinational logic and implemented the SystemVerilog module and simulation testbench.
repository: https://github.com/jg2alv/tp1-isl
featured: false
order: 202402
visual: modulo-five
---
High Five turns a compact arithmetic problem into a complete digital-logic exercise: accept a four-bit sensor reading and return its remainder modulo five as a three-bit value. I mapped all sixteen input combinations in a truth table, derived canonical Boolean expressions, and used Karnaugh maps to document simplified product-of-sums forms and the corresponding gate diagram.

The SystemVerilog module expresses that mapping through an explicit combinational case table. I also implemented a testbench that applies sensor readings, monitors input and output values, and generates a VCD file for waveform inspection.

Keeping the numerical specification, the Boolean representation, and the HDL behavior consistent was central to the design. Working across these representations strengthened my understanding of binary encoding, combinational circuits, and simulation-based inspection—connecting the algebra behind a circuit to the signals it produces.
