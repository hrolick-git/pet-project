FROM node:20-alpine

# Створюємо робочу папку
WORKDIR /app

# Встановлюємо пакети для SCSS
RUN apk add --no-cache git python3 make g++ bash

# Копіюємо package.json та yarn.lock
COPY package.json yarn.lock ./

# Встановлюємо залежності
RUN yarn install

# Копіюємо весь код
COPY . .

# Відкриваємо порт Next.js
EXPOSE 3000

# Запуск у development режимі
CMD ["yarn", "dev"]
