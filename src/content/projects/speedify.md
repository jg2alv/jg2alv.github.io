---
title: speedify
summary: "A little extra fast-forward: a JavaScript extension prototype that integrates eight playback-speed choices, from 2.25× to 4×, into YouTube’s player menu."
period: "2020-02"
origin: personal
technologyTags:
  - javascript
role: ""
repository: https://github.com/jg2alv/speedify
featured: false
order: 202002
visual: playback-speed
---
speedify explores a small, targeted extension of YouTube’s player interface. I built a JavaScript content script that defines eight additional playback rates from 2.25× to 4× in 0.25× increments and inserts them into the existing settings menu.

Using bundled jQuery, the script waits for player controls, listens for the speed menu, and creates focusable options with radio-menu roles. Selecting a rate updates the video’s playbackRate, selected menu state, and displayed speed label.

The project sharpened my understanding of content-script lifecycles, dynamic DOM manipulation, and keeping interface state aligned with media playback. Its main engineering challenge is the player rebuilding its controls: references and event handlers must remain valid across those changes. The saved implementation uses Manifest V2 and historical English-language selectors, so compatibility work is part of carrying the prototype forward.
