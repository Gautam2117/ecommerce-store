
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
- 💳 **Secure Checkout with Razorpay Integration**
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

| Home Page | Product Detail Page | Cart Page |
|-----------|---------------------|-----------|
| ![Home](https://github.com/Gautam2117/ecommerce-store/blob/master/Home_ECom.png?raw=true) | ![Detail](https://github.com/Gautam2117/ecommerce-store/blob/master/Detail_ECom.png?raw=true) | ![Cart](https://github.com/Gautam2117/ecommerce-store/blob/master/Cart_ECom.png?raw=true) |

| My Orders Page | Admin Dashboard |
|----------------|------------------|
| ![My Orders](https://github.com/Gautam2117/ecommerce-store/blob/master/MyOrders_ECom.png?raw=true) | ![Admin](https://github.com/Gautam2117/ecommerce-store/blob/master/Admin_ECom.png?raw=true) |

---

## 📦 Tech Stack

- **Frontend:** React, Tailwind CSS, Axios, React Router
- **Backend:** Node.js, Express, MongoDB, JWT
- **Other:** Razorpay (payment), Cloudinary (images), Framer Motion, dotenv

---

## 📅 Week 8 Final Enhancements

- ✅ **Razorpay Checkout Integration**:  
  Secure payment flow is now enabled. Users can complete transactions via Razorpay after adding items to cart.
  
- 🛠️ **Production Readiness**:  
  Code structured and deployed for optimized performance and seamless user experience.

---

> Made with ❤️ by [Gautam Govind](https://github.com/Gautam2117)
