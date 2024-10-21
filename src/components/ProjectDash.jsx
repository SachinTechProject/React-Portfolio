import React from 'react'
import { Link } from 'react-router-dom'

export default function ProjectDash() {
    return (
        <div>
            <div>
                <div className="flex flex-col px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 lg:flex-row">
                    <div className="mb-5 lg:w-1/3 lg:mb-0 lg:mr-20">
                        <h2 className="relative mb-4 font-sans text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl sm:leading-none">
                            <span className="relative inline-block">
                                <svg
                                    viewBox="0 0 52 24"
                                    fill="currentColor"
                                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                                >
                                    <defs>
                                        <pattern
                                            id="6bfa0e57-faa2-4bb2-ac0e-310782e5eb2d"
                                            x="0"
                                            y="0"
                                            width=".135"
                                            height=".30"
                                        >
                                            <circle cx="1" cy="1" r=".7" />
                                        </pattern>
                                    </defs>
                                    <rect
                                        fill="url(#6bfa0e57-faa2-4bb2-ac0e-310782e5eb2d)"
                                        width="52"
                                        height="24"
                                    />
                                </svg>
                                <span className="relative">About</span>
                            </span>{' '}
                            Projects
                        </h2>
                        <p className="mb-4 text-gray-300 lg:mb-6">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            laudantium, totam rem aperiam, eaque ipsa quae explicabo.
                        </p>
                        <Link to='/Projects'
                            className='text-decoration-none fs-5 btn btn-outline-light'
                        >
                            See more

                        </Link>
                    </div>
                    <div className="flex-grow pt-1">
                        <div className="flex items-center mb-3">
                            <span className="font-bold tracking-wide text-gray-300">
                                Categories
                            </span>
                            <span className="ml-1">
                                <svg
                                    className="w-5 h-5 mt-px text-deep-purple-accent-400"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                        strokeWidth="4"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                            </span>
                        </div>
                        <div className="">
                            <ul className="text-gray-200 flex gap-3 justify-between">
                                <li>

                                    <a href="" className="block  hover:scale-105 shadow-xl">
                                        <img
                                            alt=""
                                            src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                            className="h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72"
                                        />

                                       
                                    </a>

                                </li>
                                <li>

                                    <a href="#" className="block">
                                        <img
                                            alt=""
                                            src="https://images.unsplash.com/photo-1588515724527-074a7a56616c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
                                            className="h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72"
                                        />

                                        
                                    </a>

                                </li>

                            </ul>


                        </div>
                    </div>
                </div>
                <div className="relative">
                    <img
                        className="object-cover w-full h-56 sm:h-96"
                        src="https://images.pexels.com/photos/3184419/pexels-photo-3184419.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                        alt=""
                    />
                    <div className="absolute inset-0 bg-gray-900 bg-opacity-50" />
                </div>
            </div>
        </div>
    )
}
