import { useEffect, useMemo } from "react";
import { Navigate, useParams } from "react-router-dom";
import { getProduct } from "../../constants";
import { MapPinIcon, TagIcon } from "@heroicons/react/24/solid";
import { Customers } from "../../components";

const DetailProduct = () => {
  const { categoryId } = useParams();
  const { productId } = useParams();
  if (!categoryId) {
    throw new Error("Error: category id identified as undefined");
  }

  if (!productId) {
    throw new Error("Error: product id identified as undefined");
  }

  const product = useMemo(
    () => getProduct(categoryId, productId),
    [categoryId, productId]
  );

  if (!product) {
    return <Navigate to="/notfound" />;
  }

  useEffect(() => {
    document.title = "Jual " + product.name + " | Manunggal Corp";
  }, []);

  return (
    <div className="w-full flex justify-center mt-14">
      <div className="xl:max-w-[1360px] w-full">
        <div className="sm:px-16 px-6 sm:py-16 py-6 w-full">
          <div className="flex flex-col items-center gap-8 relative">
            <span className="anchor"></span>
            <div className="text-center">
              <h1 className="text-lg">{product.name}</h1>
            </div>
            <div className="flex flex-col sm:gap-12 gap-8 w-full">
              <div className="flex sm:flex-row flex-col w-full bg-slate-100 shadow-lg overflow-hidden rounded-xl">
                <div className="basis-7/12 overflow-hidden w-full">
                  <img
                    src={product.photo}
                    alt="photo"
                    className="object-cover w-[100%] sm:max-h-[600px] max-h-[300px] h-full "
                  />
                </div>
                <div className="basis-5/12 flex flex-col gap-6 py-4 px-6">
                  <h1 className="text-center text-lg font-medium">
                    {product.name}
                  </h1>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-2 font-semibold">
                        <MapPinIcon className="w-6" />
                        Manufacturer :
                      </div>
                      {product.manufacture}
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-2 font-semibold">
                        <TagIcon className="w-6" />
                        Brand :
                      </div>
                      {product.brand}
                    </div>
                  </div>
                </div>
              </div>
              <div className="sm:px-8 px-5">
                <p className="text-justify">{product.description}</p>
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

export default DetailProduct;
