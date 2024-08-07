const express = require('express');
const mysql = require('mysql2');
const path = require('path');

const app = express();
const PORT = 5050;

// MySQL connection configuration
const connection = mysql.createConnection({
  host: 'sql5.freesqldatabase.com',
  user: 'sql5720431',
  password: 'tKyx8rJNd2',
  database: 'sql5720431',
});

// Connect to MySQL database
connection.connect((err) => {
  if (err) {
    console.error('Failed to connect to MySQL database:', err);
    return;
  }
  console.log('Successfully connected to MySQL database.');
});

// Serve static files from the 'build' directory
app.use(express.static(path.join(__dirname, 'build')));

// Serve images from the 'src/products' directory under '/products' route
app.use('/products', express.static(path.join(__dirname, 'src', 'products')));

// API endpoint to fetch all products
app.get('/api/items', (req, res) => {
  const query = 'SELECT * FROM products';
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error executing MySQL query:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    res.json(results);
  });
});

// API endpoint to fetch products by type
app.get('/api/items/type/:type', (req, res) => {
  const { type } = req.params;
  const query = 'SELECT Id, name, price, img, type, brand FROM products WHERE type = ?';
  connection.query(query, [type], (err, results) => {
    if (err) {
      console.error('Error executing MySQL query:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    res.json(results);
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
