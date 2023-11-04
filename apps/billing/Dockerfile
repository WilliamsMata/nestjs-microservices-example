FROM node:alpine As development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

FROM node:alpine As production

ARG node_env=production
ENV NODE_ENV=${node_env}

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=production

COPY package*.json ./

RUN npm install --only=production

COPY . .

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/apps/billing/main.js"]