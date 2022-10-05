import React, {useEffect, useRef} from 'react';
import axios from 'axios';

function GetWeather(props) {

const {onSubmitData, phrase} = props
const Select = useRef(null)
const city = useRef(null)


useEffect(() => {
  getWeatherData()
}, []);

const getWeatherData = (e) => {
  if (e) { e.preventDefault()}
  const latitude = Select.current.options[Select.current.selectedIndex].getAttribute("data-latitude")
  const longitude = Select.current.options[Select.current.selectedIndex].getAttribute("data-longitude")
  city.current.textContent = Select.current.value

  let today = new Date()
  today = formatDate(today)

  let futureDate = new Date()
  futureDate.setDate(futureDate.getDate() + 2)
  futureDate = formatDate(futureDate)

  function formatDate(date) {
    const yyyy = date.getFullYear();
    let mm = date.getMonth() + 1;
    let dd = date.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    return  yyyy+'-'+mm+'-'+dd;
  }

  let url = "https://api.open-meteo.com/v1/forecast?latitude="+latitude+"&longitude="+longitude+"&daily=temperature_2m_max,rain_sum,snowfall_sum,weathercode,windspeed_10m_max&timezone=Europe%2FBerlin&start_date="+today+"&end_date="+futureDate
  axios.get(url).then(response => {
    let data = []
    for (let i = 0; i < response.data.daily.time.length; i++) {
      let date = response.data.daily.time[i].split("-")
      date = date[2]+". "+date[1]+". "+date[0]
      data.push({
        rain_sum: response.data.daily.rain_sum[i],
        snowfall_sum: response.data.daily.snowfall_sum[i],
        temperature_2m_max: response.data.daily.temperature_2m_max[i],
        time: date,
        weathercode: response.data.daily.weathercode[i],
        windspeed_10m_max: response.data.daily.windspeed_10m_max[i]
      })
    }
    onSubmitData(data)
  })
}


return (
<form method="post">
  <div className="govuk-form-group govuk-width-container">
    <h1 className="govuk-label-wrapper"><label className="govuk-label govuk-label--l">
        {phrase["Weather forecast"]}
      </label>
    </h1>
    <p className="govuk-hint">
      {phrase["Find out the weather"]} <strong ref={city}></strong>
    </p>
    <select className="govuk-select" id="last-visited-country" name="last-visited-country" aria-describedby="last-visited-country-hint" ref={Select}>
        <optgroup label="Europe">
          <option defaultValue data-latitude="48.77132" data-longitude="22.08517">Fekišovce</option>
          <option defaultValue data-latitude="48.716385" data-longitude="21.261074">Košice</option>
          <option defaultValue data-latitude="52.5235" data-longitude="13.4115">Berlin</option>
          <option data-latitude="48.8567" data-longitude="2.3510" data-asl="34">Paris</option>
          <option data-latitude="51.5002" data-longitude="-0.1262" data-asl="14">London</option>
          <option data-latitude="40.4167" data-longitude="-3.7033" data-asl="588">Madrid</option>
          <option data-latitude="48.2092" data-longitude="16.3728" data-asl="170">Vienna</option>
          <option data-latitude="50.8371" data-longitude="4.3676" data-asl="577">Brussels</option>
          <option data-latitude="55.7558" data-longitude="37.6176" data-asl="125">Moscow</option>
          <option data-latitude="42.7105" data-longitude="23.3238" data-asl="591">Sofia</option>
          <option data-latitude="55.6763" data-longitude="12.5681" data-asl="0">Copenhagen</option>
          <option data-latitude="37.9792" data-longitude="23.7166" data-asl="153">Athens</option>
          <option data-latitude="47.4984" data-longitude="19.0408" data-asl="102">Budapest</option>
          <option data-latitude="64.1353" data-longitude="-21.8952" data-asl="15">Reykjavik</option>
          <option data-latitude="53.3441" data-longitude="-6.2675" data-asl="8">Dublin</option>
          <option data-latitude="41.8955" data-longitude="12.4823" data-asl="14">Rome</option>
          <option data-latitude="52.3738" data-longitude="4.8910" data-asl="-1">Amsterdam</option>
          <option data-latitude="59.9138" data-longitude="10.7387" data-asl="12">Oslo</option>
          <option data-latitude="52.2297" data-longitude="21.0122" data-asl="93">Warsaw</option>
          <option data-latitude="38.7072" data-longitude="-9.1355" data-asl="15">Lisabon</option>
          <option data-latitude="46.9480" data-longitude="7.4481" data-asl="513">Bern</option>
          <option data-latitude="50.4422" data-longitude="30.5367" data-asl="168">Kiev</option>
          <option data-latitude="59.3328" data-longitude="18.0645" data-asl="15">Stockholm</option>
        </optgroup>
        <optgroup label="America">
          <option data-latitude="38.8921" data-longitude="-77.0241" data-asl="2">Washington</option>
          <option data-latitude="40.71" data-longitude="-74.01" data-asl="10">New York</option>
          <option data-latitude="38.5737" data-longitude="-121.4871" data-asl="4">Sacramento</option>
          <option data-latitude="34.05" data-longitude="-118.24" data-asl="89">Los Angeles</option>
          <option data-latitude="41.85" data-longitude="-87.65" data-asl="179">Chicago</option>
          <option data-latitude="29.76" data-longitude="-95.36" data-asl="12">Houston</option>
          <option data-latitude="33.45" data-longitude="-112.07" data-asl="331">Phoenix</option>
          <option data-latitude="39.95" data-longitude="-75.16" data-asl="12">Philadelphia</option>
          <option data-latitude="49.25" data-longitude="-123.12" data-asl="70">Vancouver</option>
          <option data-latitude="45.4235" data-longitude="-75.6979" data-asl="74">Ottawa</option>
          <option data-latitude="-34.6118" data-longitude="-58.4173" data-asl="10">Buenos Aires</option>
          <option data-latitude="-15.7801" data-longitude="-47.9292" data-asl="1079">Brasilia</option>
          <option data-latitude="-33.4691" data-longitude="-70.6420" data-asl="521">Santiago</option>
          <option data-latitude="4.6473" data-longitude="-74.0962" data-asl="2619">Bogota</option>
          <option data-latitude="19.4271" data-longitude="-99.1276" data-asl="2216">Ciudad de Mexico</option>
          <option data-latitude="-25.3005" data-longitude="-57.6362" data-asl="54">Asuncion</option>
          <option data-latitude="-12.0931" data-longitude="-77.0465" data-asl="107">Lima</option>
          <option data-latitude="-34.8941" data-longitude="-56.0675" data-asl="43">Montevideo</option>
        </optgroup>
        <optgroup label="Asia">
          <option data-latitude="34.5155" data-longitude="69.1952" data-asl="1807">Kabul</option>
          <option data-latitude="23.7106" data-longitude="90.3978" data-asl="3">Dhaka</option>
          <option data-latitude="39.9056" data-longitude="116.3958" data-asl="63">Peking</option>
          <option data-latitude="41.7010" data-longitude="44.7930" data-asl="451">Tiflis</option>
          <option data-latitude="28.6353" data-longitude="77.2250" data-asl="201">New Delhi</option>
          <option data-latitude="-6.1862" data-longitude="106.8063" data-asl="3">Jakarta</option>
          <option data-latitude="35.7061" data-longitude="51.4358" data-asl="1138">Teheran</option>
          <option data-latitude="33.3157" data-longitude="44.3922" data-asl="40">Baghdad</option>
          <option data-latitude="31.7857" data-longitude="35.2007" data-asl="580">Jerusalem</option>
          <option data-latitude="35.6785" data-longitude="139.6823" data-asl="17">Tokyo</option>
          <option data-latitude="3.1502" data-longitude="101.7077" data-asl="60">Kuala Lumpur</option>
          <option data-latitude="47.9138" data-longitude="106.9220" data-asl="1284">Ulan Bator</option>
          <option data-latitude="27.7058" data-longitude="85.3157" data-asl="1298">Kathmandu</option>
          <option data-latitude="1.2894" data-longitude="103.8500" data-asl="0">Singapore</option>
          <option data-latitude="37.5139" data-longitude="126.9828" data-asl="33">Seoul</option>
          <option data-latitude="39.9439" data-longitude="32.8560" data-asl="938">Ankara</option>
          <option data-latitude="24.4764" data-longitude="54.3705" data-asl="13">Abu Dhabi</option>
        </optgroup>
        <optgroup label="Africa">
          <option data-latitude="36.7755" data-longitude="3.0597" data-asl="0">Algiers</option>
          <option data-latitude="-8.8159" data-longitude="13.2306" data-asl="6">Luanda</option>
          <option data-latitude="30.0571" data-longitude="31.2272" data-asl="22">Cairo</option>
          <option data-latitude="-1.2762" data-longitude="36.7965" data-asl="1728">Nairobi</option>
          <option data-latitude="32.8830" data-longitude="13.1897" data-asl="6">Tripoli</option>
          <option data-latitude="-22.5749" data-longitude="17.0805" data-asl="1721">Windhoek</option>
          <option data-latitude="-25.7463" data-longitude="28.1876" data-asl="1271">Pretoria</option>
        </optgroup>
    </select> {" "}
    <button type="submit" className="govuk-button" data-module="govuk-button" onClick={getWeatherData}>
      {phrase["Find out"]}
    </button>
  </div>
</form>
);
}

export default GetWeather;