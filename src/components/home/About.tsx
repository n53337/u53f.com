import ShowCase from "@/components/shared/ShowCase";
import me from "@/assets/me.png";
import Text from "@/ui/Text";
import Button from "@/ui/Button";

const About = () => {
  const left = (
    <img
      src={me}
      alt="youssef's image"
      className="w-8/12 border-2 border-black p-2 drop-shadow-lg"
    />
  );
  const right = (
    <>
      <Text variant="title">About Me</Text>
      <Text variant="text">
        I’m a front-end developer looking for a new role in an exciting team. I
        focus on shipping good user interfaces. When working on a web project, I
        mostly use React with Typescript, but I can adapt to whatever tools are
        required. I’m based in Agadir, Morocco, but I’m happy working remotely.
        When I’m not coding, you’ll find me exercising at the gym. I love
        helping others; I teach math classes at night for high school students.
        I’d love for you to check out my work.
      </Text>
      <Button variant="outline" text="See Projects" />
    </>
  );
  return (
    <section className="flex flex-col items-center">
      <ShowCase left={left} right={right} />
    </section>
  );
};

export default About;
