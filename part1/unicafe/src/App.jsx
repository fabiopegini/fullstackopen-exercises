import { useState } from "react"

const Button = ({text, handleClick}) => <button onClick={handleClick}>{text}</button>

const Display = ({text, number}) => <p>{text + " " + number}</p>

const Statistics = ({goodReviews, neutralReviews, badReviews, allReviews, averageReviews, goodPercentage}) => {
  return (
   <div>
      <h1>Statistics</h1>
      <Display text={"good"} number={goodReviews} />
      <Display text={"neutral"} number={neutralReviews} />
      <Display text={"bad"} number={badReviews} />
      <Display text={"all"} number={allReviews} />
      <Display text={"average"} number={averageReviews} />
      <Display text={"positive"} number={goodPercentage} />
    </div>
  )
}


const App = () => {
  const [goodReviews, setGoodReviews] = useState(0)
  const [neutralReviews, setNeutralReviews] = useState(0)
  const [badReviews, setBadReviews] = useState(0)
  const [allReviews, setAllReviews] = useState(0)
  const [averageReviews, setAverageReviews] = useState(0)
  const [goodPercentage, setGoodPercentage] = useState(0)
  
  const handleClick = (newReviewValue, addReview, addToAverage) => {
    addReview(newReviewValue)
    setAllReviews(allReviews + 1)
    setAverageReviews((goodReviews - badReviews + addToAverage) / (allReviews + 1))
    if(addToAverage > 0) setGoodPercentage(newReviewValue * 100 / (allReviews + 1))
    if(addToAverage <= 0) setGoodPercentage(goodReviews * 100 / (allReviews + 1))
  }

  return (
    <>
      <div>
        <h1>Give feedback</h1>
        <Button text={"bad"} handleClick={() => handleClick(badReviews + 1, setBadReviews, -1)} />
        <Button text={"neutral"} handleClick={() => handleClick(neutralReviews + 1, setNeutralReviews, 0)} />
        <Button text={"good"} handleClick={() => handleClick(goodReviews + 1, setGoodReviews, 1)} />
      </div>
      <Statistics goodReviews={goodReviews} neutralReviews={neutralReviews} badReviews={badReviews} allReviews={allReviews} averageReviews={averageReviews} goodPercentage={goodPercentage} />
  </>
  )
}

export default App
