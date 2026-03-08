import { useEffect, useState } from 'react'
import axios from "axios"

function App() {
  const [search, setSearch] = useState("")
  const [countries, setCountries] = useState([])
  const [filteredCoutries, setFilteredCountries] = useState([])
  const [searchMsg, setSearchMsg] = useState("")
  // const [countryInfo, setCountryInfo] = useState({})

  useEffect(() => {
      axios.get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
      .then(res => {
        setCountries(res.data)
      })
      .catch(() => console.error("Error fetching data"))
  }, [])

  const handleSearch = (ev) => {
    const newSearch = ev.target.value
    setSearch(newSearch)

    if(newSearch === "") {
      setSearchMsg("")
      setFilteredCountries([])
      return
    }

    const newFilteredCountries = countries.filter(country => country.name.common.toLowerCase().includes(newSearch.toLowerCase()))

    if(newFilteredCountries.length < 1) {
      setSearchMsg("No matches")
      setFilteredCountries([])
      return
    }
    
    if(newFilteredCountries.length > 10) {
      setSearchMsg("Too many matches, use a more specific name")
      setFilteredCountries([])
      return
    }

    setSearchMsg("")
    setFilteredCountries(newFilteredCountries)
    return
  }

  return (
    <div>
      <form>
        <input placeholder="Search a country" value={search} onChange={(e) => handleSearch(e)}/>
        {searchMsg ? <div>{searchMsg}</div> : null}
      </form>
      <div>
        {filteredCoutries.map(country => <div key={country.cca2}>{country.name.common}</div>)}
      </div>
      {filteredCoutries.length === 1 && (
        <div key={filteredCoutries[0].cca2}>
          <h1>{filteredCoutries[0].name.common}</h1>
          <div>{`Capital: ${filteredCoutries[0].capital}`}</div>
          <div>{`Area: ${filteredCoutries[0].area}`}</div>
          <h2>Lenguages</h2>
          <ul>
            {Object.keys(filteredCoutries[0].languages).map(language => <li key={language}>{filteredCoutries[0].languages[language]}</li>)}
          </ul>
          <img src={filteredCoutries[0].flags.png} alt={filteredCoutries[0].flags.alt} />
        </div>
        )
      }
    </div>
  )
}

export default App
