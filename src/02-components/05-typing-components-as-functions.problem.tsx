import React from "react";
import { JSXElementTypes } from "../06-types-deep-dive/45-understanding-jsx-intrinsic-elements.explainer";

interface Props {
  className: string;
}

export const Button: React.FC<Props> = (props: Props) => {
  return null;
};

const Parent = () => {
  return (
    <>props.
      <Button className="my-class"></Button>
    </>
  );
};
