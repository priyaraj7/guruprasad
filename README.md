# GURUPRASAD - RESTAURANT MENU APP

Pandemic and the nationwide lock-down have affected the restaurant industry badly. Most of the restaurants shut down during the pandemic. I was inspired by my uncle’s hardship during the lock-down with his restaurant in India. This app is for my uncle to show how he can make use of technology and increase his businesses revenue.

[![GitHub Pull Request](https://img.shields.io/github/issues-pr-closed/priyaraj7/guruprasad)](https://github.com/priyaraj7/guruprasad/pulls)
[![GitHub repo size](https://img.shields.io/github/repo-size/priyaraj7/guruprasad)](https://github.com/priyaraj7/guruprasad/)
[![GitHub contributors](https://img.shields.io/github/contributors/priyaraj7/guruprasad)](https://github.com/priyaraj7/guruprasad/)

## Table of Contents

### TOOLS AND TECHNOLOGIES

- Frontend: React, Chakra UI
- Backend: Node.js, Express.js
- Database: PostgreSQL
- Testing: React Testing Library
- APIs: [Google Place API](https://developers.google.com/maps/documentation/places/web-service/details), [MealDB](https://www.themealdb.com/api.php), Auth0
- Design: Figma, drawSQL

### Database diagram

[dbdiagram](https://drawsql.app/teams/supriya-1/diagrams/restuarant)

### Wireframe

- Customer side - [Desktop view](https://www.figma.com/proto/cosyASpTYSsTqf9mcC6NeX/ClientSide?node-id=2%3A2&scaling=scale-down&page-id=0%3A1&starting-point-node-id=2%3A2)
- Customer side - [Mobile view](https://www.figma.com/proto/cosyASpTYSsTqf9mcC6NeX/ClientSide?node-id=75%3A3009&scaling=scale-down&page-id=66%3A1860&starting-point-node-id=75%3A3009)
- Admin side - [Desktop view](https://www.figma.com/proto/oBDf4ofFocDR4DiIbe4RVk/Admin?node-id=27%3A242&scaling=scale-down&page-id=0%3A1&starting-point-node-id=27%3A242)

### Project structure

### Installation

First you need to create an [Auth0 API](https://auth0.com/), [Google Place API](https://developers.google.com/maps/documentation/places/web-service/overview).

Clone the restaurant menu repository

```bash
git clone https://github.com/priyaraj7/guruprasad.git
```

Move inside the repo

```bash
cd guruprasad
```

Next move into the server and install dependencies and start the server

```bash
cd server
npm install
npm start
```

Create a `.env` file and enter your api-key. You can refer `.env-example` file.

Using this command, restore the Postgres Database

```bash
psql postgres -f db.sql
```

Open another terminal then cd into the client, install dependencies and start the server

```bash
cd client
npm install
```

Create a .env file and enter your Auth0 credential.

Start the browser

```bash
npm start
```

Your browser should automatically open at http://localhost:3000.

Note:
Server runs on http://localhost:4000 and client on http://localhost:3000

### Credits

### Resource Referred

[Node (Express) API: Authorization](https://auth0.com/docs/quickstart/backend/nodejs/01-authorization)  
[React user Login](https://www.youtube.com/watch?v=pAzqscDx580)  
[React Router v6](https://blog.webdevsimplified.com/2022-07/react-router/)  
[Aggregate Rows into a JSON Array Using the json_agg() Function](http://johnatten.com/2015/04/22/use-postgres-json-type-and-aggregate-functions-to-map-relational-data-to-json/)  
[Adding a LEFT JOIN on a INSERT INTO....RETURNING](https://stackoverflow.com/questions/59232370/adding-a-left-join-on-a-insert-into-returning)  
[Git rebase --onto](https://womanonrails.com/git-rebase-onto)
