import { useForm } from "react-hook-form";
import { productFormSchema } from "../../../validation/validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { getFirebaseDataFormEdit, setDataFirebase, updateFirebase } from "../../../database/firebaseUtils";
// import { getFirebaseDataForEdit, setDataFirebase, updateFirebase } from "../../../database/firebaseUtils";
// import {
//   getFirebaseDataForEdit,

//   setDataFirebase,
//   updateFirebase,


// } from "../../../database/firebaseUtils";

export default function CreateProduct() {
  //   const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const { categories } = useSelector((store) => store.categories);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(productFormSchema),
    defaultValues: {
      productName: "",
      productPrice: "",
      ProductImageUrl: "",
      productCategory: "",
    },
  });

  const onSubmit = (data) => {
    if (params.id) {
      // Update product;
      updateFirebase(`products/${params.id}`, data);
      toast.success("Update is successful");
    } else {
      // Create product;
      setDataFirebase("products", data);
    }

    reset();
    navigate("/dashboard/index-product");
  };

  useEffect(() => {
    async function getData() {
      let res = await getFirebaseDataFormEdit("products/" + params.id);
      reset(res);
    }

    if (params.id) {
      getData();
    } else {
      reset();
    }
  }, [params]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-2xl font-bold text-center mb-6">Edit Product</h2>

        <div className="mb-4">
          <label
            htmlFor="productName"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Product Name
          </label>
          <input
            type="text"
            id="productName"
            name="productName"
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter product name"
            {...register("productName")}
          />
          {errors.productName && (
            <span className="text-red-500">{errors.productName?.message}</span>
          )}
          {/* {errors.productName && (
            <span className="text-red-500">{errors.productName?.message}</span>
          )} */}
        </div>

        {/* Product Price */}
        <div className="mb-4">
          <label
            htmlFor="productCategory"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Product Category
          </label>
          <select
            {...register("productCategory")}
            id="productCategory"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            {categories?.map((categoriy) => (
              <option key={categoriy.id} value={categoriy.id}>
                {categoriy.categoryName}
              </option>
            ))}
          </select>

          {errors.productCategory && (
            <span className="text-red-500">
              {errors.productCategory?.message}
            </span>
          )}
        </div>

        {/* Product Price */}
        <div className="mb-4">
          <label
            htmlFor="productPrice"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Product Price
          </label>
          <input
            type="number"
            id="productPrice"
            name="productPrice"
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter product price"
            {...register("productPrice")}
          />
          {errors.productPrice && (
            <span className="text-red-500">{errors.productPrice?.message}</span>
          )}
        </div>

        <div className="mb-6">
          <label
            htmlFor="ProductImageUrl"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Product Image URL
          </label>
          <input
            type="url"
            id="ProductImageUrl"
            name="ProductImageUrl"
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter image URL"
            {...register("ProductImageUrl")}
          />
          {errors.ProductImageUrl && (
            <span className="text-red-500">
              {errors.ProductImageUrl?.message}
            </span>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
