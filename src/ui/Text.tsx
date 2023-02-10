import React from "react";

interface TextProps {
  variant: "header" | "base" | "link";
  size: number;
}

const Text = (props: TextProps) => {
  return <div>Text</div>;
};

export default Text;
