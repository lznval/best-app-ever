import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';

export const SlickSlider = ({ children, settings, className, asNavFor }: any) => {
  const [nav1, setNav1] = useState<Slider | null>(null);
  const [nav2, setNav2] = useState<Slider | null>(null);
  let sliderRef1 = useRef<Slider | null>(null);
  let sliderRef2 = useRef<Slider | null>(null);

  useEffect(() => {
    setNav1(sliderRef1.current);
    setNav2(sliderRef2.current);
  }, []);

  return (
    <>
      <Slider {...settings} className={className} ref={sliderRef1} asNavFor={nav2}>
        {children}
      </Slider>
      {asNavFor && (
        <Slider
          {...settings}
          className={className}
          ref={sliderRef2}
          asNavFor={nav1}
          slidesToShow={3}
          swipeToSlide={true}
          focusOnSelect={true}
        >
          {children}
        </Slider>
      )}
    </>
  );
};
