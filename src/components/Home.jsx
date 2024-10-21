import React, { useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import Card from "./Card";
import sachin from "../assets/Sachin.jpg";
import Resume from "../doc/Resume.pdf";
import SkillSet from "./SkillSet";
import Footer from "./Footer";
import Dash from "./Dash";
import ProjectDash from "./ProjectDash";

export default function Home() {
  return (
    <>
      <Header />

      <div className="">
        <Dash />
      </div>

      {/* <div className="">
      
      <div className="relative  flex flex-col-reverse py-16 lg:py-0 lg:flex-col">
        <div className="w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:py-20 lg:max-w-screen-xl">
          <div className="mb-0 lg:max-w-lg lg:pr-8 xl:pr-6">
            <h2 className="text-white">Hello, I'm Sachin Suralkar</h2>
            <h3 className="text-red-700">
              &nbsp; &nbsp; &nbsp; MERN Stack Developer
            </h3>
            <p className="mb-4 text-start text-gray-400 md:text-lg md:text-center">
              I'm Sachin Suralkar, a methodical and well-organized person
              looking for an entry-level developer role. I hope to work for your
              organization as a part of your team to expand and explore my
              technical expertise. skilled in FrontEnd & Backend for web
              development reorganized the business.
            </p>
            <div className="mb-3 text-center md:mb-16 lg:mb-20">
              <a
                href={Resume}
                className="inline-flex bg-slate-100 items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-dark text-decoration-none transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >
                My CV
              </a>

              <button
                type="button"
                className="inline-flex bg-slate-100 ml-2 items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-black text-decoration-none transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                data-bs-toggle="modal" data-bs-target="#exampleModal">
                About Me </button>
            </div>

            <div
              className="modal fade "
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content ">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                      About Me
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <div className="row">
                      <div className="col">
                        <h2>Sachin Shriram Suralkar</h2>
                        <div className="text-start">
                          <p className=" pt-2">
                            Birth of date : <b>03/06/2000</b>{" "}
                          </p>
                          <p>
                            Graduaction : <b>Bsc Computer Science 2024</b>
                          </p>
                          <p>
                            Hobbies : <b>Swimming, Music, Traviling</b>
                          </p>
                          <p>
                            Current Location : <b>Pune</b>
                        
                          </p>
                          <p>
                              Mobile No : <b>9579095930</b>
                            </p>
                          <p>
                            I am a quick learner, dedicated, and passionate
                            about continuous improvement. I look forward to
                            starting my career and making a positive impact in a
                            dynamic and growth-oriented company.
                          </p>
                        </div>
                      </div>
                      <div className="col">
                        <img
                          src={sachin}
                          className="rounded-md shadow-slate-800 "
                          alt=""/>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="mb-2 text-sm text-gray-600 md:mb-2">
                Follow us
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <a
                    href="https://www.linkedin.com/in/sachin-suradakar-4b2486289/"
                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    <span className="bi bi-linkedin fs-2"></span>
                  </a>
                </div>
                <div className="flex items-center">
                  <a
                    href="https://www.instagram.com/sachinsuradakar77/?igsh=MWowNzhoOTVweXJs"
                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    <span className="bi bi-instagram fs-2"></span>
                  </a>
                </div>
                <div className="flex items-center">
                  <a
                    href="/"
                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    <span className="bi bi-facebook fs-2"></span>
                  </a>
                </div>
                <div className="flex items-center">
                  <a
                    href="https://github.com/SachinTechProject"
                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    <span className="bi bi-github fs-2"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="inset-y-0   top-10 right-0  w-full max-w-xl px-4 mx-auto mb-6 md:px-0 lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
          <img
            className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-sm"
            src="https://plus.unsplash.com/premium_photo-1720287601920-ee8c503af775?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
      </div>

      </div> */}





      <div className="container relative">
       
        <div className="row ">
          <div className="col-lg-4 col-sm-12 md:gap-2">
            <Card
              date="june 2015"
              lang="Marathi"
              batch="10th"
              title=" I complate 10th  madyamik vidyalay javala bajar in near to my village "
            />
          </div>
          <div className="col-lg-4 col-sm-12 md:gap-2">
            <Card
              date="june 2018"
              lang="Science"
              batch="12th"
              title="I complate my 12th in vasnta dev kabar vadner bholji nore info click"
            />
          </div>
          <div className="col-lg-4  col-sm-12 md:gap-2">
            <Card
              date="june 2024"
              lang="Computer"
              batch="BSc"
              title="I complate my graduaction in 2024 in marathavada university "
            />
          </div>
        </div>
      </div>

      <div className="container-fluid mt-10">
        <SkillSet />
      </div>
      
      <div className="container-fluid mt-10">
        <ProjectDash />
      </div>
      

      <div>
        <Footer />
      </div>
    </>
  );
}






















// import React, { useState } from "react";
// import Header from "./Header";
// import { Link } from "react-router-dom";
// import Card from "./Card";
// import sachin from "../assets/Sachin.jpg";
// import Resume from "../doc/Resume.pdf";
// import SkillSet from "./SkillSet";

// export default function Home() {
//   return (
//     <>
//       <Header />

//       <div className="relative  flex flex-col-reverse py-16 lg:py-0 lg:flex-col">
//         <div className="w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:py-20 lg:max-w-screen-xl">
//           <div className="mb-0 lg:max-w-lg lg:pr-8 xl:pr-6">
//             <h2>Hello, I'm Sachin Suralkar</h2>
//             <h3 className="text-red-700">
//               &nbsp; &nbsp; &nbsp; MERN Stack Developer
//             </h3>
//             <p className="mb-4 text-start text-gray-700 md:text-lg md:text-center">
//               I'm Sachin Suralkar, a methodical and well-organized person
//               looking for an entry-level developer role. I hope to work for your
//               organization as a part of your team to expand and explore my
//               technical expertise. skilled in FrontEnd & Backend for web
//               development reorganized the business.
//             </p>
//             <div className="mb-3 text-center md:mb-16 lg:mb-20">
//               <a
//                 href={Resume}
//                 className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-black text-decoration-none transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
//               >
//                 My CV
//               </a>

//               <button
//                 type="button"
//                 className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-black text-decoration-none transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
//                 data-bs-toggle="modal" data-bs-target="#exampleModal">
//                 About Me </button>
//             </div>

//             <div
//               className="modal fade"
//               id="exampleModal"
//               tabindex="-1"
//               aria-labelledby="exampleModalLabel"
//               aria-hidden="true">
//               <div className="modal-dialog modal-dialog-centered modal-lg">
//                 <div className="modal-content">
//                   <div className="modal-header">
//                     <h1 className="modal-title fs-5" id="exampleModalLabel">
//                       About Me
//                     </h1>
//                     <button
//                       type="button"
//                       className="btn-close"
//                       data-bs-dismiss="modal"
//                       aria-label="Close"
//                     ></button>
//                   </div>
//                   <div class="modal-body">
//                     <div className="row">
//                       <div className="col">
//                         <h1>Sachin Shriram Suralkar</h1>
//                         <div className="text-start">
//                           <p className=" pt-2">
//                             Birth of date : <b>03/06/2000</b>{" "}
//                           </p>
//                           <p>
//                             Graduaction : <b>Bsc Computer Science 2024</b>
//                           </p>
//                           <p>
//                             Hobbies : <b>Swimming, Music, Traviling</b>
//                           </p>
//                           <p>
//                             Current Location : <b>Pune</b>
//                             <p>
//                               Mobile No : <b>9579095930</b>
//                             </p>
//                           </p>
//                           <p>
//                             I am a quick learner, dedicated, and passionate
//                             about continuous improvement. I look forward to
//                             starting my career and making a positive impact in a
//                             dynamic and growth-oriented company.
//                           </p>
//                         </div>
//                       </div>
//                       <div className="col">
//                         <img
//                           src={sachin}
//                           className="rounded-md shadow-slate-800 "
//                           alt=""/>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="modal-footer">
//                     <button
//                       type="button"
//                       className="btn btn-secondary"
//                       data-bs-dismiss="modal"
//                     >
//                       Close
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="flex flex-col items-center">
//               <div className="mb-2 text-sm text-gray-600 md:mb-2">
//                 Follow us
//               </div>
//               <div className="flex items-center space-x-4">
//                 <div className="flex items-center">
//                   <a
//                     href="https://www.linkedin.com/in/sachin-suradakar-4b2486289/"
//                     className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
//                   >
//                     <span className="bi bi-linkedin fs-2"></span>
//                   </a>
//                 </div>
//                 <div className="flex items-center">
//                   <a
//                     href="https://www.instagram.com/sachinsuradakar77/?igsh=MWowNzhoOTVweXJs"
//                     className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
//                   >
//                     <span className="bi bi-instagram fs-2"></span>
//                   </a>
//                 </div>
//                 <div className="flex items-center">
//                   <a
//                     href="/"
//                     className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
//                   >
//                     <span className="bi bi-facebook fs-2"></span>
//                   </a>
//                 </div>
//                 <div className="flex items-center">
//                   <a
//                     href="https://github.com/SachinTechProject"
//                     className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
//                   >
//                     <span className="bi bi-github fs-2"></span>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="inset-y-0   top-10 right-0  w-full max-w-xl px-4 mx-auto mb-6 md:px-0 lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
//           <img
//             className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-sm"
//             src="https://plus.unsplash.com/premium_photo-1720287601920-ee8c503af775?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             alt=""
//           />
//         </div>
//       </div>






//       <div className="container">
       
//         <div className="row ">
//           <div className="col-lg-4 col-sm-12 col-auto">
//             <Card
//               date="june 2015"
//               lang="Marathi"
//               batch="10th"
//               title=" I complate 10th  madyamik vidyalay javala bajar in near to my village more info Click"
//             />
//           </div>
//           <div className="col-lg-4 col-sm-12 col-auto">
//             <Card
//               date="june 2018"
//               lang="Science"
//               batch="12th"
//               title="I complate my 12th in vasnta dev kabar vadner bholji nore info click"
//             />
//           </div>
//           <div className="col-lg-4  col-sm-12  col-auto">
//             <Card
//               date="june 2024"
//               lang="Computer"
//               batch="BSc"
//               title="I complate my graduaction in 2024 in marathavada university more info click"
//             />
//           </div>
//         </div>
//       </div>

//       <div className="container-fluid mt-10">
//         <SkillSet />
//       </div>
//     </>
//   );
// }
