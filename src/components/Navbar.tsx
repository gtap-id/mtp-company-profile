import React from "react";
import Logo from "../assets/Logo MTP + text (bawah).svg";
import { nav } from "../constants";
import clsx from "clsx";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import {
  Bars3BottomRightIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navState, setNavState] = React.useState(0);
  const [sideNavState, setSideNavState] = React.useState(0);
  const [isHome, setIsHome] = React.useState(0);
  const [dropdown, setDropdown] = React.useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setNavState(1);
    } else {
      setNavState(0);
    }
  };

  const handleNav = () => {
    if (sideNavState == 0) {
      setSideNavState(1);
    } else {
      setSideNavState(0);
    }
  };

  React.useEffect(() => {
    if (location.pathname !== "/") {
      setIsHome(1);
    } else {
      setIsHome(0);
    }
  }, [location.pathname]);

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={clsx(
          "transition-all duration-100 absolute w-full flex justify-center items-center text-white shadow-none py-5 md:px-12 px-10 z-10",
          navState == 1 && "!fixed bg-white !text-primary !shadow-lg !py-9",
          isHome == 1 && "!text-primary bg-white"
        )}
      >
        <div className="w-full">
          <nav className="flex justify-between items-center">
            <img
              onClick={() => navigate("/")}
              src={Logo}
              alt="mtp"
              className="w-24 xl:w-40 cursor-pointer "
            />
            <div className="flex items-center md:pr-12">
              {isHome == 1 ? (
                <div className="group flex flex-col items-center">
                  <div
                    onClick={() => navigate(-1)}
                    className="flex items-center sm:gap-4 gap-2 cursor-pointer py-1 px-3 group-hover:opacity-65"
                  >
                    <ArrowLeftIcon className="w-6 select-none" />
                    Back
                  </div>
                  <div className="transition-all border-t-2 border-t-secondary w-0 group-hover:w-full"></div>
                </div>
              ) : (
                <>
                  <ul className="list-none sm:flex hidden items-center gap-4 lg:gap-8">
                    {nav.map((nav, index) => (
                      <li
                        key={nav.id}
                        className="transition-all text-base lg:text-lg border-b-2 border-b-transparent hover:border-b-secondary hover:scale-105 relative"
                        onClick={() => {
                          if (nav.child) {
                            if (dropdown == 0) {
                              setDropdown(index);
                            } else {
                              setDropdown(0);
                            }
                          }
                        }}
                      >
                        {nav.child ? (
                          <p className="cursor-pointer select-none flex gap-2">
                            {nav.title}
                            {dropdown == index ? (
                              <ChevronDownIcon className="w-4" />
                            ) : (
                              <ChevronUpIcon className="w-4" />
                            )}
                          </p>
                        ) : (
                          <a href={`/#${nav.id}`}>{nav.title}</a>
                        )}
                        {nav.child ? (
                          <div
                            className={clsx(
                              "w-auto min-w-full absolute bg-white text-primary hidden flex-col text-nowrap mt-2 shadow-md",
                              dropdown == index && "!flex"
                            )}
                          >
                            {nav.child?.map((child) => (
                              <a
                                key={child.id}
                                href={`/product/${child.id}`}
                                className="hover:bg-light-gray px-3 py-1"
                              >
                                {child.title}
                              </a>
                            ))}
                          </div>
                        ) : null}
                      </li>
                    ))}
                    <a
                      className="bg-secondary rounded-lg px-4 py-2 font-semibold text-white text-sm"
                      href=""
                    >
                      Contact Us
                    </a>
                  </ul>
                  <Bars3BottomRightIcon
                    onClick={handleNav}
                    className={clsx(
                      "w-6 sm:hidden block",
                      sideNavState == 1 && "text-primary"
                    )}
                  />
                </>
              )}
            </div>
          </nav>
        </div>
      </div>
      <div
        className={clsx(
          "fixed sm:hidden transition-all duration-300 px-12 py-40 h-[200vh] bg-white text-primary right-0 top-0 translate-x-64 z-[9]",
          sideNavState == 1 && "!translate-x-0"
        )}
      >
        <ul className="list-none flex flex-col items-start gap-2 justify-center w-full">
          {nav.map((nav, index) => (
            <li
              key={nav.id}
              className="transition-all text-base lg:text-lg border-b-2 border-b-transparent hover:border-b-secondary hover:scale-105 relative"
              onClick={() => {
                if (nav.child) {
                  if (dropdown == 0) {
                    setDropdown(index);
                  } else {
                    setDropdown(0);
                  }
                }
              }}
            >
              {nav.child ? (
                <p className="cursor-pointer select-none flex gap-2">
                  {nav.title}
                  {dropdown == index ? (
                    <ChevronDownIcon className="w-4" />
                  ) : (
                    <ChevronUpIcon className="w-4" />
                  )}
                </p>
              ) : (
                <a href={`/#${nav.id}`}>{nav.title}</a>
              )}
              {nav.child ? (
                <div
                  className={clsx(
                    "w-auto min-w-full absolute bg-white text-primary hidden flex-col text-nowrap shadow-md left-[-6.5rem] top-0",
                    dropdown == index && "!flex"
                  )}
                >
                  {nav.child?.map((child) => (
                    <Link
                      key={child.id}
                      to={``}
                      className="hover:bg-light-gray px-3 py-1"
                    >
                      {child.title}
                    </Link>
                  ))}
                </div>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
