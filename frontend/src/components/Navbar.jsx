import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
   
    <nav className="bg-blue-500 p-4 flex justify-between items-center shadow">
      <div className="flex items-center">
       <a href="#" className="text-white font-bold mr-4">Home</a>
       <a href="#" className="text-white">About</a>
      </div>

      <div className="flex items-center">
       <Link to='/form'>
        <button className="bg-white text-blue-500 py-2 px-4 rounded-md hover:bg-blue-100">Add Form</button>
       </Link>
      </div>

      <div className="flex items-center">
       <a href="#" className="text-white">Contact</a>
      </div>
    </nav>

  )
}

export default Navbar