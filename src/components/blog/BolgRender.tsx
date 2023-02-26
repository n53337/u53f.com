import Mark from "../../../mark.mdx";
import { MDXProvider } from "@mdx-js/react";
import MDXComponent from "@/utils/MDXComponent";
import me from "@/assets/me.png";
import Text from "@/ui/Text";

const BlogRender = () => {
  return (
    <section className="flex flex-col-reverse lg:grid lg:grid-cols-3 lg:gap-10">
      {/* Blog Content */}
      <div className="px-4 py-10 lg:col-span-2 flex flex-col gap-4 lg:gap-6  ">
        <MDXProvider>
          <Mark components={MDXComponent} />
        </MDXProvider>
      </div>

      {/* Blog Stats */}

      <div className="lg:col-span-1 p-2 relative">
        <aside className="lg:fixed py-3 lg:px-4 flex justify-between items-center flex-wrap lg:flex-col lg:gap-6 lg:justify-start border-b lg:border-l lg:border-b-0 border-black">
          <div className="flex items-center gap-2">
            <img
              src={me}
              alt="me"
              className="w-10 lg:w-14 p-0.5 border border-black"
            />
            <span className="flex flex-col gap-1">
              <Text variant="text" className="opacity-100 ">
                Youssef Houffaine
              </Text>
              <Text variant="shell" className="italic">
                Front-end Developer
              </Text>
            </span>
          </div>

          <div>
            <Text variant="shell" className="italic">
              24 feb 2023
            </Text>
          </div>
          <div>
            <Text variant="shell" className="italic">
              3 min read
            </Text>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default BlogRender;
