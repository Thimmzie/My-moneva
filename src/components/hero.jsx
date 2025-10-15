import React from 'react';
import { useState } from 'react';
import Herobg from '../assets/images/herobg.png';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/all';

const hero = () => {
  useGSAP(() => {
    const headSplit = new SplitText('#heading', { type: 'lines' });
    gsap.from(headSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.5,
      ease: 'expo.out',
      delay: 0.5,
    });

    gsap.fromTo(
      '#body',
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        delay: 1,
        stagger: 0.1,
      }
    );
    gsap.from('#left-btn', {
      x: -250,
      duration: 1.5,
      ease: 'power1.inOut',
    });
    gsap.from('#right-btn', {
      x: 250,
      duration: 1.5,
      ease: 'power1.inOut',
    });
    gsap.fromTo(
      '.my-hero',
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        ease: 'expo.out',
        duration: 4,
      }
    );
  }, []);
  return (
    <section>
      <div className="flex flex-col items-center mt-20 gap-4 md:mt-13">
        <h2
          className="text-[#fefefe] text-[2rem] font-[500] text-center md:text-[2.3rem] lg:text-[3rem] mt-[3.9rem] "
          id="heading"
        >
          Take Control of Your
          <span className="block text-center">Finances with Moneva</span>
        </h2>
        <p
          className="text-[#c3c1c8] text-center text-[1.1rem] md:text-[1.1rem] lg:text-[1rem] font-light"
          id="body"
        >
          Your all-in-one tool for managing budgets,
          <br className="lg:hidden"></br> tracking expenses, and
          <br className="hidden lg:block"></br> reaching savings goals
        </p>
        <div className="flex flex-col gap-4 mt-3.5 lg:flex-row">
          <button
            id="left-btn"
            className="w-[85vw] mx-auto py-4 text-[1.1rem]  bg-[#8a66f1] text-white rounded-full lg:w-[17vw] lg:text-[0.95rem] xl:w-[12vw] xl:py-3 xl:text-[0.9rem] lg:hover:cursor-pointer lg:hover:bg-[#8b66f1ce] transition duration-400 ease-in-out"
          >
            Get started
          </button>
          <button
            id="right-btn"
            className="w-[85vw] mx-auto py-4 text-[1.1rem]  bg-[#150e29] text-white rounded-full border border-white lg:w-[17vw] lg:text-[0.95rem] xl:w-[12vw] xl:py-3 xl:text-[0.9rem] lg:hover:cursor-pointer lg:hover:bg-[#fcfbfb] lg:hover:text-[#141414] transition duration-600 ease-in-out"
          >
            Explore features
          </button>
        </div>
      </div>
      <div className="mt-5 xl:mt-14">
        <img
          className="my-hero w-[90%] mx-auto lg:w-[89%] xl:w-[99%]"
          src={Herobg}
          alt="/"
        />
      </div>
    </section>
  );
};

export default hero;
