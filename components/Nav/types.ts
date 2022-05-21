import type { Ref } from "react";

interface NavProps {
  menuItems: string[];
  refObj?: Ref<HTMLDivElement>;
  barInView?: boolean;
}

interface TabProps {
  item: string;
  link: string;
}

interface IconProps {
  link: string;
}

export type { NavProps, TabProps, IconProps };
