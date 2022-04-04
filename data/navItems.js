import {
  ChartBar,
  Compass,
  House,
  Note,
  User,
  UserCircleGear,
  UserCirclePlus,
} from "phosphor-react";

// const iconClasses = " text-primary-600";

const navItems = [
  {
    name: "dashboard",
    route: "/",
    icon: <House />,
  },
  {
    name: "directions",
    route: "/directions",
    icon: <Compass />,
    submenu: [
      {
        name: "members",
        icon: <User />,
        route: "/directions/members",
      },
      {
        name: "docs",
        icon: <Note />,
        route: "/directions/docs",
      },
      {
        name: "add users",
        icon: <UserCirclePlus />,
        route: "/directions/adduser",
      },
    ],
  },
  {
    name: "admin",
    route: "/admin",
    icon: <UserCircleGear />,
  },
  {
    name: "insights",
    route: "/insights",
    icon: <ChartBar />,
  },
];

export default navItems;
