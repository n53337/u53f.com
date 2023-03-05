import { MDXComponents } from "mdx/types";
import Text from "@/ui/Text";
import { CommandLineIcon } from "@heroicons/react/24/solid";

const MDXComponent: MDXComponents = {
  h1: (props) => (
    <Text
      variant="header"
      children={props.children}
      className="text-center py-4"
      id={props.id}
    />
  ),
  h2: (props: any) => (
    <Text
      variant="title"
      children={props.children}
      id={props.children.replace(" ", "-")}
      className="py-3"
    />
  ),
  p: (props) => (
    <Text variant="para" children={props.children} textColor="black" />
  ),
  a: (props) => (
    <a href={props.href || "#"}>
      <Text
        variant="link"
        children={props.children}
        className="inline underline text-gray-500"
      />
    </a>
  ),
  blockquote: (props) => (
    <blockquote
      className="pl-2 italic border-l-4 border-l-gray-500 rounded-sm opacity-75"
      children={props.children}
    />
  ),
  ol: (props) => (
    <ol className="list-decimal">
      <Text variant="para" children={props.children} textColor="black" />
    </ol>
  ),
  ul: (props) => (
    <ul className="list-disc">
      <Text variant="para" children={props.children} textColor="black" />
    </ul>
  ),
  code: (props) => (
    <Text
      variant="shell"
      children={props.children}
      className="inline bg-gray-300 px-1"
    />
  ),
  pre: (props: any) => (
    <div className="w-full flex flex-col max-w-2xl shadow-md mx-auto">
      <div className="bg-black text-white px-4 py-2 flex justify-between items-center">
        <CommandLineIcon className="w-6" />
        <Text
          variant="shell"
          children={props.children.props.className.slice(9)}
          className="text-white"
        />
      </div>
      <div className="max-h-48 md:max-h-96 flex flex-col gap-3 overflow-auto bg-white text-black p-4 border border-black">
        {props.children.props.children
          .split("\n")
          .map((e: string, index: number) => (
            <Text key={Date.now() + index} variant="shell" children={e} />
          ))}
      </div>
    </div>
  ),
  img: (props) => <img src={props.src} className="mx-auto " />,
};

export default MDXComponent;
