import { useState } from 'react'
import React  from 'react'
import {Link, NavLink} from 'react-router-dom'
export default function Header() {
  
  return (
    <div>
        <div className="container">
  <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom " >
    <Link
    
      className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
    >
      
      <Link to='/' className="fs-4 text-decoration-none text-white">PORTFOLIO</Link>
    </Link>

    <ul className="nav nav-pills">
      <li className="nav-item">
        <Link to='/'  className="nav-link fw-bold text-white" aria-current="page">
         Home
        </Link>
      </li>
      {/* <li className="nav-item">
        <Link to='/AboutMe' className="nav-link fw-bold">
          <span className=' text-white'>AboutMe</span>
        </Link>
      </li> */}
      <li className="nav-item">
        <Link to='/Education' className="nav-link fw-bold">
          <span className=' text-white'>Education</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/Skills" className="nav-link  text-white fw-bold">
          Skills
        </Link>
      </li>
      <li className="nav-item">
        <Link to='/Projects' className="nav-link fw-bold  text-white">
          Projects
        </Link>
      </li>
      <li className="nav-item">
        <Link to='/Contact' className="nav-link fw-bold  text-white">
          Contact
        </Link>
      </li>
    </ul>

  </header>
</div>

    </div>
  )
}


// import React from 'react';
// import { Link } from 'react-router-dom';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import Box from '@mui/material/Box';

// export default function Header() {
//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static" > {/* Background color */}
//         <Toolbar>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
//               PORTFOLIO
//             </Link>
//           </Typography>

//           <Button color="inherit" component={Link} to="/" sx={{ fontWeight: 'bold' }}>
//             Home
//           </Button>
//           <Button color="inherit" component={Link} to="/Education" sx={{ fontWeight: 'bold' }}>
//             Education
//           </Button>
//           <Button color="inherit" component={Link} to="/Skills" sx={{ fontWeight: 'bold' }}>
//             Skills
//           </Button>
//           <Button color="inherit" component={Link} to="/Projects" sx={{ fontWeight: 'bold' }}>
//             Projects
//           </Button>
//           <Button color="inherit" component={Link} to="/Contact" sx={{ fontWeight: 'bold' }}>
//             Contact
//           </Button>
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// }
