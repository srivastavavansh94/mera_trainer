import React from 'react'
import gym_icon from '../../assets/gym_icon.png'

const BodyPart = ({ item, bodyPart, setBodyPart, setSearch}) => {

  const customStyle = {
    borderTop: bodyPart === item ? '4px solid #ff2625' : '',
    backgroundColor: '#fff',
    borderBottomLeftRadius: '20px',
    width: '200px',
    height: 'auto',
    // gap: '10px'
  }
  
  return (
    <div className="card btn align-items-center justify-content-center" onClick={() => {
      setBodyPart(item)
      setSearch('')
      window.scrollTo({ top: 1200, left: 100, behavior: 'smooth'})
      }} style={customStyle}>
      <img src={gym_icon} className="card-img-top w-25 mt-3" loading='lazy' alt={item}  />
      <div className="card-body">
        <h6 className="card-title" style={{textTransform: "capitalize"}}>{item}</h6>
      </div>
    </div> 
  )
}

export default BodyPart
