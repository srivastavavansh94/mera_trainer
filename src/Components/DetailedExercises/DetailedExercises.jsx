import React from 'react'
import muscle from '../../assets/muscle.png'

const DetailedExercises = ({ exerciseDetail }) => {
  return (
    <div className='d-flex flex-lg-row flex-column justify-content-center align-items-center ' style={{margin:'5% 10%', overflowX:'hidden'}}>
      <div>
        <img src={exerciseDetail.gifUrl} alt={exerciseDetail.name} loading='lazy' />
      </div>
      <div className='m-lg-5'>
        <h3 className='text-capitalize display-4'>{exerciseDetail.name}</h3>
        <p className='mt-4 bold'>Exercises keep you Strong. {exerciseDetail.name} is one of the 
            best exercise to target your {exerciseDetail.target}. It will help you 
            improve your muscle and gain energy.</p>
       
            <div className='d-flex mt-5'>
                <div style={{background:'#ffa9a9', width:'60px', height:'60px', textAlign:'center', alignContent:'center', borderRadius:'50%'}}>
                    <img src={muscle} alt="" style={{ width:'40px', height:'40px'}}/>
                </div>
                <h5 className='text-capitalize mt-3 ms-4'>{exerciseDetail.bodyPart}</h5>
            </div>
            <div className='d-flex mt-5'>
                <div style={{background:'#ffa9a9', width:'60px', height:'60px', textAlign:'center', alignContent:'center', borderRadius:'50%'}}>
                    <img src={muscle} alt="" style={{ width:'40px', height:'40px'}}/>
                </div>
                <h5 className='text-capitalize mt-3 ms-4'>{exerciseDetail.target}</h5>
            </div>
            <div className='d-flex mt-5'>
                <div style={{background:'#ffa9a9', width:'60px', height:'60px', textAlign:'center', alignContent:'center', borderRadius:'50%'}}>
                    <img src={muscle} alt="" style={{ width:'40px', height:'40px'}}/>
                </div>
                <h5 className='text-capitalize mt-3 ms-4'>{exerciseDetail.equipment}</h5>
            </div>
      </div>
    </div>
  )
}

export default DetailedExercises
