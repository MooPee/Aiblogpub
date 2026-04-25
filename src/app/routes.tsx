import { createBrowserRouter } from "react-router";
import Root from "./pages/Root";
import Home from "./pages/Home";
import PostDetail from "./pages/PostDetail";
import About from "./pages/About";
import Scrap from "./pages/Scrap";
import Learning from "./pages/Learning";
import AdminRoot from "./pages/admin/AdminRoot";
import Dashboard from "./pages/admin/Dashboard";
import PostList from "./pages/admin/PostList";
import ScrapList from "./pages/admin/ScrapList";
import LearningList from "./pages/admin/LearningList";
import Settings from "./pages/admin/Settings";

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
  {
    path: "/admin",
    Component: AdminRoot,
    children: [
      { index: true, Component: Dashboard },
      { path: "posts", Component: PostList },
      { path: "scraps", Component: ScrapList },
      { path: "learning", Component: LearningList },
      { path: "settings", Component: Settings },
    ],
  },
]);
