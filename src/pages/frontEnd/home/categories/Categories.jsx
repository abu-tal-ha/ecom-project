import Slider from "react-slick";
import CategoriesItem from "./CategoriesItem";
import { useSelector } from "react-redux";

function Categories() {
  const { categories } = useSelector((store) => store.categories);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div>
      <div className="mx-auto">
        <h1 className="text-center text-2xl font-semibold">Top Categories</h1>
      </div>
      <div className="py-10 container mx-auto gap-3">
        <Slider {...settings}>
          {categories.map((category) => (
            <CategoriesItem key={category.id} category={category} />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Categories;
