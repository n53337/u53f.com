import { MDXContent } from "mdx/types";

import blogTumb0 from "@/assets/postsImages/how-i-built-my-website.png";
import blog0 from "@/posts/how-i-built-my-website.mdx";

// * Dummy data for Blogs

export interface Blogs {
  id: string;
  title: string;
  description: string;
  banner: string;
  content: MDXContent;
  date: string;
  readTime: number;
}

export const blogs: Blogs[] = [
  {
    id: "how i built my website",
    title: "How I Built My Website",
    description:
      "a walkthrough of how I built my website and the tools I used, as well as how I made this blog!",
    banner: blogTumb0,
    content: blog0,
    date: "March 05, 2023",
    readTime: 4,
  },
];
