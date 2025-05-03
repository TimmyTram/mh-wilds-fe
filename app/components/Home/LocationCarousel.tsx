'use client';

import { useCallback } from "react";
import { EmblaCarouselType, EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { DotButton, useDotButton } from './EmblaCarouselDotButton';
import { PrevButton, NextButton, usePrevNextButtons } from './EmblaCarouselArrowButtons';
import Autoplay from 'embla-carousel-autoplay';
import "./carousel.css";
import LocationImage from "../MonsterHunter/Locations/LocationImage";

const autoplayOptions = {
  delay: 4000,
  rootNode: (emblaRoot: HTMLElement) => emblaRoot.parentElement as HTMLElement,
  stopOnInteraction: false,
  stopOnMouseEnter: true,
};

type PropType = {
  slides: Map<string, string>;
  options?: EmblaOptionsType;
}

const LocationCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay(autoplayOptions)])

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay
    if (!autoplay) return

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop

    resetOrStop()
  }, [])

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onNavButtonClick
  )

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi, onNavButtonClick)

  return (
    <section className="w-full">
      <div className="overflow-hidden w-full" ref={emblaRef}>
        <div className="flex">
          {Array.from(slides.entries()).map(([key, value], index) => (
            <div 
              className="flex-[0_0_100%] min-w-0 pl-0 pr-0" 
              key={index}
            >
              <div className="flex flex-col items-center justify-center p-2">
                <div className="border-2 md:border-4 border-gray-300 rounded-lg overflow-hidden w-full">
                  <LocationImage 
                    imageUrl={value} 
                    width={600} 
                    height={350} 
                    alt={key} 
                    className="w-full h-40 md:h-64 object-cover"
                  />
                </div>
                <div className="mt-2 md:mt-4">
                  <h3 className="text-lg md:text-2xl font-bold text-center">{key}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:grid md:grid-cols-2 gap-3 mt-3 md:mt-6">
        <div className="flex items-center justify-center md:justify-start gap-2">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="flex flex-wrap justify-center md:justify-end items-center mt-2 md:mt-0">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={`w-4 h-4 md:w-5 md:h-5 mx-1 flex items-center justify-center rounded-full ${
                index === selectedIndex 
                  ? 'dot-selected' 
                  : 'dot-default'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default LocationCarousel;