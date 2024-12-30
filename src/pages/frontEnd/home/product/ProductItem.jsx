import { useState } from "react";
import Popup from "./Popup";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { serProductToCart } from "../../../../database/firebaseUtils";

/* eslint-disable react/prop-types */
function ProductItem({ product, onFavorite }) {
  // eslint-disable-next-line react/prop-types
  
  const { user } = useSelector((store) => store.auth);
  const { carts } = useSelector((store) => store.carts);

  // useEffect(() => {
  //       if (user) {
  //         const starCountRef = ref(db, `carts/${user.id}`);
    
  //         const disableCarts = onValue(starCountRef, (snapshot) => {
  //           const updateCartList = [];
    
  //           snapshot.forEach((item) => {
  //             updateCartList.push({
  //               id: item.key,
  //               ...item.val(),
  //             });
  //           });
  //           dispatch(getCarts());
  //         });
  //       }
    
  // }, [dispatch]);

  const {
    id,
    productPrice,
    productName,
    productCategory,
    ProductImageUrl,
    isFavorite,
  } = product;

  const activeCart = carts.find((cart) => cart.productId == id);
  
  const [isPopup, setIsPopup] = useState(false);
  const navigate = useNavigate();

  const closeHandler = (e) => {
    e.stopPropagation();
    setIsPopup(false);
  };
  const handleClick = (e, id) => {
    e.stopPropagation();
    navigate(`/single-product/${id}`);
  };

  let svg = (
    <svg
      className="w-6 h-6 text-yellow-500"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        strokeWidth="2"
        d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597l1.753-4.022Z"
      />
    </svg>
  );
  let count = 5;
  let stats = Array(count).fill(svg);

  const handleAddToCart = (e) => {
    e.stopPropagation();
    if (user) {
      serProductToCart({
        userId: user.id,
        productId: id,
        quantity: 1,
      });
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="border shadow-lg" onClick={() => setIsPopup(true)}>
      <img
        className="w-full h-[160px] object-cover"
        src={ProductImageUrl}
        alt={productName}
      />
      <div className="flex w-full p-1">
        <div className="w-full">
          <h3
            onClick={(e) => handleClick(e, id)}
            className="font-bold mb-1 cursor-pointer"
          >
            {productName}
          </h3>
          <span className="text-sm text-blue-600 block mb-1">
            {productCategory}
          </span>
          <p className="text-red-600">{productPrice.toFixed(2)}</p>
          <span className="text-gray-500 line-through">$</span>
          <div className="flex mb-4 mt-3 ">
            {stats.map((stars, index) => (
              <div key={index}>{stars}</div>
            ))}
          </div>
        </div>

        <div className="w-[80px] flex flex-col justify-end mb-3 items-center">
          {!isFavorite ? (
            <svg
              onClick={() => onFavorite(id)}
              className="w-6 h-6 text-red-500 cursor-pointer"
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
                d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
              />
            </svg>
          ) : (
            <svg
              onClick={() => onFavorite(id)}
              className="w-6 h-6 text-red-500 cursor-pointer"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="m12.75 20.66 6.184-7.098c2.677-2.884 2.559-6.506.754-8.705-.898-1.095-2.206-1.816-3.72-1.855-1.293-.034-2.652.43-3.963 1.442-1.315-1.012-2.678-1.476-3.973-1.442-1.515.04-2.825.76-3.724 1.855-1.806 2.201-1.915 5.823.772 8.706l6.183 7.097c.19.216.46.34.743.34a.985.985 0 0 0 .743-.34Z" />
            </svg>
          )}

          <button
            onClick={handleAddToCart}
            disabled={activeCart ? true : false}
            className="bg-red-700 rounded disabled:bg-red-400 text-white py-2 px-4 inline-block mt-5"
          >
            <svg
              className="w-6 h-6 text-white  "
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
                d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
              />
            </svg>
          </button>

          {/* <svg
            className="w-6 h-6 text-red-700"
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
              d="M5 12h14m-7 7V5"
            />
          </svg> */}
        </div>
      </div>

      {isPopup && (
        <Popup
          onClose={closeHandler}
          onFavorite={() => onFavorite(id)}
          product={product}
        />
      )}
    </div>
  );
}

export default ProductItem;

//  import { FaHeart, FaPlus, FaStar } from "react-icons/fa";

//  const ProductItem = () => {
//    return (
//      <div className="max-w-xs mx-auto bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
//        <div className="relative">
//          <img
//          // Replace with your image URL
//            src="https://images.pexels.com/photos/13925793/pexels-photo-13925793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//            alt="Black Male T-Shirt"
//            className="w-full h-48 object-cover rounded-t-lg"
//          />
//          {/* <div className="absolute top-2 right-2 bg-pink-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
//            N
//          </div> */}
//        </div>
//        <div className="p-4">
//          <h2 className="text-gray-800 text-lg font-semibold mb-2">
//            Black Male T-Shirt
//          </h2>
//          <div className="flex items-center space-x-2">
//            <span className="text-red-500 font-bold text-lg">$20.00</span>
//            <span className="text-gray-500 line-through">$30.00</span>
//          </div>
//          <div className="flex items-center mt-2 space-x-1">
//            {Array(5)
//              .fill(0)
//              .map((_, index) => (
//                <FaStar key={index} className="text-yellow-400 h-4 w-4" />
//              ))}
//          </div>
//          <div className="flex items-center justify-between mt-4">
//            <button className="text-gray-400 hover:text-red-500 transition">
//              <FaHeart size={22} />
//            </button>
//            <button className="text-white bg-blue-500 hover:bg-blue-600 rounded-full p-2 transition">
//              <FaPlus size={17} />
//            </button>
//          </div>
//        </div>
//      </div>
//    );
//  };

//  export default ProductItem;
