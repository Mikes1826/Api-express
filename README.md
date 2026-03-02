# 🚀 Customers API - Express + PostgreSQL (Layered Architecture)

A RESTful API built with **Node.js**, **Express**, and **PostgreSQL** using a clean **Layered Architecture (Route → Controller → Service → Repository)** pattern.

This project demonstrates backend best practices including:

- Separation of concerns
- Environment configuration
- Database connection pooling
- Error handling
- Input validation
- Clean architecture principles

---

# 📦 Tech Stack

- Node.js
- Express.js
- PostgreSQL
- pg (node-postgres)
- dotenv
- ES Modules

---

# 🏗 Architecture Overview

The project follows a layered structure:


Client
↓
Route
↓
Controller
↓
Service
↓
Repository
↓
Database (PostgreSQL)


### 🔹 Route
Defines API endpoints and connects them to controllers.

### 🔹 Controller
Handles HTTP logic (req, res, status codes).

### 🔹 Service
Contains business logic and validation.

### 🔹 Repository
Handles database queries and data persistence.

### 🔹 Database
PostgreSQL database accessed via connection pool.

---

# 📂 Project Structure


src/
│
├── config/
│ └── database/
│ └── pgconfig.js
│
├── controllers/
│ └── customer.controller.js
│
├── services/
│ └── customer.service.js
│
├── repositories/
│ └── customer.repository.js
│
├── routes/
│ └── customer.routes.js
│
├── env.js
├── app.js
└── server.js


---

# ⚙️ Environment Variables

Create a `.env` file in the root directory:

```env
PORT=3000

DB_HOST=localhost
DB_PORT=5432
DB_NAME=your_database_name
DB_USER=your_username
DB_PASSWORD=your_password
🐘 Database Setup

Create the schema (if needed):

CREATE SCHEMA mikeresume;

Create the table:

CREATE TABLE mikeresume.customers (
    id_customer SERIAL PRIMARY KEY,
    name_customer VARCHAR(100) NOT NULL,
    email_customer VARCHAR(150) UNIQUE NOT NULL,
    phone VARCHAR(20) NOT NULL
);
▶️ Installation
1️⃣ Clone the repository
git clone <your-repo-url>
cd your-project-folder
2️⃣ Install dependencies
npm install
3️⃣ Run the server
npm run dev

or

node src/server.js

Server should start on:

http://localhost:3000
📡 API Endpoints
🔹 Get All Customers

GET

/customers

Response:

[
  {
    "id_customer": 1,
    "name_customer": "Mike",
    "email_customer": "mike@email.com",
    "phone": "1234567"
  }
]
🔹 Create Customer

POST

/customers

Body (JSON):

{
  "name": "Mike",
  "email": "mike@email.com",
  "phone": "1234567"
}

Response:

{
  "id_customer": 2,
  "name_customer": "Mike",
  "email_customer": "mike@email.com",
  "phone": "1234567"
}
🛡 Error Handling

The API handles:

Database errors

Unique constraint violations (email)

Validation errors

HTTP status codes (400, 500, 201, etc.)

🧠 Why Layered Architecture?

This architecture improves:

Maintainability

Scalability

Testability

Code organization

Separation of responsibilities

If the database changes (PostgreSQL → MongoDB),
only the Repository layer needs modification.

🧪 Testing

You can test the API using:

Postman

Thunder Client

curl

Example:

curl -X POST http://localhost:3000/customers \
-H "Content-Type: application/json" \
-d '{"name":"Mike","email":"mike@email.com","phone":"1234567"}'
🚀 Future Improvements

JWT Authentication

Request validation with Zod or Joi

Unit and integration tests (Jest + Supertest)

Docker support

API versioning (/api/v1)

Pagination & filtering

Logging system (Winston)

👨‍💻 Author

Developed as a backend architecture practice project.

📄 License

MIT License
