---
title: bytely
summary: "Turn long URLs into short links with a Node.js and Express service, MongoDB persistence, and browser-based clipboard integration."
period: "2020-01"
origin: personal
technologyTags:
  - javascript
  - node-js
  - express
  - mongodb
  - mustache
  - html
  - css
role: ""
repository: https://github.com/jg2alv/bytely
featured: false
order: 202001
visual: url-shortener
---
bytely implements the core flow of a URL-shortening service: submit a destination, store a compact identifier, and open the original address through a short link. I connected a browser interface that checks URL syntax and submits destinations through Fetch to an Express backend, with clipboard integration and visual feedback for generated links.

The backend uses Mustache views and Mongoose models to store destinations and identifiers in MongoDB. The controller derives candidate identifiers from Adler-32 checksums and retries while a matching record exists, then saves the new link. Opening a stored identifier renders a page that uses browser JavaScript to navigate to its destination.

The implementation brings together asynchronous database operations, server-rendered templates, and browser events in one end-to-end flow. It also highlights the difference between checking for collisions in application code and enforcing uniqueness in the database. Server-side destination validation, stronger error handling, and a unique database index remain concrete next steps for production use.
