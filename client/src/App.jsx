import {createBrowserRouter, RouterProvider} from "react-router-dom";
import AppLayout from "./components/AppLayout/AppLayout";
import Home from "./components/pages/Home";
import Form from "./components/pages/Form";
import TemplateSelection from "./components/pages/TemplateSelection";

import PortfolioById from "./components/pages/PortfolioById";
import Dashboard from "./components/pages/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/form",
        element: <Form />,
      },
      {
        path: "/templates",
        element: <TemplateSelection />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "/portfolio/:id",
    element: <PortfolioById />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
