import React, { useState ,useEffect} from 'react'
import sachin from "../assets/Sachin.jpg";
import Resume from "../doc/Resume.pdf";
import 'animate.css';
import './dash.css'
export default function Dash() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
    <div className="bg-deep-purple-accent-700">
      <div className="px-4 py-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
          <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
            <a href="/" className="mb-6 sm:mx-auto">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-teal-accent-400">
               
              </div>
            </a>
            <div className="max-w-xl animate__animated animate__backInLeft animate__delay-1s	2s mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
               
                      
                 <span className=''>Entroduction</span>
              </h2>
              <p className="text-base a\ text-indigo-100 md:text-lg">
              I'm <b>Sachin Suralkar</b>, a methodical and well-organized person
      looking for an entry-level developer role. I hope to work for your
      organization as a part of your team to expand and explore my
      technical expertise. skilled in FrontEnd & Backend for web
      development reorganized the business.
              </p>
            </div>
            <div>
              
              <div className="App">
      
              <button
        className="btn btn-outline-light"
        onClick={openModal}
      >
        About Me
      </button>
      
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center"
        >
          <div className="bg-white p-6 rounded-lg w-1/2">
            <h2 className="text-2xl font-bold mb-4">About Me</h2>
            
            <div className="row">
              <div className="col text-start animate__animated animate__backInRight">
                <p><span className='font-semibold h4'> Name : </span>Sachin Shriram Suralkar</p>
                <p><span className='font-semibold h4'>Education : </span>BSc Computer </p>
                <p><span className='font-semibold h4'>Location : </span>Pune</p>
                <p><span className='font-semibold h4'>Linkedin : </span>https://www.linkedin.com/in/sachin-suradakar-4b2486289/</p>
               
              </div>
              <div className="col animate__animated  animate__backInLeft">
                <img className='rounded animate__animated animate__flash' src={sachin} alt="" />
              </div>
            </div>
            
            <button
              className="bg-red-500 mt-2 text-white px-4 py-2 rounded"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}

            </div>
          </div>
        </div>
      </div>
    </div>

    
   
</div>
    </>
  )
}
