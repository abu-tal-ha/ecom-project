import car from "../../../assets/car.png";
import cart from "../../../assets/cart.png";
import clock from "../../../assets/clock.png";
import bank from "../../../assets/bank.png";
import support from "../../../assets/support.png";

function Facilities() {
  return (
    <div className="py-10 container mx-auto grid grid-cols-5 gap-3">
      <div className="p-3 border">
        <div className="flex items-center">
          <img src={car} alt="" />
          <div className="ml-3">
            <h4 className="text-lg font-bold ">Fast Delivery</h4>
            <span className="text-[#7D879C]">Start from $10</span>
          </div>
        </div>
      </div>
      <div className="p-3 border">
        <div className="flex items-center">
          <img src={cart} alt="" />
          <div className="ml-3">
            <h4 className="text-lg font-bold ">Fast Delivery</h4>
            <span className="text-[#7D879C]">Start from $10</span>
          </div>
        </div>
      </div>
      <div className="p-3 border">
        <div className="flex items-center">
          <img src={clock} alt="" />
          <div className="ml-3">
            <h4 className="text-lg font-bold ">Fast Delivery</h4>
            <span className="text-[#7D879C]">Start from $10</span>
          </div>
        </div>
      </div>
      <div className="p-3 border">
        <div className="flex items-center">
          <img src={bank} alt="" />
          <div className="ml-3">
            <h4 className="text-lg font-bold ">Fast Delivery</h4>
            <span className="text-[#7D879C]">Start from $10</span>
          </div>
        </div>
      </div>
      <div className="p-3 border">
        <div className="flex items-center">
          <img src={support} alt="" />
          <div className="ml-3">
            <h4 className="text-lg font-bold ">Fast Delivery</h4>
            <span className="text-[#7D879C]">Start from $10</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Facilities;
