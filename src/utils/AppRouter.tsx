import NotFound from "@/components/shared/NotFound";
import Blogs from "@/pages/blog";
import Blog from "@/pages/blog/blog";
import Contact from "@/pages/contact";
import Home from "@/pages/home";
import Podcast from "@/pages/podcast";
import Portfolio from "@/pages/portfolio";
import View from "@/pages/portfolio/view";
import { Route, Routes } from "react-router-dom";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/">
        {/* Home */}
        <Route index element={<Home />} />

        {/* Contact */}
        <Route path="contact" element={<Contact />} />

        {/* Portfolio */}
        <Route path="portfolio">
          <Route index element={<Portfolio />} />
          <Route path=":title" element={<View />} />
        </Route>

        {/* Blog */}
        <Route path="blog">
          <Route index element={<Blogs />} />
          <Route path=":title" element={<Blog />} />
        </Route>

        {/* Podcast */}
        <Route path="podcast" element={<Podcast />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
