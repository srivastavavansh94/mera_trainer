import React, { useEffect, useState } from 'react'
import DetailedExercises from '../Components/DetailedExercises/DetailedExercises'
import ExerciseVideos from '../Components/ExerciseVideos/ExerciseVideos'
import SimilarExercises from '../Components/SimilarExercises/SimilarExercises'
import { exerciseOptions, fetchData, youtubeOptions } from '../utils/FetchData'
import {useParams} from 'react-router-dom'

const ExerciseDetail = () => {

  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseDetailVideo, setExerciseDetailVideo] = useState([])
  const [targetMuscleExercise, setTargetMuscleExercise] = useState([])
  const { id } = useParams();

  useEffect(() => {
    const fetchExerciseData = async() => {

      const exerciseDetailData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`, exerciseOptions);
      setExerciseDetail(exerciseDetailData);

      const exerciseDetailVideos = await fetchData(`https://youtube-search-and-download.p.rapidapi.com/search?query=${exerciseDetailData.name}`, youtubeOptions);
      setExerciseDetailVideo(exerciseDetailVideos.contents)

      const targetMuscleExerciseData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
      setTargetMuscleExercise(targetMuscleExerciseData)
      // console.log(targetMuscleExerciseData);
      
    }
    fetchExerciseData();
  }, [id])

  return (
    <div>
      <DetailedExercises exerciseDetail={exerciseDetail} />
      <ExerciseVideos exerciseDetailVideo={exerciseDetailVideo} name={exerciseDetail.name} />
      <SimilarExercises targetMuscleExercise={targetMuscleExercise} /> 
    </div>
  )
}

export default ExerciseDetail
