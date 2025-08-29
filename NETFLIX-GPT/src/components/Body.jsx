import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router";
import GuestBrowse from "./GuestBrowse";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/GuestBrowse",
      element: <GuestBrowse />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
