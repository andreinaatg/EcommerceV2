# EcommerceV2

## Summary
EcommerceV2 is a full stack e-commerce application designed to provide a seamless online shopping experience. It is built using React for the frontend and Node.js for the backend, connected to a MySQL database.

### Deployed using Render 
**https://miwav2.onrender.com**

## Project Structure

The project has the following structure:
```
- `my-app/`
  - `backend/` - Contains the backend server code and build folder.
    - `build/` - Contains built static files for production deployment.
    - `server.js` - Main server file to run the backend server.
  - `frontend/` - Contains the React application code.
    - `src/` - Source code for the React application.
    - `public/` - Public assets and static files.
    - `package.json` - Configuration file for frontend dependencies and scripts.
```
## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (Recommended version: 14.x or later)
- [MySQL](https://www.mysql.com/) or any compatible database

### Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/andreinaatg/EcommerceV2.git
   cd EcommerceV2/my-app

2. **Install Backend Dependencies**

Navigate to the backend directory and install the required packages:

- cd backend
- npm install

3. **Build the Backend**

- npm run build

4. **Start the Backend Servers**
Run the server with:

- node server.js
The backend server will run on http://localhost:5050 

5. **Install Frontend Dependencies**

Navigate to the frontend directory and install the required packages:

- cd ../frontend
- npm install


6. **Start the Frontend Development Servers**
Run the frontend application with:

- npm start

**Proxy Configuration**
The frontend application uses a proxy to redirect API requests to the backend server. This setup is configured in the frontend/package.json file under the proxy field:

- "proxy": "http://localhost:5050"

**Running Both Servers Simultaneously**
Both the frontend and backend servers will run on different ports. The proxy configuration allows the frontend to communicate with the backend seamlessly.

**Features**
Product Listings: View and filter a variety of products.
Product Details: Detailed information about each product.
Contact Form: Users can send inquiries through a contact form.

**Contributing**
Feel free to submit issues or pull requests. Contributions are welcome! Please ensure to follow the project's coding style and guidelines.

**License**
This project is licensed under the MIT License.

