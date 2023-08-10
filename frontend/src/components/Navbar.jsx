import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex items-center bg-slate-200'>
        <Link to='/form'>
          <button className='font-bold m-6 p-1 rounded bg-slate-900 text-white' >+ Add Form</button>
        </Link>
    </div>
  )
}

export default Navbar