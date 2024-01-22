import {
  IconUserCircle,
  IconEyeTable,
  IconLogout2,
  IconAddressBook,
  IconCircleDot,
  IconHome,
  IconInfoCircle,
  IconLayout,
  IconLayoutGrid,
  IconPhoto,
  IconPoint,
  IconStar,
  IconTable,
  IconUser,
} from "@tabler/icons-react";

import { uniqueId } from "lodash";

if(typeof window !== 'undefined')
{
// Your client-side code that uses window goes here
// const url = window.location.href;
// const val = url.substring(url.lastIndexOf("/") + 1);
}

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
    href: "/userDashboard/profile",
  },
  {
    id: uniqueId(),
    title: "Job",
    icon: IconAddressBook,
    href: "/userDashboard/jobs",
  },
  {
    id: uniqueId(),
    title: "Posted Profile",
    icon: IconAddressBook,
    href: "/userDashboard/postedProfile",
  },
  {
    id: uniqueId(),
    title: "Logout",
    icon: IconLogout2,
    href: "/userDashboard/logout",
  },
];

export default Menuitems;
