import { Outlet } from "react-router";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { useEffect } from "react";
import { onValue, ref } from "firebase/database";
import { useDispatch, useSelector } from "react-redux";
import { db } from "../database/firebaseUtils";
import { getCategories } from "../features/categories/categorySlice";
import { getProducts } from "../features/products/ProductsSlice";
import { getCarts } from "../features/cart/cartSlice";

function HomeLayout() {
  const dispatch = useDispatch();

  const { user } = useSelector((store) => store.auth);

  useEffect(() => {
    const categoryRef = ref(db, "categories");
    const productRef = ref(db, "products");

    // Set category to redux for getting;

    const disableCategory = onValue(categoryRef, (snapshot) => {
      const updateCategoryList = [];

      snapshot.forEach((item) => {
        updateCategoryList.push({
          id: item.key,
          ...item.val(),
        });
      });

      dispatch(getCategories(updateCategoryList));
    });

    // Set product to redux for getting;
    const disableProduct = onValue(productRef, (snapshot) => {
      const updateProductList = [];

      snapshot.forEach((item) => {
        updateProductList.push({
          id: item.key,
          ...item.val(),
          isFavorite: false,
        });
      });

      dispatch(getProducts(updateProductList));
    });

    // set cart items;
    if (user) {
      const starCountRef = ref(db, `carts/${user.id}`);

      const disableCarts = onValue(starCountRef, (snapshot) => {
        const updateCartList = [];

        snapshot.forEach((item) => {
          updateCartList.push({
            id: item.key,
            ...item.val(),
          });
        });
        dispatch(getCarts(updateCartList));
      });
    }

    return () => {
      disableCategory();
      disableProduct();
    };
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default HomeLayout;
