import { useEffect } from "react";
import {
  Hero,
  About,
  Products,
  Gallery,
  Customers,
} from "../components";

const Home = () => {
  useEffect(() => {
    document.title = "Manunggal Corp | Lorem ipsum ";
  }, []);

  return (
    <>      
      <div
        id="home"
        className="bg-hero bg-cover bg-no-repeat bg-center xl:bg-top flex justify-center items-center relative"
      >
        <div className="xl:max-w-[1280px] w-full 2xl:px-0 px-10">
          <Hero />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex flex-col items-center w-full">
          <div className="xl:max-w-[1360px] w-full ">
            <div className="sm:px-16 px-6 sm:py-16 py-6">
              <About />
            </div>
          </div>
          <div className="xl:max-w-[1360px] w-full ">
            <hr className="w-2/3 md:w-4/5" />
            <div className="sm:px-16 px-6 sm:py-16 py-6 w-full overflow-hidden">
              <Customers />
            </div>
          </div>
          <div className="xl:max-w-[1360px] w-full ">
            <hr className="w-2/3 md:w-4/5" />
            <div className="sm:px-16 px-6 sm:py-16 py-6 w-full">
              <Products />
            </div>
          </div>
          <div className="bg-light-gray w-full flex justify-center">
            <div className="xl:max-w-[1360px] w-full">
              <div className="sm:px-16 px-6 sm:py-16 py-6 w-full">
                <Gallery />
              </div>
            </div>
          </div>
          <div className="xl:max-w-[1360px] w-full ">
            <div className="sm:px-16 px-6 sm:py-16 py-6">
              {/* <Testimonials /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
