FROM node:16.14.2

RUN mkdir -p /var/www/User
WORKDIR /var/www/User

COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]