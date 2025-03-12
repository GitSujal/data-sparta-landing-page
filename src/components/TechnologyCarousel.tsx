import React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { technologies } from '../data/technologies';

export function TechnologyCarousel() {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      mode: "free-snap",
      slides: {
        perView: 6,
        spacing: 15,
      },
      breakpoints: {
        "(max-width: 1024px)": {
          slides: { perView: 4, spacing: 10 },
        },
        "(max-width: 768px)": {
          slides: { perView: 3, spacing: 10 },
        },
        "(max-width: 640px)": {
          slides: { perView: 2, spacing: 10 },
        },
      },
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <div ref={sliderRef} className="keen-slider py-4">
      {technologies.map((tech, idx) => (
        <div
          key={idx}
          className="keen-slider__slide flex items-center justify-center"
        >
          <img
            src={tech.logo}
            alt={`${tech.name} logo`}
            className="h-12 w-auto object-contain"
          />
        </div>
      ))}
    </div>
  );
}