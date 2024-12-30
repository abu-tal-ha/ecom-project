import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";


function CreateCategory() {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    rating: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  
  const schema = yup
    .object({
      categoryName: yup.string().required(),
      categoryImageUrl: yup.string().required().url(),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center mb-6">
          Create New Category
        </h2>

        <div className="mb-4">
          <label
            htmlFor="categoryName"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Category Name
          </label>
          <input 
          {...register('categoryName')}
      
            type="text"
            id="categoryName"
            name="categoryName"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter product name"
          />
          {errors.categoryName && <span className="text-red-500">{errors.categoryName?.message}</span>}
        </div>

        <div className="mb-6">
          <label
            htmlFor="categoryImageUrl"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Category Image URL
          </label>
          <input
          {...register("categoryImageUrl")}
            type="text"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter image URL"
          />
           {errors.categoryImageUrl && <span className="text-red-500">{errors.categoryImageUrl?.message}</span>}
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg transition"
        >
          Create New Category
        </button>
      </form>
    </div>
  );
}

export default CreateCategory;
