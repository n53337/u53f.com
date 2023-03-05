import NavBar from "@/components/shared/NavBar";
import Footer from "@/components/shared/Footer";
import { useParams } from "react-router-dom";
import { blogs } from "@/utils/blogs";
import BlogRender from "@/components/blog/BlogRender";
import NotFound from "@/components/shared/NotFound";
import { useEffect } from "react";

const Blog = () => {
  const { title } = useParams();
  const [currBlog] = blogs.filter((b) => b.id === title?.replaceAll("-", " "));

  useEffect(() => {
    currBlog
      ? (document.title = title?.replaceAll("-", " ") || "blog@u53f")
      : "/dev/null";
  }, []);

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
