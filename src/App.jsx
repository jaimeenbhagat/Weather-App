/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import axios from "axios";
import './App.css';
import { FiSun, FiCloudRain, FiCloud, FiMoon } from 'react-icons/fi'; // Weather icons

const API_KEY = "3cf2c61ec5f0d87941a48bcc871d932d";

function App() {
  const [country, setCountry] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(true);
  
  // Get weather icon based on condition
  const getWeatherIcon = (condition) => {
    if (condition.includes("clear")) return <FiSun size={50} />;
    if (condition.includes("rain")) return <FiCloudRain size={50} />;
    if (condition.includes("cloud")) return <FiCloud size={50} />;
    return <FiMoon size={50} />;
  };

  // Fetch weather by country
  const fetchWeatherData = async (countryName) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${countryName}&APPID=${API_KEY}&units=metric`
      );
      setWeather(response.data);
    } catch (error) {
      setError("Unable to fetch weather data. Please check the country name.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setWeather(null);

    if (country) {
      fetchWeatherData(country);
    } else {
      setError("Please enter a valid country name.");
    }
  };

  // Toggle Dark Mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`weather-app ${isDarkMode ? "dark-mode" : ""}`}>
      <header>
        <h1>Weather App</h1>
        <button className="theme-toggle" onClick={toggleDarkMode}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={country}
          placeholder="Enter country name"
          onChange={(e) => setCountry(e.target.value)}
        />
        <button type="submit">Get Weather</button>
      </form>

      {error && <p className="error">{error}</p>}

      {weather && (
        <div className="weather-info">
          <h2>Weather in {weather.name}</h2>
          {getWeatherIcon(weather.weather[0].description)}
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Conditions: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default App;
