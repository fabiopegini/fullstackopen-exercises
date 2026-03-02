import ShowOne from "./ShowOne"

const ShowAll = ({filtered}) => {

  return (
    <div>
      <h2>Numbers</h2>
      {filtered.map(person => <ShowOne person={person} key={person.name}/>)}
    </div>
  )
}

export default ShowAll