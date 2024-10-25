# Weather Monitoring System

## Objective

Develop a real-time data processing system to monitor weather conditions using the OpenWeatherMap API.

## Features

- Real-time weather data fetching.
- Daily weather summary calculations.
- Alerting system for temperature thresholds.
- Frontend visualizations.
  
## Folder Structure

weather-monitoring-system/
├── config/
│   └── db.js          # MongoDB connection configuration
├──modules/
│   └──Weather.js
├── public/
│   ├── index.html     # Frontend HTML
│   └── styles.css     # Frontend CSS
├── routes/
│   └── weatherRoutes.js # API route to fetch weather data
├── app.js             # Express app configuration
├── server.js          # Server entry point
├── .env               # Environment variables
├── .gitignore         # Ignored files and directories
└── package.json       # Project metadata and dependencies


## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18.18.2 or higher)
- MongoDB Atlas account for cloud database
- OpenWeatherMap API key (Sign up at https://openweathermap.org/ to get a free API key)

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/rule-engine-api.git
   cd rule-engine-ast
   npm install
   npm run server
### Create a .env file with your MongoDB connection string:

     MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority
     API_KEY=your_openweathermap_api_key
     ALERT_THRESHOLD=35

**PORT=5000**
### The server will run on ```http://localhost:5000/```


## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd weather-monitoring-system
2.Install dependencies
```bash
    npm install
```
3.Run the Application
```bash
npm run start
```
***The application will start on http://localhost:5000***
## Usage

1.Open the app in your browser at http://localhost:5000.
2.Select a city from the dropdown menu.
3.Weather data will automatically refresh every 5 minutes without user interaction.

## Technologies Used

- **Backend**: Node.js, Express.js
- **Frontend**: HTML, CSS, JavaScript
- **Database**: MongoDB (Cloud-based using MongoDB Atlas)
- **External API**: OpenWeatherMap API

  ## Author
### **Saravanasudhan**
