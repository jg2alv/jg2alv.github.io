---
title: Cookie Jar
summary: "From cart to conversation: our team built a storefront for De Mala e Cuia, a family-run cookie business, with JavaScript, Node.js/Express, PostgreSQL, and WhatsApp checkout."
period: "2026-01"
origin: academic
discipline: Engenharia de Software 1
disciplineTags:
  - es1
technologyTags:
  - javascript
  - html
  - css
  - node-js
  - express
  - postgresql
role: "Implemented the shopping cart across frontend and backend, developed the WhatsApp checkout flow, and wrote tests for both features."
repository: https://github.com/jg2alv/tp1-es
featured: false
order: 202601
visual: cookie-storefront
---
Our team developed a storefront for De Mala e Cuia, a family-run cookie business, turning a software-engineering assignment into a practical sales application. The system combines HTML, CSS, and JavaScript with a Node.js/Express backend and PostgreSQL to connect the product catalogue, shopping cart, and WhatsApp ordering flow.

I was responsible for the shopping cart across the frontend and backend, the WhatsApp checkout, and tests for both features. The cart supports adding and removing products, adjusting quantities in grams, and calculating subtotals, estimated shipping, and totals. On the server, the order flow validates submitted items, retrieves current catalogue prices, and stores the order and its line items in a PostgreSQL transaction.

The main integration concern was keeping cart state, pricing, and the final order consistent across the browser and server. Checkout uses the server’s returned order data to prepare a WhatsApp message for the customer to review and send. I wrote tests around cart operations and totals, order submission and validation, error handling, and message formatting, using Jest alongside browser scenarios in Playwright.

The main learning was hands-on practice with software-engineering tools and methods, especially user stories. Translating the customer’s need to build a shopping cart into specific behaviors helped connect requirements, implementation, and tests. UML modeling and a layered backend made responsibilities and integration points more explicit. Applying these practices to a family business gave them a concrete purpose beyond the classroom.
