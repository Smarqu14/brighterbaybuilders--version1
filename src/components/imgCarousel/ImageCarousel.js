import React from 'react';
import './ImageCarousel.css';
import 'react-alice-carousel/lib/alice-carousel.css';
import Fade from 'react-reveal/Fade';
import AliceCarousel from 'react-alice-carousel';

import { ImPhone } from 'react-icons/im';

export default function ImageCarousel() {
  const images = [
    'https://bbb-construction.s3-us-west-1.amazonaws.com/1.jpeg',
    'https://bbb-construction.s3-us-west-1.amazonaws.com/2.jpeg',
    'https://bbb-construction.s3-us-west-1.amazonaws.com/3.jpeg',
    'https://bbb-construction.s3-us-west-1.amazonaws.com/4.jpeg',
  ];
  return (
    <div className='banner__container'>
      <AliceCarousel
        infinite
        autoPlay={true}
        playButtonEnabled={true}
        autoPlayActionDisabled={true}
        fadeOutAnimation={true}
        autoPlayInterval={3000}
        autoPlayDirection='rtl'
        mouseTrackingEnabled={true}
        disableAutoPlayOnAction={true}
      >
        <img src={images[0]} className='banner__img' alt='' />
        <img src={images[1]} className='banner__img' alt='' />
        <img src={images[2]} className='banner__img' alt='' />
        <img src={images[3]} className='banner__img' alt='' />
      </AliceCarousel>

      <div className='banner__text'>
        <Fade delay={250}>
          <div className='banner__small'>Discover the posibilities</div>
        </Fade>
        <Fade delay={350}>
          <div className='banner__big'>Experienced, trusted &amp; honest</div>
        </Fade>
        <Fade delay={450}>
          <a href='tel://+4152258732' className='banner__phone'>
            <ImPhone />
            &nbsp;CALL US:&nbsp;415.225.8732
          </a>
        </Fade>
      </div>
    </div>
  );
}
