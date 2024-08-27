import React from 'react'
import footer_icon from '../../assets/footer_icon.png'

const Footer = () => {
  return (
    <div>
        <div className='text-center mt-5 p-2' style={{ background: 'rgba(158,0,25,0.2)'}}>
            <img src={footer_icon} alt="Footer Icon" style={{width:'120px'}} />
            <h3 className='display-6 mb-4'>The Fitness Team </h3>
            <p>@ copyrights claimed</p>
        </div>
        
    </div>
  )
}

export default Footer
