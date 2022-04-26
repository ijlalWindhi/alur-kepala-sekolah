import React, { useState } from 'react';
import { CorouselData } from './CorouselData';
import rigthArrow from '../../../assets/icon-rightArrow.svg'
import leftArrow from '../../../assets/icon-leftArrow.svg'

const Corousel = ({slides}) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
      setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
      return null;
    }

    return (
      <>
       <section className='flex flex-row justify-center'>
          <img src={leftArrow} onClick={prevSlide} style={{cursor: 'pointer'}} alt="left arrow icon" className='mr-3 w-7 md:w-auto'/>
          {CorouselData.map((slide, index) => {
            return (
              <div
                className={index === current ? 'slide' : 'slide'}
                key={index}
              >
                {index === current && (
                  <img src={slide.image} alt='slide image' className='image' />
                )}
              </div>
            );
          })}
          <img src={rigthArrow} onClick={nextSlide} style={{cursor: 'pointer'}} alt="right arrow icon" className='ml-3 w-7 md:w-auto'/>
        </section>
      </>
    )
};
export default Corousel;