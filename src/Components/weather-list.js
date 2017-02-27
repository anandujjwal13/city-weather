import React from 'react';
import Chart from './chart';

const renderWeather = (cityData) => {
    const temps = cityData.list.map(listItem => listItem.main.temp);
    const press = cityData.list.map(listItem => listItem.main.pressure);
    const hums = cityData.list.map(listItem => listItem.main.humidity);
    return (
      <tr key={cityData.city.name} >
        <td>{cityData.city.name}</td>
        <td><Chart data={temps} color="red" units="C" /></td>
        <td><Chart data={press} color="black" units="hPa" /></td>
        <td><Chart data={hums} color="blue" units="%" /></td>
      </tr>
    )
  }
 export default ({weather}) => {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature(C)</th>
            <th>Pressure(hPa)</th>
            <th>Humidity(%)</th>
          </tr>
        </thead>
        <tbody>
          {weather.map(renderWeather)}
        </tbody>
      </table>
    );
  }


