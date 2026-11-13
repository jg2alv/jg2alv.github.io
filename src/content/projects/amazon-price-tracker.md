---
title: AmazonPriceTracker
summary: "Python prototype for recording Amazon wishlist prices in dated JSON snapshots and plotting product histories with Matplotlib."
period: "2020-02"
origin: personal
technologyTags:
  - python
  - pyppeteer
  - matplotlib
  - json
  - browser-automation
role: ""
repository: https://github.com/jg2alv/AmazonPriceTracker
featured: false
order: 202002
visual: wishlist-history
---
AmazonPriceTracker explores a workflow for following the prices of items in a shared Amazon wishlist. Its browser-automation code scrolls through the list and extracts prices together with product identifiers, links, images, bylines, and additional detail fields.

The persistence layer is designed around date-keyed snapshots in a local JSON file. A plotting component groups observations by product and draws price histories using Matplotlib, while a read-only argument routes directly to previously collected data.

The repository is an unfinished prototype rather than a ready-to-use tracker. It demonstrates the intended path from browser extraction to structured local history and visual comparison, but initialization and item-reconciliation defects need correction before the complete workflow can be presented as working.
