import React, { useEffect, useState } from 'react';
import { FaCheck } from 'react-icons/fa';
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
      <div className="toggle"></div>
      <div className="mt-[5rem]">
        <div className="monthly flex flex-col gap-4 items-center">
          <div className="bg-[#f6f6f6] w-[90vw] h-[78vh] rounded-3xl pt-[3rem] px-[1.2rem]">
            <h2 className="pricing-box-title">Free</h2>
            <p className="text-[1.2rem] text-[#808080] py-8 font-bold">
              Ideal for beginners who want to test <br></br> the waters with
              simple budgeting tools.
            </p>
            <div className=" w-full relative border-div">
              <div className="sub-border-div">
                <p className="text-[#595959] text-[1rem]">
                  &#8358;
                  <span className="pl-1 font-extrabold text-[#272727] text-[3rem]">
                    0
                  </span>
                  <span className="text-[1.2rem]">/month</span>
                </p>
                <button className="bg-[#8a66f1] text-[#ffffff] border-0 rounded-[5rem] px-7 h-[6vh]">
                  Get started
                </button>
              </div>
            </div>
            <div className="mt-[2rem]">
              <ul className="flex flex-col gap-5">
                <div className="flex gap-4 ">
                  <div className="bg-[#8a66f1] rounded-full inline-flex items-center justify-center">
                    <FaCheck className=" off-white-check m-2 text-[#ffff]" />
                  </div>
                  <p className="text-[1.2rem] text-[#595959] tracking-wide">
                    Customizable Budgets
                  </p>
                </div>
                <div className="flex gap-4 ">
                  <div className="bg-[#8a66f1] rounded-full inline-flex items-center justify-center">
                    <FaCheck className=" off-white-check m-2 text-[#ffff]" />
                  </div>
                  <p className="text-[1.2rem] text-[#595959] tracking-wide">
                    Savings Goal Tracker
                  </p>
                </div>
                <div className="flex gap-4 ">
                  <div className="bg-[#8a66f1] rounded-full inline-flex items-center justify-center">
                    <FaCheck className=" off-white-check m-2 text-[#ffff]" />
                  </div>
                  <p className="text-[1.2rem] text-[#595959] tracking-wide">
                    Basic Customer Support
                  </p>
                </div>
              </ul>
            </div>
          </div>
        </div>
        <div className="annually"></div>
      </div>
    </div>
  );
};

export default pricing;
