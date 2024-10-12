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
        dots: false,             // Enable dots below the slider
        infinite: false,         // Loop through slides infinitely
        speed: 500,             // Transition speed
        slidesToShow: 1,        // Show 3 slides at a time
        slidesToScroll: 1,      // Scroll one slide at a time
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const slidesData = [
      {
            id: 1,
            name: `Amazon Website Clone`,
            img: amazonimg,
            detail: `Landing page Clone of Amazon E-commerce website.`,
            link: `C:\Users\Deepak Maher\Desktop\Pro\Web\projects\Amazon_clone\Amazon_clone.html`,
          },
          {
            id: 2,
            name: `Currency Converter`,
            img: currencyconverterimg,
            detail: `A Currency Converter Website for realtime Currency conversion.`,
            link: `#`,
          },
          {
            id: 3,
            name: `Rock Paper Scissor Game`,
            img: rockpaperimg,
            detail: `Rock Paper Scissor Game to play with friends and computer.`,
            link: ``,
          },
          {
            id: 4,
            name: `Calculator`,
            img: calculatorimg,
            detail: `A fully working Calculator for Mathmatical Calculations.`,
            link: ``,
          },
          {
            id: 5,
            name: `To Do List`,
            img: todolistimg,
            detail: `A To Do List Web App for keep track of Daily Tasks.`,
            link: ``,
          },
      ];

    return (
      <section className='project-section m-auto'>
        <div className="slider-container">
            <h2 className='section-heading'>Project</h2>
            <Slider {...settings}>
                {slidesData.map((slide) => (
                    <div key={slide.id} className="slider-item">
                        <img src={slide.img}/>
                        <p>
                          <span>{slide.name}</span>
                          <a href={slide.link} className="fa-solid fa-up-right-from-square"> </a>
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
