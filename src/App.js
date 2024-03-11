import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Details from "./components/Details";
import Weather from "./components/Weather";

function App() {
  const [searchTerm, setSearchTerm] = useState("New York");
  const [weatherData, setWeatherData] = useState(null);
  const apiKey = process.env.REACT_APP_API_KEY;
  let timer;

  const fetchWeatherData = async (location) => {
    setSearchTerm(location)
    console.log("function called", location)
    try {
      console.log("start")
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`
      );
      setWeatherData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    fetchWeatherData(searchTerm);
  }, []);

  const handleLocationChange = (newLocation) => {
    clearTimeout(timer);
    timer = setTimeout(async() => {
      await fetchWeatherData(newLocation);
    }, 3000);
  };
  return (
    <div className="App">
      <Weather onLocationChange={handleLocationChange} weatherData={weatherData}/>
      <Details weatherData={weatherData} />
    </div>
  );
}

export default App;
