import NavBar from "@/components/shared/NavBar";
import Footer from "@/components/shared/Footer";
import { useEffect } from "react";
import Text from "@/ui/Text";
import PodcastWrapper from "@/components/podcast/PodcastWrapper";

const Podcast = () => {
  useEffect(() => {
    document.title = "podcast@u53f";
  }, []);
  return (
    <>
      <main className="container min-h-screen">
        <NavBar />
        {/* <PodcastWrapper /> */}
        <div className="flex justify-center items-center h-screen">
          <Text variant="title">Comming Soon...</Text>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Podcast;
