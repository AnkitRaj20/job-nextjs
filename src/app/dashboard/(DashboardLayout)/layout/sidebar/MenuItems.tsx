import {
  IconUserCircle,IconEyeTable,IconLogout2,IconAddressBook, IconCircleDot, IconHome, IconInfoCircle, IconLayout, IconLayoutGrid, IconPhoto, IconPoint, IconStar, IconTable, IconUser
} from "@tabler/icons-react";

import { uniqueId } from "lodash";


const Menuitems = [
  // {
  //   id: uniqueId(),
  //   title: "Dashboard",
  //   icon: IconHome,
  //   href: "/dashboard",
  // },
  {
    id: uniqueId(),
    title: "Profile",
    icon: IconUserCircle,
    href: "/dashboard/profile",
  },
  {
    id: uniqueId(),
    title: "Post Job",
    icon: IconAddressBook,
    href: "/dashboard/postjob",
  },
  {
    id: uniqueId(),
    title: "View Posted Job",
    icon: IconEyeTable,
    href: "/dashboard/postedJob",
  },
  {
    id: uniqueId(),
    title: "View Job Workers",
    icon: IconEyeTable,
    href: "/dashboard/availableWorkers"
  },
  {
    id: uniqueId(),
    title: "Logout",
    icon: IconLogout2,
    href: "/dashboard/logout",
  }
];

export default Menuitems;
