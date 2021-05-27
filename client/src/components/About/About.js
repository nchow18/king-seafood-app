import React from 'react';
import '../../css/About.css';
import { Link } from 'react-router-dom'

function AboutSection() {
  return (
    <>
      <div className="about-container">
        <div className="about-left-container">
          <span>HELP & FAQ</span>
        </div>
        <div className="about-right-container">
          <div className="row">
            <Link to="/"><i class="fab fa-facebook about-icon"></i></Link>
            <Link to="/"><i class="fab fa-instagram about-icon"></i></Link>
          </div>

        </div>
      </div>
    </>
  )
}

export default AboutSection;