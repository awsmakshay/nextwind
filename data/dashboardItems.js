import {
  ChartBar,
  ChartBarHorizontal,
  FirstAidKit,
  FolderNotchPlus,
  FolderSimpleStar,
  Heartbeat,
  Pill,
  ProjectorScreenChart,
  ShieldCheck,
} from "phosphor-react";

const iconClasses = " text-teal-600";

const dashboardItems = [
  {
    name: "Card name",
    icon: <ShieldCheck className={iconClasses} />,
  },
  {
    name: "Card name",
    icon: <ProjectorScreenChart className={iconClasses} />,
  },
  {
    name: "Card name",
    icon: <ChartBarHorizontal className={iconClasses} />,
  },
  {
    name: "Card name V",
    icon: <FirstAidKit className={iconClasses} />,
  },
  { name: "Card name", icon: <Pill className={iconClasses} /> },
  {
    name: "Card name",
    icon: <FolderSimpleStar className={iconClasses} />,
  },
  {
    name: "Card name",
    icon: <FolderNotchPlus className={iconClasses} />,
  },
  {
    name: "Card name",
    icon: <Heartbeat className={iconClasses} />,
  },
  {
    name: "Card name",
    icon: <ChartBar className={iconClasses} />,
  },
];

export default dashboardItems;
