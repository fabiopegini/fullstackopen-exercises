import { useState } from "react"

const Button = ({text, handleClick}) => <button onClick={handleClick}>{text}</button>

const Display = ({text, number}) => <p>{text + " " + number}</p>

const App = () => {
  const [goodReviews, setGoodReviews] = useState(0)
  const [neutralReviews, setNeutralReviews] = useState(0)
  const [badReviews, setBadReviews] = useState(0)

  return (
    <>
      <div>
        <h1>Give feedback</h1>
        <Button text={"bad"} handleClick={() => setBadReviews(badReviews + 1)} />
        <Button text={"neutral"} handleClick={() => setNeutralReviews(neutralReviews + 1)} />
        <Button text={"good"} handleClick={() => setGoodReviews(goodReviews + 1)} />
      </div>
      <div>
        <h1>Statistics</h1>
        <Display text={"good"} number={goodReviews} />
        <Display text={"neutral"} number={neutralReviews} />
        <Display text={"bad"} number={badReviews} />
      </div>
  </>
  )
}

export default App
