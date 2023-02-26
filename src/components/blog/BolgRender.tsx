import Mark from "../../../mark.mdx";

import { MDXProvider } from "@mdx-js/react";
import MDXComponent from "@/utils/MDXComponent";
// interface BR {
//   content: string;
// }

const BlogRender = () => {
  // Text : Header,Text,Link,italic #[Th, Tt, Tl, Ti]
  // Highlight : text hightlight #Hg
  // Images: images(gifs) #Im
  // Code Block: synthax highlighting #Cb

  return (
    <div className="">
      <MDXProvider>
        <Mark components={MDXComponent} />
      </MDXProvider>
    </div>
  );
};

export default BlogRender;
