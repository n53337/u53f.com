import Text from "@/ui/Text";
import { MDXComponents } from "mdx/types";

const MDXComponent: MDXComponents = {
  h1: (props) => <Text variant="header" children={props.children} />,
  h2: (props) => <Text variant="title" children={props.children} />,
  p: (props) => (
    <Text variant="text" children={props.children} className="opacity-100" />
  ),
};

export default MDXComponent;
