FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

RUN npm run coverage

RUN npm run build

EXPOSE 10000

# CMD ["npm", "run", "preview"]