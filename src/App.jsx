import React from 'react'
import { Route, Routes} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from './pages/Home'
import ExerciseDetail from './pages/ExerciseDetail'
import './App.css'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
    </div>
  )
}

export default App
