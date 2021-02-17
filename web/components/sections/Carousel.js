import React, { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import { useEmblaCarousel } from 'embla-carousel/react';

const viewportCss = {
  overflow: 'hidden',
};
const containerCss = {
  display: 'flex',
};
const slideCss = {
  position: 'relative',
  minWidth: '100%',
};

const Carousel = () => {
  const [viewportRef, embla] = useEmblaCarousel({ loop: true });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on('select', onSelect);
    onSelect();
  }, [embla, onSelect]);

  return (
    <section className="bg-black relative">
      <div style={viewportCss} ref={viewportRef}>
        <div style={containerCss}>
          <div style={slideCss}>
            <CarouselItem />
          </div>
          <div style={slideCss}>
            <CarouselItem />
          </div>
          <div style={slideCss}>
            <CarouselItem />
          </div>
        </div>
      </div>

      <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
      <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
    </section>
  );
};

const CarouselItem = () => (
  <article
    className="flex items-center justify-center bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: 'url(/assets/images/hero-cover.jpg)', minHeight: '70vh' }}
  >
    <div className="max-w-3xl mx-auto px-8 py-16 md:py-48 text-center">
      <h1 className="text-2xl md:text-4xl text-white leading-tight">
        Transforming the historic Hockessin school that ended segregation into a community center
      </h1>
      <div className="text-accent-400 tracking-wider font-semibold mt-4">
        DIVERSITY<span className="mx-2"> • </span>INCLUSION<span className="mx-2"> • </span>
        SOCIAL EQUITY
      </div>
    </div>
  </article>
);

export const PrevButton = ({ enabled, onClick }) => (
  <button
    className="absolute inset-y-0 left-0 focus:outline-none m-8 p-8 opacity-50 hover:opacity-100"
    onClick={onClick}
    disabled={!enabled}
  >
    <svg width="19" height="30" viewBox="0 0 19 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.525 3.525L15 0L0 15L15 30L18.525 26.475L7.075 15L18.525 3.525Z" fill="#DDDDDD" />
    </svg>
  </button>
);

export const NextButton = ({ enabled, onClick }) => (
  <button
    className="absolute inset-y-0 right-0 focus:outline-none m-8 p-8 opacity-50 hover:opacity-100"
    onClick={onClick}
    disabled={!enabled}
  >
    <svg width="19" height="30" viewBox="0 0 19 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.525 0L0 3.525L11.45 15L0 26.475L3.525 30L18.525 15L3.525 0Z" fill="#DDDDDD" />
    </svg>
  </button>
);

export default Carousel;
