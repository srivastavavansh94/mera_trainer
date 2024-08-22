import React from 'react'
import { Link } from 'react-router-dom'
import bannerImg from '../../assets/nlgog.png'
// import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link to='/' className="navbar-brand"><img src={bannerImg} alt="" className='navbar-logo' style={{width:"80px", height:"auto"}} /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon "></span>
        </button>
    <div className="collapse navbar-collapse mx-5" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item mx-3">
          <Link to='/' className="nav-link active" >Home</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#exercises">Exercises</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar
