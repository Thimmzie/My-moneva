import React, { useEffect } from 'react';
import Budget from '../assets/images/budgetingv.svg';
import Savings from '../assets/images/savingsv.svg';
import Expenses from '../assets/images/expensev.svg';
import InsightOne from '../assets/images/insightsv.svg';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  useEffect(() => {
    const boxes = gsap.utils.toArray([
      '.content-box',
      '.middle-content-box',
      '.end-content-box',
    ]);

    boxes.forEach((box) => {
      ScrollTrigger.create({
        trigger: box,
        start: 'top top',
        end: 'bottom top',
        pin: true,
        pinSpacing: false,
        scrub: 1,
      });
    });

    gsap.set('.amazing', { y: 90, opacity: 1 });

    ScrollTrigger.create({
      trigger: '.amazing',
      start: 'top 99%',
      end: 'bottom 60%',
      toggleActions: 'play reverse play reverse',
      onEnter: () =>
        gsap.to('.amazing', {
          y: 0,
          duration: 0.4,
          ease: 'none',
        }),
      onLeaveBack: () =>
        gsap.to('.amazing', {
          y: 60,
          duration: 0.3,
          ease: 'none',
        }),
    });

    gsap.set('.maximize', { y: 90, opacity: 1 });

    ScrollTrigger.create({
      trigger: '.maximize',
      start: 'top 95%',
      end: 'bottom 60%',
      toggleActions: 'play reverse play reverse',
      onEnter: () =>
        gsap.to('.maximize', {
          y: 0,
          duration: 0.4,
          ease: 'none',
        }),
      onLeaveBack: () =>
        gsap.to('.maximize', {
          y: 60,
          duration: 0.2,
          ease: 'none',
        }),
    });

    gsap.utils.toArray('.moved').forEach((box) => {
      gsap.set(box, {
        transformOrigin: 'left center',
        rotate: 0,
        y: 0,
      });

      gsap.fromTo(
        box,
        { rotate: 0, y: 0, x: 0 },
        {
          rotate: 12,
          y: 47,
          x: 10,
          ease: 'none',
          scrollTrigger: {
            trigger: box,
            start: 'top 80%',
            end: 'top 50%',
            scrub: 2,
          },
        }
      );
    });
  }, []);

  return (
    <section id="feature">
      <div className="mb-[9rem] ">
        <div className="mb-[55rem] mt-16 lg:mb-[48rem]">
          <div className="w-fit mx-auto mb-13">
            <div className="w-fit mx-auto">
              <p className="px-5 py-1 mon-sec-head lg:text-[0.7rem] font-bold lg:font-light">
                Features
              </p>
            </div>
            <div className="flex flex-col gap-6 mt-4 items-center">
              <h2 className="text-[#595959] text-[1.48rem] font-extrabold text-center md:text-[1.68rem] lg:text-[1.8rem] xl:text-[2.1rem] amazing">
                Amazing features to help
                <br className="block lg:hidden" /> you
                <br className="hidden lg:flex" /> manage your money
              </h2>
              <p className="text-[#8f8f8f] text-center text-[1rem] md:text-[1.2rem] lg:text-[1.1rem] xl:text-[1rem] maximize font-[500]">
                Maximize your finances with our user friendly
                <br className="block lg:hidden" /> features that help
                <br className="hidden lg:flex" /> you track and manage your
                <br className="block lg:hidden" /> finances
              </p>
            </div>
          </div>

          <div className="mt-7 flex flex-col items-center gap-5 md:gap-10 lg:gap-0 mb-50 ">
            <div className="bg-[#ede8fd] h-[100vh] w-[90vw] px-4 pt-7 lg:pt-12 md:px-8 md:mx-14 flex flex-col lg:flex-row md:flex-row md:gap-7 lg:justify-center lg:gap-25 lg:px-12 content-box lg:w-[80vw] ">
              <div>
                <h1 className="text-[8rem] text-[#8a66f1] font-extrabold sm:text-[10rem] lg:text-[20rem]">
                  01
                </h1>
              </div>
              <div>
                <div className="md:flex md:flex-col md:items-center ">
                  <h2 className="text-[#595959] text-[1.3rem] font-bold tracking-wide md:text-[1.3rem] md:mt-20 lg:mt-10 md:text-center lg:text-[1.3rem] ">
                    Budgeting Made Easy
                  </h2>
                  <p className="text-[#8f8f8f] font-bold lg:font-light mt-3.5 text-[1.1rem] tracking-wide md:text-[1rem] lg:text-[1rem]">
                    Track your spending by category and
                    <br className="hidden md:block"></br> set spending
                    <br className="hidden"></br> limits with progress alerts
                  </p>
                </div>
                <div className="flex flex-col gap-3 mt-7 items-center lg:gap-4 lg:mt-7">
                  <div className="flex flex-col gap-1.5 lg:gap-4"></div>
                  <div>
                    <img
                      className="md:w-[50vw] lg:w-[30vw] w-[80vw] h-full sm:w-[55vw] mt-6 feature-img"
                      src={Budget}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#e0f8e0] h-[100vh] w-[90vw] md:flex md:gap-5 px-4 pt-7 md:px-8 md:mx-14 middle-content-box lg:pt-12 lg:w-[80vw] lg:justify-center lg:gap-15">
              <div>
                <h1 className="text-[8rem] text-[#8a66f1] font-extrabold sm:text-[10rem] lg:text-[20rem]">
                  02
                </h1>
              </div>
              <div>
                <div className="md:flex md:flex-col md:items-center">
                  <h2 className="text-[#595959] text-[1.3rem] font-bold tracking-wide md:text-[1.3rem] lg:text-[1.3rem] md:mt-20">
                    Savings Goals
                  </h2>
                  <p className="text-[#8f8f8f] font-bold lg:font-light mt-3.5 text-[1.1rem] tracking-wide md:text-[1.2rem] lg:text-[1rem]">
                    Set and track your savings with
                    <br className="hidden md:block"></br> personalized
                    <br className="hidden"></br> recommendations to
                    <br className="hidden md:block"></br> stay on target
                  </p>
                </div>
                <div className="lg:flex lg:flex-col lg:items-center">
                  <img
                    className="w-[80vw] mt-15 md:w-[50vw] lg:w-[25vw] lg:mt-15 sm:w-[55vw] sm:mx-auto feature-img"
                    src={Savings}
                  />
                </div>
              </div>
            </div>

            <div className="bg-[#ffe4e4] h-[100vh] w-[90vw] px-4 pt-7 md:px-8 md:mx-14 md:flex-row md:gap-5 middle-content-box lg:mx-23 lg:px-4 flex flex-col lg:pl-12 lg:w-[80vw] lg:justify-center lg:gap-15">
              <div>
                <h1 className="text-[8rem] text-[#8a66f1] font-extrabold sm:text-[10rem] lg:text-[20rem]">
                  03
                </h1>
              </div>
              <div>
                <div className="md:flex md:flex-col md:items-center">
                  <h2 className="text-[#595959] text-[1.3rem] font-bold tracking-wide md:text-[1.3rem] lg:text-[1.3rem] md:mt-20">
                    Expense Tracking
                  </h2>
                  <p className="text-[#8f8f8f] font-bold lg:font-light mt-3.5 text-[1.1rem] tracking-wide md:text-[1.2rem] lg:text-[1rem] ">
                    View and manage transactions,
                    <br className='"hidden md:block"'></br> filter by date,
                    <br className="hidden"></br>
                    amount, or category
                  </p>
                </div>
                <div className="lg:flex lg:flex-col lg:items-center">
                  <div>
                    <img
                      className="w-[80vw] mt-25 md:w-[50vw] lg:w-[30vw] lg:mt-15 sm:w-[55vw] sm:mx-auto feature-img"
                      src={Expenses}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#fff7d9] h-[100vh] w-[90vw] pt-7 px-4 md:px-8 md:flex-row md:gap-5 md:mx-14 end-content-box lg:mx-23 flex flex-col lg:flex-row lg:px-12 lg:pt-12 lg:w-[80vw] lg:justify-center lg:gap-25">
              <div>
                <h1 className="text-[8rem] text-[#8a66f1] font-extrabold sm:text-[10rem] lg:text-[20rem]">
                  04
                </h1>
              </div>
              <div>
                <div className="md:flex md:flex-col md:items-center">
                  <h2 className="text-[#595959] text-[1.3rem] font-bold tracking-wide md:text-[1.3rem] lg:text-[1.3rem] md:mt-20">
                    Insights & Analytics
                  </h2>
                  <p className="text-[#8f8f8f] font-bold lg:font-light mt-3.5 text-[1.1rem] tracking-wide md:text-[1.2rem] lg:text-[1rem]">
                    Understand your spending habits with{' '}
                    <br className="hidden lg:block"></br> in-depth
                    <br className="hidden"></br> reports and AI-driven insights
                  </p>
                </div>
                <div className=" mt-5 justify-center sm:mt-18 lg:mt-5">
                  <div>
                    <img
                      className="w-[90vw] mt-20 md:w-[55vw] lg:w-[30vw] sm:w-[50vw] sm:mt-2 feature-img"
                      src={InsightOne}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 lg:mt-0 bg-[#f7f3f3] rounded-3xl px-[0.5rem] py-[3rem] w-[90vw] lg:w-[80vw] mx-auto">
          <div>
            <h2 className="text-[#595959] font-[900] text-[1.6rem] text-center lg:text-[1.7rem] ">
              Get Started
            </h2>
          </div>
          <div className="mt-12 flex flex-col gap-14 md:grid md:grid-cols-2 md:gap-20 ">
            <div className="relative ">
              <h2 className="bg-[#8a66f1] w-[10rem] h-[4.5rem] text-white text-[1.2rem] static flex justify-center items-center font-extrabold ml-[2rem] lg:text-[1.3rem]">
                Create
              </h2>
              <div className="absolute top-0 left-0 bg-amber-700 w-[17rem] h-[4.5rem] moved flex justify-center items-center ml-[2rem]">
                <p className="text-white text-[1.2rem] font-extrabold lg:text-[1.3rem]">
                  a moneva account
                </p>
              </div>
              <div className="flex flex-col items-baseline px-[2rem]">
                <p className="text-[#595959] text-[1rem] mt-[8rem] leading-10">
                  Create your account in minutes and start
                  <br className="hidden sm:hidden lg:hidden"></br> your journey
                  to better finances, gain full
                  <br className="hidden sm:hidden lg:hidden"></br>
                  control over your spending, and achieve
                  <br className="hidden sm:hidden lg:hidden"></br> your goals
                  faster.
                </p>
              </div>
            </div>
            <div className="relative ">
              <h2 className=" bg-amber-700 w-[10rem] h-[4.5rem] text-white text-[1.2rem] static flex justify-center items-center font-extrabold ml-[2rem] lg:text-[1.3rem]">
                Set
              </h2>
              <div className="absolute top-0 left-0 bg-[#8a66f1] w-[17rem] h-[4.5rem] moved flex justify-center items-center ml-[2rem]">
                <p className="text-white text-[1.2rem] font-extrabold lg:text-[1.3rem]">
                  your budgets
                </p>
              </div>
              <div className="flex flex-col items-baseline">
                <p className="text-[#595959] text-[1rem] font-bold mt-[8rem] leading-10 px-[2rem]">
                  Define your spending category and set
                  <br className="hidden sm:hidden lg:hidden"></br> achievable
                  goals to track your progress,
                  <br className="hidden sm:hidden  lg:hidden"></br> build better
                  habits, and stay in control of
                  <br className="hidden sm:hidden lg:hidden"></br> your
                  finances.
                </p>
              </div>
            </div>
            <div className="relative ">
              <h2 className="bg-[#8a66f1] w-[10rem] h-[4.5rem] text-white text-[1.2rem] static flex justify-center items-center font-extrabold ml-[2rem] lg:text-[1.3rem]">
                Track
              </h2>
              <div className="absolute top-0 left-0 bg-amber-700 w-[17rem] h-[4.5rem] moved flex justify-center items-center ml-[2rem]">
                <p className="text-white text-[1.2rem] font-extrabold lg:text-[1.3rem]">
                  your expenses
                </p>
              </div>
              <div className="flex flex-col items-baseline">
                <p className="text-[#595959] text-[1rem] font-bold mt-[8rem] leading-10 px-[2rem]">
                  Monitor your progress with real-time
                  <br className="hidden sm:hidden lg:hidden"></br> updates and
                  AI-driven insights that help
                  <br className="hidden sm:hidden lg:hidden"></br> you identify
                  patterns, discover smarter
                  <br className="hidden sm:hidden lg:hidden"></br> ways to save,
                  and make confident
                  <br className="hidden sm:hidden lg:hidden"></br> financial
                  decisions every step of the way.
                </p>
              </div>
            </div>
            <div className="relative ">
              <h2 className=" bg-amber-700 w-[10rem] h-[4.5rem] text-white text-[1.2rem] static flex justify-center items-center font-extrabold ml-[2rem] lg:text-[1.3rem]">
                Reach
              </h2>
              <div className="absolute top-0 left-0 bg-[#8a66f1] w-[17rem] h-[4.5rem] moved flex justify-center items-center ml-[2rem]">
                <p className="text-white text-[1.2rem] font-extrabold lg:text-[1.3rem]">
                  your goals
                </p>
              </div>
              <div className="flex flex-col items-baseline">
                <p className="text-[#595959] text-[1rem] font-bold mt-[8rem] leading-10 px-[2rem] ">
                  Every expense you track brings you closer
                  <br className="hidden sm:hidden lg:hidden"></br> to the bigger
                  picture. Stay consistent and
                  <br className="hidden sm:hidden lg:hidden"></br> watch your
                  goals become reality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
