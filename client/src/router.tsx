import { createBrowserRouter } from "react-router-dom";
import data from "../../server/database/characters.json";
import App from "./App";
import type { charactersType } from "./assets/lib/definitions";
import Carroussel from "./components/carroussel/Carroussel";
import HomePage from "./pages/homePage/HomePage";

const characters: charactersType[] = data;
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
        element: <Carroussel characters={characters} />,
      },
    ],
  },
]);
