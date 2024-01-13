import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';


export const ItemCarousel = ({ dnone }) => {
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  }

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className={`m-2 my-4 ${dnone}`}>

      <Carousel.Item>
        <Link to={`/item/24`}>
          <img src={`/imageCarousel1.png`} />
        </Link>
      </Carousel.Item>
      <Carousel.Item>
        <Link to={`/item/1`}>
          <img src={`/imageCarousel2.png`} />
        </Link>
      </Carousel.Item>
      <Carousel.Item>
        <Link to={`/item/25`}>
          <img src={`/imageCarousel3.png`} />
        </Link>
      </Carousel.Item>
      
    </Carousel>
  );
}
