import React from 'react';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <footer className='container-fluid black_more'>
  <div className='bg-footer'>
    <img src='./img/footer-img.png' alt='bg-footer'/>
  </div>
    <div className='row m-2-hor'>
      <div className='col-md-4'>
        <div className='footer-col'>
          <div className='heading'>
            <h2>About Us</h2>
          </div>
          <div className='content'>
             <p>Our dedicated home interior designers work with you tirelessly 
             to tie your style with their design expertise, creating 
             the perfect interior design concept.</p>
          </div>
          <div className='link-call' onClick={()=> window.open("mailto:designnexus@gmail.com", "_self")}>designnexus@gmail.com</div>
        </div>
      </div>
      <div className='col-md-2'>
        <div className='footer-col'>
          <div className='heading'>
            Useful link
          </div>
          <div className='content'>
             <div className='link'>Frequently Asked</div>
             <div className='link'>Projects</div> 
             <div className='link'>Client Reviews</div> 
             <div className='link'>Contact Us</div>
          </div>
        </div>
      </div>
      <div className='col-md-2'>
        <div className='footer-col'>
          <div className='heading'>
            Features
          </div>
          <div className='content'>
            <div className='link'>Career</div>
            <div className='link'>Privacy Policy</div>
            <div className='link'>Terms and Conditions</div>
          </div>
        </div>
      </div>
      <div className='col-md-4'>
        <div className='footer-col'>
          <div className='heading'>
            Follow Us
          </div>
          <div className='content'>
            <p>Explore thousands of inspiring interior designs, 
            from our best team here.</p>
            <div className='socialicon'>
            <span className="shine"></span>
              <i className="fa fa-facebook-f"></i>
            </div>
            <div className='socialicon'>
            <span className="shine"></span>
              <i className="fa fa-linkedin"></i>
            </div>
            <div className='socialicon'>
            <span className="shine"></span>
              <i className="fa fa-twitter"></i>
            </div>
            <div className='socialicon'>
            <span className="shine"></span>
              <i className="fa  fa-instagram"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='subfooter'>
      <div className='row m-2-hor'>
        <div className='col-md-6'>
          <div className='content'>©Copyrights {new Date().getFullYear()} Design Nexus All rights reserved.</div>
        </div>
      </div>
    </div>
  </footer>
);
