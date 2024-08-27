import React, { useEffect, useState } from 'react'
import { exerciseOptions, fetchData } from '../../utils/FetchData';
import ExerciseCard from '../ExerciseCard/ExerciseCard';
import ReactPaginate from 'react-paginate'
import no_related_search from '../../assets/no_related_search.png'

const ExerciseDisplay = ({ setExercises, exercises, bodyPart, search }) => {

  const [currentPage, setCurrentPage] = useState(0);
  const exercisesPerPage = 9;

  const pageCount = Math.ceil(exercises.length / exercisesPerPage);

  const offset = currentPage * exercisesPerPage;
  const currentExercises = exercises.slice(offset, offset + exercisesPerPage);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
    window.scrollTo({ top:1200, behaviour:'smooth' })
  };

  useEffect(() => {
    const fetchClickedBodyPartData = async() => {
      let exercisesData = []

      if(bodyPart === 'all'){
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=0', exerciseOptions)
      }
      else{
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}?limit=0`, exerciseOptions)
      }
      setExercises(exercisesData);
    }
    fetchClickedBodyPartData();
  }, [bodyPart])
  
  return (
    <div id="exercises">
      <h5 className='display-6 m-5 ps-lg-5'>Showing results for {search ? search : bodyPart} Exercise</h5>
      <div className='d-flex flex-wrap justify-content-center align-items-center' style={{gap:'2%', overflowX:'hidden', whiteSpace:'nowrap'}}>
        {currentExercises.length !== 0 ? 
         currentExercises.map( (exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        )) : <div>
          <img src={no_related_search} alt="" />
          <h4 className='text-center mt-2'>Couldn't find anything related to your Search</h4>
        </div>
      }

      </div>
      { exercises.length !== 0 ? <div className='pagination-container d-flex justify-content-center mt-4'>
        <ReactPaginate  previousLabel={'<<'}
        nextLabel={'>>'}
        breakLabel={'...'}
        pageCount={pageCount}
        marginPagesDisplayed={1}
        pageRangeDisplayed={3}
        onPageChange={handlePageChange}
        containerClassName={'pagination'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-item'}
        previousLinkClassName={'page-link'}
        nextClassName={'page-item'}
        nextLinkClassName={'page-link'}
        breakClassName={'page-item'}
        breakLinkClassName={'page-link'}
        activeClassName={'active'}
         />
      </div> : <p></p>

      }
      
    </div>
  )
}

export default ExerciseDisplay
