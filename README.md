# 📝 Blog API Project

A full-stack backend blog application built with **Node.js**, **Express**, and **MongoDB Atlas**, following **industry-standard MVC architecture**.  
The project supports both **server-rendered pages (EJS)** and **RESTful APIs**, with validation, error handling, and cloud database persistence.

---

## 🚀 Live Features

- Create, read, update, and delete blog posts
- REST API for external clients
- MongoDB Atlas cloud database
- MVC folder structure
- Input validation
- Centralized error handling
- Environment-based configuration
- Production-ready backend design

---

## 🧑‍💻 Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB Atlas**
- **Mongoose**
- **EJS**
- **Express Validator**
- **Nodemon**

---

## 📂 Project Structure

Blog-API-Project/
├── config/ # Database connection
├── controllers/ # Route controllers (MVC)
├── middlewares/ # Validation & error handling
├── models/ # Mongoose schemas
├── routes/ # Web & API routes
├── views/ # EJS templates
├── public/ # Static assets
├── server.js # App entry point
├── package.json
├── .env.example
└── README.md

---

## 🌐 REST API Endpoints

| Method | Endpoint | Description |
|------|---------|------------|
| GET | `/api/posts` | Fetch all posts |
| POST | `/api/posts` | Create a new post |
| PATCH | `/api/posts/:id` | Update a post |
| DELETE | `/api/posts/:id` | Delete a post |

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory:

```env
PORT=3000
MONGO_URI=your_mongodb_atlas_connection_string
