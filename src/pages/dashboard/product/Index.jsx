import Table from "../../../component/Table";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

function Index() {
  const { products } = useSelector((store) => store.products);
  const { categories } = useSelector((store) => store.categories);

  const navigate = useNavigate();

  const updatedProducts = products.map((item) => {
    let findCate = categories.find((cat) => cat.id == item.productCategory);

    return {
      ...item,
      productCategory: findCate?.categoryName,
    };
  });

  return (
    <>
      <h1 className="text-3xl font-semibold mb-4">Our Products</h1>
      <Table
        tableContent={updatedProducts}
        onAdd={() => navigate("/dashboard/create-product")}
        onEdit={(data) => navigate(`/dashboard/edit-product/${data.id}`)}
      />
    </>
  );
}

export default Index;
