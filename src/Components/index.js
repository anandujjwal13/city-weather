import axios from 'axios';
const APIKEY = '24389f2755e4e792eea1093e35bb68d9';
const rootUri = `http://api.openweathermap.org/data/2.5/forecast?appid=${APIKEY}&units=metric&q=`;
export function fetchWeather(city) {
  const countryCode = 'in';
  const uri = `${rootUri}${city},${countryCode}`;
  const request = axios.get(uri);
  return request
}
