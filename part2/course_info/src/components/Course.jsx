
const Header = (props) => <h2>{props.course}</h2>

const Part = (props) => (
  <p>
    {props.part.name} {props.part.exercises}
  </p>
)

const Content = (props) => (
  <div>
    {props.parts.map(part => <Part part={part} key={part.id} />)}
  </div>
)

const Total = (props) => {
  const total = props.parts.reduce((acc, part) => acc + part.exercises, 0)

  return <strong>Number of exercises {total}</strong>
}


const Course = ({course}) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts}/>
    </div>
  )
}

export default Course