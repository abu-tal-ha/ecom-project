import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router";
import Modal from "../../../component/Modal";

import { deleteCategories, getcategories } from "../../../features/categories/categorySlice";
import { removeFirebase } from "../../../database/firebaseUtils";


function CategorySectionPractis() {
 const categoriessData = useSelector((state) => state.categories);
  const [deletId, setDeletId] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getcategories());
  }, [dispatch]);

  const handleClick = (id) => {
    setDeletId(id);
  };

  const handleModalClose = () => {
    setDeletId(false);
  };

  // const handleDelete = () => {
  //   console.log('ok');

  // }
  const handleDelete = () => {
    if (deletId) {
      async function deleteCategory() {
       const del = await removeFirebase("categories/" + deletId)
       dispatch(deleteCategories(deletId));

       console.log(del);
       
      }
      deleteCategory();
      setDeletId(false);
    }

  };
  let categoriesSectionContent;


  if (categoriessData.isLoading) {
    categoriesSectionContent = (
      <div className="text-xl text-red-600">Data is loading ....</div>
    );
  }

  if (categoriessData.isLoading && categoriessData.isError) {
    categoriesSectionContent = (
      <div className="text-xl ">Error || {categoriessData.error}</div>
    );
  }

  if (
    !categoriessData.isLoading &&
    !categoriessData.isError &&
    categoriessData.categories.length == 0
  ) {
    categoriesSectionContent = (
      <div className="text-xl ">No category found</div>
    );
  }

  if (
    !categoriessData.isLoading &&
    !categoriessData.isError &&
    categoriessData.categories.length > 0
  ) {
    categoriesSectionContent = categoriessData.categories.map((category) => (
      <div
        key={category.id}
        className="border rounded-lg shadow hover:shadow-lg transition p-4 text-center w-full"
      >
        <img
          src={category.categoryImageUrl}
          alt={category.categoryName}
          className="w-full h-32 object-contain mb-4"
        />
        <p className="text-lg font-medium">{category.categoryName}</p>
        <div className="flex justify-between mt-4">
          <Link
            to={`/edit-category/${category.id}`}
            className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded"
          >
            Edit
          </Link>
          <button
            onClick={() => handleClick(category.id)}
            className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded"
          >
            Delete
          </button>
        </div>
      </div>
    ));
  }
    
  return (
    <div>
    {deletId && <Modal onDelete={handleDelete} onClose={handleModalClose} />}
    {/* {deletProductId && <Modal onDelete={handleDelete} onClose={handleModalClose} />} */}
    <section className="bg-white py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-6">Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categoriesSectionContent}
        </div>
      </div>
    </section>


  </div>
  )
}

export default CategorySectionPractis