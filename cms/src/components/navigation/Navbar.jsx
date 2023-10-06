import logo from "../../assets/ìmages/weblogo.png";
import { LuSearch } from "react-icons/lu";

const Navbar = () => {
  return (
    <div className="bg-[#010C80] text-white">
      <div className="grid grid-cols-3 mx-auto w-11/12 h-20 place-content-center items-center text-lg">
        <div>
          <img src={logo} alt="" className="h-16" />
        </div>
        <div>
          <div className="relative">
            <LuSearch className="absolute top-3 left-1 text-gray-500 text-lg" />
          </div>
          <input
            type="search"
            name="search"
            id="search"
            placeholder="search the product name"
            className="py-2 pl-8 pr-6 text-base text-black w-4/5"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
