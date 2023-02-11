import { Link } from "react-router-dom";
import logo from "@/assets/logo.svg";
import Text from "@/ui/Text";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const NavBar = () => {
  const [isTriggered, setIsTriggered] = useState(false);

  const handleNavTrigger = () => {
    setIsTriggered(!isTriggered);
  };

  return (
    <header className="flex justify-between items-center py-6 relative">
      <Link to="/">
        <img src={logo} alt="u53f logo" className="w-8 md:w-12" />
      </Link>

      {/* Desktop Navbar */}
      <nav className="hidden md:flex gap-10">
        <Link to="#">
          <Text variant="link">home</Text>
        </Link>
        <Link to="/portfolio">
          <Text variant="link">portfolio</Text>
        </Link>
        <Link to="/contact">
          <Text variant="link">contact</Text>
        </Link>
        <Link to="/blog">
          <Text variant="link">blog</Text>
        </Link>
      </nav>

      {/* Mobile Navbar */}
      <div className="md:hidden ">
        {isTriggered ? (
          <Bars3BottomRightIcon
            className="w-8 cursor-pointer hover:text-gray-500"
            onClick={handleNavTrigger}
          />
        ) : (
          <XMarkIcon
            className="w-8 cursor-pointer hover:text-gray-500"
            onClick={handleNavTrigger}
          />
        )}

        <nav
          className={`${
            isTriggered && "hidden"
          } absolute left-0 right-0 mt-2 py-4 bg-white flex flex-col items-center gap-6 transition-all`}
        >
          <Link to="#">
            <Text variant="link">home</Text>
          </Link>
          <Link to="/portfolio">
            <Text variant="link">portfolio</Text>
          </Link>
          <Link to="/contact">
            <Text variant="link">contact</Text>
          </Link>
          <Link to="/blog">
            <Text variant="link">blog</Text>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
