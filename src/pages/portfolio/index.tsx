import NavBar from "@/components/shared/NavBar";
import Footer from "@/components/shared/Footer";
import Gallery from "@/components/portfolio/Gallery";
import { useEffect } from "react";

const Portfolio = () => {
  useEffect(() => {
    document.title = "portfolio@u53f";
  }, []);

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
