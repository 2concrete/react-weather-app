import { useEffect } from "react";
import { getWeatherIcon } from "./WeatherIconUtils";
import {
  Eye,
  Wind,
  Sunset,
  Sunrise,
  Droplets,
  CloudRain,
  MapPin,
} from "lucide-react";
import "./WeatherDisplay.css";

const WeatherDisplay = ({ weatherData }) => {
  useEffect(() => {}, [weatherData]);

  const icon = getWeatherIcon(weatherData.current.condition.code, {
    size: 24,
    className: "weather-icon",
  });

  return (
    <>
      <div className="main-temp">
        <p className="temp_c">{weatherData.current.temp_c}&deg;</p>
        <div className="location">
          {icon}
          <p className="name">{weatherData.location.name}</p>
        </div>
      </div>
      <div className="main-info">
        <div className="info-box">
          <CloudRain />
          <p>{weatherData.forecast.forecastday[0].day.daily_chance_of_rain}%</p>
        </div>
        <div className="info-box">
          <Eye />
          <p>{weatherData.current.vis_km}km</p>
        </div>
        <div className="info-box">
          <Wind />
          <p>{weatherData.current.wind_kph}km/h</p>
        </div>
        <div className="info-box">
          <Droplets />
          <p>{weatherData.current.humidity}%</p>
        </div>
        <div className="info-box">
          <Sunset />
          <p>{weatherData.forecast.forecastday[0].astro.sunset}</p>
        </div>
        <div className="info-box">
          <Sunrise />
          <p>{weatherData.forecast.forecastday[0].astro.sunrise}</p>
        </div>
      </div>
    </>
  );
};

export default WeatherDisplay;
