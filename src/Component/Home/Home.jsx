import React from 'react'
import slider_1 from '../../assets/images/home/slider2.webp'
import slider_2 from '../../assets/images/home/slider.avif'
import about_image from '.././../assets/images/aboutus/aboutus.avif'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import our1 from '../../assets/images/home/o1.png'
import our2 from '../../assets/images/home/o2.png'
import our3 from '../../assets/images/home/o3.png'
import new_image from '.././../assets/images/home/new-food-thumb.png'
import about_Icon1 from '../../assets/images/aboutus/about-icon-1.png'
import about_Icon2 from '../../assets/images/aboutus/about-icon-2.png'
import produc1 from '../../assets/images/vehetable.png'
import produc2 from '../../assets/images/dyfruits.png'
import produc3 from '../../assets/images/spices.png'
import produc4 from '../../assets/images/herbs.png'
import ship1 from '../../assets/images/oceanship-900w.png'
import ship2 from '../../assets/images/airship-900w.png'
import ship3 from '../../assets/images/roadship-900w.png'
import { Link } from 'react-router-dom';


const Slider = {
  loop: true,
  margin: 10,
  dots: false,
  nav: false,
  autoplay: 3000,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 1
    }
  }
};


function Home() {
  return (
    <div>
      <div className="slider-outer">
        <OwlCarousel className='owl-theme' loop margin={10} nav={false} {...Slider}>
          <div className="slider-item">
            <img src={slider_2} alt="slider-1" />
            <div className="slider-content">
              <div className="main-title">The Best <span>Exporting Fresh </span> <br />Flavors Worldwide.</div>
              <div className="seb-title">
                Empowering Global Commerce with Seamless Import-Export Solutions for
                <br />Endless Opportunities and Flourishing Economies.
              </div>
            </div>
          </div>
          <div className="slider-item">
            <img src={slider_1} alt="slider-1" />
            <div className="slider-content">
              <div className="main-title">The Best <span>Export Company</span> <br />In Town</div>
              <div className="seb-title">
                One of the oldest and most reputed importers
              </div>
            </div>
          </div>
        </OwlCarousel>
      </div>
      <div className="category-outer">
        <div className="container">
          <div className="category-inner">
            <div className="section-title">
              <p>our Category</p>
              <h1>What We’re Offering</h1>
            </div>
            <div className="category-item row">
              <div className="item col-lg-4 col-md-6 col-sm-12">
                <div className="item-inner">
                  <img src={our1} alt="our1" />
                  <div className="content">Dairy Production</div>
                </div>
              </div>
              <div className="item col-lg-4 col-md-6 col-sm-12">
                <div className="item-inner">
                  <img src={our2} alt="our2" />
                  <div className="content">Organic Production</div>
                </div>
              </div>
              <div className="item col-lg-4 col-md-6 col-sm-12">
                <div className="item-inner">
                  <img src={our3} alt="our3" />
                  <div className="content">Fresh Fertilization</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="new-outer">
        <div className="container">
          <div className="new-inner">
            <div className="row new-item">
              <div className="col-lg-6 col-md-6 col-sm-12 item">
                <div className="image-block">
                  <img src={new_image} alt="aboutimage" />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 item">
                <div className="main-title"><span>&#9763;</span>New Food</div>
                <div className="sub-title">
                  All fruit products are good Qulity
                </div>
                <div className="content">
                  Holisticly transform cutting-edge benefits and distine seamlessly
                  Quickly reintermediate leveraged supply chains where confused flexible
                  e-commerce dramay trade food .</div>
                <div className="best-ser d-flex">
                  <div className="item d-flex align-items-center">
                    <div className="icon"><img src={about_Icon1} alt="about_icon1" /></div>
                    <div className="text">Global Harvest of Nuts and Vegetables</div>
                  </div>
                  <div className="item d-flex align-items-center">
                    <div className="icon"><img src={about_Icon2} alt="about_icon2" /></div>
                    <div className="text"> Nuts & Vegetables Worldwide Odyssey</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="product-outer">
        <div className="container">
          <div className="product-inner">
            <div className="section-title">
              <h1>Our Products </h1>
            </div>
            <div className="item row">
              <div className="item col-lg-3 col-md-6 col-sm-12">
                <Link to="/vegetables">
                   <div class="product-item">
                  <img src={produc1} alt="product"/>
                  <div class="content-box">
                    VEGETABLES
                  </div>
                </div>
                </Link>
               
              </div>
              <div className="item col-lg-3 col-md-6 col-sm-12">
                <Link to="/fruits&dryfruits">
                   <div class="product-item">
                  <img src={produc2} alt="product"/>
                  <div class="content-box">
                    FRUITS & DRYFRUITS
                  </div>
                </div>
                </Link>
               
              </div>
              <div className="item col-lg-3 col-md-6 col-sm-12">
                <Link to="/spices">
                   <div class="product-item">
                  <img src={produc3} alt="product"/>
                  <div class="content-box">
                    SPICES
                  </div>
                </div>
                </Link>
               
              </div>
              <div className="item col-lg-3 col-md-6 col-sm-12">
                <Link to="/herbs&pulses&coffees">
                   <div class="product-item">
                  <img src={produc4} alt="product"/>
                  <div class="content-box">
                    HERBS & PULSES & COFFEE
                  </div>
                </div>
                </Link>
               
              </div>

            </div>
          </div>
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
      <div className="category-outer">
        <div className="container">
          <div className="category-inner">
            <div class="row">
              <div class="col-lg-4 col-md-4 col-sm--12 cardBox">
                <div class="card">
                  <div class="front">
                    <div className="img-block">
                      <img src={ship1} alt="" />
                      <div className="title">OCEAN SHIPPING</div>
                    </div>
                  </div>
                  <div class="back">
                    <p>Seamlessly connect continents with cost-effective ocean
                      shipping solutions.</p>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-4 col-sm--12 cardBox">
                <div class="card">
                  <div class="front">
                    <div className="img-block">
                      <img src={ship2} alt="" />
                      <div className="title">AIR SHIPPING</div>
                    </div>
                  </div>
                  <div class="back">
                    <p> Speed your products to global destinations with efficient air
                      shipping.</p>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-4 col-sm--12 cardBox">
                <div class="card">
                  <div class="front">
                    <div className="img-block">
                      <img src={ship3} alt="" />
                      <div className="title">ROAD SHIPPING</div>
                    </div>
                  </div>
                  <div class="back">
                    <p>Deliver your cargo swiftly and securely using our extensive
                      road transportation network.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section>
        <div class="section-header">
          <div class="container">
            <h2>
              Feel free to write to us
            </h2>
          </div>
        </div>

        <div class="container">
          <div class="row">

            <div class="contact-info">
              <div class="contact-info-item">
                <div class="contact-info-icon">
                  <i class="fas fa-home"></i>
                </div>

                <div class="contact-info-content">
                  <h4>Address</h4>
                  <p>239,Meridian Business <br />Center,lajamni chowk <br />,surat-394101</p>
                </div>
              </div>

              <div class="contact-info-item">
                <div class="contact-info-icon">
                  <i class="fas fa-phone"></i>
                </div>
                <div class="contact-info-content">
                  <h4>Phone</h4>
                  <p >+91 7016364863</p>
                </div>
              </div>

              <div class="contact-info-item">
                <div class="contact-info-icon">
                  <i class="fas fa-envelope"></i>
                </div>
                <div class="contact-info-content">
                  <h4>Email</h4>
                  <p>info@infinityexim.net</p>
                </div>
              </div>
            </div>

            <div class="contact-form">
              <form action="" id="contact-form">
                <h2>Send Message</h2>
                <div class="input-box">
                  <input type="text" required="true" name="" />
                  <span>Full Name</span>
                </div>

                <div class="input-box">
                  <input type="email" required="true" name="" />
                  <span>Email</span>
                </div>

                <div class="input-box">
                  <textarea required="true" name=""></textarea>
                  <span>Type your Message...</span>
                </div>

                <div class="input-box">
                  <input type="submit" value="Send" name="" />
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Home