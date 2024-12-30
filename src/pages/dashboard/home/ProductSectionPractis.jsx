import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router";
import Modal from "../../../component/Modal";


import { delteProducts, getproduct } from "../../../features/products/ProductsSlice";
import { removeFirebase } from "../../../database/firebaseUtils";



function ProductSectionPractis() {
  const products = useSelector((state) => state.products);
  const [deletProductId, setDeletProductId] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getproduct());
  }, [dispatch]);

  const handleDelete = () => {

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

  const handleModalClose = () => {
    setDeletProductId (false);
  };


 


  return (
    <div>
    {deletProductId && <Modal onDelete={handleDelete} onClose={handleModalClose} />}

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
  )
}

export default ProductSectionPractis