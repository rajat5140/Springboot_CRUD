CRUD Operations – React Frontend

This is the frontend of the CRUD Operations application built using React + Vite.
It communicates with a Spring Boot + MongoDB backend through REST APIs.

Features

Create a user (name, email)

View all users

Get user by ID

Update user by ID

Delete user by ID

Responsive and user-friendly UI

Integrated with Spring Boot backend APIs

Tech Stack

React

Vite

JavaScript (ES6+)

Fetch API

HTML5 & CSS3

Project Structure
crud-operation-frontend/
│
├── src/
│   ├── components/
│   ├── lib/
│   ├── App.jsx
│   └── main.jsx
│
├── public/
├── package.json
├── vite.config.js
└── README.md

Backend API Integration

The frontend communicates with the backend at:

http://localhost:8081/api/users

Supported API Operations
Method	Endpoint	Description
POST	/api/users	Create user
GET	/api/users	Get all users
GET	/api/users/{id}	Get user by ID
PUT	/api/users/{id}	Update user by ID
DELETE	/api/users/{id}	Delete user by ID

▶How to Run the Frontend
Prerequisites

Node.js (v18 or later)

Backend must be running on port 8081

Step 1: Navigate to frontend folder
cd crud-operation-frontend

Step 2: Install dependencies
npm install

Step 3: Start development server
npm run dev

Frontend will be available at:
http://localhost:5173