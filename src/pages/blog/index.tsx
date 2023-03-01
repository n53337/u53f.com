import NavBar from "@/components/shared/NavBar";
import Footer from "@/components/shared/Footer";
import Text from "@/ui/Text";

const Blogs = () => {
  return (
    <main className="w-full h-screen flex flex-col justify-between">
      <div className="container">
        <NavBar />
      </div>
      <div className="container">
        <Text variant="header" className="text-center">
          Comming Soon ...
        </Text>
      </div>
      <Footer />
    </main>
  );
};

export default Blogs;
