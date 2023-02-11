import { Link } from "react-router-dom";
import logo from "@/assets/logo.svg";
import Text from "@/ui/Text";

const NavBar = () => {
  return (
    <header className="flex justify-between items-center py-6">
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
      <nav></nav>
    </header>
  );
};

export default NavBar;
