import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/vertical.css';

const content = [
  {
    title: "Design Nexus",
    description:
      "With precision",
    button: "Get Free Estimate",
    link: "/#",
    image: "./img/bg-1.jpg"
  },
  {
    title: "Interior Expertise",
    description:
      "Stylish living",
    button: "Get Free Estimate",
    link: "/#",
    image: "./img/bg-2.jpg"
  },
  {
    title: "Land of Residence",
    description:
      "According lifestyle",
    button: "Get Free Estimate",
    link: "/#",
    image: "./img/bg-3.jpg"
  },
  {
    title: "Land of Residence",
    description:
      "According lifestyle",
    button: "Get Free Estimate",
    link: "/#",
    image: "./img/bg-4.jpg"
  }
];

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <Slider className="slider-wrapper" autoplay={6000}>
            {content.map((item, index) => (
              <div
                key={index}
                className="slider-content"
                style={{ background: `url('${item.image}') no-repeat center center` }}
              >
                <div className="inner">
                  <h1>{item.title}</h1>
                  <p>{item.description}</p>
                  <button onClick={()=> window.open(item.link, "_self")}>
                    <span className="shine"></span>
                    <span>
                      {item.button}
                    </span>
                  </button>
                </div>
              </div>
            ))}
        </Slider>
);
