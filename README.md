# Pet Project

## Backend (Strapi)

### Встановлення та запуск
1. Перейти в папку `backend`:
```bash
cd backend
```
2. Встановити залежності:
```bash
yarn install
```
3. Запустити Strapi у development-режимі:
```bash
yarn develop
```
4. Відкрити адмінку Strapi:
```
http://localhost:1337/admin
```

### Нотатки
- Для production режиму використовуйте:
```bash
yarn build
yarn start
```
- Файли `.env` не додаються у репозиторій, треба створити локально.

## Frontend (Next.js)

### Встановлення та запуск
1. Перейти в папку `frontend`:
```bash
cd frontend
```
2. Встановити залежності:
```bash
yarn install
```
3. Запустити dev-сервер:
```bash
yarn dev
```
4. Відкрити сайт:
```
http://localhost:3000
```

### Нотатки
- Використовується SCSS для стилів.
- Всі зміни фронтенду автоматично оновлюються на dev-сервері.

## Docker (опційно)

### Запуск усіх сервісів
1. З кореневої папки проекту:
```bash
docker compose up --build
```
2. Переконайтеся, що:
   - `backend` підключений до бази даних Postgres.
   - `frontend` підключений до бекенду Strapi.

### Порти
- Strapi: `http://localhost:1337`
- Frontend: `http://localhost:3000`
- Nginx: `http://localhost`

## Git

### .gitignore
Рекомендовані налаштування:
```
node_modules/
frontend/.next/
backend/.tmp/
backend/.strapi/
.env
dist/
.output/
```
- Ніколи не пушимо `node_modules` або build-папки.