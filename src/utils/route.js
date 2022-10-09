import { createBrowserRouter } from "react-router-dom";
import { getCartProductsData } from "../components/loaders/addCartProducts";
import About from "./../components/About";
import ErrorPage from "./../components/ErrorPage";
import Home from "./../components/Home";
import Root from "./../components/Root";
import Shop from "./../components/Shop";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: getCartProductsData,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
export default router;
