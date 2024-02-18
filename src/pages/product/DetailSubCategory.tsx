import { useEffect, useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getSubCategory } from "../../constants";

const DetailSubCategory = () => {
  const { categoryId } = useParams();
  const { subCategoryId } = useParams();
  if (!categoryId) {
    throw new Error("Error: category id identified as undefined");
  }

  if (!subCategoryId) {
    throw new Error("Error: sub category id identified as undefined");
  }

  const subCategory = useMemo(
    () => getSubCategory(categoryId, subCategoryId),
    [categoryId, subCategoryId]
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (subCategory) {
      document.title = "Jual " + subCategory.name + " | Manunggal Corp";
    }
  }, [subCategory]);

  if (!subCategory) {
    return <Navigate to="/notfound" replace />;
  } else {
    return (
      <div className="flex justify-center items-center mt-16">
        <div className="xl:max-w-[1360px] w-full flex flex-col items-center">
          <div className="flex flex-col items-center gap-8 sm:px-16 px-6 sm:py-16 py-6 w-full">
            <h1 className="text-2xl font-bold border-b-4 border-b-secondary px-3 py-1">
              {subCategory.name}
            </h1>
            <div className="w-full bg-thumbnail bg-cover bg-center rectangle-lg md:rounded-lg "></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 w-full mt-4">
              {subCategory.product.map((product, index) => (
                <div
                  className="w-full bg-slate-100 rounded-lg overflow-hidden"
                  onClick={() =>
                    navigate(`/product/${categoryId}/${subCategoryId}/${product.id}`)
                  }
                >
                  <div
                    key={index}
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
  }
};

export default DetailSubCategory;
