import { useEffect, useState } from 'react'
import personService from "./services/persons.js"
import Filter from './components/Filter'
import AddForm from './components/AddForm'
import ShowAll from './components/ShowAll'

function App() {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")
  const [filter, setFilter] = useState("")

  useEffect(() => {
    personService.getAll()
    .then(allPersons => setPersons(allPersons))
  }, [])

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

    personService.create(newPerson)
    .then(returnedPerson => setPersons(persons.concat(returnedPerson)))
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
