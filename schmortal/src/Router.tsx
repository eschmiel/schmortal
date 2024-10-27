import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./Layout";
import { ErrorPage } from "./pages/errorPage";
import { HomePage } from "./pages/HomePage";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <HomePage />
        }
      ]
    }
  ])