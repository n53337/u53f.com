import NavBar from "@/components/shared/NavBar";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Footer from "@/components/shared/Footer";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = "home@u53f";
  }, []);

  return (
    <>
      <main className="container  min-h-screen ">
        <NavBar />
        <Hero />
        <About />
      </main>
      <Footer />
    </>
  );
};

export default Home;
