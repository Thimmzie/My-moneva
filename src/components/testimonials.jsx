import React, { useRef, useEffect } from 'react';
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
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
// import 'swiper/css/ effect-coverflow';

gsap.registerPlugin(ScrollTrigger);
const testimonials = () => {
  useEffect(() => {
    gsap.fromTo(
      '.testimnial-amazing',
      { y: 120, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.4,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.testimnial-amazing',
          start: 'top 99%',
          end: 'bottom 60%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    gsap.fromTo(
      '.testimnial-maximize',
      { y: 160, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.4,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.testimnial-maximize',
          start: 'top 99%',
          end: 'bottom 60%',
          toggleActions: 'play none none reverse',
        },
      }
    );
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
    gsap.fromTo(
      '.swiper-box',
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: '.swiper-box',
          start: 'top 60%',
          toggleActions: 'play none play none',
        },
      }
    );
  }, []);

  return (
    <section id="reviews">
      <div className="mb-[15rem]">
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
            Don’t just take our word for it hear from our users about their
            <br className="hidden sm:block lg:block"></br> experience with
            moneva
          </p>
        </div>
        <div className="mt-10 bg-[url('./assets/images/mobilemap.png')] bg-cover h-[80vh] bg-no-repeat relative lg:bg-[url('./assets/images/SeekPng.png')] lg:mx-[6rem] ellipse-container">
          <div>
            <img
              className="absolute w-[8%]  left-[2%] sm:w-[6%] md:w-[4.5%]  lg:w-[2.7%] lg:left-[10%] lg:top-[3%] ellipse"
              src={EllipseSix}
            />
            <img
              className="absolute w-[10%] top-[10%] left-[20%] sm:w-[8%] md:w-[6.5%] lg:w-[3.8%] lg:left-[25%] lg:top-[15%] ellipse"
              src={EllipseFour}
            />
            <img
              className="absolute w-[7%] top-[17%] left-[60%] sm:w-[5%] md:w-[3.5%] lg:w-[2.2%] lg:left-[68%] lg:top-[22%] ellipse"
              src={EllipseEight}
            />
            <img
              className="absolute w-[10%] top-[2%] left-[80%] sm:w-[8%] md:w-[6.5%] lg:w-[3.8%] lg:left-[83%] lg:top-[3%] ellipse"
              src={EllipseTwo}
            />
            <img
              className="absolute w-[19%] top-[30%] left-[45%] sm:w-[17%] md:w-[12%] lg:w-[6%] lg:left-[50%] ellipse"
              src={EllipseOne}
            />
            <img
              className="absolute w-[9%] top-[58%] left-[12%] sm:w-[7%] md:w-[5.5%] lg:w-[2.7%] lg:left-[22%] ellipse"
              src={EllipseSeven}
            />
            <img
              className="absolute w-[7%] top-[48%] left-[30%] sm:w-[5%] md:w-[3.5%] lg:w-[2.2%] lg:left-[36%] ellipse"
              src={EllipseNine}
            />
            <img
              className="absolute w-[8%] top-[52%] left-[75%] sm:w-[6%] md:w-[4.5%] lg:w-[2.7%] ellipse"
              src={EllipseFive}
            />
            <img
              className="absolute w-[10%] top-[35%] left-[87%] sm:w-[8%] md:w-[6.5%] lg:w-[3.8%] lg:left-[88%] lg:top-[33%] ellipse"
              src={EllipseThree}
            />
          </div>
          <div className="relative swiper-box">
            <Swiper
              modules={[Navigation]}
              navigation
              effect
              slidesPerView={1}
              className="myswiper"
              noSwiping={true}
              noSwipingClass="swiper-no-swiping"
            >
              <SwiperSlide className="swiper-no-swiping">
                <div className="bg-[#ffff] w-[75%] h-[37vh] review-box mx-auto mt-[28rem] mb-[2rem] flex flex-col items-center justify-center gap-3 px-6 sm:w-[65%] md:px-[3rem] lg:w-[40%] lg:h-[40vh] lg:mt-[22rem]">
                  <p className="text-[#595959] font-bold tracking-wide  text-[0.9rem] text-center leading-7">
                    Moneva has completely transformed how I manage my finances.
                    The AI-powered budgeting tools make it so easy to set
                    realistic limits and stick to them, while the predictive
                    alerts help me avoid overspending
                  </p>
                  <h4 className="text-[#2b2929] font-extrabold text-[1rem]">
                    Adetayo Johnson
                  </h4>
                  <img src={Star} />
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-no-swiping">
                <div className="bg-[#ffff] w-[75%] h-[37vh] review-box mx-auto mt-[28rem] mb-[2rem] flex flex-col items-center justify-center gap-3 px-6 sm:w-[65%] md:px-[3rem] lg:w-[40%] lg:h-[40vh] lg:mt-[22rem]">
                  <p className="text-[#595959] font-bold tracking-wide  text-[0.9rem] text-center leading-7">
                    Moneva makes tracking my daily expenses effortless. The
                    clean interface lets me see exactly where my money is going,
                    and the custom categories keep everything organized.
                  </p>
                  <h4 className="text-[#2b2929] font-extrabold text-[1rem]">
                    Daniel Ezinne
                  </h4>
                  <img src={Star} />
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-no-swiping">
                <div className="bg-[#ffff] w-[75%] h-[37vh] review-box mx-auto mt-[28rem] mb-[2rem] flex flex-col items-center justify-center gap-3 px-6 sm:w-[65%] md:px-[3rem] lg:w-[40%] lg:h-[40vh] lg:mt-[22rem] ">
                  <p className="text-[#595959] font-bold tracking-wide  text-[0.9rem] text-center leading-7">
                    Since I started using Moneva, I’ve been able to save more
                    each month. The real-time updates and AI-driven insights
                    give me clarity and confidence in my financial decisions.
                  </p>
                  <h4 className="text-[#2b2929] font-extrabold text-[1rem]">
                    Mercy Odubona
                  </h4>
                  <img src={Star} />
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-no-swiping">
                <div className="bg-[#ffff] w-[75%] h-[37vh] review-box mx-auto mt-[28rem] mb-[2rem] flex flex-col items-center justify-center gap-3 px-6 sm:w-[65%] md:px-[3rem] lg:w-[40%] lg:h-[40vh] lg:mt-[22rem]">
                  <p className="text-[#595959] font-bold tracking-wide  text-[0.9rem] text-center leading-7">
                    I love how Moneva turns complex budgeting into something
                    simple. Setting financial goals and actually sticking to
                    them has never been this easy or stress-free.
                  </p>
                  <h4 className="text-[#2b2929] font-extrabold text-[1rem]">
                    Emeka Peters
                  </h4>
                  <img src={Star} />
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-no-swiping">
                <div className="bg-[#ffff] w-[75%] h-[37vh] review-box mx-auto mt-[28rem] mb-[2rem] flex flex-col items-center justify-center gap-3 px-6 sm:w-[65%] md:px-[3rem] lg:w-[40%] lg:h-[40vh] lg:mt-[22rem] ">
                  <p className="text-[#595959] font-bold tracking-wide  text-[0.9rem] text-center leading-7">
                    Moneva gives me peace of mind with its predictive alerts and
                    smart reminders. I no longer worry about overspending
                    because I always know what’s ahead.
                  </p>
                  <h4 className="text-[#2b2929] font-extrabold text-[1rem]">
                    Ruth Danjuma
                  </h4>
                  <img src={Star} />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default testimonials;
