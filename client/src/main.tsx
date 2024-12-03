import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

const rootElement = document.getElementById("root");
if (rootElement == null) {
  throw new Error(`Your HTML Document should contain a <div id="root"></div>`);
}

import { mainRouter } from "./router";

createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={mainRouter} />
  </StrictMode>,
);
