import Text from "@/ui/Text";
import Footer from "./Footer";
import NavBar from "./NavBar";

const NotFound = () => {
  return (
    <main className="h-screen flex flex-col justify-between items-center">
      <div className="container">
        <NavBar />
      </div>
      <div className="container text-center flex flex-col gap-6">
        <Text variant="header">Oops! We can't find that page :(</Text>
        <a href="/">
          <Text variant="link">&#10092; Go back Home</Text>
        </a>
      </div>
      <Footer />
    </main>
  );
};

export default NotFound;
