# 🚀 Full-Stack Login System (React + Node.js + Express + MySQL)

This project is a **complete login feature** with a modern frontend and secure backend.  
It includes:

- ✅ **Frontend** built with React + TailwindCSS (Vite setup)
- ✅ **Backend** built with Node.js, Express, MySQL
- ✅ Secure password storage with **bcrypt**
- ✅ User authentication (Register & Login)
- ✅ Routing with **React Router**
- ✅ Redirect to success page after login

---

## ⚙️ Backend Setup

### 1. Install dependencies
```bash
cd backend
npm install express cors dotenv mysql bcryptjs nodemon
```
### 2. Database setup
Run the following in MySQL:

```sql
CREATE DATABASE IF NOT EXISTS tsa_media;
USE tsa_media;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```
### 3. Environment variables
Create a .env file inside backend/:

```ini
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=tsa_media
```

### 4. Run the backend
```bash
npm run dev
```
Server runs on: http://localhost:5000

## 🎨 Frontend Setup
### 1. Install dependencies
```bash
cd frontend
npm install
npm install react-router-dom lucide-react
```

### 2. Run the frontend
```bash
npm run dev
```
Frontend runs on: http://localhost:5173

## 🔑 API Endpoints
### Register User
POST /api/auth/register

```json
{
  "username": "name",
  "email": "email",
  "password": "pass"
}
```
### Login User
POST /api/auth/login

```json
Copy code
{
  "emailOrUsername": "email",
  "password": "pass"
}
```
### Response (success):

```json
{
  "message": "Login successful",
  "user": {
    "id": 1,
    "username": "name",
    "email": "emaail"
  }
}
```

## 🖥️ Frontend Features
1. Responsive UI with TailwindCSS:
2. Login page with:
   -Email/Username + Password input
   -Show/hide password toggle
    -Basic validation
3. Sign Up page (new account creation)
4. Redirect to Success page after login
5. Google/GitHub login buttons (UI only, no auth)

## 🚀 How to Use
1. Start backend first (npm run dev in backend/)
2. Start frontend (npm run dev in frontend/)
3. Open http://localhost:5173
4. Register a new user → Login with credentials → Redirects to success page 🎉
