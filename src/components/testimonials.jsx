import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Mobilemap from '../assets/images/mobilemap.png';
import Seek from '../assets/images/SeekPng.png';
import EllipseOne from '../assets/images/Ellipse 25.png';
import EllipseTwo from '../assets/images/Ellipse 26.png';
import EllipseThree from '../assets/images/Ellipse 27.png';
import EllipseFour from '../assets/images/Ellipse 28.png';
import EllipseFive from '../assets/images/Ellipse 29.png';
import EllipseSix from '../assets/images/Ellipse 30.png';
import EllipseSeven from '../assets/images/Ellipse 31.png';
import EllipseEight from '../assets/images/Ellipse 32.png';
import EllipseNine from '../assets/images/Ellipse 33.png';
import Star from '../assets/images/4-stars.png';
import { Swiper, SwiperSlide } from 'swiper/react';

gsap.registerPlugin(ScrollTrigger);
const testimonials = () => {
  useEffect(() => {
    gsap.set('.testimnial-amazing', { y: 90, opacity: 0 });

    ScrollTrigger.create({
      trigger: '.testimnial-amazing',
      start: 'top 99%',
      end: 'bottom 60%',
      toggleActions: 'play reverse play reverse',

      onEnter: () =>
        gsap.to('.testimnial-amazing', {
          y: 0,
          duration: 0.4,
          ease: 'none',
          opacity: 1,
        }),
      onLeaveBack: () =>
        gsap.to('.testimnial-amazing', {
          y: 60,
          duration: 0.3,
          ease: 'none',
          opacity: 1,
          delay: 0.2,
        }),
    });

    gsap.set('.testimnial-maximize', { y: 90, opacity: 0 });

    ScrollTrigger.create({
      trigger: '.testimnial-maximize',
      start: 'top 99%',
      end: 'bottom 60%',
      toggleActions: 'play reverse play reverse',
      onEnter: () =>
        gsap.to('.testimnial-maximize', {
          y: 0,
          duration: 0.4,
          ease: 'none',
          opacity: 1,
          delay: 0.2,
        }),
      onLeaveBack: () =>
        gsap.to('.testimnial-maximize', {
          y: 60,
          duration: 0.2,
          ease: 'none',
          opacity: 1,
        }),
    });
    gsap.from('.ellipse', {
      opacity: 0,
      duration: 1,
      stagger: {
        each: 0.4,
        from: 'random',
      },
      ease: 'power1.out',
      scrollTrigger: {
        trigger: '.ellipse-container',
        start: 'top 80%',
        toggleActions: 'play none play none',
        once: true,
      },
    });
  }, []);

  return (
    <div className="mb-[50rem]">
      <div className="w-fit mx-auto">
        <p className="px-5 py-1 mon-sec-head lg:text-[0.7rem] font-bold lg:font-light">
          Testimonials
        </p>
      </div>
      <div className="flex flex-col gap-6 mt-4 items-center">
        <h2 className="text-[#595959] text-[1.48rem] font-extrabold text-center md:text-[1.68rem] lg:text-[1.8rem] xl:text-[2.1rem] testimnial-amazing">
          What people say about us
        </h2>
        <p className="text-[#8f8f8f] text-center text-[1rem] md:text-[1.2rem] lg:text-[1.1rem] xl:text-[1rem] testimnial-maximize font-bold lg:font-light mx-2">
          Don’t just take our word for it hear from our users
          <br className="block lg:hidden"></br> about their
          <br className="hidden lg:block"></br> experience with moneva
        </p>
      </div>
      <div className="mt-10 bg-[url('./assets/images/mobilemap.png')] bg-cover h-[80vh] bg-no-repeat relative lg:bg-[url('./assets/images/SeekPng.png')] lg:mx-[6rem] ellipse-container">
        <div>
          <img
            className="absolute w-[5%]  left-[2%] lg:w-[2.7%] lg:left-[10%] lg:top-[3%] ellipse"
            src={EllipseSix}
          />
          <img
            className="absolute w-[7%] top-[10%] left-[20%] lg:w-[3.8%] lg:left-[25%] lg:top-[15%] ellipse"
            src={EllipseFour}
          />
          <img
            className="absolute w-[4%] top-[17%] left-[60%] lg:w-[2.2%] lg:left-[68%] lg:top-[22%] ellipse"
            src={EllipseEight}
          />
          <img
            className="absolute w-[7%] top-[2%] left-[85%] lg:w-[3.8%] lg:left-[83%] lg:top-[3%] ellipse"
            src={EllipseTwo}
          />
          <img
            className="absolute w-[12%] top-[30%] left-[45%] lg:w-[6%] lg:left-[50%] ellipse"
            src={EllipseOne}
          />
          <img
            className="absolute w-[5%] top-[58%] left-[12%] lg:w-[2.7%] lg:left-[22%] ellipse"
            src={EllipseSeven}
          />
          <img
            className="absolute w-[4%] top-[48%] left-[30%] lg:w-[2.2%] lg:left-[36%] ellipse"
            src={EllipseNine}
          />
          <img
            className="absolute w-[5%] top-[52%] left-[75%] lg:w-[2.7%] ellipse"
            src={EllipseFive}
          />
          <img
            className="absolute w-[7%] top-[35%] left-[93%] lg:w-[3.8%] lg:left-[88%] lg:top-[33%] ellipse"
            src={EllipseThree}
          />
        </div>
        <Swiper>
          <SwiperSlide>
            <div className="bg-[#ffff] w-[80%] h-[40vh] review-box mx-auto mt-[28rem] mb-[2rem] flex flex-col items-center justify-center gap-5 px-6 ">
              <p className="text-[#595959] font-light tracking-wide  text-[1rem] text-center leading-7">
                Our platform uses blockchain technology to create,
                <br className="hidden sm:block"></br>
                manage, and validate event tickets. This ensures each
                <br className="hidden sm:block"></br> ticket is secure,
                transparent, and tamper-proof,
                <br className="hidden sm:block"></br> preventing fraud and
                scalping.
              </p>
              <h4 className="text-[#2b2929] font-bold text-[1.1rem]">
                Adetayo Johnson
              </h4>
              <img src={Star} />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default testimonials;
