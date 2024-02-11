import Logo from "../assets/Logo MTP.png";
import { RiWhatsappFill } from "@remixicon/react";

const Footer = () => {
  return (
    <div className="bg-primary w-full flex justify-center ">
      <div className="xl:max-w-[1360px] w-full">
        <div className="sm:px-16 px-6 sm:py-16 py-6 w-full">
          <footer className="flex flex-col gap-6 justify-center items-center text-white">
            <div className="flex justify-center w-full">
              <div className="flex-1 flex flex-col gap-4">
                <img src={Logo} alt="" className="w-24" />
                <p className="max-w-[312px]">
                  Lorem ipsum dolor sit Amet. Simit Axemplar
                </p>
              </div>
              <div className="flex flex-[1.5] w-full gap-4">
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
                  <div className="flex gap-8">
                    <ul className="list-none">
                      <li className="flex gap-2 items-center font-extralight leading-6 hover:text-secondary cursor-pointer">
                        sales@manunggal.co.id
                      </li>
                      <li className="flex gap-2 items-center font-extralight leading-6 hover:text-secondary cursor-pointer">
                        info@manunggal.co.id
                      </li>
                    </ul>
                    <div className="flex gap-6">
                      <div className="flex flex-col justify-center items-center hover:scale-110 hover:text-secondary cursor-pointer">
                        <RiWhatsappFill className="w-12 h-12" />
                        John
                      </div>
                      <div className="flex flex-col justify-center items-center hover:scale-110 hover:text-secondary cursor-pointer">
                        <RiWhatsappFill className="w-12 h-12" />
                        Ryan
                      </div>
                      <div className="flex flex-col justify-center items-center hover:scale-110 hover:text-secondary cursor-pointer">
                        <RiWhatsappFill className="w-12 h-12" />
                        Alex
                      </div>
                      <div className="flex flex-col justify-center items-center hover:scale-110 hover:text-secondary cursor-pointer">
                        <RiWhatsappFill className="w-12 h-12" />
                        Bayu
                      </div>
                    </div>
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
