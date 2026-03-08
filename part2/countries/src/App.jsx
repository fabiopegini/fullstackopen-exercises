import { useEffect, useState } from 'react'
import axios from "axios"
import ShowCountry from "./components/ShowCountry"

function App() {
  const [search, setSearch] = useState("")
  const [countries, setCountries] = useState([])
  const [filteredCoutries, setFilteredCountries] = useState([])
  const [searchMsg, setSearchMsg] = useState("")
  const [selected, setSelected] = useState(null)

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
      setSelected(null)
      return
    }

    const newFilteredCountries = countries.filter(country => country.name.common.toLowerCase().includes(newSearch.toLowerCase()))

    if(newFilteredCountries.length < 1) {
      setSearchMsg("No matches")
      setFilteredCountries([])
      setSelected(null)
      return
    }
    
    if(newFilteredCountries.length > 10) {
      setSearchMsg("Too many matches, use a more specific name")
      setFilteredCountries([])
      setSelected(null)
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
        {filteredCoutries.map(country => {
          return (
            <div key={country.cca2}>
              {country.name.common + " "}
              <button onClick={() => setSelected(country)}>Show</button>
            </div>
          )
        })}
          
      </div>
      {filteredCoutries.length === 1 && <ShowCountry country={filteredCoutries[0]} />}
      {selected && <ShowCountry country={selected} />}
    </div>
  )
}

export default App
