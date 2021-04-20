import Events from "./pages/events/events";
import Main from "./pages/main/main";
import { EVENTS_ROUTE, HOME_ROUTE } from "./utils/constants";

export const allRouts = [
  {
    path: HOME_ROUTE,
    Component: Main,
  },
  {
    path: EVENTS_ROUTE,
    Component: Events,
  },
];
