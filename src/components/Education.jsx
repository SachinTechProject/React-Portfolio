import React, { useState } from 'react'
import img1 from '../assets/10th.jpg'
import img2 from '../assets/12th.jpg'
import Header from './Header'
import { Link } from 'react-router-dom'



export default function Education() {
  const [showImg, setShowImg] = useState(false)
    function handleClick(){
       setShowImg(!showImg)
    }

  return (
   <>
   <Header/>
   <div className="px-4 animate__animated animate__zoomIn py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-6 row-gap-10 lg:grid-cols-2">
        <div className="lg:py-6 lg:pr-16">
          <div className="flex">
            <div className="flex flex-col items-center mr-4">
              <div>
                <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                  <svg
                    className="w-4 text-gray-300"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <line
                      fill="none"
                      strokeMiterlimit="10"
                      x1="12"
                      y1="2"
                      x2="12"
                      y2="22"
                    />
                    <polyline
                      fill="none"
                      strokeMiterlimit="10"
                      points="19,15 12,22 5,15"
                    />
                  </svg>
                </div>
              </div>
              <div className="w-px h-full bg-gray-300" />
            </div>
            <div className="pt-1 pb-8">
              <p className="mb-2 text-lg font-bold text-white">Step 1 <p>10th</p></p>
              <p className="text-gray-300">
              I completed my <b>10th in 2016</b> in Marathi  medium Sant Gadge Baba Amravati University.
               I got <b>77.40%</b> in 10th. I build strong foundation for my next journey
              </p>
            </div>
          </div>

          <div className="flex">
            <div className="flex flex-col items-center mr-4">
              <div>
                <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                  <svg
                    className="w-4 text-gray-300"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <line
                      fill="none"
                      strokeMiterlimit="10"
                      x1="12"
                      y1="2"
                      x2="12"
                      y2="22"
                    />
                    <polyline
                      fill="none"
                      strokeMiterlimit="10"
                      points="19,15 12,22 5,15"
                    />
                  </svg>
                </div>
              </div>
              <div className="w-px h-full bg-gray-300" />
            </div>
            <div className="pt-1 pb-8">
              <p className="mb-2 text-lg font-bold text-white">Step 2 <p>12th</p></p>
              <p className="text-gray-300">
              I completed my <b>12th Science 2018 </b> in Hindhi & English at Sant Gadge Baba Amravati University.
                I got <b>60%</b> i build strong foundation about my next joureny.
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col items-center mr-4">
              <div>
                <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                  <svg
                    className="w-4 text-gray-300"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <line
                      fill="none"
                      strokeMiterlimit="10"
                      x1="12"
                      y1="2"
                      x2="12"
                      y2="22"
                    />
                    <polyline
                      fill="none"
                      strokeMiterlimit="10"
                      points="19,15 12,22 5,15"
                    />
                  </svg>
                </div>
              </div>
              <div className="w-px h-full bg-gray-300" />
            </div>
            <div className="pt-1 pb-8">
              <p className="mb-2 text-lg font-bold text-white">Step 2 <p>ITI</p></p>
              <p className="text-gray-300">
              I did <b>ITI in Fitter 2019-21 </b>in Hindhi at Govt.IIT Nandura.
                I got <b>74%</b> 
              </p>
            </div>
          </div>

          <div className="flex">
            <div className="flex flex-col items-center mr-4">
              <div>
                <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                  <svg
                    className="w-4 text-gray-300"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <line
                      fill="none"
                      strokeMiterlimit="10"
                      x1="12"
                      y1="2"
                      x2="12"
                      y2="22"
                    />
                    <polyline
                      fill="none"
                      strokeMiterlimit="10"
                      points="19,15 12,22 5,15"
                    />
                  </svg>
                </div>
              </div>
              <div className="w-px h-full bg-gray-300" />
            </div>
            <div className="pt-1 pb-8">
              <p className="mb-2 text-lg font-bold text-white">Step 3 <p>Graduation</p></p>
              <p className="text-gray-300">
              I completed my graduation in <b> June 2024 BSC ( Computer science)</b> at Dr.Babasaheb Ambedkar Maratwada University.
              I got <b>64% </b> I developed a strong foundation in Web development (MERN Stack Developer)
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col items-center mr-4">
              
              <div className="w-px h-full bg-gray-300" />
            </div>
           
          </div>
          <div className="flex">
            <div className="flex flex-col items-center mr-4">
              <div>
                <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                  <svg
                    className="w-6 text-gray-300"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <polyline
                      fill="none"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit="10"
                      points="6,12 10,16 18,8"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="pt-1">
              <p className="mb-2 text-lg font-bold text-white">Success</p>
              <p className="text-gray-300" />
            </div>
          </div>
        </div>
        <div className="relative">
          <img
            className="inset-0 object-cover object-bottom w-full rounded shadow-lg h-96 lg:absolute lg:h-full"
            src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
          />
        </div>
      </div>
    </div>


    <div className='text-center mb-20'>
      <button onClick={handleClick} className='btn btn-outline-light bi bi-arrow-down'>{showImg ? "Hide":"Marksheets"}</button>
    </div>
    
    
    {
      showImg && (
        <div className="container ">
    <div className="row ">
      <div className="col-lg-6 col-sm-12"><img src={img1} className='w-full '  alt="10th" /></div>
      <div className="col-lg-6 col-sm-12"><img src={img2} className='w-full ' alt="10th" /></div>
    </div>
    </div>
      )
    }


   

<div className="container">
  <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div className="col-md-4 d-flex align-items-center">
     
      <span className="mb-3 mb-md-0 text-gray-200">© 2024 Company, Inc</span>
    </div>

    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li className="ms-3">
        <a className="text-blue-600" href="https://www.linkedin.com/in/sachin-suradakar-4b2486289/">
        <span className='bi bi-linkedin fs-2'></span>
        </a>
      </li>
      <li className="ms-3">
        <a className="text-gray-200 " href="https://github.com/SachinTechProject">
        <span className='bi bi-github fs-2'></span>
        </a>
      </li>
      <li className="ms-3">
        <a className="text-red-400 " href="#">
          <span className='bi bi-instagram fs-2'></span>
        </a>
      </li>
      <li className="ms-3">
        <a className="text-blue-400" href="">
          <span className='bi bi-facebook fs-2'></span>
        </a>
      </li>
    </ul>
  </footer>
</div>

<div className="container text-center "><Link to='/' className="text-gray-400 text-decoration-none">back to home</Link></div>

   </>
  )
}
