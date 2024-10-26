import Box from "@mui/material/Box/Box"
import Container from "@mui/material/Container/Container"
import useTheme from "@mui/material/styles/useTheme"
import { Outlet } from "react-router-dom"

export const LayoutContainer = () => {
    const theme = useTheme()
    const marginTop = theme.topMarginToClearAppBar
    return (
        <Container>
            <Box sx={{ marginTop, height: '100vh'}}>
                <Outlet/>  
            </Box>
        </Container>
    )
}