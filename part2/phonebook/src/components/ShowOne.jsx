const ShowOne = ({person, handleRemove}) => {
  return (
      <div key={person.name}>
        {`${person.name} ${person.number}`}
        <button type="button" onClick={() => handleRemove(person)}>delete</button>
      </div>
  )
}

export default ShowOne