import React from "react";
import ReactDom from "react-dom/client";

import "./index.scss";
import { sayHello } from "./tools";

function App() {
  sayHello();

  return (
    <ul>
      <li>选项1</li>
      <li>选项2</li>
      <li>选项3</li>
    </ul>
  );
}

ReactDom.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
