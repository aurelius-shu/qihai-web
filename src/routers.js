import Column from "./components/realm/Column";
import ManageArticle from './components/realm/ManageArticle';
import Article from "./components/realm/Article";
import Editor from "./components/realm/Editor";

const routers = [

  // columns
  {
    path: "/:username",
    name: "index",
    component: Column,
  },
  {
    path: "/:username/columns/",
    name: "column_default",
    component: Column,
  },
  {
    path: "/:username/columns/:column_id",
    name: "column",
    component: Column,
  },

  // articles
  {
    path: "/:username/articles/:article_id",
    name: "article",
    component: Article,
  },
  // manage
  // list
  {
    path: '/:username/manage/articles',
    name: 'manage_article',
    component: ManageArticle,
  },
  {
    path: "/:username/manage/articles/:article_id/editor",
    name: "editor",
    component: Editor,
  },
];

export default routers;
