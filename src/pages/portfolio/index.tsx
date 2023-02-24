import NavBar from "@/components/shared/NavBar";
import Footer from "@/components/shared/Footer";
import Gallery from "@/components/portfolio/Gallery";

const Portfolio = () => {
  return (
    <>
      <main className="container  min-h-screen">
        <NavBar />
        <Gallery />
      </main>
      <Footer />
    </>
  );
};

export default Portfolio;
