import React, {useState} from 'react';
import ListWeather from './ListWeather';
import GetWeather from './GetWeather';

function Weather(props) {
  const {phrase} = props

  const [weatherData, setWeatherData] = useState()

  const handleGetData = (data) => {
    setWeatherData(data)
  }

  return (
  <div id="weather" className="govuk-grid-row">
    <GetWeather onSubmitData={handleGetData} phrase={phrase} />
    <ListWeather weatherData={weatherData} phrase={phrase} />
    <p className="govuk-hint govuk-width-container">
      {phrase["The data is obtained"]} <strong><a href="https://open-meteo.com/">open-meteo.com</a></strong>
    </p>
  </div>
  );
}

export default Weather;