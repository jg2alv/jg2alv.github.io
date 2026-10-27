---
title: morlock
summary: "More than a soundtrack: a Python CLI embeds and edits structured JSON metadata in MP3 and OGG files."
period: "2022-02"
origin: personal
technologyTags:
  - python
  - cli
  - json
  - bcrypt
role: ""
repository: https://github.com/jg2alv/morlock
featured: false
order: 202202
visual: audio-metadata
---
Inspired by Mr. Robot, morlock treats an audio file as more than a soundtrack. I built an interactive Python tool that attaches a custom JSON header to MP3 and OGG files, allowing structured information to travel alongside the media rather than in a separate sidecar file.

The interface manages several loaded files while keeping one active selection. I implemented commands for inspecting and editing metadata, changing the active file, saving explicitly, and clearing data or removing the custom header. A path-based set command accepts dictionary keys and array indexes, parsing valid JSON values rather than treating all input as text.

The central engineering challenge was coordinating session state, pending edits, and the boundary between a text header and binary content. The project brought together Python's command interpreter, serialization, and byte-level file handling, while making the distinction between password checks and encryption concrete: bcrypt verifies passwords when loading protected files or changing their password settings, but the JSON itself remains readable.
