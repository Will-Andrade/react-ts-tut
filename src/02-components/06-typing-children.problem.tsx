import React from "react";

export const Button = ({ children }: { children: React.ReactNode }) => {
  return <button>{children}</button>;
};

const Parent = () => {
  return (
    <>
      <Button>Click me</Button>
      <Button>Hello world!</Button>
    </>
  );
};
