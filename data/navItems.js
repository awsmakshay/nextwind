import {
  Briefcase,
  ChartBar,
  Compass,
  House,
  Note,
  User,
  UserCircleGear,
} from "phosphor-react";

const navItems = [
  {
    name: "dashboard",
    route: "/",
    icon: <House weight="duotone" />,
  },
  {
    name: "directions",
    icon: <Compass weight="duotone" />,
    submenu: [
      {
        name: "members",
        icon: <User weight="duotone" />,
        route: "/directions/members",
      },
      {
        name: "docs",
        icon: <Note weight="duotone" />,
        route: "/directions/docs",
      },
    ],
  },

  {
    name: "admin",
    route: "/admin",
    icon: <UserCircleGear weight="duotone" />,
  },
  {
    name: "insights",
    route: "/insights",
    icon: <ChartBar weight="duotone" />,
  },
  {
    name: "Customers",
    route: "/customers",
    icon: <Briefcase weight="duotone" />,
  },
];

export default navItems;
