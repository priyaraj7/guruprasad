# GURUPRASAD - RESTAURANT MENU APP

Pandemic and the nationwide lock-down have affected the restaurant industry badly. Most of the restaurants shut down during the pandemic. I was inspired by my uncle’s hardship during the lock-down with his restaurant in India. This app is for my uncle to show how he can make use of technology and increase his businesses revenue.

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

Clone the restaurant menu repository

```bash
git clone https://github.com/priyaraj7/guruprasad.git
```

Move inside the repo

```bash
cd weather-forecast
```

Next move into the server and install dependencies and start the server

```bash
cd server
npm install
npm start
```

Create a `.env` file and enter your api-key. You can refer `.env-example` file

Open another terminal then cd into the client, install dependencies and start the server

```bash
cd client
npm install
npm start
```

create a .env file and enter your Auth0 credential.

Navigate to `http://localhost:3000/` and enter the city name. You will get the one day weather forecast of the city

![screenshot](./weather.png)

Note:
Server runs on http://localhost:5000 and client on http://localhost:3000
