import Overview from "@/components/portfolio/Overview";
import Footer from "@/components/shared/Footer";
import NavBar from "@/components/shared/NavBar";

const View = () => {
  return (
    <>
      <main className="container min-h-screen">
        <NavBar />
        <Overview />
      </main>
      <Footer />
    </>
  );
};

export default View;
