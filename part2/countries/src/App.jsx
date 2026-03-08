import { useEffect, useState } from 'react'
import axios from "axios"
import ShowCountry from "./components/ShowCountry"
import SearchBar from "./components/SearchBar"
import ShowMany from "./components/ShowMany"

function App() {
  const [search, setSearch] = useState("")
  const [countries, setCountries] = useState(null)
  const [filteredCoutries, setFilteredCountries] = useState([])
  const [searchMsg, setSearchMsg] = useState("")
  const [selected, setSelected] = useState(null)
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    if(!countries) {
      axios.get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
      .then(res => {
        setCountries(res.data)
      })
      .catch(() => console.error("Error fetching data"))
    }

    if(selected) {
      axios.get(`http://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_API_KEY}&q=${selected.capital}&aqi=no`)
      .then(res => setWeather(res.data.current))
    }

    if(filteredCoutries.length === 1) {
      axios.get(`http://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_API_KEY}&q=${filteredCoutries[0].capital}&aqi=no`)
      .then(res => setWeather(res.data.current))
    }
  }, [selected, countries, filteredCoutries])

  const handleSearch = (ev) => {
    const newSearch = ev.target.value
    setSearch(newSearch)

    if(newSearch === "") {
      setSearchMsg("")
      setFilteredCountries([])
      setSelected(null)
      setWeather(null)
      return
    }

    const newFilteredCountries = countries.filter(country => country.name.common.toLowerCase().includes(newSearch.toLowerCase()))

    if(newFilteredCountries.length < 1) {
      setSearchMsg("No matches")
      setFilteredCountries([])
      setSelected(null)
      setWeather(null)
      return
    }
    
    if(newFilteredCountries.length > 10) {
      setSearchMsg("Too many matches, use a more specific name")
      setFilteredCountries([])
      setSelected(null)
      setWeather(null)
      return
    }

    setSearchMsg("")
    setFilteredCountries(newFilteredCountries)
    return
  }

  return (
    <div>
      <SearchBar searchMsg={searchMsg} search={search} handleSearch={handleSearch} />
      <ShowMany filteredCoutries={filteredCoutries} setSelected={setSelected} />
      {filteredCoutries.length === 1 && <ShowCountry country={filteredCoutries[0]} weather={weather} />}
      {selected && <ShowCountry country={selected} weather={weather} />}
    </div>
  )
}

export default App
