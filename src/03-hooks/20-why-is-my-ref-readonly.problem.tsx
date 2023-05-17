import { useRef } from "react";

export const Component = () => {
  //? This produces a mutable ref object
  const firstOverload = useRef<string>('something');
  firstOverload.current = 'something else';

  //? This produces a readonly ref object. It says to react: manage this ref for me, pls
  const secondOverload = useRef<string>(null);
  //! secondOverload.current = 'something';

  //? This produces a mutable ref object
  const thirdOverload = useRef<string>();
  thirdOverload.current = 'hello';

  return null;
};
