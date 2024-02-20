import React from 'react'
import { Link } from 'react-router-dom'
import about_image from '.././../assets/images/aboutus/aboutus.avif'
import about_Icon1 from '../../assets/images/aboutus/about-icon-1.png'
import about_Icon2 from '../../assets/images/aboutus/about-icon-2.png'

function About() {
  return (
    <div>
  
      <div className="common-outer">
        <div className="common-content">
          <div className="title">About</div>
          <div> <Link to="/">Home</Link> <span><i class="fas fa-angle-right"></i></span> About us</div>
        </div>
      </div>

      <div className="about-outer">
        <div className="container">
          <div className="about-inner">
            <div className="row about-item">
              <div className="col-lg-6 col-md-6 col-sm-12 item">
                <div className="image-block">
                  <img src={about_image} alt="aboutimage" />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 item">
                <div className="main-title"><span>&#9763;</span>About Us</div>
                <div className="sub-title">
                  We Care Organic And Food Products Growth</div>
                <div className="content">Our company is dedicated to providing high-quality
                  Agriculture, Spices,Dryfruits . We take pride in sourcing the
                  freshest agriculture products and ensuring that they meet
                  the highest standards of quality. Our wide range of spices
                  adds flavor and richness to your dishes, enhancing the
                  overall culinary experience. Additionally, we offer a
                  comprehensive selection of that are manufactured under
                  strict quality control measures</div>
                <div className="best-ser d-flex">
                  <div className="item d-flex align-items-center">
                    <div className="icon"><img src={about_Icon1} alt="about_icon1" /></div>
                    <div className="text">Best Quality Stand</div>
                  </div>
                  <div className="item d-flex align-items-center">
                    <div className="icon"><img src={about_Icon2} alt="about_icon2" /></div>
                    <div className="text">Nice Organic Service</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About