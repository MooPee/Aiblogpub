import { createBrowserRouter } from "react-router";
import Root from "./pages/Root";
import Home from "./pages/Home";
import PostDetail from "./pages/PostDetail";
import About from "./pages/About";
import Scrap from "./pages/Scrap";
import Learning from "./pages/Learning";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "post/:id", Component: PostDetail },
      { path: "about", Component: About },
      { path: "scrap", Component: Scrap },
      { path: "learning", Component: Learning },
    ],
  },
]);
