import React from 'react';
import { mobileNav, desktopNav } from '../../constants';
import Sitelogo from '../assets/images/Sitelogo.png';
import { RiMenu3Fill } from 'react-icons/ri';
import { IoCloseSharp } from 'react-icons/io5';

const Initnav = () => {
  return (
    <div className=" bg-[url('./assets/images/mobilebg.png')] w-max-[1240px] bg-no-repeat bg-cover px-8 pt-8 lg:px-50 md:px-15 xl:px-74 lg:bg-[url('./assets/images/desktopbg.png')]  z-50">
      <nav className="backdrop-blur flex justify-between bg-[#ffffff] z-10 py-4.5 px-6 rounded-full mt-5 sticky top-0 lg:py-3 xl:py-3 md:">
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
      </nav>
    </div>
  );
};

export default Initnav;
