import React, { useState } from 'react';
import Logo from '../assets/images/sitelogo.png';
import { companyul, productul, resourcesul, legalul } from '../../constants';
import { RiArrowDropDownLine } from 'react-icons/ri';

const footer = () => {
  const [email, setEmail] = useState('');
  function handlechange(event) {
    setEmail(event.target.value);
  }

  const [dropOpen, setDropOpen] = useState({
    company: false,
    product: false,
    resources: false,
    legal: false,
  });
  function openlink(key) {
    setDropOpen((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  }
  return (
    <div className="mx-[1.5rem] mb-[10rem]">
      <div>
        <div>
          <div>
            <img className="w-[8.5rem]" src={Logo} />
            <p className="text-[#7e7e7e] text-[1.1rem] mt-6 font-bold">
              Take control of your finances today and <br></br>watch your
              financial dreams become reality.
            </p>
          </div>
          <div className="search text-[#7e7e7e] text-[1.1rem] mt-6 font-bold">
            <p>Follow our latest news</p>
            <div className="mt-3 relative">
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={handlechange}
                id="email"
              />
              <button className="bg-[#8a66f1] text-[#ffffff] border-0 rounded-[7rem] w-[28vw] h-[6.5vh] hover:bg-[#5a32cace] md:px-9 md:h-[7.5vh] hover:cursor-pointer transition-all duration-600 ease-out transform absolute right-1.5 text-[0.8rem]">
                Submit
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[2rem] mt-[3rem] min-h-[100hv]">
          <div className="quick-link-div">
            <div>
              <p className="text-[#595959] text-[1.25rem] font-bold">Company</p>
              <div className="hidden md:block ">
                <ul className="mobile mt-4 flex flex-col gap-[1.4rem]">
                  {companyul.map((nav) => {
                    return (
                      <li key={nav.id} className="text-[#595959] text-[1.1rem]">
                        <a href={`#${nav.id}`}>{nav.title}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
              {dropOpen.company && (
                <div className="block md:hidden">
                  <ul className="mobile mt-4 flex flex-col gap-[1.4rem]">
                    {companyul.map((nav) => {
                      return (
                        <li
                          key={nav.id}
                          className="text-[#595959] text-[1.1rem]"
                        >
                          <a href={`#${nav.id}`}>{nav.title}</a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>
            <div className="block md:hidden">
              <RiArrowDropDownLine
                className={`transition-transform duration-700 ${
                  dropOpen.company ? 'rotate-180' : ''
                }`}
                size={40}
                onClick={() => openlink('company')}
              />
            </div>
          </div>
          <div className="quick-link-div">
            <div>
              <p className="text-[#595959] text-[1.25rem] font-bold">Product</p>
              <div className="hidden md:block ">
                <ul className="mobile mt-4 flex flex-col gap-[1.4rem]">
                  {productul.map((nav) => {
                    return (
                      <li key={nav.id} className="text-[#595959] text-[1.1rem]">
                        <a href={`#${nav.id}`}>{nav.title}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
              {dropOpen.product && (
                <div className="block md:hidden">
                  <ul className="mobile mt-4 flex flex-col gap-[1.4rem]">
                    {productul.map((nav) => {
                      return (
                        <li
                          key={nav.id}
                          className="text-[#595959] text-[1.1rem]"
                        >
                          <a href={`#${nav.id}`}>{nav.title}</a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>
            <div className="block md:hidden">
              <RiArrowDropDownLine
                className={`transition-transform duration-700 ${
                  dropOpen.product ? 'rotate-180' : ''
                }`}
                size={40}
                onClick={() => openlink('product')}
              />
            </div>
          </div>
          <div className="quick-link-div">
            <div>
              <p className="text-[#595959] text-[1.25rem] font-bold">
                Resources
              </p>
              <div className="hidden md:block ">
                <ul className="mobile mt-4 flex flex-col gap-[1.4rem]">
                  {resourcesul.map((nav) => {
                    return (
                      <li key={nav.id} className="text-[#595959] text-[1.1rem]">
                        <a href={`#${nav.id}`}>{nav.title}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
              {dropOpen.resources && (
                <div className="block md:hidden">
                  <ul className="mobile mt-4 flex flex-col gap-[1.4rem]">
                    {resourcesul.map((nav) => {
                      return (
                        <li
                          key={nav.id}
                          className="text-[#595959] text-[1.1rem]"
                        >
                          <a href={`#${nav.id}`}>{nav.title}</a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>
            <div className="block md:hidden">
              <RiArrowDropDownLine
                className={`transition-transform duration-700 ${
                  dropOpen.resources ? 'rotate-180' : ''
                }`}
                size={40}
                onClick={() => openlink('resources')}
              />
            </div>
          </div>
          <div className="quick-link-div">
            <div>
              <p className="text-[#595959] text-[1.25rem] font-bold">Legal</p>
              <div className="hidden md:block ">
                <ul className="mobile mt-4 flex flex-col gap-[1.4rem]">
                  {legalul.map((nav) => {
                    return (
                      <li key={nav.id} className="text-[#595959] text-[1.1rem]">
                        <a href={`#${nav.id}`}>{nav.title}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
              {dropOpen.legal && (
                <div className="block md:hidden">
                  <ul className="mobile mt-4 flex flex-col gap-[1.4rem]">
                    {legalul.map((nav) => {
                      return (
                        <li
                          key={nav.id}
                          className="text-[#595959] text-[1.1rem]"
                        >
                          <a href={`#${nav.id}`}>{nav.title}</a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>
            <div className="block md:hidden">
              <RiArrowDropDownLine
                className={`transition-transform duration-700 ${
                  dropOpen.legal ? 'rotate-180' : ''
                }`}
                size={40}
                onClick={() => openlink('legal')}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="downpart"></div>
    </div>
  );
};

export default footer;
