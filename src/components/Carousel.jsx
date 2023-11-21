import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

export const ItemCarousel = ({dnone}) => {
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  }

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className={`m-2 my-4 ${dnone}`}>
      <Carousel.Item>
        <img src={`/imageCarousel1.png`} />
      </Carousel.Item>
      <Carousel.Item>
        <img src={`/imageCarousel2.png`} />
      </Carousel.Item>
      <Carousel.Item>
        <img src={`/imageCarousel3.png`} />
      </Carousel.Item>
    </Carousel>
  );
}
