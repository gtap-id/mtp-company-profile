import { products } from "../constants";

const Products = () => {
  return (
    <div className="flex flex-col items-center gap-8 relative">
      <span className="anchor" id="products"></span>
      <h1 className="text-2xl font-bold border-b-4 border-b-secondary px-3 py-1">
        Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 gap-y-2 w-full">
        {products.map((category) => (
          <a
            className="w-full bg-slate-100 rounded-lg overflow-hidden"
            href={`/product/${category.id}`}
          >
            <div
              key={category.id}
              style={{ backgroundImage: `url(${category.product[0].photo})` }}
              className={
                "group transition w-full rectangle flex items-end bg-center bg-contain bg-no-repeat cursor-pointer relative"
              }
            >
              <div className="transition-all text-white w-full bg-secondary px-4 py-3 group-hover:py-5 group-hover:text-lg group-hover:font-semibold">
                <h1>{category.name}</h1>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Products;
