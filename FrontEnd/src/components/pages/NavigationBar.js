import React, { useState } from "react";
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import "./NavigationBar.css";

export default function NavigationBar() {
  const [showNavText, setShowNavText] = useState(false);

  return (
    <MDBNavbar expand="lg"  className="navbar">
      <MDBContainer fluid>
        <MDBNavbarBrand href="#">
           <h3 className="brandname"> sarasavi</h3>
        </MDBNavbarBrand>
        <MDBNavbarToggler
          type="button"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowNavText(!showNavText)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNavText}>
          <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current="page">
                <Link to="/" className="link">
                  <MDBIcon fas icon="home" /> Home
                </Link>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink>
                <Link to="/book-all" className="link">
                  {" "}
                  <i class="fas fa-book-open"></i> View Books
                </Link>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink>
                <Link to="/employees" className="link">
                  <MDBIcon fas icon="user-circle" /> Admin
                </Link>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink>
                <Link to="/create-employee" className="link">
                  {" "}
                  <MDBIcon fas icon="user-circle" /> Student 
                </Link>
              </MDBNavbarLink>
            </MDBNavbarItem>
          
          </MDBNavbarNav>
        
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}

