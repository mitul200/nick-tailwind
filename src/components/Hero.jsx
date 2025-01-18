// import React from 'react';

import Button from "./Button";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full xl:flex-row flex-col justify-center min-h-screen gap-10 max-container border-2   p-2 flex "
    >
      <div className=" relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p>Our Summer Collection</p>
        <h1>
          <span>The New Arrivel</span>
          <br />
          <span>Nike Shoes</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
          doloribus. Eveniet officiis facilis provident tenetur!
        </p>
        <Button />
      </div>
    </section>
  );
};

export default Hero;
