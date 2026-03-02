import { useState } from 'react'

function App() {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")
  const [filter, setFilter] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    if(newName.trim() === "" || newNumber.trim() === "") return

    const alreadyAdded = persons.some(person => person.name === newName)

    if(alreadyAdded) {
      setNewName("")
      setNewNumber("")
      alert(`${newName} is already added to phonebook`)
      return
    }

    const newPerson = {
      name: newName,
      number: newNumber
    }

    const newPersons = persons.concat(newPerson)
    setPersons(newPersons)
    setNewName("")
    setNewNumber("")

    return
  }

  const showFiltered = filter.length === 0 ? persons : persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <div>filter shown with <input value={filter} onChange={e => setFilter(e.target.value)} /></div>
      <h2>Add a new person</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={e => setNewName(e.target.value)}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={e => setNewNumber(e.target.value)}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      debug: {filter}
      {showFiltered.map(person => <div key={person.name}>{`${person.name} ${person.number}`}</div>)}
    </div>
  )
}

export default App
