import Logo from "../assets/Logo MTP + text (samping).svg";
import { RiMailFill, RiWhatsappFill } from "@remixicon/react";

const Footer = () => {
  return (
    <div className="bg-primary w-full flex justify-center ">
      <div className="xl:max-w-[1360px] w-full">
        <div className="sm:px-16 px-6 sm:py-16 py-6 w-full">
          <footer className="flex flex-col gap-6 justify-center items-center text-white pt-6">
            <div className="flex md:flex-row flex-col gap-y-4 gap-3 items-start justify-center w-full">
              <div className="basis-2/6 flex md:flex-col gap-4">
                <img src={Logo} alt="" className="sm:w-60 w-34" />
                <p className="max-w-[312px] sm:text-base text-sm">
                  Lorem ipsum dolor sit Amet. Simit Axemplar
                </p>
              </div>
              <div className="flex basis-4/6 flex-col w-full gap-4">
                <div className="flex md:flex-row flex-col gap-4">
                  <div className="flex flex-col gap-2 min-w-[150px]">
                    <h1 className="font-medium">Lokasi Kami</h1>
                    <ul className="list-none">
                      <li className="font-extralight leading-6">
                        Rukan Puri Mutiara Blok A76
                      </li>
                      <li className="font-extralight leading-6">
                        Jl. Griya Utama, Sunter Agung
                      </li>
                      <li className="font-extralight leading-6">
                        Kec. Tanjung Priok
                      </li>
                      <li className="font-extralight leading-6">
                        Kota Adm Jakarta Utara
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h1 className="font-medium">Contact Sales</h1>
                    <ul className="list-none">
                      <li className="flex gap-2 items-center font-extralight leading-6 hover:text-secondary cursor-pointer">
                        <a className="flex items-center" href="">
                          <RiMailFill className="w-5" />
                          sales@manunggal.co.id
                        </a>
                      </li>
                      <li className="flex gap-2 items-center font-extralight leading-6 hover:text-secondary cursor-pointer">
                        <a className="flex items-center" href="">
                          <RiMailFill className="w-5" />
                          info@manunggal.co.id
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex lg:gap-4 gap-2 w-full justify-center">
                  <div className="flex flex-col justify-center items-center hover:scale-110 hover:text-secondary cursor-pointer">
                    <a
                      className="flex md:flex-col items-center"
                      href="https://wa.me/"
                    >
                      <RiWhatsappFill className="w-8 lg:12" />
                      John
                    </a>
                  </div>
                  <div className="flex flex-col justify-center items-center hover:scale-110 hover:text-secondary cursor-pointer">
                    <a
                      className="flex md:flex-col items-center"
                      href="https://wa.me/"
                    >
                      <RiWhatsappFill className="w-8 lg:12" />
                      Ryan
                    </a>
                  </div>
                  <div className="flex flex-col justify-center items-center hover:scale-110 hover:text-secondary cursor-pointer">
                    <a
                      className="flex md:flex-col items-center"
                      href="https://wa.me/"
                    >
                      <RiWhatsappFill className="w-8 lg:12" />
                      Alex
                    </a>
                  </div>
                  <div className="flex flex-col justify-center items-center hover:scale-110 hover:text-secondary cursor-pointer">
                    <a
                      className="flex md:flex-col items-center"
                      href="https://wa.me/"
                    >
                      <RiWhatsappFill className="w-8 lg:12" />
                      Bayu
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-white">
              <p className="font-normal text-center leading-[27px] text-white">
                Copyright Ⓒ 2024 Global Teknik Adiperkasa.
              </p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Footer;
