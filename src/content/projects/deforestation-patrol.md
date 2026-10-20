---
title: Deforestation Patrol
summary: "Route drone teams to simulated deforestation alerts with C, UDP, POSIX threads, and Dijkstra’s shortest paths."
period: "2025-02"
origin: academic
discipline: Redes de Computadores
disciplineTags:
  - redes
technologyTags:
  - c
  - udp
  - posix-sockets
  - pthreads
role: "Implemented UDP messaging, Dijkstra-based dispatch, and synchronized POSIX client threads in C."
repository: https://github.com/jg2alv/tp2-redes
featured: false
order: 202502
visual: deforestation-patrol
---
Deforestation Patrol connects environmental monitoring, concurrent processing, and graph algorithms in a simulated response system for Brazil’s Legal Amazon. Built in C, the application exchanges UDP messages between a client that simulates sensors and drone missions and a server responsible for coordinating alerts. It supports IPv4 and IPv6.

The server represents cities and flight routes as a weighted graph. For each alert, Dijkstra’s algorithm identifies the nearest available drone team, accounting for teams already assigned to other missions. A binary protocol carries telemetry, dispatch orders, acknowledgments, and completion messages so that monitoring and response can progress through a shared lifecycle.

On the client, four POSIX threads separate monitoring, telemetry, dispatch reception, and mission simulation. Shared state and mutex synchronization connect these activities. The project brings together communication protocols, shortest-path decisions, and coordination between independent execution flows, without relying on real sensors or physical drones.

