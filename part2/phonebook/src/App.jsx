import { useState } from 'react'
import Filter from './components/Filter'
import AddForm from './components/AddForm'
import ShowAll from './components/ShowAll'

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

  const filtered = filter.length === 0 ? persons : persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} changeFilter={setFilter} />
      <AddForm handleSubmit={handleSubmit} newName={newName} changeNewName={setNewName} newNumber={newNumber} changeNewNumber={setNewNumber} />
      <ShowAll filtered={filtered} />
    </div>
  )
}

export default App
