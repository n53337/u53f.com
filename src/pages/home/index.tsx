import NavBar from "@/components/shared/NavBar";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
const Home = () => {
  return (
    <main className="container h-screen min-h-screen ">
      <NavBar />
      <Hero />
      <About />
      <About />
    </main>
  );
};

export default Home;
