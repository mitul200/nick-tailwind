// import React from 'react';

import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className=" padding-x py-8 absolute z-10  w-full">
      <nav className=" flex justify-between items-center max-container">
        <a href="/">
          <img
            height={49}
            width={130}
            src="/src/assets/images/header-logo.svg"
            alt=""
          />
        </a>
        <ul className="flex flex-1 justify-center gap-16 items-center max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                className="text-lg text-slate-gray font-monts-errat leading-normal"
                href={item.href}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className=" hidden max-lg:block">
          <img
            src="/src//assets/icons/hamburger.svg"
            height={25}
            width={25}
            alt=""
          />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
