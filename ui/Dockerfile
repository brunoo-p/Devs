FROM node:12.18-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app

COPY public /usr/src/app/public
COPY src /usr/src/app/src
COPY package*.json ./

RUN npm install --production --silent

EXPOSE 3000
CMD ["npm", "start"]
