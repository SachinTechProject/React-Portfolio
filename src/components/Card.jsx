import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

export default function Card({date,title,batch,lang}) {
  return (
    <div>
        
<article
  className=" rounded-xl bg-gradient-to-r   p-0.5 shadow-2xl  transition hover:bg-[length:400%_400%] hover:shadow-sm hover:border hover:[animation-duration:_4s]"
>
  <div className="rounded-[10px] bg-dark p-4 !pt-20 sm:p-6">
    <time datetime="2022-10-10" className="block text-xs text-white">  {date} </time>

    <a href="#" className='text-decoration-none'>
      <h3 className="mt-0.5 text-lg font-medium text-white ">
       {title}
      </h3>
    </a>

    <div className="mt-4 flex mb-4 flex-wrap gap-1">
      <span
        className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600"
      >
        {batch}
      </span>

      <span
        className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600"
      >
        {lang}
      </span>
    </div>
    <Link to='Education' className=' text-decoration-none '> <Button /> </Link>
  </div>
</article>
    </div>
  )
}
