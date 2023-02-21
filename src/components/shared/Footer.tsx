import { Link } from "react-router-dom";
import logo from "@/assets/logoLight.svg";
import Text from "@/ui/Text";

const Footer = () => {
  return (
    <footer className="w-full bg-black ">
      <div className="container py-6 flex justify-between items-center">
        <Link to="/">
          <img src={logo} alt="u53f logo" className="w-8 md:w-12" />
        </Link>
        <aside className="flex gap-8">
          <Link to="https://www.linkedin.com/in/youssef-houffaine-a72366252/">
            <Text variant="link" className="text-white">
              Linkedin
            </Text>
          </Link>
          <Link to="https://github.com/n53337">
            <Text variant="link" className="text-white">
              Github
            </Text>
          </Link>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
