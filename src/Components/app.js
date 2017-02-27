import React, { Component } from 'react'
import SearchBar from './search-bar'
import WeatherList from './weather-list'
import axios from 'axios'
const APIKEY = '24389f2755e4e792eea1093e35bb68d9'
const rootUri = `http://api.openweathermap.org/data/2.5/forecast?appid=${APIKEY}&units=metric&q=`

const fetchWeather = (city) => {
  const countryCode = 'in'
  const uri = `${rootUri}${city},${countryCode}`
  return axios.get(uri)
}

export default class App extends Component {
  constructor() {
    super()
    this.state = { weatherdata: []}
  }
  updateState(city) {
    fetchWeather(city)
      .then((weatherResponse) => {
        const weatherDataArray = this.state.weatherdata
        weatherDataArray.push(weatherResponse.data)
        this.setState({ weatherdata: weatherDataArray})
      }).catch((err) => {
        console.log(err)
      })
  }
  render() {
    return (
        <div>
          <SearchBar onCitySubmit={this.updateState.bind(this)} />
         <WeatherList weather={this.state.weatherdata} />
        </div>
    )
  }
}
