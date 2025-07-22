import React, { useState } from 'react';
import Sitelogo from '../assets/images/Sitelogo.png';
import { RiMenu3Fill } from 'react-icons/ri';
import { IoCloseSharp } from 'react-icons/io5';
import Mobilebg from '../assets/images/mobilebg.png';
import Desktopbg from '../assets/images/desktopbg.png';
import Herobg from '../assets/images/herobg.png';

const navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <header className=" bg-[url('./assets/images/mobilebg.png')]   w-max-[1240px] bg-no-repeat bg-cover px-8 pt-8 lg:px-50 xl:px-74 lg:bg-[url('./assets/images/desktopbg.png')] ">
      <div className="flex justify-between bg-[#ffffff] py-4.5 px-6 rounded-full mt-2.5 sticky top-0 xl:py-3">
        <img className="object-none" src={Sitelogo} alt="/" />
        <div className="hidden lg:flex xl:text-[0.9rem]">
          <ul className="flex gap-6 items-center text-[#616161]">
            <li className=" hover:text-[#9170f2] hover:cursor-pointer">
              <a href="#">Home</a>
            </li>
            <li className=" hover:text-[#9170f2] hover:cursor-pointer">
              <a href="#">Pricing</a>
            </li>
            <li className=" hover:text-[#9170f2] hover:cursor-pointer">
              <a href="#">Feature</a>
            </li>
            <li className=" hover:text-[#9170f2] hover:cursor-pointer">
              <a href="#">Reviews</a>
            </li>
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
      </div>
      <div
        className={
          !nav
            ? ' fixed left-0 top-0 w-[100%] bg-[#f8f6f6] h-full p-5 ease-in-out duration-500'
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
            <li className="p-4">
              <a href="#">Home</a>
            </li>
            <li className="p-4">
              <a href="#">Pricing</a>
            </li>
            <li className="p-4">
              <a href="#">Feature</a>
            </li>
            <li className="p-4">
              <a href="#">Reviews</a>
            </li>
          </ul>
        </div>
        <div className="block">
          <button className="bg-purple text-white rounded-md px-4 py-2 mx-1 mt-2 text-[1rem]">
            Get started
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center mt-20 gap-4 md:mt-13">
        <h2 className="text-[#fefefe] text-[2rem] font-[900] text-center md:text-[2.3rem] lg:text-[3rem] ">
          Take Control of Your
          <span className="block text-center">Finances with Moneva</span>
        </h2>
        <p className="text-[#c3c1c8] text-center text-[1rem] md:text-[1.1rem] lg:text-[1rem] ">
          Your all-in-one tool for managing budgets,
          <br className="lg:hidden"></br> tracking expenses, and
          <br className="hidden lg:block"></br> reaching savings goals
        </p>
        <div className="flex flex-col gap-4 mt-3.5 lg:flex-row">
          <button className="w-[85vw] mx-auto py-4 text-[1.1rem]  bg-[#8a66f1] text-white rounded-full lg:w-[17vw] lg:text-[0.95rem] xl:w-[12vw] xl:py-3 xl:text-[0.9rem] lg:hover:cursor-pointer lg:hover:bg-[#8b66f1ce] transition duration-400 ease-in-out">
            Get started
          </button>
          <button className="w-[85vw] mx-auto py-4 text-[1.1rem]  bg-[#150e29] text-white rounded-full border border-white lg:w-[17vw] lg:text-[0.95rem] xl:w-[12vw] xl:py-3 xl:text-[0.9rem] lg:hover:cursor-pointer lg:hover:bg-[#fcfbfb] lg:hover:text-[#141414] transition duration-600 ease-in-out">
            Explore features
          </button>
        </div>
      </div>
      <div className="mt-5 xl:mt-14">
        <img className="" src={Herobg} alt="/" />
      </div>
    </header>
  );
};

export default navbar;
