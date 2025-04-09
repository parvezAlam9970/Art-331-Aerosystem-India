import { Phone, XIcon } from "lucide-react";
import Link from "next/link";

const MobileMenu = ({ isOpen, toggleMenu }) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full z-50 w-[250px] md:w-[350px] bg-white shadow-lg lg:hidden transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex flex-col p-4">
        {/* Close Button */}
        <button onClick={toggleMenu} className="mb-4 self-end">
          <XIcon className="h-6 w-6 text-gray-800" />
        </button>
        <nav className="flex flex-col gap-4 font-medium">
               <Link onClick={toggleMenu} href="#aboutUs">About Us</Link>
                <Link onClick={toggleMenu} href="#Admissions">Admission</Link>
                <Link onClick={toggleMenu} href="#Courses">Courses</Link>
                <Link onClick={toggleMenu} href="#campus">Campus</Link>
                <Link onClick={toggleMenu} href="#facilities">Facilities</Link>
                <Link onClick={toggleMenu} href="#reviews">Reviews</Link>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;