import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

export default function Navbar() {
  const navigate = useNavigate();

  const { carts } = useSelector((store) => store.carts);
  console.log(carts);

  return (
    <header className="bg-blue-900 text-white">
      {/* Top Section */}
      <div className="container mx-auto flex justify-between items-center py-2 px-4 text-sm">
        <div className="flex items-center space-x-4">
          <span className="flex items-center">
            <button>
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z"
                />
              </svg>
            </button>
            <i className=" hover:underline cursor-pointer  mr-1"></i> +8801606997818
          </span>
          <span className="flex items-center">
            <i className="fa fa-envelope mr-1"></i> talha@web-site.com
          </span>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="hover:underline">
            Theme FAQ's
          </a>
          <a href="#" className="hover:underline">
            Need Help?
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-white text-gray-800 border-t shadow-lg">
        <div className="container mx-auto flex items-center justify-between py-4 px-4">
          {/* Logo */}
          <div
            onClick={() => navigate("/")}
            className="text-2xl font-bold text-red-500 cursor-pointer"
          >
            Abutalha Shop
          </div>

          {/* Search Bar */}
          <div className="flex-1 mx-4">
            <div className="flex bg-gray-100 border border-gray-300 rounded-lg overflow-hidden">
              <input
                type="text"
                placeholder="Search and hit enter..."
                className="flex-1 px-4 py-2 bg-transparent focus:outline-none"
              />
              <select className="bg-gray-100 border-l border-gray-300 px-4 text-gray-600">
                <option>All Categories</option>
                <option>Category 1</option>
                <option>Category 2</option>
                <option>Category 3</option>
              </select>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-6">
            <a href="#" className="hover:underline">
              Home
            </a>
            <a href="#" className="hover:underline">
              Pages
            </a>
            <a href="#" className="hover:underline">
              User Account
            </a>
            <a href="#" className="hover:underline">
              Vendor Account
            </a>
            <a href="#" className="hover:underline">
              Track My Orders
            </a>
            <a href="#" className="hover:underline pr-3">
              Back to Demos
            </a>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-6">
            <div className="relative">
              <svg
                className="w-6 h-6 text-gray-800"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </div>
            <div onClick={() => navigate("/cart-details")} className="relative">
              <svg
                className="w-6 h-6 text-gray-800 cursor-pointer "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                />
              </svg>

              <span className="absolute -top-3 -right-3 bg-red-500 text-white text-xs rounded-full px-2">
                {!carts ? 0 : carts.length}
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
