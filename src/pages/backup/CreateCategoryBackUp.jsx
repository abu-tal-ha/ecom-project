import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { categoryFormSchema } from "../../validation/validation";
import {
  getFirebaseDataFormEdit,
  setDataFirebase,
  updateFirebase,
} from "../../database/firebaseUtils";
import { useNavigate, useParams } from "react-router";
import { useEffect } from "react";
import { toast } from "react-toastify";

function CreateCategory() {
  const navigate = useNavigate();
  const params = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(categoryFormSchema),
    defaultValues: {
      categoryName: "",
      categoryImageUrl: "",
    },
  });

  useEffect(() => {
    async function getData() {
      let res = await getFirebaseDataFormEdit("categories/" + params.id);

      reset(res);
      console.log(res);
    }

    if (params.id) {
      getData();
    } else {
      reset({
        categoryName: "",
        categoryImageUrl: "",
      });
    }
  }, [params]);

  const onSubmit = (data) => {
    // const db = getDatabase(app);
    // push(ref(db, "categories"), data);
    if (params.id) {
      // update category;
      updateFirebase(`categories/${params.id}`, data);
      toast.success("successful");
    } else {
      // Create Category;
      setDataFirebase("categories", data);
      toast.success("Creation is successful");
    }
    navigate("/");
    // navigate(-1);
  };

  // const resolveWithSomeData = new Promise((resolve) =>
  //   setTimeout(() => resolve("world"), 3000)
  // );
  // toast.promise(resolveWithSomeData, {
  //   pending: {
  //     render() {
  //       return "successful";
  //     },
  //     icon: false,
  //   },
  //   success: {
  //     render({ data }) {
  //       return `category successful ${data}`;
  //     },
  //     // other options
  //     icon: "🟢",
  //   },
  // });
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center mb-6">
          {params.id ? "Edit Category" : "Add Category"}
        </h2>

        <div className="mb-4">
          <label
            htmlFor="categoryName"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Category Name
          </label>
          <input
            {...register("categoryName")}
            type="text"
            id="categoryName"
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter product name"
          />
          {errors.categoryName && (
            <span className="text-red-500">{errors.categoryName?.message}</span>
          )}
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
            type="url"
            id="categoryImageUrl"
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter image URL"
          />
          {errors.categoryImageUrl && (
            <span className="text-red-500">
              {errors.categoryImageUrl?.message}
            </span>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg transition"
        >
          {params.id ? "Update Category" : "Add Category"}
        </button>
      </form>
    </div>
  );
}

export default CreateCategory;
