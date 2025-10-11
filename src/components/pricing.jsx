import React, { useEffect, useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const pricing = () => {
  const [toggled, setToggled] = useState(false);
  useEffect(() => {
    gsap.fromTo(
      '.price-box',
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'back.out(1.7)',
        stagger: 0.1,
      }
    );
  }, [toggled]);
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
          start: 'top 98%',

          toggleActions: 'play none none reverse',
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
          start: 'top 98%',

          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <section id="pricing">
      <div className="mb-10">
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
        <div className="toggle flex justify-center mt-[3rem]">
          <button
            className={`toggle-btn ${toggled ? 'toggle' : ''}`}
            onClick={() => setToggled(!toggled)}
          >
            <span className="label-month">Monthly</span>
            <span className="label-year">Annually</span>
            <div className="thumb"></div>
          </button>
        </div>
        <div className="mt-[5rem]">
          <div className="monthly flex flex-col gap-10 items-center lg:flex-row lg:justify-center">
            <div className="bg-[#e0e0e0] w-[85vw] h-[80vh] rounded-3xl pt-[3rem] px-[1.2rem] lg:w-[25vw] lg:h-[70vh] lg:bg-[#f3f0fe] lg:pt-[2rem] price-box">
              <h2 className="pricing-box-title">Free</h2>
              <p className="text-[1rem] text-[#808080] py-8 font-bold lg:text-[0.8rem] lg:py-4 lg:font-light lg:tracking-wide">
                Ideal for beginners who want to test the waters with simple
                budgeting tools.
              </p>
              <div className=" w-full relative border-div">
                <div className="sub-border-div">
                  <p className="text-[#595959] text-[1rem] ml-[1rem] lg:text-[0.8rem]">
                    &#8358;
                    <span className="pl-1 font-extrabold text-[#272727] text-[3rem] lg:text-[1.3rem]">
                      0
                    </span>
                  </p>
                  <button className="bg-[#8a66f1] text-[#ffffff] border-0 rounded-[5rem] px-7 h-[6vh] lg:px-5 lg:text-[0.7rem] hover:cursor-pointer hover:bg-[#5a32cace]">
                    Get started
                  </button>
                </div>
              </div>
              <div className="mt-[2rem]">
                <ul className="flex flex-col gap-5">
                  <div className="flex gap-4 ">
                    <div className="bg-[#8a66f1] rounded-full inline-flex items-center justify-center">
                      <FaCheck className=" off-white-check m-2 text-[0.7rem] text-[#ffff] lg:text-[0.5rem] lg:m-1.5" />
                    </div>
                    <p className="text-[1rem] text-[#595959] tracking-wide font-bold lg:text-[0.8rem] lg:font-light lg:tracking-wider">
                      Customizable Budgets
                    </p>
                  </div>
                  <div className="flex gap-4 ">
                    <div className="bg-[#8a66f1] rounded-full inline-flex items-center justify-center">
                      <FaCheck className=" off-white-check m-2 text-[0.7rem] text-[#ffff] lg:text-[0.5rem] lg:m-1.5" />
                    </div>
                    <p className="text-[1rem] text-[#595959] tracking-wide font-bold lg:text-[0.8rem] lg:font-light lg:tracking-wider">
                      Savings Goal Tracker
                    </p>
                  </div>
                  <div className="flex gap-4 ">
                    <div className="bg-[#8a66f1] rounded-full inline-flex items-center justify-center">
                      <FaCheck className=" off-white-check m-2 text-[0.7rem] text-[#ffff] lg:text-[0.5rem] lg:m-1.5" />
                    </div>
                    <p className="text-[1rem] text-[#595959] tracking-wide font-bold lg:text-[0.8rem] lg:font-light lg:tracking-wider">
                      Basic Customer Support
                    </p>
                  </div>
                </ul>
              </div>
            </div>
            <div className="bg-[#7c5cd9] w-[85vw] h-[80vh] rounded-3xl pt-[3rem] px-[1.2rem] lg:w-[25vw] lg:h-[70vh] lg:pt-[2rem] price-box">
              <div className="flex standard-box">
                <h2 className="pricing-box-title-purple">Standard</h2>
                <p className="text-[#ffff] text-[1rem] lg:text-[0.8rem]">
                  Recommended
                </p>
              </div>

              <p className="text-[1rem] text-[#ffff] py-8 font-bold lg:text-[0.8rem] lg:py-4 lg:font-light lg:tracking-wide">
                For users looking to take control of their finances with
                data-driven insights
              </p>
              <div className=" w-full relative border-div-purple">
                <div className="sub-border-div-purple">
                  <p className="text-[#ffff] text-[1rem] lg:text-[0.8rem]">
                    &#8358;
                    <span className="pl-1 font-extrabold text-[#ffff] text-[2rem] lg:text-[1.3rem]">
                      {toggled ? '25,000' : '2,500'}
                    </span>
                  </p>
                  <button className="bg-[#ffffff] text-[#8a66f1] border-0 rounded-[5rem] px-5 h-[6vh] lg:px-5 lg:text-[0.7rem] hover:cursor-pointer hover:bg-[#f7f6f6]">
                    Get started
                  </button>
                </div>
              </div>
              <div className="mt-[2rem]">
                <ul className="flex flex-col gap-5">
                  <div className="flex gap-4 ">
                    <div className="bg-[#ffff] rounded-full inline-flex items-center justify-center">
                      <FaCheck className=" off-white-check m-2 text-[0.7rem] text-[#8a66f1]  lg:text-[0.5rem] lg:m-1.5" />
                    </div>
                    <p className="text-[1rem] text-[#ffff] tracking-wide font-bold lg:text-[0.8rem] lg:font-light lg:tracking-wider">
                      All Free Plans
                    </p>
                  </div>
                  <div className="flex gap-4 ">
                    <div className="bg-[#ffff] rounded-full inline-flex items-center justify-center">
                      <FaCheck className=" off-white-check m-2 text-[0.7rem] text-[#8a66f1]  lg:text-[0.5rem] lg:m-1.5" />
                    </div>
                    <p className="text-[1rem] text-[#ffff] tracking-wide font-bold lg:text-[0.8rem] lg:font-light lg:tracking-wider">
                      Spending Insights
                    </p>
                  </div>
                  <div className="flex gap-4 ">
                    <div className="bg-[#ffff] rounded-full inline-flex items-center justify-center">
                      <FaCheck className=" off-white-check m-2 text-[0.7rem] text-[#8a66f1]  lg:text-[0.5rem] lg:m-1.5" />
                    </div>
                    <p className="text-[1rem] text-[#ffff] tracking-wide font-bold lg:text-[0.8rem] lg:font-light lg:tracking-wider">
                      Savings Recommendation
                    </p>
                  </div>
                  <div className="flex gap-4 ">
                    <div className="bg-[#ffff] rounded-full inline-flex items-center justify-center">
                      <FaCheck className=" off-white-check m-2 text-[0.7rem] text-[#8a66f1]  lg:text-[0.5rem] lg:m-1.5" />
                    </div>
                    <p className="text-[1rem] text-[#ffff] tracking-wide font-bold lg:text-[0.8rem] lg:font-light lg:tracking-wider">
                      Advanced Customer Support
                    </p>
                  </div>
                </ul>
              </div>
            </div>
            <div className="bg-[#e0e0e0] w-[85vw] h-[80vh] rounded-3xl pt-[3rem] px-[1.2rem] lg:w-[25vw] lg:h-[70vh] lg:bg-[#f3f0fe] lg:pt-[2rem] price-box">
              <h2 className="pricing-box-title">Premium</h2>
              <p className="text-[1rem] text-[#808080] py-8 font-bold lg:text-[0.8rem] lg:py-4 lg:font-light lg:tracking-wide">
                Best for users ready to invest in their financial health with
                enhanced support
              </p>
              <div className=" w-full relative border-div">
                <div className="sub-border-div">
                  <p className="text-[#595959] text-[1rem] lg:text-[0.8rem]">
                    &#8358;
                    <span className="pl-1 font-extrabold text-[#272727] text-[2rem] lg:text-[1.3rem]">
                      {toggled ? '43,000' : '4,000'}
                    </span>
                  </p>
                  <button className="bg-[#8a66f1] text-[#ffffff] border-0 rounded-[5rem] px-5 h-[6vh] lg:px-5 lg:text-[0.7rem] hover:cursor-pointer hover:bg-[#5a32cace]">
                    Get started
                  </button>
                </div>
              </div>
              <div className="mt-[2rem]">
                <ul className="flex flex-col gap-5">
                  <div className="flex gap-4 ">
                    <div className="bg-[#8a66f1] rounded-full inline-flex items-center justify-center">
                      <FaCheck className=" off-white-check m-2 text-[0.7rem] text-[#ffff] lg:text-[0.5rem] lg:m-1.5" />
                    </div>
                    <p className="text-[1rem] text-[#595959] tracking-wide font-bold lg:text-[0.8rem] lg:font-light lg:tracking-wider">
                      All Standard Plan
                    </p>
                  </div>
                  <div className="flex gap-4 ">
                    <div className="bg-[#8a66f1] rounded-full inline-flex items-center justify-center">
                      <FaCheck className=" off-white-check m-2 text-[0.7rem] text-[#ffff] lg:text-[0.5rem] lg:m-1.5" />
                    </div>
                    <p className="text-[1rem] text-[#595959] tracking-wide font-bold lg:text-[0.8rem] lg:font-light lg:tracking-wider">
                      Personalized Financial Insights
                    </p>
                  </div>
                  <div className="flex gap-4 ">
                    <div className="bg-[#8a66f1] rounded-full inline-flex items-center justify-center">
                      <FaCheck className=" off-white-check m-2 text-[0.7rem] text-[#ffff] lg:text-[0.5rem] lg:m-1.5" />
                    </div>
                    <p className="text-[1rem] text-[#595959] tracking-wide font-bold lg:text-[0.8rem] lg:font-light lg:tracking-wider">
                      Exportable Reports
                    </p>
                  </div>
                  <div className="flex gap-4 ">
                    <div className="bg-[#8a66f1] rounded-full inline-flex items-center justify-center">
                      <FaCheck className=" off-white-check m-2 text-[0.7rem] text-[#ffff] lg:text-[0.5rem] lg:m-1.5" />
                    </div>
                    <p className="text-[1rem] text-[#595959] tracking-wide font-bold lg:text-[0.8rem] lg:font-light lg:tracking-wider">
                      Priority Customer Support 24/7
                    </p>
                  </div>
                </ul>
              </div>
            </div>
          </div>
          <div className="annually"></div>
        </div>
      </div>
    </section>
  );
};

export default pricing;
