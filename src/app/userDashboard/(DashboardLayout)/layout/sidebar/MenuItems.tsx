import {
  IconUserCircle,

  IconLogout2,
  IconAddressBook,

 
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
