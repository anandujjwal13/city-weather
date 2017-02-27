import React from 'react';
export default ({onCitySubmit}) => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const city = event.target.childNodes[0].value
        event.target.childNodes[0].value = ''
        onCitySubmit(city)
      }}
      className="input-group">
      <input placeholder="Get a five day forecast of a city"
        className="form-control" />
      <span className="input-group-btn">
        <button type="submit" className="btn btn-secondary">Search</button></span>
    </form>
  )
}

