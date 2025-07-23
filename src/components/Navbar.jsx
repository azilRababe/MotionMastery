import { MdOutlineHome } from "react-icons/md";
import { CgGym } from "react-icons/cg";
import { IoMdInformationCircleOutline } from "react-icons/io";

const Navbar = () => (
  <>
    <div className="py-1 bg-red-500 text-sm mb-5 text-white text-center">
      New Features Coming Soon!
    </div>

    <div className="w-full bg-transparent min-h-12 flex items-center justify-around mx-auto space-x-10">
      <div className="">
        <div className="flex gap-6 text-md font-medium items-center">
          <a
            href="/"
            className="border-b-2 border-transparent hover:border-[#FF2625] transition duration-200 flex items-center gap-x-2"
          >
            <MdOutlineHome className="inline-block mr-2" size={24} />
            Home
          </a>
          <a
            href="#exercises"
            className="border-b-2 border-transparent hover:border-[#FF2625] transition duration-200 flex items-center gap-x-2"
          >
            <CgGym className="inline-block mr-2" size={24} />
            Exercises
          </a>
          {/* about us */}
          <a
            //  open in new page
            target="_blank"
            href="https://www.smaug-x.com/"
            className="border-b-2 border-transparent hover:border-[#FF2625] transition duration-200 flex items-center gap-x-2"
          >
            <IoMdInformationCircleOutline
              className="inline-block mr-2"
              size={24}
            />
            About Us
          </a>
        </div>
      </div>
    </div>
  </>
);

export default Navbar;
