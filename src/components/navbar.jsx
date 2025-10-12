import React, { useState, useEffect } from 'react';
import { mobileNav, desktopNav } from '../../constants';
import Sitelogo from '../assets/images/sitelogo.png';
import { RiMenu3Fill } from 'react-icons/ri';
import { IoCloseSharp } from 'react-icons/io5';
import Mobilebg from '../assets/images/mobilebg.png';
import Desktopbg from '../assets/images/desktopbg.png';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Hero from '../components/hero';

const Navbar = () => {
  const [nav, setNav] = useState(true);
  const [bgImage, setBgImage] = useState(Mobilebg);

  useEffect(() => {
    const updateBackground = () => {
      setBgImage(window.innerWidth >= 1024 ? Desktopbg : Mobilebg);
    };

    updateBackground();
    window.addEventListener('resize', updateBackground);

    return () => window.removeEventListener('resize', updateBackground);
  }, []);

  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: 'nav',
        start: 'bottom top',
        end: 'top bottom',
        scrub: 1,
        toggleActions: 'play reverse play reverse',
      },
    });

    navTween.fromTo(
      'nav',
      {
        backdropFilter: 'blur(0px)',
        backgroundColor: 'rgba(255, 255, 255, 1)',
      },
      {
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(10px)',
        duration: 1,
        ease: 'power1.inOut',
      }
    );
  });

  const handleNav = () => setNav(!nav);

  const handleMobileLinkClick = (id) => {
    setNav(true);
    setTimeout(() => {
      const section = document.querySelector(`#${id}`);
      if (section) section.scrollIntoView({ behavior: 'smooth' });
    }, 500);
  };

  return (
    <section id="home">
      <header
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
        className="w-max-[1240px] bg-no-repeat bg-cover flex flex-col items-center h-[85%] pt-8 lg:px-50 md:px-15 xl:px-74"
      >
        <nav className="nav-bar backdrop-blur flex bg-[#ffffff] py-4 w-[85vw] mx-auto rounded-full mt-7.5 fixed top-0 lg:py-[0.7rem] xl:py-[0.7rem] z-10 lg:w-[57vw] xl:w-[53vw]">
          <img className="object-none" src={Sitelogo} alt="Site logo" />

          <div className="hidden lg:flex xl:text-[0.9rem]">
            <ul className="flex gap-6 items-center text-[#616161]">
              {desktopNav.map((nav) => (
                <li
                  key={nav.id}
                  className="hover:text-[#9170f2] hover:cursor-pointer"
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden lg:block">
            <button className="bg-[#8a66f1] rounded-full text-white w-[10vw] h-[7.5vh] flex items-center justify-center transition duration-400 ease-in-out hover:bg-[#704dd3] hover:cursor-pointer xl:text-[0.8rem] lg:py-3 lg:text-[0.8rem]">
              Get started
            </button>
          </div>

          <div onClick={handleNav} className="block lg:hidden">
            {!nav ? <RiMenu3Fill size={27} /> : <RiMenu3Fill size={27} />}
          </div>
        </nav>

        <nav
          className={`fixed top-0 left-0 h-full w-[100%] z-10 bg-[#f8f6f6] p-5 transform transition-all duration-500 ease-in-out
           ${
             nav ? '-translate-x-full opacity-0' : 'translate-x-0 opacity-100'
           }`}
        >
          <div className="flex justify-between mt-[1rem]">
            <img className="object-none" src={Sitelogo} alt="Site logo" />
            <div onClick={handleNav}>
              <IoCloseSharp size={29} />
            </div>
          </div>

          <div className="block">
            <ul className="flex-col text-[#1b1036] pt-8 text-[1rem]">
              {mobileNav.map((nav) => (
                <li key={nav.id} className="p-4">
                  <button
                    onClick={() => handleMobileLinkClick(nav.id)}
                    className="text-[1.1rem] text-[#1b1b1b] font-bold mobile-menu"
                  >
                    {nav.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="block">
            <button className="bg-purple text-white rounded-md w-[45vw] h-[7vh] mx-1 mt-7 text-[1.1rem] sm:w-[25vw] sm:h-[8.5vh]">
              Get started
            </button>
          </div>
        </nav>

        <Hero />
      </header>
    </section>
  );
};

export default Navbar;
