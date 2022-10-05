import temperature from '../../img/temperature.gif';
import wind from '../../img/wind.gif';
import partly_cloudy from '../../img/partly_cloudy.gif';
import rain from '../../img/rain.gif';
import snow from '../../img/snow.gif';

function ListWeather(props) {
  const {weatherData, phrase} = props
  

  return (
  <div className="clearfix">
    {weatherData !== undefined && weatherData.map((data, index) => (
    <div key={index} className="govuk-grid-column-one-third">
      <table className="govuk-table">
        <caption className="govuk-table__caption govuk-!-margin-bottom-4">{data.time}</caption>
        <thead>
        </thead>
          <tbody className="govuk-table__body">
            <tr className="govuk-table__row">
              <th scope="row" className="govuk-table__cell">
                <img alt="temperature" src={temperature} width="40" />
              </th>
              <td className="govuk-table__cell">max</td>
              <td className="govuk-table__cell">{data.temperature_2m_max} °C</td>
            </tr>
            <tr className="govuk-table__row">
              <th scope="row" className="govuk-table__cell">
                <img alt="wind" src={wind} width="40" />
              </th>
              <td className="govuk-table__cell">{phrase["wind"]}</td>
              <td className="govuk-table__cell">{data.windspeed_10m_max} km/h</td>
            </tr>
            <tr className="govuk-table__row">
              <th scope="row" className="govuk-table__cell">
                <img alt="cloudiness" src={partly_cloudy} width="40" />
              </th>
              <td className="govuk-table__cell">{phrase["cloudiness"]}</td>
              <td className="govuk-table__cell">{data.weathercode} %</td>
            </tr>
            <tr className="govuk-table__row">
              <th scope="row" className="govuk-table__cell">
                <img alt="rain" src={rain} width="40" />
              </th>
              <td className="govuk-table__cell">{phrase["rain"]}</td>
              <td className="govuk-table__cell">{data.rain_sum} mm</td>
            </tr>
            <tr className="govuk-table__row">
              <th scope="row" className="govuk-table__cell">
                <img alt="snow" src={snow} width="40" />
              </th>
              <td className="govuk-table__cell">{phrase["snow"]}</td>
              <td className="govuk-table__cell">{data.snowfall_sum} cm</td>
            </tr>
          </tbody>
      </table>
    </div>
    )) }
  </div>   
  );
}

export default ListWeather;