import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Carroussel from "./components/carroussel/Carroussel";
import HomePage from "./pages/homePage/HomePage";

export const mainRouter = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/carroussel",
        element: <Carroussel />,
      },
    ],
  },
]);
