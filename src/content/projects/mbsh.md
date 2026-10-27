---
title: mbsh
summary: "Study packs from the command line: a Python prototype for collecting MeuBernoulli question and solution images and assembling them into PDFs."
period: "2021-02"
origin: personal
technologyTags:
  - python
  - cli
  - asyncio
  - pyppeteer
  - requests
  - pillow
  - browser-automation
  - pdf
role: ""
repository: https://github.com/jg2alv/mbsh
featured: false
order: 202102
visual: study-pack
---
mbsh turns a recurring study-material workflow into an interactive Python shell. I built the prototype around mENEM, a utility for choosing simulations and subjects in MeuBernoulli, selecting questions based on answer correctness and difficulty indicators, and collecting their question and solution images.

Browser navigation runs through pyppeteer, image resources are downloaded with Requests, and Pillow converts them into PDF pages. An asynchronous command dispatcher connects these stages to configuration, history, and a nested shell. The document-generation path places the selected questions first and their solutions afterward, supporting a practice-then-review workflow.

The main engineering challenge was coordinating browser state, authentication, and local output across several commands. Building the prototype connected asynchronous automation with document generation, while exposing the reliability trade-offs of page-driven integrations. The current implementation retains argument-parsing and batch-initialization limitations, and its selectors depend on the platform's page structure.
