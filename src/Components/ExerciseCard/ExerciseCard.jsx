import React from 'react'
import { Link } from 'react-router-dom'

const ExerciseCard = ({ exercise }) => {
  return (
    <div className='h-25' style={{ borderTop:'solid 4px #ffa9a9', marginTop:'20px'}}>
        <Link className='' to={`/exercise/${exercise.id}`}  >
            <img src={exercise.gifUrl} alt={exercise.name} loading='lazy' style={{height:'250px'}} />
            <div className='' style={{textAlign:'center'}}>
              <button className='btn' style={{ color: '#fff', background: '#ffa9a9', textTransform: 'capitalize', borderRadius: '20px', }}>{exercise.bodyPart}</button>
              <button className='btn m-3' style={{ color: '#fff', background: '#fcc757', textTransform: 'capitalize', borderRadius: '20px', }}>{exercise.target}</button>
            </div>
            <p style={{ color:'#000', fontWeight:'bold', textTransform:'capitalize', textDecorationLine:'none', textAlign:'center'}}>{exercise.name}</p>
        </Link>
    </div>
  )
}

export default ExerciseCard
