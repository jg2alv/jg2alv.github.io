---
title: Pointer Sisters
summary: "Three ways to read one dataset—without moving its records. C++ pointer indexes bring sorting algorithms and memory layout into focus."
period: "2024-02"
origin: academic
discipline: Estrutura de Dados
disciplineTags:
  - ed
technologyTags:
  - cpp
role: Independently designed and implemented the record model, file parser, pointer-based indexes, and reusable sorting routines.
repository: https://github.com/jg2alv/tp1-ed
featured: false
order: 202402
visual: indirect-sorting
---
A single dataset can tell different stories depending on how it is ordered. For Pointer Sisters, I built a C++ application that reads xCSV records and produces separate views sorted by name, CPF, and address, while keeping the underlying records in one shared allocation.

I implemented three pointer-based indexes and reusable Insertion Sort, Merge Sort, and hybrid QuickSort routines. Function pointers select the algorithm, and member pointers select the comparison field, so the same sorting infrastructure serves all three views. The hybrid routine switches to Insertion Sort for small partitions; parsing checks and error handling cover empty fields, file access, and allocation failures.

Keeping three independent orderings over shared storage required careful control of pointers and allocation lifetimes. This work strengthened my understanding of indirection, algorithm reuse, and the trade-offs between moving data and following pointers—a practical connection between sorting theory, memory management, and locality of reference.
