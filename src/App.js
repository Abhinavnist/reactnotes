import React, { useState } from "react"
import GoalList from "./components/GoalList/GoalList"
import "./App.css"
import "./components/NewGoal/NewGoal"
import NewGoal from "./components/NewGoal/NewGoal"

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    { id: "cg1", text: "here you can" },
    { id: "cg2", text: "Anything what you wnat" },
    { id: "cg3", text: "I just triying to refresh all the react main topic" },
  ])

  const addNewGoalHandler = (NewGoal) => {
    setCourseGoals(courseGoals.concat(NewGoal))
  }
  return (
    <div className="course-goals">
      <h2>Course Goals</h2>
      <NewGoal onAddGoal={addNewGoalHandler} />
      <GoalList goals={courseGoals} />
    </div>
  ) //React.createElement('h1', {title: 'This works'}, .....})
}

export default App
