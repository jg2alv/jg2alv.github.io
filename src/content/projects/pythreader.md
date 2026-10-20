---
title: pythreader
summary: "Merge PDFs and remove unwanted pages in one local workflow, using Python and pypdf."
period: "2023-01"
origin: personal
technologyTags:
  - python
  - pypdf
role: "Implemented the local PDF merge-and-filter workflow, including argument parsing and page-selection validation."
repository: https://github.com/jg2alv/pythreader
featured: false
order: 202301
visual: pdf-workflow
---
pythreader turns a recurring document-editing task into a local command-line workflow. It combines PDF files in the order supplied, writes a merged document, and then prompts for pages to exclude from a second copy. I built it as an alternative to relying on an online PDF service for these routine edits.

Using pypdf, I separated the process into two passes: merging the source files, then selecting which pages to retain. The interface accepts one-based page numbers relative to the combined document and converts them into indexes after checking that each selection is numeric and within bounds.

The main design concern was keeping page references consistent after several documents became one. The work connected argument parsing, input validation, and practical document manipulation in a small tool with a concrete purpose. The current version uses fixed output filenames and strict comma-separated page selection, leaving room for configurable destinations and more forgiving input handling.
