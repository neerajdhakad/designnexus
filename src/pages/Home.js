import React from "react";
// import { withRouter } from "react-router-dom";
import Reveal from 'react-reveal/Reveal';
import Slider from '../components/Sliderhome';
import Featurehome from '../components/Featurehome';
import Abouthome from '../components/Abouthome';
import Carouselfeature from '../components/Carouselfeature';
import Carouselclient from '../components/Carouselclient';
import Carouselclientb from '../components/Carouselclientb';
import Carouselprojects from '../components/Carouselprojects';
import Carouselteam from '../components/Carouselteam';
import Accomplish from '../components/Accomplish';
import Carouselnews from '../components/Carouselnews';
import Footer from '../components/Footer';
import { Efect, Efect1, Efect2  } from "../styles/effect.styles";
import FAQ from "../components/Faq";

const Home = ({ history }) => {
  return (
    <div>

      <Efect/>
      <Efect1/>
      <Efect2/>

      <Reveal effect="fadeIn">
        <section className="jumbotron jumbomain">
            <Slider />
        </section>
      </Reveal>
      
      <Featurehome/>
      
      <Reveal effect="fadeInUp">
        <Abouthome/>
      </Reveal>

      <Reveal effect="fadeInUp">
        <section className='container-fluid'>
          <div className='row m-2-hor'>
            <div className='col-12'>
              <div className='heading'>Our Packages</div>
            </div>
            <div className='col-12'>
              <Carouselfeature/>
            </div>
          </div>
        </section>
      </Reveal>

      {/* <Reveal effect="fadeInUp">
        <section className='container-fluid py-0'>
          <div className='row m-2-hor'>
            <div className='col-12'>
              <Carouselclient/>
            </div>
          </div>
        </section>
      </Reveal>
      
      <Reveal effect="fadeInUp">
        <section className='container-fluid'>
          <div className='row m-2-hor'>
            <div className='col-12'>
              <Carouselclientb/>
            </div>
          </div>
        </section>
      </Reveal> */}

      <Reveal effect="fadeInUp">
        <section className='container-fluid py-0'>
          <div className='row m-2-hor'>
            <div className='col-12'>
              <div className='heading'>Our Projects</div>
            </div>
          </div>
          <div className='row'>
            <div className='col-12 p-0'>
              <Carouselprojects/>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal effect="fadeInUp">
        <section className='container-fluid'>
          <div className='row m-2-hor'>
            <div className='col-12'>
              <div className='heading'>Our Team</div>
            </div>
            <div className='col-12'>
              <Carouselteam/>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal effect="fadeInUp">
        <Accomplish/>
      </Reveal> 

      <Reveal effect="fadeInUp">
        <section className='container-fluid pt-0'>
          <div className='row m-2-hor'>
            <div className='col-12'>
              <div className='heading'>Client Testimonials</div>
            </div>
            <div className='col-12'>
              <Carouselnews/>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal effect="fadeInUp">
        <FAQ/>
      </Reveal>

      <Footer />

    </div>
  );
};

export default (Home);
