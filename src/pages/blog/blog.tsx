import NavBar from "@/components/shared/NavBar";
import Footer from "@/components/shared/Footer";
import { useParams } from "react-router-dom";
import { blogs } from "@/utils/blogs";
import Text from "@/ui/Text";
import BlogRender from "@/components/blog/BolgRender";

const Blog = () => {
  return (
    <>
      <main className="container min-h-screen">
        <NavBar />
        <BlogRender {...blogs[1]} />
      </main>
      <Footer />
    </>
  );
};

export default Blog;
