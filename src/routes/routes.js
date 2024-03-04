import { routerLinks } from "./constant";

import Dashboard from "../scenes/dashboard";
import Team from "../scenes/team";
import Contacts from "../scenes/contacts";
import Invoices from "../scenes/invoices";
import Form from "../scenes/form";
import Calendar from "../scenes/calendar";
import Faq from "../scenes/faq";
import Bar from "../scenes/bar";
import Pie from "../scenes/pie";
import Line from "../scenes/line";
import Geography from "../scenes/geography";
import BlankPage from "../scenes/blank";

// import MobileDashboard from "./Mobile/MobileDashboard";
// import MobileSettings from "./Mobile/MobileSettings";

export const routes = [
  { name: "dashboard", path: routerLinks["Dashboard"], element: Dashboard },
  { name: "team", path: routerLinks["Team"], element: Team },
  { name: "contacts", path: routerLinks["Contacts"], element: Contacts },
  { name: "invoices", path: routerLinks["Invoices"], element: Invoices },
  { name: "form", path: routerLinks["Form"], element: Form },
  { name: "calendar", path: routerLinks["Calendar"], element: Calendar },
  { name: "faq", path: routerLinks["Faq"], element: Faq },
  { name: "bar", path: routerLinks["Bar"], element: Bar },
  { name: "pie", path: routerLinks["Pie"], element: Pie },
  { name: "line", path: routerLinks["Line"], element: Line },
  { name: "geography", path: routerLinks["Geography"], element: Geography },
  { name: "blank", path: "*", element: BlankPage },
];

// export const routesMobile = [
//   {
//     name: "overview",
//     path: m_routerLinks["M_Dashboard"],
//     element: MobileDashboard,
//   },
//   {
//     name: "settings",
//     path: m_routerLinks["M_Settings"],
//     element: MobileSettings,
//   },
//   { name: "blank", path: "*", element: Blank },
// ];
