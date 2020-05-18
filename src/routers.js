import Columns from "./components/realm/Columns";
import Details from "./components/realm/Details";
import Editor from "./components/realm/Editor";

const routers = [
  {
    path: "/",
    component: Columns,
  },
  {
    path: "/columns",
    name: "columns",
    component: Columns,
  },
  {
    path: "/details",
    name: "details",
    component: Details,
  },
  {
    path: "/editor",
    name: "editor",
    component: Editor,
  },
];
export default routers;
