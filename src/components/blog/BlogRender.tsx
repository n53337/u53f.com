import MDXComponent from "@/utils/MDXComponent";
import me from "@/assets/me.png";
import Text from "@/ui/Text";
import { Blogs } from "@/utils/blogs";
import { createElement } from "react";

const BlogRender = ({ banner, content, date, readTime }: Blogs) => {
  return (
    <section className="py-2 lg:py-10 flex flex-col max-w-screen-md mx-auto">
      {/* Blog Stats */}

      <div className="p-2">
        <aside className=" py-3  flex justify-between items-center flex-wrap  border-b border-gray-400">
          <div className="flex items-center gap-2">
            <img
              src={me}
              alt="me"
              className="w-10 lg:w-14 p-0.5 border border-black"
            />
            <span className="flex flex-col gap-1">
              <Text variant="text">Youssef Houffaine</Text>
              <Text variant="shell" className="italic">
                Front-end Developer
              </Text>
            </span>
          </div>

          <div>
            <Text variant="shell">{date}</Text>
          </div>
          <div>
            <Text variant="shell">{readTime} min read</Text>
          </div>
        </aside>
      </div>

      {/* Blog Content */}

      <div className="px-4 py-10 flex flex-col gap-4   ">
        <figure
          className={`w-full h-36 lg:h-80 overflow-hidden brightness-50 border border-black shadow-xl`}
        >
          <img src={banner} alt="project banner" />
        </figure>
        {createElement(content, { components: MDXComponent })}
      </div>
    </section>
  );
};

export default BlogRender;
