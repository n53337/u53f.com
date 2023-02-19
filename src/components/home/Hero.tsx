import Button from "@/ui/Button";
import Shell from "@/ui/Shell";
import Text from "@/ui/Text";
import { ChevronDoubleDownIcon } from "@heroicons/react/24/solid";

const Hero = () => {
  return (
    <section className="h-5/6 flex flex-col justify-center gap-10 md:gap-20 place-items-center relative">
      <Text variant="header" className="text-center lg:px-16 xl:px-24">
        Hey, I’m Youssef Houffaine and I love building amazing websites!
      </Text>
      <Shell />
      <Button variant="outline" text="About Me" />
    </section>
  );
};

export default Hero;
