# E-commerce Campaign Reporting API

This project is a Node.js application using Express, Sequelize, and SQLite for uploading campaign data via CSV and generating reports with JWT-based authentication.

# Setup Instructions

# Step 1: Install SQLite3

# Step 2: Install Node.js Packages

npm install

This installs all required dependencies like Express, Sequelize, JWT, bcrypt, etc.

# Step 3: Run the Application

npm start

# Step 4: Create a User Using POSTMAN

**Endpoint:** `POST http://localhost:3000/users`  
**Body:**
```json
{
  "username": "testuser",
  "password": "testpass",
  "email": "test@example.com"
}
```

# Step 5: Login and Get JWT Token

**Endpoint:** `POST /login`  
**Body:**
```json
{
  "username": "testuser",
  "password": "testpass"
}
```

**Response:**
```json
{
  "token": "your-jwt-token"
}
```

# Step 6: Upload CSV File

**Endpoint:** `POST /upload-csv`  
**Form-Data Field:** `file` (your product CSV file path)

# Step 7: Product Reporting APIs (JWT Required)

# a. Filter by Campaign Name
**POST** `/products/report/campaign`
```json
{
  "campaing_name": "Campaign A",
}
```

### 🔍 b. Filter by Ad Group ID
**POST** `/products/report/adGroupID`
```json
{
  "ad_group_id": "ad group id",
}
```

### 🔍 c. Filter by FSN ID
**POST** `/products/report/fsnID`
```json
{
  "fsn_id": "fsn id",
}
```

### 🔍 d. Filter by Product Name
**POST** `/products/report/productName`
```json
{
  "product_name": "product name",
}
```

# Tech Stack
- Node.js + Express
- Sequelize ORM
- SQLite
- JWT Authentication
- Multer for File Uploads
- bcrypt for Password Hashing
