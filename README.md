# PrimeTrade Backend Task

This is a **Node.js + Express backend API** built for the PrimeTrade backend assignment.  
The project implements **user authentication and task management APIs** using **MySQL database and JWT authentication**.

---

## Tech Stack

- Node.js
- Express.js
- MySQL
- JWT Authentication
- bcryptjs
- dotenv

---

## Project Setup

### 1. Clone the repository

```bash
git clone https://github.com/Bhagyajyoti-123/primetrade-backend-task.git
cd primetrade-backend-task
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root folder and add:

```
PORT=5000

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=primetrade_db

JWT_SECRET=primetrade_secret
```

---

## Database Setup

Open MySQL and run:

```sql
CREATE DATABASE primetrade_db;

USE primetrade_db;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100) UNIQUE,
  password VARCHAR(255),
  role VARCHAR(20) DEFAULT 'user'
);

CREATE TABLE tasks (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255),
  description TEXT,
  user_id INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);
```

---

## Run the Server

```bash
npm start
```

Server runs on:

```
http://localhost:5000
```

---

# API Endpoints

## 1. Register User

POST `/api/auth/register`

Body:

```json
{
  "name": "Test User",
  "email": "test@gmail.com",
  "password": "123456"
}
```

---

## 2. Login User

POST `/api/auth/login`

Body:

```json
{
  "email": "test@gmail.com",
  "password": "123456"
}
```

Response:

```json
{
  "message": "Login successful",
  "token": "JWT_TOKEN"
}
```

---

## 3. Create Task (Protected)

POST `/api/tasks`

Headers:

```
Authorization: Bearer TOKEN
```

Body:

```json
{
  "title": "Complete Backend Task",
  "description": "Finish the PrimeTrade assignment"
}
```

---

## 4. Get User Tasks

GET `/api/tasks`

Headers:

```
Authorization: Bearer TOKEN
```

---

## Authentication

JWT authentication is used to protect routes.  
Users must send the token in the request header:

```
Authorization: Bearer TOKEN
```

---

## Folder Structure

```
primetrade-backend-task
│
├── config
│   └── db.js
│
├── controllers
│   ├── authController.js
│   └── taskController.js
│
├── middleware
│   └── authMiddleware.js
│
├── routes
│   ├── authRoutes.js
│   └── taskRoutes.js
│
├── .env
├── server.js
└── package.json
```

---

## Author

GitHub:  
https://github.com/Bhagyajyoti-123
