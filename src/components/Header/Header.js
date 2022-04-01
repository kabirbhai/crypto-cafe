import React from "react";
import { Link } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {
  return (
    <div className="sticky top-0 px-12 py-8 bg-white flex justify-center md:justify-between">
      <div className="hidden md:block">
        <Link to="/" className="text-4xl text-yellow-400">
          Crypto Cafe
        </Link>
      </div>
      <div className="flex text-xl gap-4">
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/coins">Coins</CustomLink>
        <CustomLink to="/contact">Contact</CustomLink>
        <CustomLink to="/about">About</CustomLink>
      </div>
    </div>
  );
};

export default Header;
