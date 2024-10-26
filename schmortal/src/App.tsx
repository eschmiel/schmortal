import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import { ErrorPage } from './pages/errorPage.tsx'
import { HomePage } from "./pages/HomePage.tsx"
import { Layout } from "./Layout.tsx"
import { ThemeProvider } from "@mui/material"
import { theme } from "./muiTheme.ts"

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

const App = () => (
  <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
  </ThemeProvider>
)

export default App
