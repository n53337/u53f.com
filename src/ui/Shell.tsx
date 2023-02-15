import { ClipboardIcon, CommandLineIcon } from "@heroicons/react/24/solid";
import Text from "@/ui/Text";
const Shell = () => {
  return (
    <div className="w-full flex flex-col max-w-2xl shadow-md">
      <div className="bg-black text-white px-4 py-2 flex justify-between items-center">
        <CommandLineIcon className="w-6 " />
        <ClipboardIcon className="w-5 text-black stroke-white stroke-2 cursor-pointer" />
      </div>
      <div className="bg-white text-black p-4 border border-black">
        <div className="flex gap-2 items-center">
          <span className="text-xs md:text-sm font-medium text-violet-700">
            ~$
          </span>
          <Text variant="shell">sudo pacman -S usef</Text>
        </div>
        <div className="flex gap-2 ">
          <span className="text-xs md:text-sm font-medium text-violet-700">
            ~$
          </span>
          <Text variant="shell">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod sequi
            quam sed dicta laudantium neque ullam maiores perferendis excepturi!
            Corporis quod, fugit voluptatem enim doloribus sunt nisi ullam esse
            omnis.
          </Text>
        </div>
      </div>
    </div>
  );
};

export default Shell;
