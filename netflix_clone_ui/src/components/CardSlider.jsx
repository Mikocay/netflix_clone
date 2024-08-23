import { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import styled from 'styled-components';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import React from 'react';

function CardSlider({ data, title }) {
  const [sliderPosition, setSliderPosition] = useState(0);
  const [showControls, setShowControls] = useState(false);
  const listRef = useRef(null);

  const handleDirection = (direction) => {
    if (listRef.current) {
      const sliderWidth = listRef.current.scrollWidth;
      const containerWidth = listRef.current.parentElement.offsetWidth;
      const maxScrollPosition = sliderWidth - containerWidth;

      let newPosition = sliderPosition;

      if (direction === 'left' && sliderPosition > 0) {
        newPosition = Math.max(sliderPosition - 230, 0);
      }
      if (
        direction === 'right' &&
        sliderPosition + containerWidth < sliderWidth
      ) {
        newPosition = Math.min(sliderPosition + 230, maxScrollPosition);
      }

      if (newPosition !== sliderPosition) {
        listRef.current.style.transform = `translate3d(-${newPosition}px, 0, 0)`;
        setSliderPosition(newPosition);
      }
    }
  };

  return (
    <Container
      className='flex column'
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <h1>{title}</h1>
      <div className='wrapper'>
        <div
          className={`slider-action left ${
            !showControls ? 'none' : ''
          } flex j-center a-center`}
        >
          <AiOutlineLeft onClick={() => handleDirection('left')} />
        </div>
        <div className='flex slider' ref={listRef}>
          {data.map((movie, index) => {
            return <Card movieData={movie} index={index} key={movie.id} />;
          })}
        </div>
        <div
          className={`slider-action right ${
            !showControls ? 'none' : ''
          } flex j-center a-center`}
        >
          <AiOutlineRight onClick={() => handleDirection('right')} />
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  gap: 1rem;
  position: relative;
  padding: 2rem 0;
  h1 {
    margin-left: 50px;
  }
  .wrapper {
    .slider {
      width: max-content;
      gap: 1rem;
      transform: translateX(0px);
      transition: 0.3s ease-in-out;
      margin-left: 50px;
    }
    .slider-action {
      position: absolute;
      z-index: 100;
      height: 100%;
      top: 0;
      bottom: 0;
      width: 50px;
      transition: 0.3s ease-in-out;
      cursor: pointer;
      svg {
        font-size: 2rem;
      }
    }
    .none {
      display: none;
    }
    .left {
      left: 0;
    }
    .right {
      right: 0;
    }
  }
`;

CardSlider.propTypes = {
  data: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

const MemoizedCardSlider = React.memo(CardSlider);

export default MemoizedCardSlider;
