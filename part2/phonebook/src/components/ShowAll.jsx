import ShowOne from "./ShowOne"

const ShowAll = ({filtered, handleRemove}) => {
  return (
    <div>
      <h2>Numbers</h2>
      {filtered.map(person => <ShowOne person={person} handleRemove={handleRemove} key={person.name}/>)}
    </div>
  )
}

export default ShowAll