import React from "react";
import { galleries } from "../constants";

const Gallery = () => {
  return (
    <div className="flex flex-col items-center gap-8 relative">
      <span className="anchor" id="gallery"></span>
      <h1 className="text-2xl font-bold border-b-4 border-b-secondary px-3 py-1">
        Gallery
      </h1>
      <div className="sm:columns-4 columns-2 gap-3 w-full space-y-3">
        {galleries.slice(0, 15).map((gallery, index) => (
          <div className="transition-all duration-300 break-inside-avoid hover:scale-105 hover:rounded-2xl overflow-hidden hover:shadow-2xl relative">
            <div className="group w-full h-full absolute left-0 top-0 cursor-zoom-in">
              <div className="group transition w-full h-full opacity-0 group-hover:opacity-100 flex flex-col justify-end text-white relative">
                <div className="z-10 m-2 lg:m-4">
                  <h1 className="lg:text-sm text-[8px]">
                    {gallery.title}
                  </h1>
                  <h1 className="xl:text-xl lg:text-lg text-xs font-semibold">
                    {gallery.subtitle}
                  </h1>
                </div>
                <div className="transition bg-zinc-900 w-full h-full opacity-0 group-hover:opacity-45 absolute"></div>
              </div>
            </div>
            <img src={gallery.photo} alt="gallery" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
