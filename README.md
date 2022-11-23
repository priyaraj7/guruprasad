# GURUPRASAD - RESTAURANT MENU APP

Pandemic and the nationwide lock-down have affected the restaurant industry badly. Most of the restaurants shut down during the pandemic. I was inspired by my uncle’s hardship during the lock-down with his restaurant in India. This app is for my uncle to show how he can make use of technology and increase his businesses revenue.

[![GitHub Pull Request](https://img.shields.io/github/issues-pr-closed/priyaraj7/guruprasad)](https://github.com/priyaraj7/guruprasad/pulls)
[![GitHub repo size](https://img.shields.io/github/repo-size/priyaraj7/guruprasad)](https://github.com/priyaraj7/guruprasad/)
[![GitHub contributors](https://img.shields.io/github/contributors/priyaraj7/guruprasad)](https://github.com/priyaraj7/guruprasad/)

## Table of Contents

- [User Story](#user-story)
- [Future Development](#future-development)
- [Demo](#demo)
- [Tools & Technology Used](#tools--technology-used)
- [Project Structure - Links for files and components](#project-structure---links-for-files-and-components)
- [Wire frame](#wire-frame)
- [Installation](#installation)
- [Acknowledgement](#acknowledgement)
- [Resources](#resources)

## User Story

- Customer can view the menu, add the item to the shopping cart, delete items from the cart.
- Customer can contact the restaurant by filling the contact form.
- Customer can view restaurant review.
- Admin can login and logout
- Admin can add, edit the menu item, toggle the status of the item.
- Admin cam search the item according to category name and item name.
- Admin can view and delete the messages from the customers.
- This app is mobile and desktop friendly app.

## Future Development

- Adding more test cases.
- Adding order table to database.
- Customer login and logout feature.

## Demo

Live Demo [Link](https://api-et67.onrender.com)

**Admin page View**
![Admin Page](https://github.com/priyaraj7/Image/blob/main/adminpage%20copy.gif)

**Customer page Desktop View**
![Customer Page - Desktop View](https://github.com/priyaraj7/Image/blob/main/customerpage.gif)

**Customer page Mobile View**
![Customer Page - Mobile View](https://github.com/priyaraj7/Image/blob/main/mobileview.gif)

## Tools & Technology Used

- Frontend: React, Chakra UI
- Backend: Node.js, Express.js
- Database: PostgreSQL
- Testing: React Testing Library
- APIs: [Google Place API](https://developers.google.com/maps/documentation/places/web-service/details), [MealDB](https://www.themealdb.com/api.php), Auth0
- Design: Figma, drawSQL

## Database Diagram

[dbdiagram](https://drawsql.app/teams/supriya-1/diagrams/restuarant)

![Database diagram](https://github.com/priyaraj7/Image/blob/main/DB%20Diagram.png)

## Wireframe

- Customer side - [Desktop view](https://www.figma.com/proto/cosyASpTYSsTqf9mcC6NeX/ClientSide?node-id=2%3A2&scaling=scale-down&page-id=0%3A1&starting-point-node-id=2%3A2)
- Customer side - [Mobile view](https://www.figma.com/proto/cosyASpTYSsTqf9mcC6NeX/ClientSide?node-id=75%3A3009&scaling=scale-down&page-id=66%3A1860&starting-point-node-id=75%3A3009)
- Admin side - [Desktop view](https://www.figma.com/proto/oBDf4ofFocDR4DiIbe4RVk/Admin?node-id=27%3A242&scaling=scale-down&page-id=0%3A1&starting-point-node-id=27%3A242)

### Project Structure - Links for files and components

<details><summary>CLICK HERE for Links for files and components</summary>

**Client**

- [src/](./client/src)

  - [api/](./client/src/api)
    - [adminSideApi.js](./client/src/api/adminSideApi.js)
    - [menuListApi.js](./client/src/api/menuListApi.js)
    - [thirdPartyApi.js](./client/src/api/thirdPartyApi.js)
  - [components/](./client/src/components)
    - [admin/](./client/src/components/admin)
      - [**test**/](./client/src/components/admin/__test__)
        - [AdminHome.test.js](./client/src/components/admin/__test__/AdminHome.test.js)
        - [MenuForm.test.js](./client/src/components/admin/__test__/MenuForm.test.js)
        - [MenuList.test.js](./client/src/components/admin/__test__/MenuList.test.js)
        - [MenuListContainer.test.js](./client/src/components/admin/__test__/MenuListContainer.test.js)
        - [MessagePage.test.js](./client/src/components/admin/__test__/MessagePage.test.js)
      - [AdminHome.js](./client/src/components/admin/AdminHome.js)
      - [AdminPage.js](./client/src/components/admin/AdminPage.js)
      - [MenuForm.js](./client/src/components/admin/MenuForm.js)
      - [MenuList.js](./client/src/components/admin/MenuList.js)
      - [MenuListContainer.js](./client/src/components/admin/MenuListContainer.js)
      - [MessagesPage.js](./client/src/components/admin/MessagesPage.js)
    - [customer/](./client/src/components/customer)
      - [**test**/](./client/src/components/customer/__test__)
        - [ContactForm.test.js](./client/src/components/customer/__test__/ContactForm.test.js)
        - [ContactPage.test.js](./client/src/components/customer/__test__/ContactPage.test.js)
        - [Home.test.js](./client/src/components/customer/__test__/Home.test.js)
        - [ReviewPage.test.js](./client/src/components/customer/__test__/ReviewPage.test.js)
      - [Carousel.js](./client/src/components/customer/Carousel.js)
      - [Cart.js](./client/src/components/customer/Cart.js)
      - [ContactForm.js](./client/src/components/customer/ContactForm.js)
      - [ContactPage.js](./client/src/components/customer/ContactPage.js)
      - [Home.js](./client/src/components/customer/Home.js)
      - [ReviewPage.js](./client/src/components/customer/ReviewPage.js)
    - [Footer.js](./client/src/components/Footer.js)
    - [Header.js](./client/src/components/Header.js)
    - [Logo.js](./client/src/components/Logo.js)
    - [PageNotFound.js](./client/src/components/PageNotFound.js)
    - [loading.js](./client/src/components/loading.js)
  - [App.css](./client/src/App.css)
  - [App.js](./client/src/App.js)
  - [App.test.js](./client/src/App.test.js)
  - [index.css](./client/src/index.css)
  - [index.js](./client/src/index.js)

  **Server**

* [api/](./server/api)
  - [thirdPartyApi.js](./server/api/thirdPartyApi.js)
* [db/](./server/db)
  - [db-connection.js](./server/db/db-connection.js)
* [reference/](./server/reference)
  - [mockitem.js](./server/reference/mockitem.js)
  - [seed.sql](./server/reference/seed.sql)
* [src/](./server/src)
  - [controller/](./server/src/controller)
    - [adminController.js](./server/src/controller/adminController.js)
    - [customerController.js](./server/src/controller/customerController.js)
  - [models/](./server/src/models)
    - [adminModel.js](./server/src/models/adminModel.js)
    - [customerModel.js](./server/src/models/customerModel.js)
  - [routes/](./server/src/routes)
    - [adminApiRoutes.js](./server/src/routes/adminApiRoutes.js)
    - [apiRoutes.js](./server/src/routes/apiRoutes.js)
* [.env.example](./server/.env.example)
* [db.sql](./server/db.sql)
* [server.js](./server/server.js)
</details>

## Installation

First you need to get an [Auth0 API](https://auth0.com/), [Google Place API](https://developers.google.com/maps/documentation/places/web-service/overview) key.

Clone the restaurant menu repository

```bash
git clone https://github.com/priyaraj7/guruprasad.git
```

Move inside the repo

```bash
cd guruprasad
```

Next move into the server and install dependencies

```bash
cd server
npm install
npm start
```

Create a `.env` file and enter your api-key. You can refer `.env-example` file.

Next restore the Postgres Database

```bash
psql postgres -f db.sql
```

Open another terminal then cd into the client, install dependencies

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

## Acknowledgement

I'm extremely grateful to my Mentor - [Chris Jaure](https://github.com/chrisjaure) and Techtonica team for their help on this project.

## Resources

[Node (Express) API: Authorization](https://auth0.com/docs/quickstart/backend/nodejs/01-authorization)  
[React user Login](https://www.youtube.com/watch?v=pAzqscDx580)  
[React Router v6](https://blog.webdevsimplified.com/2022-07/react-router/)  
[Aggregate Rows into a JSON Array Using the json_agg() Function](http://johnatten.com/2015/04/22/use-postgres-json-type-and-aggregate-functions-to-map-relational-data-to-json/)  
[Adding a LEFT JOIN on a INSERT INTO....RETURNING](https://stackoverflow.com/questions/59232370/adding-a-left-join-on-a-insert-into-returning)  
[Git rebase --onto](https://womanonrails.com/git-rebase-onto)  
[Update one of the objects in array, in an immutable way](https://stackoverflow.com/questions/43792457/update-one-of-the-objects-in-array-in-an-immutable-way)
