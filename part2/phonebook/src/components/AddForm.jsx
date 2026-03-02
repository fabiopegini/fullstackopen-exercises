const AddForm = ({handleSubmit, newName, changeNewName, newNumber, changeNewNumber}) => {

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a new person</h2>
      <div>
        name: <input value={newName} onChange={e => changeNewName(e.target.value)}/>
      </div>
      <div>
        number: <input value={newNumber} onChange={e => changeNewNumber(e.target.value)}/>
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default AddForm