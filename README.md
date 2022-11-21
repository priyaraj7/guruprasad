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

**Client**

- [api/](./src/api) # API fetching
  - [adminSideApi.js](./src/api/adminSideApi.js)
  - [menuListApi.js](./src/api/menuListApi.js)
  - [thirdPartyApi.js](./src/api/thirdPartyApi.js)
- [components/](./src/components)
  - [admin/](./src/components/admin)
    - [**test**/](./src/components/admin/__test__)
      - [MenuForm.test.js](./src/components/admin/__test__/MenuForm.test.js)
      - [MenuList.test.js](./src/components/admin/__test__/MenuList.test.js)
      - [MenuListContainer.test.js](./src/components/admin/__test__/MenuListContainer.test.js)
    - [AdminHome.js](./src/components/admin/AdminHome.js)
    - [AdminPage.js](./src/components/admin/AdminPage.js)
    - [MenuForm.js](./src/components/admin/MenuForm.js)
    - [MenuList.js](./src/components/admin/MenuList.js)
    - [MenuListContainer.js](./src/components/admin/MenuListContainer.js)
    - [MessagesPage.js](./src/components/admin/MessagesPage.js)
  - [customer/](./src/components/customer)
    - [Carousel.js](./src/components/customer/Carousel.js)
    - [Cart.js](./src/components/customer/Cart.js)
    - [ContactForm.js](./src/components/customer/ContactForm.js)
    - [ContactPage.js](./src/components/customer/ContactPage.js)
    - [Home.js](./src/components/customer/Home.js)
    - [ReviewPage.js](./src/components/customer/ReviewPage.js)
  - [Footer.js](./src/components/Footer.js)
  - [Header.js](./src/components/Header.js)
  - [Logo.js](./src/components/Logo.js)
  - [PageNotFound.js](./src/components/PageNotFound.js)
  - [loading.js](./src/components/loading.js)
- [App.js](./src/App.js)
- [index.js](./src/index.js)
