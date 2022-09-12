import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    temperature: "30",
    city: "Lviv",
    date: "Sunday, 8pm",
    description: "Cloudy",
    weatherUrl:
      "https://icons-for-free.com/iconfiles/png/512/fog+foggy+weather+icon-1320196634851598977.png",
    humidity: "60",
    wind: "4",
  };

  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-6">
            <input
              type="search"
              placeholder="Type a city"
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="form-control btn btn-primary shadow w-100"
            />
          </div>
          <div className="col-3">
            <button className="btn btn-light shadow w-100">Current 📌</button>
          </div>
        </div>
      </form>
      <section>
        <h1>{weatherData.city}</h1>
        <ul>
          <li>{weatherData.date}</li>
          <div className="row">
            <div className="col-8">
              <li>
                <div>{weatherData.temperature}</div>
                <a href="/">°C</a>
              </li>
              <li>{weatherData.description}</li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind:{weatherData.wind} km/h</li>
            </div>
            <div className="col-4">
              <img src={weatherData.weatherUrl} width="200" />
            </div>
          </div>
        </ul>
      </section>
      <div className="weather-forecast"></div>
      <a
        href="https://github.com/AnastasiiaSemenovaa/react-weather"
        className="linkStyle"
        target="blank"
      >
        View the code
      </a>
      created by Anastasiia Semenova
    </div>
  );
}
