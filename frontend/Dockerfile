FROM node:20-alpine

WORKDIR /app

# Встановлюємо пакети для SCSS
RUN apk add --no-cache git python3 make g++ bash

# Копіюємо package.json та yarn.lock
COPY package.json yarn.lock ./

# Встановлюємо залежності
RUN yarn install

# Копіюємо весь фронтенд
COPY . .

EXPOSE 3000

CMD ["yarn", "dev"]
