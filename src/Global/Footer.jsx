import React from 'react'
import { Link } from 'react-router-dom'
import Main_logo from '../assets/images/main-logo.png'

function Footer() {
  return (
    <>
      <footer>
        <div className="footer-top">
          <div className="container">
            <div className="row item">
              <div className="footer-item col-lg-4 col-md-6 col-sm-12 col-xs-12">
                <div className="logo">
                  <Link to="/"><img src={Main_logo} alt="logo" width={200} height={70} /></Link>
                </div>
                <div className="des">Energistically utilize timely method of empowerment and worldwidey niches dynamically .</div>
                <ul className="social-icon d-flex">
                  <li><Link to=""><i class="fab fa-facebook-f"></i></Link></li>
                  <li><Link to=""><i class="fab fa-twitter"></i></Link></li>
                  <li><Link to=""><i class="fab fa-instagram"></i></Link></li>
                </ul>
              </div>
              <div className="footer-item col-lg-4 col-md-6 col-sm-12 col-xs-12">
                <div className="footer-title">Categories</div>
                <ul className='footer-links'>
                  <li><Link title="Home" to="/">Home</Link></li>
                  <li><Link title="About Us" to="/about">About Us</Link></li>
                  <li><Link title="Contact Us" to="/contact">Contact Us</Link></li>
                  <li><Link title="produts" to="/products">Product</Link></li>
                </ul>
              </div>
              <div className="footer-item col-lg-4 col-md-6 col-sm-12 col-xs-12">
                <div className="footer-title">
                    Contact Us
                </div>
                <div className="f-icon d-flex align-items-center"><i class="fas fa-phone"></i><Link to="tel:+91 7016364863">+91 7016364863</Link></div>
                <div className="f-icon d-flex align-items-center"><i class="fas fa-envelope"></i><Link to="mailto:info@infinityexim.com">info@infinityexim.net</Link></div>
                <div className="f-icon d-flex align-items-center"><i class="fas fa-map-marker-alt"></i><Link>239,Meridian Business Center,lajamni chowk ,surat-394101</Link></div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-botoom">
          <div className="copyright text-center p-3">
            © Copy 2023. All Rights Reserved
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer