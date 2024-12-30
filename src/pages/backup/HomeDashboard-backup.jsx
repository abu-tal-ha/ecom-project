import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCategories,
  getcategories,
} from "../../features/categories/categorySlice";
import { Link } from "react-router";
import Modal from "../../component/Modal";
import { delteProducts, getproduct } from "../../features/products/ProductsSlice";
import { removeFirebase } from "../../database/firebaseUtils";

function HomeDashboard-backup() {
  const categoriessData = useSelector((state) => state.categories);
  const products = useSelector((state) => state.products);
  const [deletId, setDeletId] = useState(false);
  const [deletProductId, setDeletProductId] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getcategories());
    dispatch(getproduct());
  }, [dispatch]);

  // const categories = [
  //   { id: 1, name: "Toys", image: "https://via.placeholder.com/150" },
  //   {
  //     id: 2,
  //     name: "Fitness",
  //     image:
  //       "https://i.ibb.co.com/M1QxZgy/Whats-App-Image-2024-11-08-at-21-40-08-93423775.jpg/150",
  //   },
  //   { id: 3, name: "Gaming", image: "https://via.placeholder.com/200" },
  //   { id: 4, name: "Furniture", image: "https://via.placeholder.com/200" },
  //   { id: 5, name: "Apparel", image: "https://via.placeholder.com/200" },
  //   { id: 6, name: "Cameras", image: "https://via.placeholder.com/200" },
  // ];

  // const products = [
  //   {
  //     id: 1,
  //     name: "Black Male T-Shirt",
  //     price: "$20.00",
  //     image: "https://via.placeholder.com/150",
  //     rating: 5,
  //   },
  //   {
  //     id: 2,
  //     name: "Black Male T-Shirt",
  //     price: "$20.00",
  //     image:
  //       "https://i.ibb.co.com/M1QxZgy/Whats-App-Image-2024-11-08-at-21-40-08-93423775.jpg/150",
  //     rating: 5,
  //   },
  //   {
  //     id: 3,
  //     name: "Black Male T-Shirt",
  //     price: "$20.00",
  //     image: "https://via.placeholder.com/200",
  //     rating: 5,
  //   },
  //   {
  //     id: 4,
  //     name: "Black Male T-Shirt",
  //     price: "$20.00",
  //     image: "https://via.placeholder.com/200",
  //     rating: 5,
  //   },
  //   {
  //     id: 5,
  //     name: "Black Male T-Shirt",
  //     price: "$20.00",
  //     image: "https://via.placeholder.com/200",
  //     rating: 5,
  //   },
  //   {
  //     id: 6,
  //     name: "Black Male T-Shirt",
  //     price: "$20.00",
  //     image: "https://via.placeholder.com/200",
  //     rating: 5,
  //   },
  // ];

  const handleClick = (id) => {
    setDeletId(id);
  };

  const handleModalClose = () => {
    setDeletId(false);
  };

  // const handleDelete = () => {
  //   console.log('ok');

  // }
  const handleDelete = () => {
    if (deletId) {
      async function deleteCategory() {
       const del = await removeFirebase("categories/" + deletId)
       dispatch(deleteCategories(deletId));
      }
      deleteCategory();
      setDeletId(false);
    }

    if (deletProductId){
      async function deleteProduct() {
        const res = await removeFirebase(
          "products/" + deletProductId
        )
      }
      deleteProduct() ;
      dispatch(delteProducts(deletProductId));
      setDeletProductId(false);
    }
  };
  let categoriesSectionContent;


  if (categoriessData.isLoading) {
    categoriesSectionContent = (
      <div className="text-xl text-red-600">Data is loading ....</div>
    );
  }

  if (categoriessData.isLoading && categoriessData.isError) {
    categoriesSectionContent = (
      <div className="text-xl ">Error || {categoriessData.error}</div>
    );
  }

  if (
    !categoriessData.isLoading &&
    !categoriessData.isError &&
    categoriessData.categories.length == 0
  ) {
    categoriesSectionContent = (
      <div className="text-xl ">No category found</div>
    );
  }

  if (
    !categoriessData.isLoading &&
    !categoriessData.isError &&
    categoriessData.categories.length > 0
  ) {
    categoriesSectionContent = categoriessData.categories.map((category) => (
      <div
        key={category.id}
        className="border rounded-lg shadow hover:shadow-lg transition p-4 text-center w-full"
      >
        <img
          src={category.categoryImageUrl}
          alt={category.categoryName}
          className="w-full h-32 object-contain mb-4"
        />
        <p className="text-lg font-medium">{category.categoryName}</p>
        <div className="flex justify-between mt-4">
          <Link
            to={`/edit-category/${category.id}`}
            className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded"
          >
            Edit
          </Link>
          <button
            onClick={() => handleClick(category.id)}
            className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded"
          >
            Delete
          </button>
        </div>
      </div>
    ));
  }

  return (
    <div>
      {deletId && <Modal onDelete={handleDelete} onClose={handleModalClose} />}
      {deletProductId && <Modal onDelete={handleDelete} onClose={handleModalClose} />}
      <section className="bg-white py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-6">Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categoriesSectionContent}
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold text-center mb-10 ">Products</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.product.map((product) => (
              <div
                key={product.id}
                className="bg-white border rounded-lg shadow p-4 hover:shadow-lg transition"
              >
                <img
                  src={product.ProductImageUrl}
                  alt={product.productName}
                  className="w-full h-40 object-cover mb-4 rounded"
                />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {product.productName}
                </h3>
                <p className="text-red-500 text-lg font-bold">
                  ${product.productPrice.toFixed(2)}
                </p>
                <div className="flex items-center my-2">
                  {Array.from({ length: product.rating }).map((_, index) => (
                    <span key={index} className="text-yellow-500">
                      &#9733;
                    </span>
                  ))}
                  {Array.from({ length: 5 }).map(
                    // length: 5  product.rating
                    (_, index) => (
                      <span key={index} className="text-gray-300">
                        &#9733;
                      </span>
                    )
                  )}
                </div>
                <div className="flex justify-between mt-4">
                  <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded">
                    Edit
                  </button>
                  <button onClick={() => setDeletProductId(product.id)} className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded">
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomeDashboard-backup;
