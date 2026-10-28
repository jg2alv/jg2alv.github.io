---
title: timefy
summary: "Playlist time, at a glance: a JavaScript extension prototype that sums loaded video timestamps on YouTube playlist pages and adds a duration summary."
period: "2020-02"
origin: personal
technologyTags:
  - javascript
role: ""
repository: https://github.com/jg2alv/timefy
featured: false
order: 202002
visual: playlist-duration
---
timefy adds a duration summary to YouTube playlist pages. I built a JavaScript content script that reads timestamps from loaded video thumbnails, converts minute- and hour-based formats into seconds, and aggregates them into a single total.

Using jQuery, the script inserts the result into the playlist statistics area and adds a tooltip with the raw total in seconds. I connected recalculation to scrolling so entries loaded later can contribute to the sum, and reused the existing summary element when refreshing the display.

The main lesson was treating the DOM as a partial view of a changing dataset: an unloaded video cannot contribute to the total. The work connected timestamp parsing, aggregation, and interface updates, while exposing edge cases in hour-boundary formatting and page lifecycle handling. Manifest V2 and historical selectors define the compatibility work needed to carry the prototype forward.
