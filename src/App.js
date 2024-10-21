import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects'
import Contact from './components/Contact';
import Dash from './components/Dash';
import ProjectDash from './components/ProjectDash';
import AboutMe from './components/AboutMe';

function App() {
  return (
   <BrowserRouter>
   <Routes>
     <Route path="/" element={<Home />} />
     <Route path="Education" element={<Education />}/>
     <Route path='Skills' element={<Skills />} />
     <Route path='Projects' element={<Projects />} />
     <Route path='Contact' element={<Contact />} />
     <Route path='Dash' element={<Dash/>} />
     <Route path='ProjectDash' element={<ProjectDash />} />
     <Route path='AboutMe' element={<AboutMe />} />
   </Routes>
   </BrowserRouter>
  )
}

export default App;
