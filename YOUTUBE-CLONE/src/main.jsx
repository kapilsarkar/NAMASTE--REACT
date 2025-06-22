import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import store from "./utils/store.js";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import Layout from "./components/Layout.jsx";
import Error from "./components/Error.jsx";
import Body from "./components/Body.jsx";
import MainContainer from "./components/MainContainer.jsx";
import WatchPage from "./components/WathchPage.jsx";
import SearchResult from "./components/SearchResult.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<Error />}>
      <Route element={<Body />}>
        <Route index element={<MainContainer />} />
        <Route path="main" element={<MainContainer />} />
        <Route path="watch" element={<WatchPage />} />
        <Route path="/search" element={<SearchResult />} />
      </Route>
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
