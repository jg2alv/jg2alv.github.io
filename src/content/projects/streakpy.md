---
title: streakpy
summary: "Python browser-automation experiment for Norwegian Duolingo practice, combining translation lookup, correction caching, and screenshot-based progress inspection."
period: "2020-02"
origin: personal
technologyTags:
  - python
  - pyppeteer
  - json
  - browser-automation
role: ""
repository: https://github.com/jg2alv/streakpy
featured: false
order: 202002
visual: language-practice
---
streakpy explores browser automation for a Norwegian Duolingo practice lesson, originally with the goal of maintaining a learning streak. It uses Pyppeteer to manage a lesson page and a separate Google Translate page, entering translations through the lesson interface and skipping supported speaking or listening prompts.

The language configuration stores the practice URL, translation language code, and an exceptions dictionary. When the script encounters a correction, it captures the expected answer and saves it for future use, giving the project a small persistent feedback loop rather than repeating the same translation failure indefinitely.

The implementation also writes progress screenshots for inspection. It remains a historical, single-course prototype: the included configuration is Norwegian only, its logic depends on earlier page structures, and the repository does not establish support for other courses or reliable streak maintenance today.
