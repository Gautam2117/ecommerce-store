
# 🛒 E-Commerce Store (MERN Stack)

A modern, full-featured e-commerce application built with the MERN stack (MongoDB, Express, React, Node.js). Includes both **frontend** and **backend**, with features like product listing, search, cart management, order system, admin dashboard, and more.

---

## ✨ Features

- 🔍 **Product Search** with real-time filtering  
- 🗂️ **List/Grid Toggle** for product view  
- 🛒 **Cart Management** with quantity control  
- 🔐 **Authentication** (Register/Login)  
- 📦 **Order Placement** with success screen  
- 👤 **User Dashboard** to view orders  
- 🛠️ **Admin Dashboard** to create/edit products and manage orders  

---

## 📁 Folder Structure

```
ecommerce-store/
│
├── ecommerce-frontend/      # React frontend
└── ecommerce-backend/       # Node + Express backend
```

---

## 🚀 Getting Started

### Backend Setup

```bash
cd ecommerce-backend
npm install
npm run dev
```

- Make sure MongoDB is running locally or update the connection URI in `config/db.js`.

---

### Frontend Setup

```bash
cd ecommerce-frontend
npm install
npm start
```

---

## 🔐 Default Admin

- After registering a user, you can manually make them admin in the MongoDB database by setting:
  
```js
isAdmin: true
```

---

## 🖼️ Screenshots

| Home Page         | Product Detail    | Cart Page         |
|------------------|------------------|------------------|
| ![Home](./assets/home.png) | ![Detail](./assets/detail.png) | ![Cart](./assets/cart.png) |

> Add actual screenshots in a local `assets/` folder and update paths.

---

## 📦 Tech Stack

- **Frontend:** React, Tailwind CSS, Axios, React Router
- **Backend:** Node.js, Express, MongoDB, JWT
- **Other:** Razorpay (payment), Cloudinary (images), Framer Motion, dotenv

---

> Made with ❤️ by [Gautam Govind](https://github.com/Gautam2117)
