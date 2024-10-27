import { RouterProvider } from "react-router-dom"
import { ThemeProvider } from "@mui/material"
import { theme } from "./muiTheme.ts"
import { router } from "./router.tsx"

const App = () => (
  <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
  </ThemeProvider>
)

export default App
