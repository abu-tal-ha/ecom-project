import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import CartDetailsList from "./CartDetailsList";
import { ref, remove } from "firebase/database";
import { toast } from "react-toastify";
import { db } from "../../../database/firebaseUtils";

export default function CartDetails() {
  const { user } = useSelector((store) => store.auth);
  const { carts } = useSelector((store) => store.carts);
  const { products } = useSelector((store) => store.products);

  console.log(carts, products);

  const updateCarts = carts.map((cart) => {
    let findProduct = products.find((product) => product.id === cart.productId);
    return {
      cartId: cart.id,
      productId: cart.productId,
      productName: findProduct.productName,
      productImage: findProduct.ProductImageUrl,
      productPrice: findProduct.productPrice,
      quantity: cart.quantity,
    };
  });

  let totalPrice = updateCarts.reduce((total, cart) => {
    return total + (cart.productPrice  * cart.quantity);
  }, 0);
  if (!user) {
    return <Navigate to={"/login"} />;
  }

  
    const handleClick = () => {
      remove(ref(db, `carts/${user.id}`));
      toast.success("Checkout payment successful");
    };



  return (
    <div className="container mx-auto py-6 max-w-md mt-[20px]">
      <h1 className="text-4xl font-bold mb-4 text-center">
        Hello {user.name}, Your Cart Details
      </h1>
      <ul>
        {updateCarts.map((cart) => (
          <CartDetailsList key={cart.cartId} cart={cart} />
        ))}
      </ul>
      <button onClick={handleClick} className=" px-6 py-2 bg-red-600 rounded flex items-center text-white mt-6 mb-6 mx-auto">
        Checkout Now and pay ${totalPrice}
      </button>
    </div>
  );
}
