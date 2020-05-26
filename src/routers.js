import Column from "./components/realm/Column";
import ManageArticle from './components/realm/ManageArticle';
import Article from "./components/realm/Article";
import Editor from "./components/realm/Editor";

const routers = [
  {
    path: "/:username",
    name: "index",
    component: Column,
  },
  {
    path: "/:username/column/:cid",
    name: "column",
    component: Column,
  },
  {
    path: '/:username/article/manage',
    name: 'manage_article',
    component: ManageArticle,
  },
  {
    path: "/:username/article/:aid",
    name: "article",
    component: Article,
  },
  {
    path: "/:username/editor/:aid",
    name: "editor",
    component: Editor,
  },
];

export default routers;
