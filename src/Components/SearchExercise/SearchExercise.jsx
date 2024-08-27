import React, { useEffect, useState } from 'react'
import { exerciseOptions, fetchData } from '../../utils/FetchData'
import HorizontalScrollBar from '../HorizontalScrollBar/HorizontalScrollBar'


const SearchExercise = ({ setExercises, bodyPart, setBodyPart, search, setSearch}) => {
    
    const [bodyParts, setBodyParts] = useState([]);

    useEffect(() => {
      const startingBodyPart = async () => {
        const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

        setBodyParts(['all', ...bodyPartsData]);
        
      }
      startingBodyPart();
      
    }, []);

    const handleSearch = async (e) => {
        e.preventDefault();
        if(search){
          console.log(search);
          const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=0', exerciseOptions)
          const searchedExercises = exerciseData.filter(
            (item) => item.name.toLowerCase().includes(search)
            || item.target.toLowerCase().includes(search)
            || item.bodyPart.toLowerCase().includes(search)
            || item.equipment.toLowerCase().includes(search)
          );
          
          setExercises(searchedExercises);
          window.scrollTo({top:1200, behavior:'smooth'})
          
        }
    }

  return (
    <div>
      <div>
        <h2 className='mt-5 pt-5 text-center display-4'>Awesome Exercises You Should Know...</h2>
        <div className='w-1'>
        <form className='d-flex justify-content-center' onSubmit={handleSearch} style={{marginTop:"5rem"}}>
          <input type="search" value={search} className='form-control w-50' style={{borderColor:"red"}} onChange={(e) => setSearch(e.target.value.toLowerCase())} placeholder='Search for your Exercise'/>
          <button className='btn btn-danger' style={{width:"fit-content", }}  type='submit' >Search</button>
        </form>
        </div>
      </div>
      <div className='position-relative'><HorizontalScrollBar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts setSearch={setSearch} /></div>
    </div>
  )
}

export default SearchExercise
