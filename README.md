# E-commerce Application

A full-stack e-commerce application built with React (frontend) and Node.js/Express (backend).

## Fixed Issues

✅ **Backend Issues Fixed:**
- Added `"type": "module"` to package.json for ES6 imports
- Fixed import paths in routes and models
- Converted all files to use ES6 modules consistently
- Added missing fields (image, category) to Product model
- Fixed environment variable usage (MONGO_URL)
- Added complete CRUD operations for products
- Fixed database connection in seedProducts.js

✅ **Frontend Issues Fixed:**
- Replaced incorrect App.jsx content with proper React router setup
- Fixed API endpoints to match backend routes
- Created all missing page components
- Added proper navigation and styling
- Fixed import statements

## Setup Instructions

### Backend Setup
1. Navigate to backend directory:
   ```bash
   cd "E-commerce/backend"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Make sure MongoDB is running on your system

4. Seed the database with sample products:
   ```bash
   npm run seed
   ```

5. Start the backend server:
   ```bash
   npm start
   ```
   Server will run on http://localhost:5001

### Frontend Setup
1. Navigate to frontend directory:
   ```bash
   cd "E-commerce/frontend"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
   Frontend will run on http://localhost:5173

## Features

- ✅ Product listing and details
- ✅ Add new products
- ✅ Responsive design
- ✅ Navigation between pages
- ✅ MongoDB integration
- ✅ REST API endpoints

## API Endpoints

- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create new product
- `PUT /api/products/:id` - Update product
- `DELETE /api/products/:id` - Delete product

## Technologies Used

**Backend:**
- Node.js
- Express.js
- MongoDB with Mongoose
- CORS
- dotenv

**Frontend:**
- React 19
- React Router DOM
- Axios
- Tailwind CSS
- Vite

All major errors have been fixed and the application should now run without issues!