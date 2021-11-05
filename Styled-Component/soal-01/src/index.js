import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <div style={{ display: "flex", height: "100vh", alignItems: "center", justifyContent: "center"}}>
      <App />
    </div>
  </StrictMode>,
  rootElement
);
