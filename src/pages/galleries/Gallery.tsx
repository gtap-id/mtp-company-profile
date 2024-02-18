import { useMemo } from "react";
import { Navigate, useParams } from "react-router-dom";
import { getGallery } from "../../constants";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";
import { MapPinIcon } from "@heroicons/react/24/solid";
import { Customers } from "../../components";

const Gallery = () => {
  const { id } = useParams();
  if (!id) {
    throw new Error("Error: id identified as undefined");
  }
  const gallery = useMemo(() => getGallery(id), [id]);

  if (!gallery) {
    return <Navigate to="/notfound" />;
  }

  return (
    <div className="w-full flex justify-center mt-20">
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
            <div className="flex flex-col sm:gap-12 gap-8 w-full">
              <div className="flex sm:flex-row flex-col w-full bg-slate-100 shadow-lg overflow-hidden rounded-xl">
                <div className="basis-7/12 overflow-hidden w-full">
                  <img
                    src={gallery.photo}
                    alt="photo"
                    className="object-cover w-[100%] sm:max-h-[600px] max-h-[300px] h-full "
                  />
                </div>
                <div className="basis-5/12 flex flex-col gap-6 py-4 px-6">
                  <h1 className="text-center text-lg font-medium">
                    {gallery.subtitle}
                  </h1>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <CalendarDaysIcon className="w-6" />
                      {gallery.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPinIcon className="w-6" />
                      {gallery.location}
                    </div>
                    <div>
                      Related Products :
                      <ul className="mt-2">
                        {gallery.product.map((item) => (
                          <li
                            onClick={() => (
                              <Navigate
                                to={`/${item.categoryId}/${item.productId}`}
                              />
                            )}
                            className="transition min-w-[150px] p-2 text-sm inline-block bg-secondary text-white font-medium rounded-lg cursor-pointer hover:opacity-65"
                          >
                            {item.product}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sm:px-8 px-5">
                <p className="text-justify">
                  {gallery.description}
                </p>
              </div>
              <hr />
              <Customers />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
