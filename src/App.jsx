import "./App.css";
import { useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import DisplayWeather from "./components/WeatherDisplay/WeatherDisplay";
import WeatherDisplay from "./components/WeatherDisplay/WeatherDisplay";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const apiKey = import.meta.env.VITE_API_KEY;
  const apiUrl = import.meta.env.VITE_API_URL;

  const getWeather = async (location) => {
    try {
      setError(null);
      setLoading(true);
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
    } finally {
      setLoading(false);
    }
  };

  if (error) return <div>Error: {error}</div>;

  return (
    <main>
      <SearchBar getWeather={getWeather} />
      {loading && <div>Loading Weather...</div>}
      {weatherData && !loading && <WeatherDisplay weatherData={weatherData} />}
    </main>
  );
}

export default App;
