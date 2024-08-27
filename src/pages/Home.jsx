import React from 'react'
import HeroBanner from '../Components/HeroBanner/HeroBanner'
import SearchExercise from '../Components/SearchExercise/SearchExercise'
import { useState } from 'react';
import ExerciseDisplay from '../Components/ExercisesDisplay/ExercisesDisplay'

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');
  const [search, setSearch] = useState('');

  return (
    <div>
      <HeroBanner />
      <SearchExercise setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} search={search} setSearch={setSearch} />
      <ExerciseDisplay setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} search={search} />
    </div>
  )
}

export default Home
