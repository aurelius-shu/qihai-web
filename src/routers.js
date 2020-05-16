import Details from "./components/realm/Details";
import Editor from "./components/realm/Editor";

const routers = [
  {
    path: "/",
    component: Details,
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
