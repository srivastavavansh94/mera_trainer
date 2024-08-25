import React from 'react'
import HeroBanner from '../Components/HeroBanner/HeroBanner'
import SearchExercise from '../Components/SearchExercise/SearchExercise'
import { useState } from 'react';
import ExerciseDisplay from '../Components/ExercisesDisplay/ExercisesDisplay'

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');

  return (
    <div>
      <HeroBanner />
      <SearchExercise setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <ExerciseDisplay setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} />
    </div>
  )
}

export default Home
