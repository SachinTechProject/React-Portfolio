import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'

export default function Projects() {
  return (
    <>
      <div>
        <Header />
      </div>


     <div className="">
      <div className="row px-4">
         <div className="col-lg-3 py-4  col-md-6 col-sm-12">
          <div>
              <div className="card" style={{width: '19rem'}}>
                 <img src="https://i.ytimg.com/vi/SRamlIQQqxI/sddefault.jpg" class="card-img-top" alt="..."/>
                   <div className="card-body">
                      <p className="card-text">
                       <h5 className='pb-3'>React-videos</h5>
                       <a href='https://mern-stack-dun.vercel.app/' target='_blank' className='bg-blue-500  text-decoration-none text-white px-4 py-2 border-none rounded font-semibold'>See</a>
                      </p>
                   </div>
              </div>
          </div>
         </div>

         <div className="col-lg-3 py-4  col-md-6 col-sm-12">
          <div>
              <div className="card" style={{width: '19rem'}}>
                 <img src="https://cdn.calculatorsoup.com/images/thumbnails/calculators_health_bmi-calculator.png"style={{height:'14.2rem'}} class="card-img-top" alt="..."/>
                   <div className="card-body">
                      <p className="card-text">
                      <h5 className='pb-3'>React-videos</h5>
                      <a href='https://cdn.calculatorsoup.com/images/thumbnails/calculators_health_bmi-calculator.png' target='_blank' className='bg-blue-500  text-decoration-none text-white px-4 py-2 border-none rounded font-semibold'>See</a>
                      </p>
                   </div>
              </div>
          </div>
         </div>

         <div className="col-lg-3 py-4 col-md-6 col-sm-12">
         <div>
              <div className="card" style={{width: '19rem'}}>
                 <img src="https://prjdg-unstruc.s3.ca-central-1.amazonaws.com/Image/News/95270e73-59f2-40bb-a557-fc3b7ca7c740" style={{height:'14.2rem'}} class="card-img-top" alt="..."/>
                   <div className="card-body">
                      <p className="card-text">
                      <h5 className='pb-3'>React-videos</h5>
                      <a href='https://www.shutterstock.com/image-illustration/wallpaper-colors-colorful-background-color-260nw-2333674303.jpg' target='_blank' className='bg-blue-500  text-decoration-none text-white px-4 py-2 border-none rounded font-semibold'>See</a>
                      </p>
                   </div>
              </div>
          </div>
         </div>

         <div className="col-lg-3 py-4  col-md-6 col-sm-12">
         <div>
         <div className="card" style={{width: '19rem'}}>
                 <img src="https://mir-s3-cdn-cf.behance.net/projects/404/49f28e189617081.Y3JvcCwxMDA2LDc4NywxOTYsMA.jpg" style={{height:'14.2rem'}} class="card-img-top" alt="..."/>
                   <div className="card-body">
                      <p className="card-text">
                      <h5 className='pb-3'>My Portfolio</h5>
                      <a href='https://react-portfolio-pi-five.vercel.app/' target='_blank' className='bg-blue-500  text-decoration-none text-white px-4 py-2 border-none rounded font-semibold'>See</a>
                      </p>
                   </div>
              </div>
          </div>
         </div>
      </div>

      <div className="row">
         <div className="col"></div>
         <div className="col"></div>
         <div className="col"></div>
      </div>
     </div>

        
      
    </>
  )
}
