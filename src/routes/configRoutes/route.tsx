import { lazy } from "react";
import { ROUTEPATHS } from "./path";

export const routeList = [
  {
    path: ROUTEPATHS.DASHBOARD,
    Component: lazy(() => import("@/pages/home")),
    index: true,
  },
  {
    path: ROUTEPATHS.NOTFOUND,
    Component: lazy(() => import("@pages/notFound")),
  },
];
