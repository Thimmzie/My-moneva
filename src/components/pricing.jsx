import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const pricing = () => {
  useEffect(() => {
    gsap.fromTo(
      '.pricing-amazing',
      { y: 120, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.4,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.pricing-amazing',
          start: 'top 99%',
          end: 'bottom 60%',
          toggleActions: 'play reverse play reverse',
        },
      }
    );

    gsap.fromTo(
      '.pricing-maximize',
      { y: 160, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.4,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.pricing-maximize',
          start: 'top 99%',
          end: 'bottom 60%',
          toggleActions: 'play reverse play reverse',
        },
      }
    );
  }, []);

  return (
    <div className="mb-50">
      <div className="w-fit mx-auto">
        <p className="px-5 py-1 mon-sec-head lg:text-[0.7rem] font-bold lg:font-light">
          Pricing
        </p>
      </div>
      <div className="flex flex-col gap-6 mt-4 items-center">
        <h2 className="text-[#595959] text-[1.48rem] font-extrabold text-center md:text-[1.68rem] lg:text-[1.8rem] xl:text-[2.1rem] pricing-amazing">
          Flexible Plan for Every Budget
        </h2>
        <p className="text-[#8f8f8f] text-center text-[1rem] md:text-[1.2rem] lg:text-[1.1rem] xl:text-[1rem] pricing-maximize font-bold lg:font-light mx-2">
          Whether you’re new to budgeting or ready for
          <br className="block lg:hidden"></br> advanced insights,
          <br className="hidden lg:block"></br>
          there’s a plan for everyone
        </p>
      </div>
    </div>
  );
};

export default pricing;
