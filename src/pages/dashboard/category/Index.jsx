import { useDispatch, useSelector } from "react-redux";
import Table from "../../../component/Table";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";

import { removeFirebase } from "../../../database/firebaseUtils";
import Modal from "../../../component/Modal";


function IndexCategory() {
  const { categories } = useSelector((store) => store.categories);
  const navigate = useNavigate();

  const [deleteCategoryId, setDeleteCategoryId] = useState(false);

  const dispatch = useDispatch();

  const handleAdd = () => {
    navigate("/dashboard/create-category");
  };

  const handleEdit = (data) => {
    navigate(`/dashboard/edit-category/${data.id}`);
  };

  const handleDelete = () => {
    if (deleteCategoryId) {
      async function deleteCategory() {
        const del = await removeFirebase("categories/" + deleteCategoryId);
        // dispatch(deleteCategories(deleteCategoryId));

      }
      deleteCategory();
      setDeleteCategoryId(false);
    }
    // setDeleteCategoryId(id);
  };

  useEffect(() => {
    // dispatch(getcategories());
  }, []);

  return (
    <>
      <h1 className="text-3xl font-semibold mb-4">Our Categories</h1>
      <Table
        tableContent={categories}
        onAdd={handleAdd}
        onDelete={(id) => setDeleteCategoryId(id)}
        onEdit={handleEdit}
        />
        {deleteCategoryId && <Modal onDelete={handleDelete} onClose={() => setDeleteCategoryId(!deleteCategoryId)} />}
    </>
  );
}

export default IndexCategory;
