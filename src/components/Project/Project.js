import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Project.css';

import amazonimg from './../../assets/amazonclone_img.JPG'
import beatbox_img from './../../assets/beatbox_img.JPG'
import portfolio_img from './../../assets/portfolio_img.JPG'

const Project = () => {
    const settings = {
        dots: true,             // Enable dots below the slider
        infinite: true,         // Loop through slides infinitely
        speed: 1500,             // Transition speed
        slidesToShow: 1,        // Show 3 slides at a time
        slidesToScroll: 1,      // Scroll one slide at a time
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear",
        pauseOnHover: true,
    };

  const slidesData = [
    {       
      id: 1,
      name: `BeatBox Video App`,
      img: beatbox_img,
      detail: `A YouTube-powered video music player for searching and streaming videos.`,
      link: `https://beatbox-music-three.vercel.app/`,
    },
    {       
      id: 2,
      name: `Portfolio`,
      img: portfolio_img,
      detail: `A personal portfolio website showcasing my skills, projects, and professional journey.`,
      link: `https://deepak-rajput8030.github.io/portfolio/`,
    },
    {       
      id: 3,
      name: `Amazon Website Clone`,
      img: amazonimg,
      detail: `A responsive clone of Amazon's landing page with a clean UI.`,
      link: `https://deepak-rajput8030.github.io/demo-react/`,
    },
  ];

    return (
      <section id='Project' className='project-section m-auto'>
        <div className="slider-container">
            <h2 className='section-heading'>Project</h2>
            <Slider {...settings}>
                {slidesData.map((slide) => (
                    <div key={slide.id} className="slider-item">
                        <img src={slide.img}/>
                        <p>
                          <span>{slide.name}</span>
                          <a href={slide.link} className="fa-solid fa-link">  </a>
                        </p> 
                        <small>{slide.detail}</small>
                    </div>
                ))}
            </Slider>
        </div>
      </section>
    );
};

export default Project
