const SearchBar = ({searchMsg, search, handleSearch}) => {
    return (
    <form>
        <input placeholder="Search a country" value={search} onChange={(e) => handleSearch(e)}/>
        {searchMsg ? <div>{searchMsg}</div> : null}
      </form>
    )
}

export default SearchBar