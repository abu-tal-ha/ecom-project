import Popup from "../product/Popup";

/* eslint-disable react/prop-types */
function CategoriesItem({ category }) { 

  const { categoryName, categoryImageUrl } = category;
  return (
    <div className="border shadow-lg flex-1 mx-3 cursor-pointer">
      <img
        className="w-full object-cover h-[150px]"
        src={categoryImageUrl}
        alt={categoryName}
      />
      <h4 className="text-lg border-t-4 font-semibold text-center">{categoryName}</h4>
      
    </div>
  );
}

export default CategoriesItem;
