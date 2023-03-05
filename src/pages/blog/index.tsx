import NavBar from "@/components/shared/NavBar";
import Footer from "@/components/shared/Footer";
import BlogsWrapper from "@/components/blog/BlogsWrapper";

const Blogs = () => {
  return (
    <>
      <main className="container min-h-screen">
        <NavBar />
        <BlogsWrapper />
      </main>
      <Footer />
    </>
  );
};

export default Blogs;
