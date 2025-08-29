import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";

createRoot(document.getElementById("root")).render(
  <Provider store={appStore}>
    <App />
  </Provider>
);
