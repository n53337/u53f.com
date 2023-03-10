import Button from "@/ui/Button";
import Shell from "@/ui/Shell";
import Text from "@/ui/Text";

const Hero = () => {
  return (
    <section className="py-20 flex flex-col justify-center gap-10 md:gap-20 place-items-center relative">
      <Text variant="header" className="text-center lg:px-16 xl:px-24">
        Hey, I’m Youssef Houffaine and I love building amazing websites!
      </Text>
      <Shell />
      <a href="#about">
        <Button variant="primary" text="About Me" />
      </a>
    </section>
  );
};

export default Hero;
