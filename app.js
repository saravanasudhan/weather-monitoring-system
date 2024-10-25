const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
const weatherRoutes = require('./routes/weatherRoutes');
const dotenv = require('dotenv');

// Load environment variables from .env
dotenv.config();

// Initialize the app
const app = express();

// Connect to the database
connectDB();

// Middleware to parse incoming JSON
app.use(express.json());

// Serve static files (frontend)
app.use(express.static(path.join(__dirname, 'public')));

// API Routes
app.use('/api', weatherRoutes);

module.exports = app;
