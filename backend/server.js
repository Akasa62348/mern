const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Create Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Allow frontend to connect
app.use(express.json()); // Parse JSON data

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('MongoDB connection error:', err));

// Basic route
app.get('/', (req, res) => {
  res.send('Welcome to the E-Commerce Backend!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/product');

app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);