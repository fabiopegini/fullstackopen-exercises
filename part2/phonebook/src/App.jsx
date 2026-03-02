import { useState } from 'react'

function App() {
  const [persons, setPersons] = useState([{name: "Arto Hellas"}])
  const [newName, setNewName] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    if(newName.trim() === "" ) return

    const alreadyAdded = persons.some(person => person.name === newName)

    if(alreadyAdded) {
      setNewName("")
      alert(`${newName} is already added to phonebook`)
      return
    }

    const newPerson = {
      name: newName
    }

    const newPersons = persons.concat(newPerson)
    setPersons(newPersons)
    setNewName("")
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={e => setNewName(e.target.value)}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <div key={person.name}>{person.name}</div>)}
    </div>
  )
}

export default App
