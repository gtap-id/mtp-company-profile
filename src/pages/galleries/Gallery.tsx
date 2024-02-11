import { useMemo } from "react";
import { Navigate, useParams } from "react-router-dom";
import { getGallery } from "../../constants";

const Gallery = () => {
  const { id } = useParams();
  if (!id) {
    throw new Error("Error: Apalah");
  }
  const gallery = useMemo(() => getGallery(id), [id]);

  if (!gallery) {
    return <Navigate to="/notfound" />;
  }

  return (
    <div className="w-full flex justify-center mt-14">
      <div className="xl:max-w-[1360px] w-full">
        <div className="sm:px-16 px-6 sm:py-16 py-6 w-full">
          <div className="flex flex-col items-center gap-8 relative">
            <span className="anchor" id="gallery"></span>
            <div className="text-center">
              <h1 className="text-lg">{gallery.title}</h1>
              <h1 className="text-2xl font-bold border-b-4 border-b-secondary px-3 py-1">
                {gallery.subtitle}
              </h1>
            </div>
            <div className="flex flex-col gap-12 w-full">
              <div className="flex w-full bg-slate-500">
                <div className="basis-7/12"></div>
                <div className="basis-5/12 flex flex-col gap-6 items-center ">
                  <h1>{gallery.subtitle}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
