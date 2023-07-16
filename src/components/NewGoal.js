import React, { useState } from "react";

const NewGoal = (props) => {
     const[enteredText,setEnteredText]=useState();
     
     const inputHandler=(e)=>{
        setEnteredText(e.target.value)
     }
    const addGoalHandler=(event)=>{
        event.preventDefault();
        
        const newGoal = ({
            id:Math.floor((Math.random()*10).toString()),
            text:enteredText
        })
       setEnteredText('')
        props.onAddGoal(newGoal);
        
    }

  return (
    <form className="m-3 text-center" onSubmit={addGoalHandler}>
      <input 
      className="form-input px-4 py-3 m-4 rounded-full" 
      type="text" 
      value={enteredText}
      onChange={inputHandler}/>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Add Goals
      </button>
    </form>
  );
};

export default NewGoal;
