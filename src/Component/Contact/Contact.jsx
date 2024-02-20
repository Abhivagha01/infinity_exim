import React from 'react'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <div>
      <div className="common-outer">
        <div className="common-content">
          <div className="title">Contact</div>
          <div> <Link to="/">Home</Link> <span><i class="fas fa-angle-right"></i></span>Contact</div>
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
      <div className="map-outer p-4">
        <div className="container">
        <iframe 
        title="infinity-exim"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.825956677004!2d72.88673857470107!3d21.2387490804637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f40eacb8b3d%3A0x5dd425eaf9ff081c!2sMBC%20-%20Meridian%20Business%20Center!5e0!3m2!1sen!2sin!4v1704514446139!5m2!1sen!2sin" width="100%" height={500} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
      </div>
    </div>
  )
}

export default Contact