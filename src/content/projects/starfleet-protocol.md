---
title: Starfleet Protocol
summary: "Command a starship over TCP: a C client–server battle game with turn-based combat, IPv4/IPv6, and a custom message protocol."
period: "2025-02"
origin: academic
discipline: Redes de Computadores
disciplineTags:
  - redes
technologyTags:
  - c
  - tcp
  - posix-sockets
role: "Implemented the TCP client-server protocol, combat rules, and session-state handling in C."
repository: https://github.com/jg2alv/tp1-redes
featured: false
order: 202502
visual: starfleet-protocol
---
Starfleet Protocol turns a terminal-based starship battle into a networking application. I built a C client and server using POSIX TCP sockets: the player selects maneuvers on the client, while the server chooses an opposing action and resolves the encounter. The connection supports IPv4 and IPv6.

A custom message protocol carries action requests, battle results, health values, inventory updates, and session-ending events. The combat rules are deterministic once both actions are known, separating gameplay decisions from the randomness of the opponent’s move. The session tracks damage, turns, torpedoes, and shield use until destruction or escape.

The project brings protocol design and state management together. Client and server must agree not only on the message format, but also on which event comes next and when the session ends. This makes the boundary between transport, game logic, and user interaction a central design concern.

