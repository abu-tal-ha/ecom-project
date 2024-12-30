import { FaHeart, FaPlus, FaStar } from "react-icons/fa";

const ProductItem = () => {
  return (
    <div className="max-w-xs mx-auto bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
      <div className="relative">
        <img
        // Replace with your image URL
          src="https://i.ibb.co.com/jgW4JDN/Whats-App-Image-2024-11-08-at-21-40-08-93423775.jpg" 
          alt="Black Male T-Shirt"
          className="w-full h-48 object-cover rounded-t-lg"
        />
        {/* <div className="absolute top-2 right-2 bg-pink-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
          N
        </div> */}
      </div>
      <div className="p-4">
        <h2 className="text-gray-800 text-lg font-semibold mb-2">
          Black Male T-Shirt
        </h2>
        <div className="flex items-center space-x-2">
          <span className="text-red-500 font-bold text-lg">$20.00</span>
          <span className="text-gray-500 line-through">$30.00</span>
        </div>
        <div className="flex items-center mt-2 space-x-1">
          {Array(5)
            .fill(0)
            .map((_, index) => (
              <FaStar key={index} className="text-yellow-400 h-4 w-4" />
            ))}
        </div>
        <div className="flex items-center justify-between mt-4">
          <button className="text-gray-400 hover:text-red-500 transition">
            <FaHeart size={20} />
          </button>
          <button className="text-white bg-blue-500 hover:bg-blue-600 rounded-full p-2 transition">
            <FaPlus size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;