

import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router";
import Avatar from "react-avatar";

function DashboardLayout() {
  const authUser = useSelector((store) => store.auth);

  return (
    <>
      <header className="bg-white shadow p-4 flex justify-between items-center">
        {/* Left button */}
        <Link
          to="/"
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
        >
          Home
        </Link>

        {/* Right buttons */}
        <div className="flex space-x-4">
          <Link
            to="/create-product"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
          >
            Create New Product
          </Link>
          <Link
            to="/create-category"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
          >
            Create New Category
          </Link>
          <button className="bg-red-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">Log Out</button>
        </div>
      </header>
      <h1 className="text-4xl text-red-500 text-center mt-5">
        <Avatar size="50" round={true} name={authUser.user.name} />{" "}
        {authUser.user.name}
      </h1>
      <div className="py-5">
        <Outlet />
      </div>
    </>
  );
}

export default DashboardLayout;
