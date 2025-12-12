# ✅ **README.md (готовий файл)**

```markdown
<h1 align="center">🚀 Pet Project — Next.js + Strapi + Docker</h1>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-14-black?logo=nextdotjs" />
  <img src="https://img.shields.io/badge/Strapi-5.0-8A3FFC?logo=strapi" />
  <img src="https://img.shields.io/badge/Docker-✓-0db7ed?logo=docker" />
  <img src="https://img.shields.io/badge/PostgreSQL-15-316192?logo=postgresql" />
</p>

<p align="center">
  Full-stack pet project using <b>Next.js</b> frontend + <b>Strapi CMS</b> backend,  
  packaged into <b>Docker containers</b>.
</p>

---

## 📁 **Project Structure**

```

pet-project/
├── backend/        # Strapi CMS
├── frontend/       # Next.js App
├── docker-compose.yml
└── README.md

````

---

# 🐳 **Running the Project with Docker**

### 1️⃣ **Build and start all containers**
```bash
docker compose up --build
````

### 2️⃣ **Available services**

| Service               | URL                                                        |
| --------------------- | ---------------------------------------------------------- |
| 🌐 Frontend (Next.js) | [http://localhost](http://localhost)                       |
| 🛠️ Strapi Admin      | [http://localhost:1337/admin](http://localhost:1337/admin) |
| 🗄️ API               | [http://localhost:1337/api](http://localhost:1337/api)     |
| 🐘 PostgreSQL         | localhost:5432                                             |

> ⚠️ У продакшн-режимі Strapi забороняє редагування моделей.
> Для розробки запускай Strapi у дев-режимі (нижче).

---

# 🛠️ **Development Mode**

### **Start Strapi in dev mode (зміни контент-типів ✨)**

```bash
cd backend
yarn develop
```

### **Start frontend**

```bash
cd frontend
yarn dev
```

---

# 🔧 **Environment Variables**

### **Backend (.env.example)**

```
APP_KEYS=your-app-keys
API_TOKEN_SALT=your-token-salt
ADMIN_JWT_SECRET=your-secret
TRANSFER_TOKEN_SALT=your-salt
DATABASE_CLIENT=postgres
DATABASE_HOST=db
DATABASE_PORT=5432
DATABASE_NAME=strapi_db
DATABASE_USERNAME=strapi
DATABASE_PASSWORD=strapi
```

### **Frontend (.env.local.example)**

```
NEXT_PUBLIC_API_URL=http://localhost:1337
```

---

# 📜 **Git Setup**

### ❗ Do NOT commit node_modules

`.gitignore` already excludes:

```
node_modules/
.build/
dist/
.strapi/
```

### **Initialize repo**

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/USERNAME/pet-project.git
git push -u origin main
```

---

# 📦 **Production Build**

### **Build frontend**

```bash
cd frontend
yarn build
```

### **Build Strapi**

```bash
cd backend
yarn build
```

### **Start all**

```bash
docker compose up -d
```

---

# 🧪 **API example**

Get articles:

```
GET http://localhost:1337/api/articles
```

---

# 🙋‍♀️ **Author**

**Oleksandra**
Pet project for learning full-stack development 💛

---

# ⭐ **If you like this project — give it a star on GitHub!**

```
