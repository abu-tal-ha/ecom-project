
import Categories from "./categories/Categories";
import Facilities from "./Facilities";
import ProductSection from "./product/ProductSection";
import SliderSection from "./SliderSection";



function Index() {

  return (
    <main>
      <SliderSection />
      <Facilities />
      <Categories />
      <ProductSection />
    </main>
  );
}

export default Index;
