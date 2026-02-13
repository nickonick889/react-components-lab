import "./App.css";
import WeatherForecast from "./components/WeatherForecast/WeatherForecast.jsx";
// src/App.jsx
const weatherForecasts = [
  {
    day: "Mon",
    img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/day.svg",
    imgAlt: "sun icon",
    conditions: "sunny",
    time: "Morning",
  },
  {
    day: "Tue",
    img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/night.svg",
    imgAlt: "moon icon",
    conditions: "clear",
    time: "Night",
  },
  {
    day: "Wed",
    img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/stormy.svg",
    imgAlt: "clouds with lightning icon",
    conditions: "stormy",
    time: "All Day",
  },
  {
    day: "Thu",
    img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/cloudy-day.svg",
    imgAlt: "sun overcast by clouds icon",
    conditions: "overcast",
    time: "Evening",
  },
  {
    day: "Fri",
    img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/cloudy-night.svg",
    imgAlt: "moon overcast by clouds icon",
    conditions: "cloudy",
    time: "Night",
  },
];


const App = () => {
  console.log(weatherForecasts); 
  return (
    <>
      <h1>Local Weather</h1>
      <section>
  {weatherForecasts.map((forecast, index) => (
    <WeatherForecast 
      key={index}
      day={forecast.day} // Matches {day} in child
      img={forecast.img} // Matches {img} in child
      imgAlt={forecast.imgAlt} // Matches {imgAlt} in child
      conditions={forecast.conditions} // Matches {conditions} in child
      time={forecast.time} // Matches {time} in child
    />
  ))}
</section>
    </>
  );
}

export default App;