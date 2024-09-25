import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import '../../App.css'
import img from "../../assenst/logo1.png"
import './Nav.css'

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light alice-regular" style={navbarStyle}>
        <div class="container-fluid" style={{ marginLeft: "70px" }}>
        <a class="navbar-brand alice-regular" href="#">
  <span className="navbar-text"style={{fontWeight:"30px",fontSize:"30px"}}>Grazia Stones</span>
</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent" style={{ marginTop: "11px", marginLeft:"720px" }}>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">About Us</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link" href="#" id="navbarDropdown">
                  Dropdown
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown" >
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link " href="#">Disabled</a>
              </li>
            </ul>
            {/* <div className="social me-5">
              <div className="row" style={{ color: "white" }}>
                <div className="col" style={{ width: "50px", height: "50px" }}>
                  <FontAwesomeIcon icon={faInstagram} />
                </div>
                <div className="col" style={{ width: "50px", height: "50px" }}>
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </nav>
    </>
  );
};

// Custom styles for the navbar and its elements
const navbarStyle = {
  // boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  backgroundColor: "rgba(255,255,255,0.4)", // Make the navbar background transparent
  // backdropFilter: "blur(10px)",
  color: "black",  // Add blur effect if needed
  position: "fixed",              // Fix the navbar at the top
  top: 0,                         // Align at the top
  width: "100%",                  // Full-width navbar
  zIndex: 9999,
  opacity: "10px",

};

const brandStyle = {

  fontSize: "30px",
};

const linkStyle = {
  fontWeight: "bold",
};

export default Navbar;

