import Logo from "@/assets/logo.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-6 max-w-screen-xl m-auto">
      <div>
        <Image src={Logo} alt="logo" width={179} height={100} />
      </div>
      <div className="flex gap-6 items-center">
        <div>
          <a className="text-lg text-black font-medium">Services</a>
        </div>
        <a className="text-lg text-black font-medium">About Us</a>
        <a className="text-lg text-black font-medium">Contact Us</a>
        <button className="text-lg text-black font-medium border border-green-400 py-3.5 px-6 rounded-xl">
          Login
        </button>
        <button className="text-lg text-white font-medium bg-green-500 py-3.5 px-6 rounded-xl">
          Register
        </button>
      </div>
    </div>
  );
};

export default Navbar;
