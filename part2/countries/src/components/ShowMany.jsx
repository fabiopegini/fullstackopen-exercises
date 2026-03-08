const ShowMany = ({filteredCoutries, setSelected}) => {
    return (
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
    )
}

export default ShowMany