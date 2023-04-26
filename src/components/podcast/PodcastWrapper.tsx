import Text from "@/ui/Text";
import Button from "@/ui/Button";
import { Link } from "react-router-dom";
import bg from "@/assets/projects/u53f.png";
import { PlayIcon } from "@heroicons/react/24/outline";

const PodcastWrapper = () => {
  return (
    <section className="py-12 flex flex-col justify-center items-center gap-20 lg:gap-32">
      {/* /* ------------------------------ Podcast Card ------------------------------  */}

      <div className="w-full flex flex-col gap-10">
        <div className="flex border border-black bg-white shadow-md">
          <div className="w-1/4 border-r border-r-black ">
            <img src={bg} />
          </div>
          <div className="flex-1 p-4 flex flex-col gap-8">
            <Text variant="title">Podcast Title Example</Text>
            <div className="flex items-center gap-2 ">
              <PlayIcon className="w-6" />
              <div className="w-full h-2 bg-slate-300 ">
                <div className="w-1/3 h-2 bg-black"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full lg:py-12 flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-12">
        <Text variant="title" className="text-center">
          Interested in doing a project together?
        </Text>
        <span className="hidden lg:block w-1/3 bg-gray-200 h-0.5"></span>
        <Link to="contact">
          <Button variant="outline" text="Contact me" />
        </Link>
      </div>
    </section>
  );
};

export default PodcastWrapper;
