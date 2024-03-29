import { useEffect, useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getCategory } from "../../constants";

const DetailCategory = () => {
  const { id } = useParams();
  if (!id) {
    throw new Error("Error: category id identified as undefined");
  }

  const category = useMemo(() => getCategory(id), [id]);
  const navigate = useNavigate();

  useEffect(() => {
    if (category) {
      document.title = "Jual " + category.name + " | Manunggal Corp";
    }
  }, [category]);

  if (!category) {
    return <Navigate to="/notfound" replace />;
  } else {
    if (!category.subCategory) {
      return (
        <div className="flex justify-center items-center mt-16">
          <div className="xl:max-w-[1360px] w-full flex flex-col items-center">
            <div className="flex flex-col items-center gap-8 sm:px-16 px-6 sm:py-16 py-6 w-full">
              <h1 className="text-2xl font-bold border-b-4 border-b-secondary px-3 py-1">
                {category.name}
              </h1>
              <div className="w-full bg-thumbnail bg-cover bg-center rectangle-lg md:rounded-lg "></div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 w-full mt-4">
                {category.product.map((product) => (
                  <div
                    className="w-full bg-slate-100 rounded-lg overflow-hidden"
                    onClick={() =>
                      navigate(`/product/${category.id}/${product.id}`)
                    }
                  >
                    <div
                      key={product.id}
                      style={{
                        backgroundImage: `url(${product.photo})`,
                      }}
                      className={
                        "group transition w-full rectangle flex items-end bg-center bg-contain bg-no-repeat cursor-pointer relative"
                      }
                    >
                      <div className="transition-all text-white w-full bg-secondary px-4 py-3 group-hover:py-5 group-hover:text-lg group-hover:font-semibold">
                        <h1>{product.name}</h1>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="flex justify-center items-center mt-16">
          <div className="xl:max-w-[1360px] w-full flex flex-col items-center">
            <div className="flex flex-col items-center gap-8 sm:px-16 px-6 sm:py-16 py-6 w-full">
              <h1 className="text-2xl font-bold border-b-4 border-b-secondary px-3 py-1">
                {category.name}
              </h1>
              <div className="w-full bg-thumbnail bg-cover bg-center rectangle-lg md:rounded-lg "></div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 w-full mt-4">
                {category.subCategory.map((subCategory, index) => (
                  <div
                    className="w-full bg-slate-100 rounded-lg overflow-hidden"
                    onClick={() =>
                      navigate(
                        `/product/category/${category.id}/${subCategory.id}`
                      )
                    }
                  >
                    <div
                      key={index}
                      style={{
                        backgroundImage: `url(${subCategory.product[0].photo})`,
                      }}
                      className={
                        "group transition w-full rectangle flex items-end bg-center bg-contain bg-no-repeat cursor-pointer relative"
                      }
                    >
                      <div className="transition-all text-white w-full bg-secondary px-4 py-3 group-hover:py-5 group-hover:text-lg group-hover:font-semibold">
                        <h1>{subCategory.name}</h1>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
};

export default DetailCategory;
