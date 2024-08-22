import React, { useState } from 'react'
import { exerciseOptions, fetchData } from '../../utils/FetchData'

const SearchExercise = () => {
    
    const [search, setSearch] = useState('')
    const [data, setData] = useState('')

    const foo = (e) => {
        e.preventDefault();
        setSearch(data)
        // console.log(data);
        console.log(search);
        
        
        handleSearch()
    }

    const handleSearch = async () => {
        
        if(search){
            const newdata = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions)
            console.log(newdata);
        }
    }

  return (
    <div>
      <h2 className='mt-5 pt-5 text-center display-4'>Awesome Exercises You Should Know...</h2>
      <div className='w-1'>
      <form className='d-flex justify-content-center' style={{marginTop:"5rem"}}>
        <input type="search" value={data} className='form-control w-50' style={{borderColor:"red"}} onChange={(e) => setData(e.target.value.toLowerCase())} placeholder='Search for your Exercise'/>
        <button className='btn btn-danger' style={{width:"fit-content", }} onClick={foo} type='button' >Search</button>
      </form>
      </div>
    </div>
  )
}

export default SearchExercise
