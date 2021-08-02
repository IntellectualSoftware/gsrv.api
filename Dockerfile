FROM node
WORKDIR /usr/src/app
RUN npm install -g ts-node typedoc nodemon
COPY package*.json ./
RUN yarn

COPY . .
RUN yarn build

EXPOSE 3000
CMD [ "yarn", "start" ]