import Columns from "./components/realm/Columns";
import Detail from "./components/realm/Detail";
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
    path: "/detail/:aid",
    name: "detail",
    component: Detail,
  },
  {
    path: "/editor",
    name: "editor",
    component: Editor,
  },
];

export default routers;
