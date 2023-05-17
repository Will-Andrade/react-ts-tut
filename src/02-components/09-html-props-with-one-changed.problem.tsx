import { ComponentProps } from "react";
import { Equal, Expect } from "../helpers/type-utils";

//? 2
type InputProps = Omit<ComponentProps<"input">, "onChange"> & { onChange: (value: string) => void };

//? 3
type OverrideProps<Type, TypeOverridden> = Omit<Type, keyof TypeOverridden> & TypeOverridden;

type NewInputProps = OverrideProps<
  ComponentProps<"input">, 
  { onChange: (val: string) => void; }
>;

export const Input = (
  //? Solution 1
  // props: Omit<ComponentProps<"input">, "onChange"> & { onChange: (value: string) => void }

  //? Solution 2
  // props: InputProps

  //? Solution 3 
  props: NewInputProps
) => {
  return (
    <input
      {...props}
      onChange={(e) => {
        props.onChange(e.target.value);
      }}
    ></input>
  );
};

const Parent = () => {
  return (
    <Input
      onChange={(e) => {
        console.log(e);

        type test = Expect<Equal<typeof e, string>>;
      }}
    ></Input>
  );
};
