---
title: Critical Queue
summary: "When urgency meets limited capacity: a C++ hospital simulation built with custom queues and a min-heap to track care and waiting times."
period: "2024-02"
origin: academic
discipline: Estrutura de Dados
disciplineTags:
  - ed
technologyTags:
  - cpp
role: Independently implemented the patient and procedure models, linked queues, min-heap scheduler, and event-driven simulation loop.
repository: https://github.com/jg2alv/tp2-ed
featured: false
order: 202402
visual: hospital-events
---
What happens to waiting times when patients compete for limited hospital resources? Critical Queue explores that question through a C++ discrete-event simulation that follows patients from admission and triage through consultation, additional procedures, and discharge.

I built the patient and procedure models, linked FIFO queues, and a custom min-heap scheduler. After triage, three urgency levels determine which queue is served first, while each procedure’s available units constrain how many patients can receive care simultaneously. The simulation advances directly to the next event, using patient IDs to resolve equal timestamps, and generates individual reports separating total hospital time, treatment time, and waiting time.

Coordinating patient state transitions, event ordering, and resource allocation required keeping every decision consistent with simulated time. Implementing these interacting components strengthened my understanding of priority scheduling and dynamic data structures, while showing how a carefully defined model can make the relationship between service capacity and waiting time easier to examine.
