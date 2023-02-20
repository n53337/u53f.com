import { ComponentProps, ReactNode } from "react";

interface SCProps extends ComponentProps<"div"> {
  left: ReactNode;
  right: ReactNode;
}

const ShowCase = ({ left, right, ...props }: SCProps) => {
  return (
    <div className="w-full flex flex-col lg:flex-row justify-center gap-4">
      <div className="flex-1 flex flex-col justify-center items-center">
        {left}
      </div>
      <div className="flex-1 flex flex-col gap-8 xl:gap-12 justify-center items-center ">
        {right}
      </div>
    </div>
  );
};

export default ShowCase;
