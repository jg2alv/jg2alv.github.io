---
title: scrapegram
summary: "From profile to files: a Python browser-automation prototype for collecting Instagram media links, exporting text, and organizing photo/video downloads."
period: "2021-01"
origin: personal
technologyTags:
  - python
  - pyppeteer
  - cli
  - browser-automation
role: ""
repository: https://github.com/jg2alv/scrapegram
featured: false
order: 202101
visual: media-collection
---
scrapegram explores how browser automation can turn profile pages into structured media-link collections. I built a Python command-line interface around Pyppeteer to scroll Instagram profiles, track discovered post groups, and inspect posts for photo, video, and carousel URLs.

Collected links can be printed in the terminal, appended to a text export, or downloaded with Requests. I added configurable output paths and sequential, UUID-based, or source-derived filenames, alongside custom error types for unavailable profiles, private accounts, and failed media requests.

The work connected asynchronous browser control, command-line design, and streamed file handling. It also exposed important reliability constraints: historical page selectors and unbounded waits make automation fragile, while blocking operations inside the event loop highlight the difference between async syntax and concurrent execution. The result is a historical prototype with concrete lessons in timeout handling, browser cleanup, and adapting to dynamic interfaces.
