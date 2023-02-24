import ShowCase from "../shared/ShowCase";
import Text from "@/ui/Text";
import Button from "@/ui/Button";
import { projects } from "@/utils/projects";
import { Link } from "react-router-dom";

const Gallery = () => {
  return (
    <section className="py-12 flex flex-col justify-center items-center gap-20 lg:gap-32">
      {projects.map((project, index) => {
        return (
          <ShowCase
            key={index}
            left={
              <img
                src={project.brief.img}
                className=" border-2 border-black p-2 drop-shadow-lg"
              />
            }
            right={
              <>
                <Text variant="title">{project.brief.title}</Text>
                <Text variant="text">{project.brief.description}</Text>
                <Link to={project.id}>
                  <Button variant="outline" text="view project" />
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
        <Link to="contact">
          <Button variant="outline" text="Contact me" />
        </Link>
      </div>
    </section>
  );
};

export default Gallery;
