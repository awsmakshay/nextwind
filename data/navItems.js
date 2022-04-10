import {
  Briefcase,
  Calendar,
  ChartBar,
  Compass,
  House,
  Note,
  ShieldCheck,
  User,
  UserCircleGear,
  UserCirclePlus,
} from "phosphor-react";

// const iconClasses = " text-primary-600";

const navItems = [
  {
    name: "dashboard",
    route: "/",
    icon: <House weight="duotone" />,
  },
  {
    name: "directions",
    route: "/directions",
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
      {
        name: "add users",
        icon: <UserCirclePlus weight="duotone" />,
        route: "/directions/adduser",
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
    route: "/Customers",
    icon: <Briefcase weight="duotone" />,
  },
  {
    name: "authentication",
    route: "/authentication",
    icon: <ShieldCheck weight="duotone" />,
  },
  {
    name: "calendar",
    route: "/calendar",
    icon: <Calendar weight="duotone" />,
  },
];

export default navItems;
