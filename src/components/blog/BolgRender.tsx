import MDXComponent from "@/utils/MDXComponent";
import me from "@/assets/me.png";
import Text from "@/ui/Text";
import { Blogs } from "@/utils/blogs";
import { createElement } from "react";

const BlogRender = ({ banner, content, date, readTime }: Blogs) => {
  return (
    <section className="flex flex-col-reverse lg:grid lg:grid-cols-3 lg:gap-10">
      {/* Blog Content */}
      <div className="px-4 py-10 lg:col-span-2 flex flex-col gap-4 lg:gap-6  ">
        <figure
          className={`w-full h-36 lg:h-80 overflow-hidden brightness-50 border border-black shadow-xl`}
        >
          <img src={banner} alt="project banner" />
        </figure>
        {createElement(content, { components: MDXComponent })}
      </div>

      {/* Blog Stats */}

      <div className="lg:col-span-1 p-2 relative">
        <aside className="lg:fixed py-3 lg:my-9 lg:px-4 flex justify-between items-center flex-wrap lg:flex-col lg:gap-6 lg:justify-start border-b lg:border-l-4 lg:border-b-0 lg:rounded-sm border-gray-400">
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
            <Text variant="shell" className="italic">
              {date}
            </Text>
          </div>
          <div>
            <Text variant="shell" className="italic">
              {readTime} min read
            </Text>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default BlogRender;
