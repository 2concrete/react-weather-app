import {
  Sun,
  Cloud,
  CloudRain,
  CloudSnow,
  CloudDrizzle,
  CloudLightning,
  Eye,
  Snowflake,
  CloudHail,
} from "lucide-react";

/**
 * Maps WeatherAPI condition codes to appropriate Lucide React icons
 * @param {number} weatherCode - WeatherAPI condition code
 * @param {object} iconProps - Props to pass to the icon (size, className, etc.)
 * @returns {JSX.Element} - Lucide React icon component
 */
export const getWeatherIcon = (weatherCode, iconProps = {}) => {
  switch (weatherCode) {
    case 1000: // Sunny/Clear
      return <Sun {...iconProps} />;

    case 1003: // Partly cloudy
    case 1006: // Cloudy
    case 1009: // Overcast
      return <Cloud {...iconProps} />;

    case 1030: // Mist
    case 1135: // Fog
    case 1147: // Freezing fog
      return <Eye {...iconProps} />;

    case 1063: // Patchy rain possible
    case 1180: // Patchy light rain
    case 1183: // Light rain
    case 1186: // Moderate rain at times
    case 1189: // Moderate rain
    case 1192: // Heavy rain at times
    case 1195: // Heavy rain
    case 1198: // Light freezing rain
    case 1201: // Moderate or heavy freezing rain
    case 1240: // Light rain shower
    case 1243: // Moderate or heavy rain shower
    case 1246: // Torrential rain shower
      return <CloudRain {...iconProps} />;

    case 1066: // Patchy snow possible
    case 1210: // Patchy light snow
    case 1213: // Light snow
    case 1216: // Patchy moderate snow
    case 1219: // Moderate snow
    case 1222: // Patchy heavy snow
    case 1225: // Heavy snow
    case 1255: // Light snow showers
    case 1258: // Moderate or heavy snow showers
    case 1114: // Blowing snow
    case 1117: // Blizzard
    case 1279: // Patchy light snow with thunder
    case 1282: // Moderate or heavy snow with thunder
      return <Snowflake {...iconProps} />;

    case 1069: // Patchy sleet possible
    case 1204: // Light sleet
    case 1207: // Moderate or heavy sleet
    case 1237: // Ice pellets
    case 1249: // Light sleet showers
    case 1252: // Moderate or heavy sleet showers
    case 1261: // Light showers of ice pellets
    case 1264: // Moderate or heavy showers of ice pellets
      return <CloudHail {...iconProps} />;

    case 1072: // Patchy freezing drizzle possible
    case 1150: // Patchy light drizzle
    case 1153: // Light drizzle
    case 1168: // Freezing drizzle
    case 1171: // Heavy freezing drizzle
      return <CloudDrizzle {...iconProps} />;

    case 1087: // Thundery outbreaks possible
    case 1273: // Patchy light rain with thunder
    case 1276: // Moderate or heavy rain with thunder
      return <CloudLightning {...iconProps} />;

    default:
      return <Sun {...iconProps} />; // Default fallback
  }
};

// Alternative version that returns the icon component name as string
export const getWeatherIconName = (weatherCode) => {
  switch (weatherCode) {
    case 1000:
      return "Sun";
    case 1003:
    case 1006:
    case 1009:
      return "Cloud";
    case 1030:
    case 1135:
    case 1147:
      return "Eye";
    case 1063:
    case 1180:
    case 1183:
    case 1186:
    case 1189:
    case 1192:
    case 1195:
    case 1198:
    case 1201:
    case 1240:
    case 1243:
    case 1246:
      return "CloudRain";
    case 1066:
    case 1210:
    case 1213:
    case 1216:
    case 1219:
    case 1222:
    case 1225:
    case 1255:
    case 1258:
    case 1114:
    case 1117:
    case 1279:
    case 1282:
      return "Snowflake";
    case 1069:
    case 1204:
    case 1207:
    case 1237:
    case 1249:
    case 1252:
    case 1261:
    case 1264:
      return "CloudHail";
    case 1072:
    case 1150:
    case 1153:
    case 1168:
    case 1171:
      return "CloudDrizzle";
    case 1087:
    case 1273:
    case 1276:
      return "CloudLightning";
    default:
      return "Sun";
  }
};
