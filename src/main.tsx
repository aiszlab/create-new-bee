import { bootstrap } from "@aiszlab/bee";
import Application from "./application";
import { lazy } from "react";
import "./styles.css";

const Home = lazy(() => import("./pages/home"));

bootstrap({
  selectors: "#root",
  render: Application,
  routes: [
    {
      path: "/",
      element: <Home />,
    },
  ],
});
