const ShowCountry = ({country}) => {
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
    </div>
  )
}

export default ShowCountry