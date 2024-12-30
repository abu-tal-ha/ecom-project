import { useDispatch, useSelector } from "react-redux";
import ProductItem from "./ProductItem";
import { updateProductsFavorite } from "../../../../features/products/ProductsSlice";
// import { useNavigate } from "react-router";

function ProductSection() {
  const { products } = useSelector((store) => store.products);
  const { categories } = useSelector((store) => store.categories);

  // const navigate = useNavigate();
  const dispatch = useDispatch();

  const updatedProducts = products.map((item) => {
    let findCate = categories.find((cat) => cat.id == item.productCategory);

    return {
      ...item,
      productCategory: findCate ?  findCate?.categoryName : "not available",
    };
  });

  const handleFavorite = (key) => {
    let newProductList =  products.map(product => {
      if (product.id === key) {
        return {
          ...product,
          isFavorite: !product.isFavorite,
        };
      }

      return product;
    });
    dispatch(updateProductsFavorite(newProductList))
    
  };

  return (
    <div className="py-8 bg-[#F6F9FC]">
      <div className="container mx-auto grid grid-cols-5 gap-4 ">
        {updatedProducts.map((product) => (
          <ProductItem
            onFavorite={handleFavorite}
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductSection;
