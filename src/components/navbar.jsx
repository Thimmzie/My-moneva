import React, { useState } from 'react';
import { mobileNav, desktopNav } from '../../constants';
import Sitelogo from '../assets/images/Sitelogo.png';
import { RiMenu3Fill } from 'react-icons/ri';
import { IoCloseSharp } from 'react-icons/io5';
import Mobilebg from '../assets/images/mobilebg.png';
import Desktopbg from '../assets/images/desktopbg.png';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Hero from '../components/hero';

const navbar = () => {
  const [nav, setNav] = useState(true);

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

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <header className=" bg-[url('./assets/images/mobilebg.png')] w-max-[1240px] bg-no-repeat bg-cover px-8 pt-8 lg:px-50 md:px-15 xl:px-74 lg:bg-[url('./assets/images/desktopbg.png')] ">
      <nav className="backdrop-blur flex justify-between bg-[#ffffff] z-10 py-3.5 px-6 rounded-full mt-2.5 sticky top-0 lg:py-3 xl:py-3 md:">
        <img className="object-none" src={Sitelogo} alt="/" />
        <div className="hidden lg:flex xl:text-[0.9rem]">
          <ul className="flex gap-6 items-center text-[#616161]">
            {desktopNav.map((nav) => (
              <li
                key={nav.id}
                className=" hover:text-[#9170f2] hover:cursor-pointer"
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden lg:block">
          <button className="bg-purple rounded-full text-white px-5 py-3 transition duration-400 ease-in-out hover:bg-[#2a243d] hover:cursor-pointer xl:text-[0.8rem]">
            Get started
          </button>
        </div>
        <div onClick={handleNav} className="block lg:hidden">
          {!nav ? <IoCloseSharp size={27} /> : <RiMenu3Fill size={27} />}
        </div>
      </nav>
      <nav
        className={
          !nav
            ? ' fixed left-0 top-0 w-[100%] z-10q qq bg-[#f8f6f6] h-full p-5 ease-in-out duration-500'
            : 'fixed left-[-100%] ease-out'
        }
      >
        <div className="flex justify-between">
          <img className="object-none " src={Sitelogo} alt="/" style={{}} />
          <div onClick={handleNav}>
            {' '}
            <IoCloseSharp size={27} />
          </div>
        </div>
        <div className="block">
          <ul className="flex-col text-[#1b1036] pt-8 text-[1rem]">
            {mobileNav.map((nav) => (
              <li key={nav.id} className="p-4">
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="block">
          <button className="bg-purple text-white rounded-md px-4 py-2 mx-1 mt-2 text-[1rem]">
            Get started
          </button>
        </div>
      </nav>
      <Hero />
    </header>
  );
};

export default navbar;
