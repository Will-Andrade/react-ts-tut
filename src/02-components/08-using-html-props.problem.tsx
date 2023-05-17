import React from "react";

// interface CustomBtn extends React.ComponentPropsWithoutRef<"button"> {};

export const Button = ({ className, ...rest }: React.ComponentProps<"button">) => {
  return (
    <button {...rest} className={`default-classname ${className}`}></button>
  );
};

const Parent = () => {
  return <Button onClick={() => {}} type="button"></Button>;
};
