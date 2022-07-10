import React, { useState, useEffect } from "react";
import EmployeeService from "../../services/EmployeeService";
import img1 from '../assests/homecover1.png'
import img2 from '../assests/footer.png'
import img3 from '../assests/homepage.png'
import img4 from '../assests/askread.png'
//import img5 from '../assests/Events.png'

import '../pages/test/Homepage.css'
import { Card, Row, Col, Container } from "react-bootstrap";
import Badge from 'react-bootstrap/Badge';



const Homepage = () => {

  
  
     
  
  return (
    <div className='body-home'>
     <div className='main-content'>
     <div className='img1'>
      <img src={img1} alt='head-banner' className='homecover'  />  
     </div>
     <div className='second-content'>
      
     </div>
     <div className='third-content'>
      <h2 className='search-icon'>Search Any Books <i class='fas fa-search'/></h2>
     </div>
     <div className='search-bar'>
     <form class="form-inline">
    <input class="form-control mr-sm-2" type="search" placeholder="Search by book name" aria-label="Search"/>
    <button class="btn btn-success my-2 my-sm-0">Search</button>
  </form>
     </div>
     <div className='img1'>
      <img src={img3} alt='head-banner' className='homecover'  />  
     </div>
     <div className='img1'>
      <img src={img4} alt='head-banner' className='homecover'  />  
     </div>
     <div className='img1'>
      <img src={img2} alt='head-banner' className='homecover'  />  
     </div>
   </div>
    
     
    
    </div>
  )
}

export default Homepage

