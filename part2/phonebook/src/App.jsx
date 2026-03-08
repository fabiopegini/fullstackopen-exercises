import { useEffect, useState } from 'react'
import personService from "./services/persons.js"
import Filter from './components/Filter'
import AddForm from './components/AddForm'
import ShowAll from './components/ShowAll'
import ShowMsg from './components/ShowMsg.jsx'

function App() {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")
  const [filter, setFilter] = useState("")
  const [successMsg, setSuccessMsg] = useState("")
  const [errorMsg, setErrorMsg] = useState("")

  useEffect(() => {
    personService.getAll()
    .then(allPersons => setPersons(allPersons))
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()

    if(newName.trim() === "" || newNumber.trim() === "") return

    const alreadyAdded = persons.find(person => person.name === newName)

    if(alreadyAdded) {
      const message = `${newName} is already added to phonebook, do you want to replace the old number with a new one`
      if(!window.confirm(message)) return

      const updatedPerson = {...alreadyAdded, number: newNumber}

      personService.update(updatedPerson)
      .then(updatedPerson => {
        const newPersons = persons.filter(person => person.id != updatedPerson.id )
        setPersons(newPersons.concat(updatedPerson))
        setNewName("")
        setNewNumber("")
      })

    setSuccessMsg("Modified successfully")
    setTimeout(() => setSuccessMsg(""), 5000)
      
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
    setSuccessMsg("Added successfully")
    setTimeout(() => setSuccessMsg(""), 5000)

    return
  }

  const handleRemove = (person) => {
    const message = `Delete ${person.name}?`
    if(!window.confirm(message)) return

    personService.remove(person.id)
    .then(removedPerson => {
      const newPersons = persons.filter(person => person.id != removedPerson.id)
      setPersons(newPersons)
    }).catch(() => {
      setErrorMsg(`${person.name} has already been removed from the phonebook`)
      setTimeout(() => setErrorMsg(""), 5000)
    })

    return
  }

  const filtered = filter.length === 0 ? persons : persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} changeFilter={setFilter} />
      <AddForm handleSubmit={handleSubmit} newName={newName} changeNewName={setNewName} newNumber={newNumber} changeNewNumber={setNewNumber} />
      {successMsg && <ShowMsg msg={successMsg} type={"success"}/>}
      {errorMsg && <ShowMsg msg={errorMsg} type={"error"} />}
      <ShowAll filtered={filtered} handleRemove={handleRemove} />
    </div>
  )
}

export default App
