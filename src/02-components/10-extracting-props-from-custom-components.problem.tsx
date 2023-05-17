// Imagine NavBar is an external library!

export const NavBar = (props: {
  title: string;
  links: string[];
  children: React.ReactNode;
}): JSX.Element => {
  return <div>Some content</div>;
};

// Your app:

import { Equal, Expect } from "../helpers/type-utils";

type NavBarProps = React.ComponentProps<typeof NavBar>;

type test = Expect<
  Equal<
    NavBarProps,
    {
      title: string;
      links: string[];
      children: React.ReactNode;
    }
  >
>;
