import NavBar from "@/components/shared/NavBar";
import Footer from "@/components/shared/Footer";
import { useParams } from "react-router-dom";
import { blogs } from "@/utils/blogs";
import BlogRender from "@/components/blog/BlogRender";
import NotFound from "@/components/shared/NotFound";

const Blog = () => {
  const { title } = useParams();
  const [currBlog] = blogs.filter((b) => b.id === title?.replaceAll("-", " "));

  return (
    <>
      {currBlog ? (
        <>
          <main className="container min-h-screen">
            <NavBar />
            <BlogRender {...currBlog} />
          </main>
          <Footer />
        </>
      ) : (
        <NotFound />
      )}
    </>
  );
};

export default Blog;
