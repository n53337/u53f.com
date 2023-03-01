import { useEffect, useState } from "react";
import NavBar from "@/components/shared/NavBar";
import Footer from "@/components/shared/Footer";
import { useParams } from "react-router-dom";
import BlogRender from "@/components/blog/BolgRender";
import { db, storage } from "@/utils/firebase";
import { doc, DocumentData, getDoc } from "firebase/firestore";
import { Blogs } from "@/utils/blogs";
import { ref, getDownloadURL } from "firebase/storage";
import { MDXProvider } from "@mdx-js/react";
import { compile } from "@mdx-js/mdx";

const Blog = () => {
  const { title } = useParams();
  const blogId = title?.replaceAll("-", " ");

  // const [blog, setBlog] = useState<Blogs | DocumentData>();
  const [blog, setBlog] = useState<any>();

  // Fetch Blog

  useEffect(() => {
    const getBlogs = async () => {
      // const docRef = doc(db, `blogs/${blogId}`);
      // const docSnap = await getDoc(docRef);
      // if (docSnap.exists()) {
      //   setBlog(docSnap.data());
      //   console.log(blog?.content);
      // } else {
      //   // TODO: Handle Errors
      //   console.log("No such document!");
      // }
      const mkd = await compile("../../../mark.mdx");

      setBlog(mkd.value);
    };
    getBlogs();
  }, []);

  return (
    <>
      <main className="container min-h-screen">
        <NavBar />
        {blog && <BlogRender {...blog} />}
        {/* <MDXProvider>{blog}</MDXProvider> */}
      </main>
      <Footer />
    </>
  );
};

export default Blog;
