import { useForm } from "react-hook-form";
import { productFormSchema } from "../../validation/validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { setProduct } from "../../features/products/ProductsSlice";
import { useNavigate } from "react-router";

export default function CreateProduct() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

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
    },
  });
  
  const onSubmit = (data) => {
    console.log(data);
    dispatch(setProduct(data))
    reset();
    navigate('/')
  };

  // const onSubmit = (data) => {
  //   console.log(data);
  // };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md" onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-2xl font-bold text-center mb-6">Add Product</h2>

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
            <span className="text-red-500">{errors.ProductImageUrl?.message}</span>
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
