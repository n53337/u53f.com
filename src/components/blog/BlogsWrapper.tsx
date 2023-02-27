import Text from "@/ui/Text";
import Button from "@/ui/Button";
import { Link } from "react-router-dom";
import { blogs } from "@/utils/blogs";
import ShowCase from "../shared/ShowCase";
import { useEffect } from "react";

const BlogsWrapper = () => {
  useEffect(() => {
    fetch("gs://u53f-ff584.appspot.com/blogs/react.mdx")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="py-12 flex flex-col justify-center items-center gap-20 lg:gap-32">
      {blogs.map((blog, index) => {
        return (
          <ShowCase
            key={index}
            left={
              <img
                src={blog.banner}
                className=" border-2 border-black p-2 drop-shadow-lg"
              />
            }
            right={
              <>
                <Text variant="title">{blog.title}</Text>
                <Text variant="text">{blog.description}</Text>
                <Link to={blog.id.replace(" ", "-")}>
                  <Button variant="outline" text="Read" />
                </Link>
              </>
            }
          />
        );
      })}
      <div className="w-full lg:py-12 flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-12">
        <Text variant="title" className="text-center">
          Interested in doing a project together?
        </Text>
        <span className="hidden lg:block w-1/3 bg-gray-200 h-0.5"></span>
        <Link to="/contact">
          <Button variant="outline" text="Contact me" />
        </Link>
      </div>
    </section>
  );
};

export default BlogsWrapper;
