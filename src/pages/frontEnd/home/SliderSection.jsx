import Slider from "react-slick";
import BannerImgage from "../../../assets/banner-img.png"
import { Link } from 'react-router';

function SliderSection() {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      };

  return (
    <Slider {...settings}>
    <div className="bg-[#F6F9FC]">
      <div className="container m-auto pt-[120px] pb-[120px] grid grid-cols-2">
        <div className="w-6/12">
        <h3 className="text-6xl font-bold">Fashionable <br /> Collection</h3>
        <p className="text-xl">Get free shipping on all orders over $99.00</p>
        <Link className="bg-red-600 mt-4 text-white rounded py-3 px-6 inline-block">Shop Now</Link>
        </div>

        <div className="w-6/12">
        <img src={BannerImgage}alt="" />
        </div>

      </div>
    </div>
    <div className="bg-[#F6F9FC]">
      <div className="container m-auto pt-[120px] pb-[120px] grid grid-cols-2">
        <div className="w-6/12">
        <h3 className="text-6xl font-bold">Fashionable <br /> Collection</h3>
        <p className="text-xl">Get free shipping on all orders over $99.00</p>
        <Link className="bg-red-600 mt-4 text-white rounded py-3 px-6 inline-block">Shop Now</Link>
        </div>

        <div className="w-6/12">
        <img src={BannerImgage}alt="" />
        </div>

      </div>
    </div>
    <div className="bg-[#F6F9FC]">
      <div className="container m-auto pt-[120px] pb-[120px] grid grid-cols-2">
        <div className="w-6/12">
        <h3 className="text-6xl font-bold">Fashionable <br /> Collection</h3>
        <p className="text-xl">Get free shipping on all orders over $99.00</p>
        <Link className="bg-red-600 mt-4 text-white rounded py-3 px-6 inline-block">Shop Now</Link>
        </div>

        <div className="w-6/12">
        <img src={BannerImgage}alt="" />
        </div>

      </div>
    </div>

  
  </Slider>
  )
}

export default SliderSection