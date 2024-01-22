import Baners from "@/assets/banner.png";
import Image from "next/image";
const Banner = () => {
  return (
    <div className="flex justify-between items-center py-6 max-w-screen-xl m-auto">
      <div>
        <h1 className="text-black text-6xl py-1">
          Increase Your
          <br />
          Customers Loyalty
          <br /> and Satisfaction
        </h1>
        <h2 className="text-semibold py-3.5">
          We help businesses like yours earn more customers,
          <br /> standout from competitors, make more money
        </h2>
        <button className="text-lg text-white font-medium bg-green-500 py-3.5 px-6 rounded-xl">
          Get Started
        </button>
      </div>
      <div>
        <Image src={Baners} alt="banner" width={500} height={500} />
      </div>
    </div>
  );
};

export default Banner;
