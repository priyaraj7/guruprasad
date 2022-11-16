FROM node:14-alpine

WORKDIR /client
ADD client ./
RUN npm install
RUN --mount=type=secret,id=_clinetenv,dst=/etc/secrets/.env cat /etc/secrets/.env
RUN --mount=type=secret,id=_clinetenv,dst=/etc/secrets/.env npm run build

WORKDIR /server
ADD server ./
RUN npm install
CMD node server.js