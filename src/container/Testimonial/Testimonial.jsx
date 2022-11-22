import React, { useState } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './Testimonial.scss';
import { images } from '../../constants';

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      imgUrl: images.cpp,
      name: 'Michael',
      feedback: 'Lorem ipsum dolor sit amet.',
      company: 'Amazon',
    },
    {
      imgUrl: images.flutter,
      name: 'John Doe',
      feedback: 'Awesome, Amazing, Brilliant, Perfect, Great',
      company: 'Adidas',
    },
    {
      imgUrl: images.react,
      name: 'Mac',
      feedback: 'Lorem ipsum dolor sit amet.',
      company: 'Asus',
    },
    {
      imgUrl: images.vue,
      name: 'Michael',
      feedback: 'Lorem ipsum dolor sit amet.',
      company: 'Skype',
    },
    {
      imgUrl: images.vue,
      name: 'Michael',
      feedback: 'Lorem ipsum dolor sit amet.',
      company: 'Spotify',
    },
  ];
  const brands = [
    {
      _id: 0,
      name: 'Amazon',
      imgUrl: images.amazon,
    },
    {
      _id: 1,
      name: 'Adidas',
      imgUrl: images.adidas,
    },
    {
      _id: 2,
      name: 'Asus',
      imgUrl: images.asus,
    },
    {
      _id: 3,
      name: 'Skype',
      imgUrl: images.skype,
    },
    {
      _id: 4,
      name: 'Spotify',
      imgUrl: images.spotify,
    },
  ];

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      {testimonials.length && (
        <>
          <div className="app__testimonial-item app__flex">
            <img src={testimonials[currentIndex].imgurl} alt={testimonials[currentIndex].name} />
            <div className="app__testimonial-content">
              <p className="p-text">{testimonials[currentIndex].feedback}</p>
              <div>
                <h4 className="bold-text">{testimonials[currentIndex].name}</h4>
                <h5 className="p-text">{testimonials[currentIndex].company}</h5>
              </div>
            </div>
          </div>

          <div className="app__testimonial-btns app__flex">
            <div className="app__flex" onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
              <HiChevronLeft />
            </div>
            <div className="app__flex" onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
              <HiChevronRight />
            </div>
          </div>
        </>
      )}

      <div className="app__testimonial-brands app__flex">
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: 'tween' }}
            key={brand._id}
          >
            <img src={brand.imgUrl} alt={brand.name} />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, 'app__testimonial'),
  'testimonial',
  'app__primarybg',
);
