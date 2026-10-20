---
title: Pivot Point
summary: "Beyond “optimal”: a from-scratch Julia simplex solver that also identifies infeasible and unbounded linear programs."
period: "2025-02"
origin: academic
discipline: Pesquisa Operacional
disciplineTags:
  - po
technologyTags:
  - julia
role: "Implemented a simplex solver in Julia to classify linear programs and calculate finite optimal objectives."
repository: https://github.com/jg2alv/tp2-po
featured: false
order: 202502
visual: simplex
---
Pivot Point implements the simplex method for linear programs in standard equality form, maximizing an objective under equality constraints and nonnegative variables. Built in Julia without matrix or linear-algebra libraries, the solver works directly with the numerical representation of the problem.

The scope goes beyond finding a favorable objective value. The program distinguishes a finite optimum from infeasibility and unboundedness, including instances whose coefficients and right-hand sides may be negative. That makes initialization, pivoting, termination conditions, and floating-point comparisons central concerns rather than implementation details.

The project connects optimization theory with numerical programming: translating constraints into calculations, interpreting the state of the algorithm, and producing an answer consistent with the problem’s status.

