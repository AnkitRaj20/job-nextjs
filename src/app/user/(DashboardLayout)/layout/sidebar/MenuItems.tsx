/* eslint-disable react-hooks/rules-of-hooks */
import {
  IconUserCircle,
  IconLogout2,
  IconAddressBook,
} from "@tabler/icons-react";

import { uniqueId } from "lodash";
import Link from "next/link";

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
    href: "/user/profile",
    
  },
  {
    id: uniqueId(),
    title: "Job",
    icon: IconAddressBook,
    href: "/user/jobs",
  },
  {
    id: uniqueId(),
    title: "Posted Profile",
    icon: IconAddressBook,
    href: "/user/postedprofile",
  },
  {
    id: uniqueId(),
    title: "Logout",
    icon: IconLogout2,
    href: "/user/logout",
  },
];

export default Menuitems;
