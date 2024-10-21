import React from 'react'
import Header from './Header'
import { FaHtml5 } from "react-icons/fa";
import { SiCsswizardry } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
export default function Skills() {
  return (
    <div>
    
    <Header />

    <div className="bg-gray-900 animate__animated animate__fadeInDown">
         
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-400 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="df31b9f6-a505-42f8-af91-d2b7c3218e5c"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#df31b9f6-a505-42f8-af91-d2b7c3218e5c)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">The</span>
          </span>{' '}
            All Details about my skills and knowlage
        </h2>
        <p className="text-base text-gray-400 md:text-lg">
          I good knowlage about frontend & Backend
        </p>
      </div>
      
      <div className="grid gap-8 row-gap-8 lg:grid-cols-3">
      <div
  className="rounded-lg border border-gray-300 bg-gray-800 p-4 shadow-sm transition hover:shadow-lg sm:p-6 hover:bg-gray-900 hover:scale-105 transform duration-300 ease-in-out"
>
        <div className="sm:text-center">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
          <div>
      <FaHtml5 className="w-12 h-12 text-deep-purple-accent-400 sm:w-20 sm:h-20" />
    </div>
          </div>
          <h6 className="mb-2 font-semibold leading-5 text-gray-200">HTML</h6>
          <p className="max-w-md mb-3 text-sm text-gray-200 sm:mx-auto">
            I have good knowlage about Html for creating structure of wep application & blue Prient
          </p>
          <p className='text-gray-200'>Knowlage : <b>90%</b></p>
         
        </div>
        </div>
        <div
  className="rounded-lg border border-gray-300 bg-gray-800 p-4 shadow-sm transition hover:shadow-lg sm:p-6 hover:bg-gray-900 hover:scale-105 transform duration-300 ease-in-out"
>
        <div className="sm:text-center">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
          <div>
      <SiCsswizardry className="w-12 h-12 text-deep-purple-accent-400 sm:w-20 sm:h-20" />
    </div>
          </div>
          <h6 className="mb-2 font-semibold leading-5 text-gray-200">CSS</h6>
          <p className="max-w-md mb-3 text-sm text-gray-200 sm:mx-auto">
           CSS it is very help ful to design looks good & handle our web page
          </p>
          <p className='text-gray-200'>Knowlage : <b>80%</b></p>         
        </div>
        </div>

        {/* <div className="sm:text-center">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
          <IoLogoJavascript className="w-12 h-12 text-deep-purple-accent-400 sm:w-20 sm:h-20" />
          </div>
          <h6 className="mb-2 font-semibold leading-5">JavaScript</h6>
          <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
           JavaScript it is help manage to event triggers & it helpful intract with dom mauapuation
          </p>
          <p>Knowlage : <b>70%</b></p> */}




         {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}

<div
  className="rounded-lg border border-gray-300 bg-gray-800 p-4 shadow-sm transition hover:shadow-lg sm:p-6 hover:bg-gray-900 hover:scale-105 transform duration-300 ease-in-out"
>
  <div className="sm:text-center">
    <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
      <IoLogoJavascript className="w-12 h-12 text-deep-purple-accent-400 sm:w-20 sm:h-20" />
    </div>
    <h6 className="mb-2 font-semibold leading-5 text-white">JavaScript</h6>
    <p className="max-w-md mb-3 text-sm text-gray-200 sm:mx-auto">
      JavaScript helps manage event triggers and interact with DOM manipulation.
    </p>
    <p className="text-white">Knowledge: <b>70%</b></p>
  </div>
</div>


      </div>
    </div>




    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-8 row-gap-8 lg:grid-cols-3">
      <div
  className="rounded-lg border border-gray-300 bg-gray-800 p-4 shadow-sm transition hover:shadow-lg sm:p-6 hover:bg-gray-900 hover:scale-105 transform duration-300 ease-in-out"
>
        <div className="sm:text-center">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
          <div>
          <FaBootstrap  className="w-12 h-12 text-deep-purple-accent-400 sm:w-20 sm:h-20" />
    </div>
          </div>
          <h6 className="mb-2 font-semibold leading-5 text-gray-200">Bootstrap</h6>
          <p className="max-w-md mb-3 text-sm text-gray-200 sm:mx-auto">
            It fremwork of html css to pre-liberies to use easy like model headet footer etc.
          </p>
          <p className='text-gray-200'>Knowlage : <b>80%</b></p>
         
        </div>
        </div>
        <div
  className="rounded-lg border border-gray-300 bg-gray-800 p-4 shadow-sm transition hover:shadow-lg sm:p-6 hover:bg-gray-900 hover:scale-105 transform duration-300 ease-in-out"
>
        <div className="sm:text-center">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
          <div>
      <FaReact className="w-12 h-12 text-deep-purple-accent-400 sm:w-20 sm:h-20" />
    </div>
          </div>
          <h6 className="mb-2 font-semibold leading-5 text-gray-200">React</h6>
          <p className="max-w-md mb-3 text-sm text-gray-200 sm:mx-auto">
            It base on javascript library to lelp resuae of components to easy to handle dont write more just reuse of react.
          </p>
          <p className='text-gray-200'>Knowlage : <b>70%</b></p>
         
        </div>
        </div>
        <div
  className="rounded-lg border border-gray-300 bg-gray-800 p-4 shadow-sm transition hover:shadow-lg sm:p-6 hover:bg-gray-900 hover:scale-105 transform duration-300 ease-in-out"
>
        <div className="sm:text-center">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
          <RiTailwindCssFill className="w-12 h-12 text-deep-purple-accent-400 sm:w-20 sm:h-20" />
          </div>
          <h6 className="mb-2 font-semibold leading-5 text-gray-200">TailwindCSS</h6>
          <p className="max-w-md mb-3 text-sm text-gray-200 sm:mx-auto">
            It is very help ful for making responsive pages in inline handle css more benfit to use and handle.
          </p>
          <p className='text-gray-200'>Knowlage : <b>50%</b></p>
         
        </div>
        </div>
      </div>

    </div>




    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-8 row-gap-8 lg:grid-cols-3">
      <div
  className="rounded-lg border border-gray-300 bg-gray-800 p-4 shadow-sm transition hover:shadow-lg sm:p-6 hover:bg-gray-900 hover:scale-105 transform duration-300 ease-in-out"
>
        <div className="sm:text-center">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
          <div>
          <FaNode  className="w-12 h-12 text-deep-purple-accent-400 sm:w-20 sm:h-20" />
    </div>
          </div>
          <h6 className="mb-2 font-semibold leading-5 text-white">NodeJS</h6>
          <p className="max-w-md mb-3 text-sm text-gray-200 sm:mx-auto">
           It can be helpful connect to server side javascript to help of nodejs and database also handle.
          </p>
          <p className='text-gray-200'>Knowlage : <b>60%</b></p>
        </div>
        </div>
        <div
  className="rounded-lg border border-gray-300 bg-gray-800 p-4 shadow-sm transition hover:shadow-lg sm:p-6 hover:bg-gray-900 hover:scale-105 transform duration-300 ease-in-out"
>
        <div className="sm:text-center">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
          <div>
      <SiExpress className="w-12 h-12 text-deep-purple-accent-400 sm:w-20 sm:h-20" />
    </div>
          </div>
          <h6 className="mb-2 font-semibold leading-5 text-white">ExpressJS</h6>
          <p className="max-w-md mb-3 text-sm text-gray-200 sm:mx-auto">
           It is middler ware of nodejs to help to hand connnect backend to fronted.
          </p>
          <p className='text-gray-200'>Knowlage : <b>60%</b></p>
          
         
        </div>
        </div>
        <div
  className="rounded-lg border border-gray-300 bg-gray-800 p-4 shadow-sm transition hover:shadow-lg sm:p-6 hover:bg-gray-900 hover:scale-105 transform duration-300 ease-in-out"
>
        <div className="sm:text-center">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
          <DiMongodb className="w-12 h-12 text-deep-purple-accent-400 sm:w-20 sm:h-20" />
          </div>
          <h6 className="mb-2 font-semibold leading-5 text-white">MongoDB</h6>
          <p className="max-w-md mb-3 text-sm text-gray-200 sm:mx-auto">
            It nosql database to easy handle atals and campuse have drevers like mongodb and mongoose
          </p>
          <p className='text-gray-200'>Knowlage : <b>60%</b></p>
        </div>
        </div>
      </div>

    </div>
      



    </div> 

    </div>
  )
}
