import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import { ErrorPage } from './pages/errorPage.tsx'
import { HomePage } from "./pages/HomePage.tsx"
import { Layout } from "./Layout.tsx"

const router = createBrowserRouter([
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

const App = () => <RouterProvider router={router} />

export default App
