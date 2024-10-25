// routes/weatherRoutes.js

const express = require('express');
const axios = require('axios');

const router = express.Router();

// Fetch weather data for a specific city
router.get('/weather', async (req, res) => {
    const city = req.query.city;
    const apiKey = process.env.API_KEY; // Make sure your API key is in your .env file

    // Check if city parameter is provided
    if (!city) {
        return res.status(400).json({ message: 'City is required' });
    }

    try {
        // Make a request to OpenWeatherMap API
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        
        // Send back the weather data
        res.json(response.data);
    } catch (error) {
        // Handle errors from the API
        if (error.response) {
            // If the API returned a response with an error code
            return res.status(error.response.status).json({ message: error.response.data.message });
        }
        // If there was an error with the request itself
        res.status(500).json({ message: 'Error fetching weather data' });
    }
});

module.exports = router;
