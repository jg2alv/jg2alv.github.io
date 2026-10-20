---
title: Stream Shift
summary: "Linux commands, rerouted: a C shell developed in a pair, combining program execution, file redirection, and pipelines."
period: "2026-01"
origin: academic
discipline: Sistemas Operacionais
disciplineTags:
  - so
technologyTags:
  - c
  - linux
  - posix
role: "Implemented input and output redirection in a paired C/Linux shell project."
repository: https://github.com/jg2alv/tp1-so
featured: false
order: 202601
visual: shell-redirection
---
Developed in a pair, Stream Shift extends a provided C shell scaffold with Linux command execution, file redirection, and pipelines. The parser was supplied, keeping the work focused on the execution layer: creating processes, launching existing programs, and connecting their data streams.

I implemented input and output redirection. Using the parser-provided file modes and target streams, my implementation opens the requested file, redirects standard input or output with `dup2`, and closes the temporary file descriptor. Input files are opened read-only; output files are created or truncated according to the redirection mode. This lets existing commands consume file contents or write results to disk without changes to their own code.

The key design concern was separating what a command does from where its data comes from and goes. Implementing that boundary strengthened my understanding of file-descriptor lifetime, standard streams, and the relationship between process execution and I/O. It also made familiar shell syntax concrete as a sequence of operating-system calls.
