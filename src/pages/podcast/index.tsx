import NavBar from "@/components/shared/NavBar";
import Footer from "@/components/shared/Footer";
import BlogsWrapper from "@/components/blog/BlogsWrapper";
import { useEffect } from "react";
import Text from "@/ui/Text";

const Podcast = () => {
  useEffect(() => {
    document.title = "podcast@u53f";
  }, []);
  return (
    <div className="h-screen flex flex-col">
      <div className="container flex-1 flex flex-col">
        <NavBar />
        <Text
          variant="header"
          className="text-center flex-1 flex flex-col justify-center"
        >
          Comming Soon ...
        </Text>
      </div>
      <Footer />
    </div>
  );
};

export default Podcast;
