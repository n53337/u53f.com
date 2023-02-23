import { projects } from "@/utils/projects";
import { useParams } from "react-router-dom";
import Text from "@/ui/Text";
import { Link } from "react-router-dom";
import Button from "@/ui/Button";

const Overview = () => {
  // Get Url Parameter
  const { title } = useParams();

  // Project Data
  const [data] = projects.filter((prj) => prj.id === title);

  console.log(data.overview.banner);

  return (
    <section className="py-12 ">
      {/* Banner */}
      <figure
        className={`w-full h-28 lg:h-80 bg-[url('${data.overview.banner}')] bg-cover bg-no-repeat bg-center brightness-50 border border-black`}
      ></figure>

      {/* Details */}
      <div className="py-12 lg:py-24 w-full flex flex-col xl:flex-row gap-16 divide-x-2">
        <aside className="lg:w-3/4 flex flex-col gap-6 items-center lg:items-start">
          <Text variant="title">{data.brief.title}</Text>
          <Text variant="text">{data.brief.description}</Text>
          <Link to={data.overview.url}>
            <Button variant="outline" text="Visit Website" />
          </Link>
        </aside>
        <div className="flex flex-col gap-12 px-4 items-center lg:items-start">
          <div className="flex flex-col gap-6 items-center lg:items-start">
            <Text variant="title">Project Background</Text>
            <Text variant="text">{data.overview.description}</Text>
          </div>
          <div className="flex flex-col gap-10 lg:gap-20 text-center lg:text-left">
            <Text variant="title">Previews</Text>
            {data.overview.previews.map((pic) => {
              return (
                <img
                  key={pic}
                  src={pic}
                  alt="preview image"
                  className=" shadow-md"
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="my-10 lg:my-18 w-full lg:py-12 flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-12">
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

export default Overview;
