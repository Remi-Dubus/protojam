import { createBrowserRouter } from "react-router-dom";
import App from "./App";

import HomePage from "./pages/homePage/HomePage";

export const mainRouter = createBrowserRouter([
  {
    element: <App />,
    loader: () => fetch(`${import.meta.env.VITE_API_URL}`),
    children: [
      {
        path: "/",
        element: <HomePage />,
        loader: () => fetch(`${import.meta.env.VITE_API_URL}`),
      },
    ],
  },
]);
