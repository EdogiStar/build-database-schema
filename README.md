# Mini Store Backend
‎
‎Backend service powering the Mini Store application, built as part of the 3MTT Fullstack Development learning journey.
‎
‎This REST API manages product data and serves the frontend application through secure endpoints connected to MongoDB Atlas.
‎
‎---
‎
‎# Live API
‎
‎Production URL:
‎
‎"https://mini-store-backend-05u3.onrender.com"
‎
‎---
‎
‎# Features
‎
‎- RESTful API architecture
‎- MongoDB Atlas cloud database integration
‎- Express.js server setup
‎- Mongoose data modeling
‎- Environment variable configuration
‎- Request validation
‎- Product CRUD operations
‎- Query parameter support ("limit")
‎- CORS enabled for frontend communication
‎- Render deployment
‎
‎---
‎
‎# Tech Stack
‎
‎- Node.js
‎- Express.js
‎- MongoDB Atlas
‎- Mongoose
‎- Joi
‎- Render
‎
‎---
‎
‎# Project Structure
‎
‎mini-store-backend/
‎│
‎├── config/
‎│   └── db.js
‎│
‎├── controllers/
‎│   └── productController.js
‎│
‎├── models/
‎│   └── productModel.js
‎│
‎├── routes/
‎│   └── productRoute.js
‎│
‎├── .env
‎├── index.js
‎├── package.json
‎└── README.md
‎
‎---
‎
‎# API Endpoints
‎
‎Get all products
‎
‎GET
‎
‎/api/products
‎
‎Get featured products
‎
‎GET
‎
‎/api/products?limit=5
‎
‎Get single product
‎
‎GET
‎
‎/api/products/:id
‎
‎Create product
‎
‎POST
‎
‎/api/products
‎
‎Update product
‎
‎PUT
‎
‎/api/products/:id
‎
‎Delete product
‎
‎DELETE
‎
‎/api/products/:id
‎
‎---
‎
‎# Environment Variables
‎
‎Create ".env"
‎
‎MONGO_URI=your_mongodb_connection_string
‎PORT=3000
‎
‎---
‎
‎Run Locally
‎
‎Install dependencies:
‎
‎npm install
‎
‎Start server:
‎
‎npm start
‎
‎---
‎
‎# Learning Outcome
‎
‎This project strengthened practical understanding of:
‎
‎- Backend architecture
‎- API design
‎- Database integration
‎- Cloud deployment
‎- Environment management
‎- Full-stack application flow
‎
‎Built for learning, practice, and portfolio development.