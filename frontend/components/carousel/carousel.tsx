import classNames from 'classnames';
import React from 'react';
import CarouselScrollButton from './carousel_scroll_button';
import styles from './carousel.module.scss';

type CarouselProps = {
  children: React.ReactNode;
  className?: string;
};

const Carousel = ({
  children,
  className,
}: CarouselProps) => {
  const scrollContainerRef = React.useRef<HTMLOListElement>(null);
  const [prevButtonDisabled, setPrevButtonDisabled] = React.useState(true);
  const [nextButtonDisabled, setNextButtonDisabled] = React.useState(false);

  const prevPage = () => {
    const scrollContainer = scrollContainerRef!.current!;
    const children = Array.from(scrollContainer.children);
    const distsFromLeft = children.map(child => child.getBoundingClientRect().left - scrollContainer.getBoundingClientRect().left);
    const leftmostFullyVisibleElementIndex = distsFromLeft.findIndex((dist) => dist >= 0);
    const scrollTarget = children[distsFromLeft.findIndex((dist) => dist >= distsFromLeft[leftmostFullyVisibleElementIndex] - scrollContainer.clientWidth)];
    scrollContainer.scrollBy({ left: scrollTarget.getBoundingClientRect().left - scrollContainer.getBoundingClientRect().left });
  };

  const nextPage = () => {
    const scrollContainer = scrollContainerRef!.current!;
    const children = Array.from(scrollContainer.children);
    const distsFromRight = children.map(child => child.getBoundingClientRect().right - scrollContainer.getBoundingClientRect().right);
    const scrollTarget = children[distsFromRight.findIndex((dist) => dist >= 0)];
    scrollContainer.scrollBy({ left: scrollTarget.getBoundingClientRect().left - scrollContainer.getBoundingClientRect().left });
  };

  const handleScroll = () => {
    const scrollContainer = scrollContainerRef!.current!;
    const atStart = scrollContainer.scrollLeft === 0;
    // Chrome sometimes rounds clientWidth down, so we add 1 to correct
    const atEnd = Math.ceil(scrollContainer.scrollLeft + scrollContainer.clientWidth + 1) >= scrollContainer.scrollWidth;
    setPrevButtonDisabled(atStart);
    setNextButtonDisabled(atEnd);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    switch (event.key) {
      case 'ArrowLeft':
        prevPage();
        return;
      case 'ArrowRight':
        nextPage();
        return;
      default:
        break;
    };
  };

  return (
    <div
      className={classNames(styles.carouselViewport, className)}
      role="region"
      aria-label="carousel"
      tabIndex={0}
      onKeyDown={handleKeyDown}>
      <ol
        ref={scrollContainerRef}
        className={styles.carouselList}
        role="list"
        onScroll={handleScroll}>
        {React.Children.map(children, (child) => (
          <li className={styles.carouselListItem}>
            {child}
          </li>
        ))}
      </ol>
      <div className={styles.carouselScrollButtonContainer}>
        <CarouselScrollButton
          orientation="left"
          disabled={prevButtonDisabled}
          onClick={prevPage}/>
        <CarouselScrollButton
          orientation="right"
          disabled={nextButtonDisabled}
          onClick={nextPage}/>
      </div>
    </div>
  );
};

export default Carousel;
