FROM node:14-alpine
ARG REACT_APP_AUTH0_DOMAIN
ARG REACT_APP_AUTH0_CLIENT_ID
ARG REACT_APP_AUDIENCE
WORKDIR /client
ADD client ./
RUN npm install
RUN npm run build

WORKDIR /server
ADD server ./
RUN npm install
CMD node server.js