import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { loginValidation } from "../../validation/validation";
import { auth, loginUser } from "../../database/firebaseAuth";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { setLoginUser } from "../../features/auth/authSlice";
import { signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { createUserProfile, getProfile } from "../../database/firebaseUtils";
// import { createUserProfile, getProfile } from "../../database/firebaseUtils";

function Login() {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const googleAuthProvider = new GoogleAuthProvider();

  // const handleGoogleLogin = () => {
  //   // Add your Google login logic here
  //   console.log("Google login button clicked!");
  // };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginValidation),
  });

  const onSubmit = async (data) => {
    const res = await loginUser(data);
    if (res.error) {
      toast.error(res.code);
    } else {
      let userProfile = await getProfile(res.id);

      const loginUserInfo = {
        id: res.id,
        email: res.email,
        name: userProfile.name,
        role: userProfile.role,
      };

      dispatch(setLoginUser(loginUserInfo));
      reset();
      navigate("/dashboard");
    }
  };

  const googleLogin = async () => {
    try {
      const res = await signInWithPopup(auth, googleAuthProvider);
      const user = res.user;

      const newUser = {
        id: user.uid,
        name: user.displayName,
        // role: "user",
        email: user.email,
      };

      const userProfile = await getProfile(user.uid);

      console.log(userProfile);

      if (!userProfile || userProfile.email != user.email) {
        // Create a new user;
        createUserProfile({
          ...newUser,
          role: "user",
        });
        dispatch(
          setLoginUser({
            ...newUser,
            role: "user",
          })
        );

        // console.log(newUser);
      } else {
        // Just set user information to redux;
        dispatch(
          setLoginUser({
            ...newUser,
            role: userProfile.role,
          })
        );
      }

      toast.success("You are logged in");
      navigate("/dashboard");
      // console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-700">
          Login to Your Account
        </h2>

        {/* Login Form */}
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
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
              className="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
              {...register("password")}
            />
            {errors.password && (
              <span className="text-red-500">{errors.password?.message}</span>
            )}
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Login
          </button>
        </form>

        {/* Google Login Button */}
        <button
          onClick={googleLogin}
          className="flex items-center justify-center w-full px-4 py-2 text-gray-700 bg-gray-100 border rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            className="w-5 h-5 mr-2"
          >
            <path
              fill="#FFC107"
              d="M43.6 20.4H42V20H24v8h11.3C33.7 31.7 29.4 34 24 34c-5.5 0-10.2-3.7-11.9-8.7L8 29.6C10.5 35.4 16.7 39 24 39c8.5 0 15.7-5.9 17.5-13.6.3-1.2.5-2.5.5-3.8 0-1.1-.1-2.1-.4-3.2z"
            />
            <path
              fill="#FF3D00"
              d="M10.1 24c0-1.5.3-3 1-4.3v-9H2.3C.8 14.3 0 19.1 0 24s.8 9.7 2.3 13.3l8.7-6.3c-.7-1.3-1-2.8-1-4.3z"
            />
            <path
              fill="#4CAF50"
              d="M24 10c3.6 0 6.8 1.4 9.2 3.6l6.9-6.9C36.1 3.1 30.4 0 24 0 16.7 0 10.5 3.6 8 9.4l8.7 6.3C13.8 12.7 18.5 10 24 10z"
            />
            <path
              fill="#1976D2"
              d="M24 48c6.4 0 12.1-2.1 16.6-5.7l-8.1-6.4C30.9 38.6 27.6 40 24 40c-7.2 0-13.4-4.4-15.9-10.8l-8.7 6.3C7.8 44.2 15.3 48 24 48z"
            />
          </svg>
          Login with Google
        </button>

        {/* Registration Link */}
        <p className="text-sm text-center text-gray-600">
          {` Don't have an account?`}
          <a
            href="/register"
            className="font-medium text-blue-500 hover:underline"
          >
            Register here
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
