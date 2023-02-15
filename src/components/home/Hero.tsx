import Shell from "@/ui/Shell";
import Text from "@/ui/Text";
import { ChevronDoubleDownIcon } from "@heroicons/react/24/solid";

const Hero = () => {
  return (
    <section className="h-4/6 flex flex-col justify-center gap-10 md:gap-20 place-items-center relative">
      <Text variant="header" className="text-center lg:px-16 xl:px-24">
        Hey, I’m Youssef Houffaine and I love building amazing websites!
      </Text>
      <Shell />
      {/* <ChevronDoubleDownIcon className="w-8 md:w-10 absolute -bottom-8 text-black animate-pulse" /> */}
    </section>
  );
};

export default Hero;
