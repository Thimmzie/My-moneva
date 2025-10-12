import React from 'react';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ReactComponent as Budget } from '../assets/images/budgetsvgone.svg';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

const started = () => {
  useEffect(() => {
    gsap.fromTo(
      '.first-dollar',
      {
        y: -600,
        duration: 1.2,
        ease: 'Bounce.out',
        rotation: -200,
        x: 200,
      },
      {
        y: 30,
        rotation: 10,
        duration: 3,
        transformOrigin: 'top center',
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        scale: 1.5,
        repeatDelay: 2,
      }
    );
    gsap.fromTo(
      '.second-dollar',
      {
        y: -500,
        x: 200,
        duration: 1.2,
        ease: 'Bounce.out',
      },
      {
        x: 10,
        y: 20,
        rotation: 10,
        delay: 1.2,
        duration: 2,
        transformOrigin: 'top center',
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        scale: 1.5,
      }
    );
    gsap.fromTo(
      '.third-dollar',
      {
        y: -400,
        ease: 'Bounce.out',
        x: -30,
        opacity: 1,
      },
      {
        x: 20,
        y: 20,
        rotation: -50,
        repeatDelay: 1.8,
        duration: 2,
        delay: 1.5,
        transformOrigin: 'bottom center',
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        scale: 1.8,
        opacity: 0,
      }
    );
    gsap.from('.journey-box', {
      opacity: 0,
      y: 100,
      duration: 1,
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '.journey-box',
        start: 'top 70%',
      },
    });

    gsap.from('.journey-btn', {
      y: 120,
      duration: 1.1,
      opacity: 1,
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '.journey-btn',
        start: 'top 120%',
        scale: 0.9,
        toggleActions: 'play none none none',
      },
    });
  }, []);
  return (
    <div className="mb-[7rem]">
      <div className="mt-[10rem] bg-[#110a25] h-[91vh] w-[90%] rounded-b-2xl rounded-t-xl mx-auto flex flex-col gap-1 items-center sm:h-[95vh] md:gap-2 lg:h-[90vh] lg:flex-row lg:justify-center lg:gap-0 xl:h-[85vh] journey-box">
        <div className="">
          <Budget className="w-[25rem] sm:w-[27rem] lg:w-[37rem] lg:mt-[3rem]" />
        </div>
        <div className="flex flex-col items-center ">
          <h2 className="text-[#fdfdfd] text-[1.3rem] text-center font-bold px-[1.5rem] md:text-[1.5rem] lg:text-[1.7rem]">
            Start Your Journey to<br className="hidden lg:block"></br> Financial{' '}
            <br className="hidden lg:hidden"></br> Wellness with Moneva
          </h2>
          <p className="text-[#c3c1c8] text-[1rem] text-center font-light pt-4 px-[0.5rem] md:text-[1.1rem] lg:mt-[0.2rem] lg:mb-[0.2rem] lg:text-[1rem]">
            Take control of your finances <br className="hidden lg:block"></br>
            today and watch <br className="hidden lg:hidden"></br> your
            financial dreams become reality
          </p>
          <button className="bg-[#8a66f1] text-[#ffffff] border-0 rounded-[5rem] px-7 h-[6vh] hover:bg-[#5a32cace] mt-5 md:px-9 md:h-[7.5vh] hover:cursor-pointer transition-all duration-800 ease-out transform journey-btn">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default started;
