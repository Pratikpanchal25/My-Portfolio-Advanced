import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

export default function Header() {
  const [isClicked, setIsClicked] = useState(false);

  const reverseFunc = () => {
    setIsClicked((prev) => !prev);

    console.log(isClicked);
  };
  return (
    <>
      <nav class="border-gray-200  bg-transparent  text-white w-full transition-[5s] ease-in-out">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div class="flex items-center space-x-3 rtl:space-x-reverse">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              class="h-8 scale-up-hor-left"
              alt="Flowbite Logo"
            />
            <span class="self-center text-2xl font-semibold whitespace-nowrap text-black">
              My Portfolio
            </span>
          </div>

          <button
            onClick={reverseFunc}
            className={` ${isClicked? 'rotate-90-cw hidden' : ""} text-black z-[1000] sm:hidden text-3xl z-100 fixed  right-5` }
          >
            { isClicked ? (
              <i class="fas fa-cloud"></i>
            ) : (
              <i class="fas fa-bars"></i>
            )}
          </button>

          {

            isClicked? 
            <div>
              <div
                className={
                  `bg-black sm:hidden ${isClicked? "block scale-in-center" : "hidden"} z-10 w-[22rem] sidebar  rounded-[1rem] flex-col justify-center items-center h-[32rem] text-white  right-0 bot fixed`
                }
              > 
                <div className="flex w-full pt-10 text-xl ">
               <div onClick={reverseFunc} className="w-full justify-end items-center h-1 pl-[18rem]"><img className="h-4" src="icon.png" alt="" /></div>
                </div>
                <ul className="w-full flex h-full flex-col justify-center items-center text-2xl">
                  <li className="mb-[2rem] text-2xl ">
                    
                    <Link onClick={reverseFunc} to="/">Home</Link>
                  </li>
                  <li className="m-[2rem] text-2xl">
                 
                    <Link onClick={reverseFunc} to="projects">Projects</Link>
                  </li>
                 
                  <li className="m-[2rem] text-2xl">
                    
                    <Link onClick={reverseFunc} to="education">Education</Link>
                  </li>
                  <li className="m-[2rem] text-2xl">
                    
                    <Link onClick={reverseFunc} to="contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>

            : ''
          }

          {/* Sidebar end*/}

          <div class=" hidden w-full md:block md:w-auto" id="navbar-solid-bg ">
            <ul class=" slide-in-bck-center flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700 text-black">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block  py-2 px-3 md:p-0 text-White ${
                      isActive ? "text-sky-600" : " "
                    } bg-blue-700 hover:text-sky-700 rounded md:bg-transparent    md:dark:bg-transparent`
                  }
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="projects"
                  className={({ isActive }) =>
                    `block hover:text-sky-700 py-2 px-3 md:p-0 text-White ${
                      isActive ? "text-sky-600" : " "
                    } bg-blue-700 rounded md:bg-transparent    md:dark:bg-transparent`
                  }
                  aria-current="page"
                >
                  Projects
                </NavLink>
              </li>
             

              <li>
                <NavLink
                  to="education"
                  className={({ isActive }) =>
                    `block py-2 hover:text-sky-700 px-3 md:p-0 text-White  ${
                      isActive ? "text-sky-600" : " "
                    } bg-blue-700 rounded md:bg-transparent    md:dark:bg-transparent`
                  }
                  aria-current="page"
                >
                  Education
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="contact"
                  className={({ isActive }) =>
                    `block py-2 hover:text-sky-700 px-3 md:p-0 text-White ${
                      isActive ? "text-sky-600" : " "
                    } bg-blue-700 rounded md:bg-transparent    md:dark:bg-transparent`
                  }
                  aria-current="page"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
