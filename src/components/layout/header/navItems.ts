export interface NavItemInterface {
  name: string;
  link: string;
}

const navItems: NavItemInterface[] = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Portfolio",
    link: "/portfolio",
  },
  {
    name: "Services",
    link: "/services",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

export default navItems;
