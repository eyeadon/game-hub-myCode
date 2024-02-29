import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import ErrorPage from "./pages/ErrorPage";
import GameDetailPage from "./pages/GameDetailPage";
import HomePage from "./pages/HomePage";

// takes array of route objects
const router = createBrowserRouter([
  // root route
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      // path relative to parent, no /
      { index: true, element: <HomePage /> },
      // route parameter 'slug'
      { path: "games/:slug", element: <GameDetailPage /> },
    ],
  },
]);

export default router;
