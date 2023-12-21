import React from "react";
import ReactDom from "react-dom/client";

import "./index.scss";

ReactDom.createRoot(document.getElementById("popup-root")!).render(
  <React.StrictMode>
    <ul>
      <li>选项1</li>
      <li>选项2</li>
      <li>选项3</li>
    </ul>
  </React.StrictMode>
);
