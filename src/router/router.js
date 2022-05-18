import About from "../pages/about";
import Login from "../pages/login";
import PostIdPage from "../pages/postIdPage";
import Posts from "../pages/posts";

export const privatRoutes = [
  { path: '/about', element: < About /> },
  { path: '/posts', element: < Posts /> },
  { path: '/posts/:id', element: < PostIdPage /> }
]
export const publicRoutes = [
  { path: '/login', element: < Login /> },
]