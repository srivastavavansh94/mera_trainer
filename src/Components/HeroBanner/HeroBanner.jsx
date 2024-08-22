import React from 'react'
import bannerImg from '../../assets/hero.jpg'
import './HeroBanner.css'

const HeroBanner = () => {
  return (
    <div>
      <div className='heroBanner-cont d-flex flex-lg-row flex-column align-items-center'>
        <div className="heroBanner">
          <h4 className='text-danger display-5 mb-lg-4 mb-0'>The Fitness Team</h4>
          <h2 className='display-3 mb-4'>Sweat, Smile & Repeat</h2>
          <p className='lead'>Check out the most effective personalized exercises for you..</p>
          <div className='position-relative'>
            <span className='overlay-text'>EXERCISES</span> 
          </div>
        </div>
        <div className='heroBanner text-center '>
          <img src={bannerImg} alt="Banner image"  className='float-end-lg' />
        </div>
      </div>
    </div>
  )
}

export default HeroBanner
