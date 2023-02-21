import NavBar from "@/components/shared/NavBar";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Footer from "@/components/shared/Footer";
const Home = () => {
  return (
    <>
      <main className="container  min-h-screen ">
        <NavBar />
        <Hero />
        <About />
        {/* <Footer /> */}
      </main>
      <Footer />
    </>
  );
};

export default Home;
