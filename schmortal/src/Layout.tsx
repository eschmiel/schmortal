import Box from "@mui/material/Box/Box";
import { LayoutAppBar } from "./components/Layout/LayoutAppBar";
import { LayoutDrawer } from "./components/Layout/LayoutDrawer";
import { LayoutContainer } from "./components/Layout/LayoutContainer";
import useTheme from "@mui/material/styles/useTheme";

export function Layout() {
    return(
        <AppBox>
            <LayoutAppBar />
            <LayoutDrawer />
            <LayoutContainer />
        </AppBox>
    )
}

const  AppBox = ({children}: {children: JSX.Element[]}) => {
    const { colors } = useTheme()
    const {mainBGColor} = colors
    return (
        <Box display='flex' bgcolor={mainBGColor} >
            {children}
        </Box>
    )
}