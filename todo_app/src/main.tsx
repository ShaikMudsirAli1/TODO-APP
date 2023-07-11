/**
 *  * TYPESCRIPT TYPE ASSERATION:  IT IS USED TO TELL THE TYPESCRIPT
 *  COMPILER THAT YOU ARE SURE THAT THE VALUE RETURNED BY
 *  document.getElementById("root") IS OF TYPE HTMLElement.
 */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { TodosProvider } from "./store/todos.tsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <TodosProvider>
        <App />
      </TodosProvider>
    </BrowserRouter>
  </React.StrictMode>
);
