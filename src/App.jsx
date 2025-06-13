import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import { useState } from "react";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const apiKey = import.meta.env.VITE_API_KEY;
  const apiUrl = import.meta.env.VITE_API_URL;

  const getWeather = async (location) => {
    try {
      setError(null);
      const response = await fetch(`${apiUrl}?key=${apiKey}&q=${location}`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Successfully Fetched Data!");
      setWeatherData(data);
    } catch (error) {
      console.error("Weather API error:", error);
      setError(error.message);
    }
  };

  return (
    <>
      <SearchBar getWeather={getWeather} />
    </>
  );
}

export default App;
