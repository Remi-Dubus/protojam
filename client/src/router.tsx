import App from "./App";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";

export const mainRouter = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);
