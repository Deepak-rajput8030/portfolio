import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Project.css';

import currencyconverterimg from './../../assets/currency_converter_img.JPG'
import amazonimg from './../../assets/amazonclone_img.JPG'
import todolistimg from './../../assets/todo_list_img.JPG'
import rockpaperimg from './../../assets/rockpaper_img.JPG'
import calculatorimg from './../../assets/calculator_project_img.JPG'

const Project = () => {
    const settings = {
        dots: true,             // Enable dots below the slider
        infinite: true,         // Loop through slides infinitely
        speed: 1000,             // Transition speed
        slidesToShow: 1,        // Show 3 slides at a time
        slidesToScroll: 1,      // Scroll one slide at a time
        autoplay: true,
        autoplaySpeed: 2500,
        cssEase: "linear",
        pauseOnHover: true,
    };

    const slidesData = [
      {
            id: 1,
            name: `Amazon Website Clone`,
            img: amazonimg,
            detail: `Landing page Clone of Amazon E-commerce website.`,
            link: `https://deepak-rajput8030.github.io/demo-react/`,
          },
          {
            id: 2,
            name: `Currency Converter`,
            img: currencyconverterimg,
            detail: `A Currency Converter Website for realtime Currency conversion.`,
            link: `https://deepak-rajput8030.github.io/demo-react/`,
          },
          {
            id: 3,
            name: `Rock Paper Scissor Game`,
            img: rockpaperimg,
            detail: `Rock Paper Scissor Game to play with friends and computer.`,
            link: `https://deepak-rajput8030.github.io/demo-react/`,
          },
          {
            id: 4,
            name: `To Do List`,
            img: todolistimg,
            detail: `A To Do List Web App for keep track of Daily Tasks.`,
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
