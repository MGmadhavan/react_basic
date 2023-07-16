
import { useState } from 'react';
import './App.css';
import GoalList from './components/GoalList';
import NewGoal from './components/NewGoal';

function App() {
  const[courseGoals,setCourseGoals] =useState([
    {id:'cg1',text:"Finish the Course"},
    {id:'cg2',text:"Learn all about the Course Main topic"},
    {id:'cg3',text:"Help other students in the Course Q&a"}
   ])


  

  const addNewGoalHandler = (newGoal)=>{
            //  setCourseGoals(courseGoals.concat(newGoal))
            setCourseGoals((prevCourseGoals)=> prevCourseGoals.concat(newGoal))
  }
  
  return (
    <div >
      <h1 className='text-3xl text-center'>Course Goals</h1>
     <NewGoal onAddGoal={addNewGoalHandler}/>
      <GoalList goals={courseGoals}/>
    </div>
  );
}

export default App;
