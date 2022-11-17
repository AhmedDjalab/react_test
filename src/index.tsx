import React from "react";
import ReactDOM from "react-dom/client";
import { StarredProvider } from "./context/starred_context";
import { App } from "./pages/App/App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <StarredProvider>
      <App />
    </StarredProvider>
  </React.StrictMode>
);
