import Image from "next/image";
import React from "react";
import logo from "../public/assets/logo.svg";

const Navbar = () => {
  return (
    <div className="flex justify-around min-w-full items-center py-2">
      <div className=" flex justify-between items-center w-[80%]">
        <section className="flex gap-[40px]  xsm:bg-blue-700">
          <span>
            <Image src={logo} alt="logo" />
          </span>
          <div className="flex gap-2 items-center itemTabs ">
            <span>Home</span>
            <span>About Us</span>
            <span>How it works</span>
            <span>Contact Us</span>
          </div>
        </section>
        <button className="bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-800 transition duration-200">
          Log in
        </button>
      </div>
    </div>
  );
};

export default Navbar;
