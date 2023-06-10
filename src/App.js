import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import NotFound from "./pages/NotFound";
import RootLayout from "./components/layout/RootLayout";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "menu",
        element: <Menu />,
      },
      {
        path: "menu/:cuisineType",
        element: <Menu />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
    ],
  },
]);

const App = () => {
  return (
    <div className="max-w-full w-full">
      <RouterProvider router={router} />
    </div>
  );
};
export default App;
