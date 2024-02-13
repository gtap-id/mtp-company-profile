import { galleries } from "../constants";
import { useNavigate } from "react-router-dom";

const Gallery = () => {
  const navigate = useNavigate();

  if (location.pathname.startsWith("/gallery")) {
    return (
      <div className="w-full flex justify-center mt-14">
        <div className="xl:max-w-[1360px] w-full">
          <div className="sm:px-16 px-6 sm:py-16 py-6 w-full">
            <div className="flex flex-col items-center gap-8 relative">
              <span className="anchor" id="gallery"></span>
              <h1 className="text-2xl font-bold border-b-4 border-b-secondary px-3 py-1">
                Gallery
              </h1>
              <div className="sm:columns-4 columns-2 gap-3 w-full space-y-3">
                {galleries.map((gallery) => (
                  <div key={gallery.id} onClick={() => navigate(`/gallery/${gallery.id}`)} className="transition-all duration-150 break-inside-avoid hover:scale-105 lg:hover:rounded-2xl hover:rounded-lg overflow-hidden hover:shadow-2xl relative">
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
                        <div className="transition bg-zinc-900 w-full h-full opacity-0 group-hover:opacity-60 absolute"></div>
                      </div>
                    </div>
                    <img src={gallery.photo} alt="gallery" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col items-center gap-8 relative">
        <span className="anchor" id="gallery"></span>
        <h1 className="text-2xl font-bold border-b-4 border-b-secondary px-3 py-1">
          Gallery
        </h1>
        <div className="sm:columns-4 columns-2 gap-3 w-full space-y-3">
          {galleries.slice(0, 12).map((gallery) => (
            <div
              key={gallery.id}
              onClick={() =>  navigate(`/gallery/${gallery.id}`)}
              className="transition-all duration-150 break-inside-avoid hover:scale-105 lg:hover:rounded-2xl hover:rounded-lg overflow-hidden hover:shadow-2xl relative"
            >
              <div className="group w-full h-full absolute left-0 top-0 cursor-zoom-in">
                <div className="group transition w-full h-full opacity-0 group-hover:opacity-100 flex flex-col justify-end text-white relative">
                  <div className="z-10 m-2 lg:m-4">
                    <h1 className="lg:text-sm text-[8px]">{gallery.title}</h1>
                    <h1 className="xl:text-xl lg:text-lg text-xs font-semibold">
                      {gallery.subtitle}
                    </h1>
                  </div>
                  <div className="transition bg-zinc-900 w-full h-full opacity-0 group-hover:opacity-60 absolute"></div>
                </div>
              </div>
              <img src={gallery.photo} alt="gallery" />
            </div>
          ))}
        </div>
        <div className="group flex flex-col items-center">
          <h1
            onClick={() => navigate("/gallery")}
            className="md:text-lg cursor-pointer group-hover:opacity-65 py-1 px-3"
          >
            Lihat Lebih Lanjut
          </h1>
          <div className="transition-all border-t-2 border-t-secondary w-0 group-hover:w-full"></div>
        </div>
      </div>
    );
  }
};

export default Gallery;
