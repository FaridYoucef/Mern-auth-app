import React, { useState } from "react";

import { FaBars, FaTimes, FaUser } from "react-icons/fa";
import { PiSignInBold } from "react-icons/pi";
import { IoHomeOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>
      <div className=" relative bg-[#292929] w-full h-[50px] items-center flex justify-between px-10  ">
        <h1 className=" text-slate-50 text-xl ">MERN AUTH </h1>

        {userInfo ? (
          <div
            onClick={() => setIsOpen(!isOpen)}
            className=" flex  gap-2 items-center text-white"
          >
            <Link>{userInfo.name}</Link>
            <FaUser className="cursor-pointer" />

            {/* Dropdown menu */}
            {isOpen && (
              <div className="absolute right-0 top-[50px] mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                <a
                  href="/profile"
                  className="block px-4  text-gray-800 hover:bg-gray-200"
                >
                  Profile
                </a>
                <a
                  href="logout"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Logout
                </a>
              </div>
            )}
          </div>
        ) : (
          <div className=" hidden md:flex">
            <ul className="flex gap-5 cursor-pointer text-white ">
              <li className=" hover:border-b-2 border-gray-200 flex gap-1 items-center">
                <PiSignInBold />

                <Link to={"signup"}>Sign Up</Link>
              </li>
              <li className="hover:border-b-2 border-gray-200 flex gap-1 items-center ">
                <PiSignInBold />
                <Link to={"/signin"}>Sign In</Link>
              </li>
            </ul>
          </div>
        )}

        {/* Humburger menu */}
        <div onClick={handleClick} className=" md:hidden z-10">
          {!nav ? <FaBars className="cursor-pointer" /> : <FaTimes />}
        </div>
        <ul
          className={
            !nav
              ? "hidden"
              : "absolute top-0 left-0 w-full h-screen bg-[#292929] flex flex-col pt-20 gap-3 md:hidden text-white"
          }
        >
          <div className="border-b border-gray-600">
            <li className="p-6 text-xl  hover:bg-[#dddce60a] hover:text-white rounded-full flex gap-2 items-center">
              <IoHomeOutline />

              <Link to={"/"}>Home</Link>
            </li>
          </div>

          <div className="border-b border-gray-600">
            <li className="p-6 text-xl  hover:bg-[#dddce60a] hover:text-white rounded-full flex gap-2 items-center">
              <PiSignInBold />
              <Link to={"/signup"}>Sign up</Link>
            </li>
          </div>
          <div className="border-b border-gray-600">
            <li className="py-6 text-xl px-5 hover:bg-[#dddce60a] hover:text-white rounded-full flex gap-2 items-center">
              <PiSignInBold />

              <Link to={"/signin"}>Sing in</Link>
            </li>
          </div>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
