import React from "react";
import { Footer, Navbar } from "./components";
import { Outlet } from "react-router-dom";
import clsx from "clsx";

const Layout = () => {
  const [transition, setTransition] = React.useState(0);
  React.useEffect(() => {
    setInterval(() => {
      setTransition(1);
    }, 1500);
  });

  return (
    <div className="w-full overflow-hidden relative z-10">
      <div
        className={clsx(
          "transition-all duration-1000 fixed w-full h-screen bg-secondary z-20",
          transition == 1 && "opacity-0 z-[-1]"
        )}
      ></div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
