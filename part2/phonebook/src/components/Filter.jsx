const Filter = ({filter, changeFilter}) => {

  return (
    <form>
      <span>filter shown with </span>
      <input value={filter} onChange={e => changeFilter(e.target.value)} />
    </form>
  )
}

export default Filter