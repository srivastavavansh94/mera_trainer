import React from 'react'
import HorizontalScrollBar from '../HorizontalScrollBar/HorizontalScrollBar'

const SimilarExercises = ({ targetMuscleExercise }) => {
  return (
    <div className=''>
      <h3 className='ms-lg-5 ms-4 mt-5'>Similar <span style={{color:'red', textTransform:'capitalize'}}>Target Muscle</span> Exercises</h3>
      <div>
        {targetMuscleExercise.length ? <HorizontalScrollBar data={targetMuscleExercise} /> : <p>None</p>}
      </div>
    </div>
  )
}

export default SimilarExercises
