import { useState } from "react"

const Button = ({text, handleClick}) => <button onClick={handleClick}>{text}</button>

const StatisticLine = ({text, value}) => (
  <tr>
   <td>{text}</td>
   <td>{value}</td>
  </tr>
  )

const Statistics = ({goodReviews, neutralReviews, badReviews, allReviews, averageReviews, goodPercentage}) => {
  if(allReviews === 0) return (
    <div>
      <h1>Statistics</h1>
      <p>No feedback given yet</p>
    </div>
  )

  return (
   <table>
      <h1>Statistics</h1> 
        <StatisticLine text={"good"} value={goodReviews} />
        <StatisticLine text={"neutral"} value={neutralReviews} />
        <StatisticLine text={"bad"} value={badReviews} />
        <StatisticLine text={"all"} value={allReviews} />
        <StatisticLine text={"average"} value={averageReviews} />
        <StatisticLine text={"positive"} value={goodPercentage + " %"} />
    </table>
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
    const newAllReviews = allReviews + 1
    setAllReviews(newAllReviews)
    setAverageReviews((goodReviews - badReviews + addToAverage) / (newAllReviews))
    if(addToAverage > 0) setGoodPercentage(newReviewValue * 100 / (newAllReviews))
    if(addToAverage <= 0) setGoodPercentage(goodReviews * 100 / (newAllReviews))
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
