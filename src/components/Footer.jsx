import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div>
      <div className="container">
  <footer className="py-3 my-4">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
      <li className="nav-item "><Link to='/' className="nav-link px-2 text-white">Home</Link></li>
      <li className="nav-item"><Link to='/Education' className="nav-link px-2 text-white">Education</Link></li>
      <li className="nav-item"><Link to='/Skills' className="nav-link px-2 text-white">Skills</Link></li>
      <li className="nav-item"><Link to='/Projects' className="nav-link px-2 text-white">Projects</Link></li>
      <li className="nav-item"><Link to='/Contact' className="nav-link px-2 text-white">Contact</Link></li>
    </ul>
    <p className="text-center text-white">© 2024 Company, Inc</p>
  </footer>
</div>

<div className='text-center '><button className='bi bi-arrow-up text-white'><a href="#" className='text-white text-decoration-none'>Move on top</a></button></div>
    </div>
  )
}
