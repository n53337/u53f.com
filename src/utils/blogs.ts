import cardsError from "@/assets/projects/cardsError-min.png";
import uubank2 from "@/assets/projects/uubank2-min.png";
import { MDXContent } from "mdx/types";
import Mark from "../../mark.mdx";
import Test from "../../test.mdx";
import { DocumentData, Timestamp } from "firebase/firestore";

// * Dummy data for Blogs

export interface Blogs extends DocumentData {
  id: string;
  title: string;
  description: string;
  banner: string;
  content: MDXContent;
  date: Timestamp;
  readTime: number;
}

// export const blogs: Blogs[] = [
//   {
//     id: "test 1",
//     title: "test 1's title",
//     description: "test 1 description",
//     banner: cardsError,
//     content: Mark,
//     date: "24 feb 2023",
//     readTime: 3,
//   },
//   {
//     id: "test 2",
//     title: "test 2's title",
//     description: "test 2 description",
//     banner: uubank2,
//     content: Test,
//     date: "24 feb 2023",
//     readTime: 1,
//   },
// ];
