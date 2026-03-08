const ShowCountry = ({country, weather}) => {
  return (
    <div key={country.cca2}>
      <h1>{country.name.common}</h1>
      <div>{`Capital: ${country.capital}`}</div>
      <div>{`Area: ${country.area}`}</div>
      <h2>Lenguages</h2>
      <ul>
      {Object.keys(country.languages).map(language => <li key={language}>{country.languages[language]}</li>)}
      </ul>
      <img src={country.flags.png} alt={country.flags.alt} />
      <h2>Weather in {country.capital}</h2>
      {weather && <div>Temperature: {weather.temp_c}</div>}
      {weather && <img src={weather.condition.icon} />}
      {weather && <div>Wind: {weather.wind_kph}</div>}
    </div>
  )
}

export default ShowCountry