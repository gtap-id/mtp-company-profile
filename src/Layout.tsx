import React from "react";
import { Footer, Navbar } from "./components";
import { Outlet } from "react-router-dom";
import Logo from "./assets/Logo MTP.png";
import clsx from "clsx";

const Layout = () => {
  const [transition, setTransition] = React.useState(0);
  React.useEffect(() => {
    setInterval(() => {
      setTransition(1);
    }, 500);
  });

  return (
    <div className="w-full overflow-hidden relative z-10">
      <div
        className={clsx(
          "transition-all duration-1000 fixed w-screen h-screen bg-white z-20 ",
          transition == 1 && "opacity-0 z-[-1]"
        )}
      >
        <div className="flex w-full h-full justify-center items-center">
          <img src={Logo} alt="" className="w-20 white"/>
        </div>
      </div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
