import React from 'react'
import { Link } from 'react-router-dom'


export default function SkillSet() {
  return (
    <div>
        <div className="relative  bg-gray-900">
      <div className="absolute inset-x-0 bottom-0">
        <svg
          viewBox="0 0 224 12"
          fill="currentColor"
          className="w-full -mb-1 text-white"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
        </svg>
      </div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
          <h2 className="mb-6 font-sans text-3xl font-semibold tracking-tight text-white sm:text-4xl sm:leading-none">
          Here, I'm mention my all Skill and howmuch i have knowage about any skills 
          </h2>
          <p className="mb-6 text-base font-thin tracking-wide text-gray-300 md:text-lg">
           How much i have skillset you can check in here web developement and server side client side databsese to handle 
          </p>
          
          <p className="max-w-md mb-10 text-xs font-thin tracking-wide text-gray-500 sm:text-sm sm:mx-auto md:mb-16">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium.
          </p>
            <Link to ='/Skills' className="text-decoration-none rounded border-white hover:bg-blue-500 hover:rounded-full bi bi-arrow-right border text-white px-4 py-2 fs-4"> Skills</Link>
        </div>
      </div>
    </div>
    </div>
  )
}
