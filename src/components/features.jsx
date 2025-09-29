import React, { useEffect } from 'react';
import Budget from '../assets/images/budget.png';
import Entertainment from '../assets/images/entertainment.png';
import Utility from '../assets/images/utilities.png';
import Savings from '../assets/images/savings-new.png';
import Expenses from '../assets/images/expense.png';
import InsightTwo from '../assets/images/insights-2.png';
import InsightOne from '../assets/images/Insights-1.png';
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
        scrub: true,
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
    <div className="mb-[50rem] ">
      <div className="mb-[55rem] mt-16">
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
            <p className="text-[#8f8f8f] text-center text-[1rem] md:text-[1.2rem] lg:text-[1.1rem] xl:text-[1rem] maximize font-bold lg:font-light">
              Maximize your finances with our user friendly
              <br className="block lg:hidden" /> features that help
              <br className="hidden lg:flex" /> you track and manage your
              <br className="block lg:hidden" /> finances
            </p>
          </div>
        </div>

        <div className="mt-7 flex flex-col items-center gap-5 md:gap-10 lg:gap-0 mb-50 ">
          <div className="bg-[#ede8fd] min-h-[100vh] w-[90vw] px-4 pt-7 lg:pt-12 md:px-8 md:mx-14 flex flex-col lg:flex-row md:flex-row md:gap-7 lg:justify-center lg:gap-25 lg:px-12 content-box lg:w-[80vw] ">
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
                <div className="flex flex-col gap-1.5 lg:gap-4">
                  {/* <img
                className="w-full h-full object-contain md:w-[35vw] lg:w-[20vw]"
                src={Utility}
              /> */}
                  {/* <img
                className="w-[80vw] md:w-[35vw] lg:w-[20vw]"
                src={Entertainment}
              /> */}
                </div>
                <div>
                  <img
                    className="md:w-[50vw] lg:w-[25vw] w-[80vw] h-full sm:w-[55vw] "
                    src={Budget}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* <div className="flex flex-col gap-5 md:gap-10 lg:flex-col lg:gap-5 "> */}
          <div className="bg-[#e0f8e0] min-h-[100vh] w-[90vw] md:flex md:gap-5 px-4 pt-7 md:px-8 md:mx-14 middle-content-box lg:pt-12 lg:w-[80vw] lg:justify-center lg:gap-15">
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
                  className="w-[80vw] mt-15 md:w-[50vw] lg:w-[25vw] lg:mt-15 sm:w-[55vw] sm:mx-auto"
                  src={Savings}
                />
              </div>
            </div>
          </div>

          <div className="bg-[#ffe4e4] min-h-[100vh] w-[90vw] px-4 pt-7 md:px-8 md:mx-14 md:flex-row md:gap-5 middle-content-box lg:mx-23 lg:px-4 flex flex-col lg:pl-12 lg:w-[80vw] lg:justify-center lg:gap-15">
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
              <div className="flex justify-end -mx-4 md:-mx-8 lg:-mx-4">
                <div>
                  <img
                    className="w-[80vw] mt-25 mb-12 sm:mb-14 md:w-[67vw] lg:w-[31vw] lg:mt-18 sm:w-[70vw]"
                    src={Expenses}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#fff7d9] min-h-[100vh] w-[90vw] pt-7 px-4 md:px-8 md:flex-row md:gap-5 md:mx-14 end-content-box lg:mx-23 flex flex-col lg:flex-row lg:gap-25 lg:px-12 lg:pt-12 lg:w-[80vw] lg:justify-center lg:gap-25">
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
                  Understand your spending habits with
                  <br className='"hidden md:block"'></br> in-depth
                  <br className="hidden"></br>
                  reports and AI-driven insights
                </p>
              </div>
              <div className="flex gap-5 mt-17 justify-center sm:mt-18 lg:mt-10">
                {/* <div>
              <img
                className="w-[50vw] md:w-[40vw] lg:w-[21vw]"
                src={InsightTwo}
              />
            </div> */}
                <div>
                  <img
                    className="w-[80vw] h-full mt-8 md:w-[55vw] lg:w-[27vw] sm:w-[50vw] sm:mt-2"
                    src={InsightOne}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className=" bg-[url('./assets/images/mobilebg.png')] bg-cover w-[90%] bg-center h-[80vh] mx-auto mt-8 rounded-xl pt-[4rem] flex flex-col items-center">
        <div>
          <h2 className="text-[#fcfcfc] text-[1.4rem] text-center font-extrabold">
            Three Steps to <br className="block lg:hidden"></br> Financial
            Freedom
          </h2>
        </div> */}
      {/* <div className="flex flex-col mx-[1rem]">
          <div className="flex mt-[3rem] gap-3 ">
            <div>
              <h1 className="text-[#fcfcfc] text-[1rem] font-bold bg-[#8a66f1] rounded-full flex items-center justify-center w-8 h-8">
                1
              </h1>
            </div>
            <div>
              <h2 className="text-[#fcfcfc] text-[1.2rem] font-bold">
                Sign Up
              </h2>
              <p className="text-[#ebe4e4] text-[1rem] font-light pt-3">
                Create your account in minutes and start your
                <br className="block lg:hidden"></br> journey to better finances
              </p>
            </div>
          </div>
        </div> */}
      {/* </div> */}
      <div className="mt-8 ">
        <div>
          <h2 className="text-[#595959] font-[900] text-[1.6rem] text-center ">
            Get Started
          </h2>
        </div>
        <div className="mt-12 flex flex-col gap-7 ">
          <div className="relative ">
            <h2 className="bg-[#8a66f1] w-[10rem] h-[4.5rem] text-white text-[1.3rem] static flex justify-center items-center font-extrabold ml-[2rem]">
              Create
            </h2>
            <div className="absolute top-0 left-0 bg-amber-700 w-[17rem] h-[4.5rem] moved flex justify-center items-center ml-[2rem]">
              <p className="text-white text-[1.3rem] font-extrabold">
                a moneva account
              </p>
            </div>
            <div className="flex flex-col items-center px-[2rem]">
              <p className="text-[#595959] text-[0.9rem] font-bold mt-[8rem] leading-10">
                Create your account in minutes and start your journey to better
                finances, gain full control over your spending, and achieve your
                goals faster.
              </p>
            </div>
          </div>
          <div className="relative ">
            <h2 className=" bg-amber-700 w-[10rem] h-[4.5rem] text-white text-[1.3rem] static flex justify-center items-center font-extrabold ml-[2rem]">
              Set
            </h2>
            <div className="absolute top-0 left-0 bg-[#8a66f1] w-[17rem] h-[4.5rem] moved flex justify-center items-center ml-[2rem]">
              <p className="text-white text-[1.3rem] font-extrabold">
                your budgets
              </p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-[#595959] text-[0.9rem] font-bold mt-[8rem] leading-10 px-[2rem]">
                Define your spending category and set achievable goals to track
                your progress, build better habits, and stay in control of your
                finances.
              </p>
            </div>
          </div>
          <div className="relative ">
            <h2 className="bg-[#8a66f1] w-[10rem] h-[4.5rem] text-white text-[1.3rem] static flex justify-center items-center font-extrabold ml-[2rem]">
              Track
            </h2>
            <div className="absolute top-0 left-0 bg-amber-700 w-[17rem] h-[4.5rem] moved flex justify-center items-center ml-[2rem]">
              <p className="text-white text-[1.3rem] font-extrabold">
                your expenses
              </p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-[#595959] text-[0.9rem] font-bold mt-[8rem] leading-10 px-[2rem]">
                Monitor your progress with real-time updates and AI-driven
                insights that help you identify patterns, discover smarter ways
                to save, and make confident financial decisions every step of
                the way.
              </p>
            </div>
          </div>
          <div className="relative ">
            <h2 className=" bg-amber-700 w-[10rem] h-[4.5rem] text-white text-[1.3rem] static flex justify-center items-center font-extrabold ml-[2rem]">
              Reach
            </h2>
            <div className="absolute top-0 left-0 bg-[#8a66f1] w-[17rem] h-[4.5rem] moved flex justify-center items-center ml-[2rem]">
              <p className="text-white text-[1.3rem] font-extrabold">
                your goals
              </p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-[#595959] text-[0.9rem] font-bold mt-[8rem] leading-10 px-[2rem]">
                Every expense you track brings you closer to the bigger picture.
                Stay consistent and watch your goals become reality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
