import Box from "@mui/material/Box/Box";
import { LayoutAppBar } from "./components/Layout/LayoutAppBar";
import { LayoutDrawer } from "./components/Layout/LayoutDrawer";
import { LayoutContainer } from "./components/Layout/LayoutContainer";
import useTheme from "@mui/material/styles/useTheme";
import { useState } from "react";

export function Layout() {
    const [auth, setAuth] = useState(false)

    return(
        <AppBox>
            <LayoutAppBar auth={auth} setAuth={()=>setAuth(!auth)}/>
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