import React from 'react'


const GoalList = (props) => {
    const goal=props.goals;
  return (
    <div>
       
      <ul className='list-none '>
        {
            goal.map((e)=>{
                return<li key={e.id} className='border-solid border-2 m-2 p-2'>{e.text}</li>
            })
        }
       </ul>
    </div>
  )
}

export default GoalList
