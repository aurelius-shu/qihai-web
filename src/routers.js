import Details from "./components/realm/Details.vue";

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
];
export default routers;
