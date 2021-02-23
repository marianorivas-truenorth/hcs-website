import React, { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import { useEmblaCarousel } from 'embla-carousel/react';

const Hero = ({ slides = [] }) => {
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
      <div className="overflow-hidden" ref={viewportRef}>
        <div className="flex">
          <div className="relative min-w-full">
            <CarouselItem />
          </div>
          <div className="relative min-w-full">
            <CarouselItem />
          </div>
          <div className="relative min-w-full">
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
    style={{ backgroundImage: 'url(/assets/images/homepage/hcs-hero-01.jpg)', minHeight: '70vh' }}
  >
    <div className="filter absolute z-10 inset-0"></div>
    <div className="relative z-20 max-w-4xl mx-auto px-8 py-16 md:py-48 text-center">
      <h1 className="text-white leading-snug">
        <small className="text-xl block mb-2">
          Transforming the historic Hockessin school that ended segregation into a
        </small>
        <span className="text-2xl md:text-4xl">
          Center for Diversity, Inclusion & Social Equity
        </span>
      </h1>
      <div className="text-lg text-accent-400 font-semibold mt-10 leading-snug">
        “Until we are all free, we are none of us free.”
        <br />- Emma Lazarus
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

export default Hero;
