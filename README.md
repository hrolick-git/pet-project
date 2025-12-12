# Pet Project - Садочок для дітей

Цей проєкт складається з фронтенду на Next.js та бекенду на Strapi, все запускається через Docker Compose.

---

## Структура проєкту

- **Садочок (Kindergarten)**
  - Керується головним адміністратором (директор або співробітник)
  - Має пов'язаних користувачів: батьків, дітей, вихователів

- **Користувачі**
  - Батьки
    - Прив'язані до своїх дітей через ключ-зв'язку
  - Діти
    - Можуть отримувати нагороди та відмітки за їжу та участь в івентах
  - Вихователі
    - Прив'язані до садочка
    - Можуть ставити івенти та нагороди для дітей

- **Інші функціональні блоки**
  - Дошка з розкладом та календарем івентів
  - Можливість вихователя обрати подію та видати нагороду
  - Відмітки за сніданок/обід/полуденок
  - Дошка оголошень для новин та фотозвітів
  - Рахунки за надані послуги

---

## Вимоги

- Docker та Docker Compose
- Node.js (для локальної розробки, якщо потрібно)
- Git

---

## Запуск проєкту

1. **Клонування репозиторію**

```bash
git clone https://github.com/hrolick-git/pet-project.git
cd pet-project
```

2. **Підняття контейнерів через Docker Compose**

```bash
docker compose up --build
```

Це підніме наступні сервіси:
- `pet-project-frontend` - фронтенд, доступний за http://localhost
- `pet-project-strapi` - бекенд Strapi, доступний за http://localhost:1337/admin
- `pet-project-postgres` - база даних Postgres
- `pet-project-nginx` - nginx, проксі для фронтенду

3. **Перевірка логів**

```bash
docker compose logs -f <service_name>
# наприклад:
docker compose logs -f pet-project-strapi
```

4. **Зупинка контейнерів**

```bash
docker compose down
```

---

## Розробка

Якщо хочеш працювати локально без Docker:

- Для Strapi:
```bash
cd backend
yarn develop
```
- Для фронтенду:
```bash
cd frontend
yarn dev
```

---

## .gitignore

Проєкт ігнорує наступні файли та папки:
```
node_modules/
frontend/.next/
backend/node_modules/
dist/
.env
```

---

## Контакти та допомога

- Основна документація Strapi: https://strapi.io/documentation
- Основна документація Next.js: https://nextjs.org/docs
- Для питань по Docker: https://docs.docker.com/compose/

