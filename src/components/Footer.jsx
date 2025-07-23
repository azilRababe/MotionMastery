import { FaHeart } from "react-icons/fa";

const Footer = () => (
  <div className="flex flex-col items-center justify-center p-4 text-white">
    <div className=" border-t-2 border-red-500 w-full max-w-4xl text-center py-4">
      Made with <FaHeart className="inline text-red-500" /> by SmaugX Team
    </div>
  </div>
);

export default Footer;
