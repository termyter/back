FROM node:16.14.2

WORKDIR /educationProgram
COPY package.json /educationProgram
RUN npm install
COPY . /educationProgram
EXPOSE 3001
CMD ["npm", "start"]