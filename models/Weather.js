const mongoose = require('mongoose');

const weatherSchema = new mongoose.Schema({
    city: String,
    averageTemp: Number,
    maxTemp: Number,
    minTemp: Number,
    dominantCondition: String,
    date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Weather', weatherSchema);
