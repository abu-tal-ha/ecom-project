import { yupResolver } from "@hookform/resolvers/yup";
// import { useState } from "react";
import { useForm } from "react-hook-form";
import { registerValidation } from "../../validation/validation";
import { registerUser } from "../../database/firebaseAuth";
import { toast } from "react-toastify";
// import { creatUserProfile } from "../../database/firebaseUtils";
import { useNavigate } from "react-router";
import { createUserProfile } from "../../database/firebaseUtils";
import { useDispatch } from "react-redux";
import { setLoginUser } from "../../features/auth/authSlice";

function Register() {
  //   const [formData, setFormData] = useState({
  //     name: "",
  //     email: "",
  //     password: "",
  //     confirmPassword: "",
  //   });

  //   const handleInputChange = (e) => {
  //     console.log(e);

  //     const { name, value } = e.target;
  //     setFormData({ ...formData, [name]: value });
  //   };

  // //   const onSubmit = (e) => {
  // //     e.preventDefault();
  // //     // Add your registration logic here
  // //     // console.log("Form submitted", formData);
  // //   };

  // const onSubmit = (data) => {
  //     console.log(data);

  // }

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    const formData = {
      name: data.name,
      email: data.email,
      password: data.password,
      role: "user",
    };

    const res = await registerUser(formData);
    if (res.error) {
      toast.error(res.code);
    } 
    {
      createUserProfile({
          id: res.id,
          name: formData.name,
          email: formData.email,
          role: "user",
      });
      dispatch(
          setLoginUser({
              id: res.id,
              email: formData.email,
              role: "user",
          })
      );
      reset();
      toast.success("You are successfully registered");
      navigate("/login");
  }
    // else {
    //   // already registered;
    //   createUserProfile(res);
    //   reset();
    //   toast.success("You are successfully registered");
    //   navigate("/login");
    // }
    console.log(res);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(registerValidation) });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-700">
          Create an Account
        </h2>

        {/* Registration Form */}
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-600"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              //   name="name"
              //   value={formData.name}
              //   onChange={handleInputChange}
              className="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your name"
              {...register("name")}
            />

            {errors.name && (
              <span className="text-red-500">{errors.name?.message}</span>
            )}
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              //   name="email"
              //   value={formData.email}
              //   onChange={handleInputChange}
              className="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
              {...register("email")}
            />

            {errors.email && (
              <span className="text-red-500">{errors.email?.message}</span>
            )}
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              //   name="password"
              //   value={formData.password}
              //   onChange={handleInputChange}
              className="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
              {...register("password")}
            />

            {errors.password && (
              <span className="text-red-500">{errors.password?.message}</span>
            )}
          </div>
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-600"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              //   name="confirmPassword"
              //   value={formData.confirmPassword}
              //   onChange={handleInputChange}
              className="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Re-enter your password"
              {...register("confirmPassword")}
            />
            {errors.confirmPassword && (
              <span className="text-red-500">
                {errors.confirmPassword?.message}
              </span>
            )}
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Register
          </button>
        </form>

        {/* Login Link */}
        <p className="text-sm text-center text-gray-600">
          Already have an account?{" "}
          <a
            href="/login"
            className="font-medium text-blue-500 hover:underline"
          >
            Login here
          </a>
        </p>
      </div>
    </div>
  );
}

export default Register;
