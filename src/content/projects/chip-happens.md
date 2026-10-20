---
title: Chip Happens
summary: "Behind one ADD instruction: Verilog decoding and execution logic I implemented within a team extension of an educational RISC-V datapath."
period: "2025-01"
origin: academic
discipline: Organização de Computadores 1
disciplineTags:
  - oc1
technologyTags:
  - verilog
  - risc-v
role: Implemented the ADD instruction, modifying the decode and execute modules in a team project.
repository: https://github.com/jg2alv/tp2-oc1
featured: false
order: 202501
visual: risc-datapath
---
Chip Happens explores how a machine instruction becomes a hardware operation. Working as part of a team, I extended supplied Verilog modules for an educational 32-bit RISC-V datapath. The source separates instruction fetching, decoding, execution, data memory, and writeback into distinct components.

My responsibility was the ADD instruction. I modified the decode and execute files to connect register-based instruction decoding with operand selection, ALU control, and the addition result. This required following the instruction fields through the control logic rather than treating addition as an isolated arithmetic expression.

Coordinating those decisions across module boundaries meant working within the interfaces between decoding and execution. Implementing this path strengthened my understanding of hardware description languages, instruction encoding, and the relationship between control signals and datapath behavior—showing how a small instruction depends on several cooperating components.
