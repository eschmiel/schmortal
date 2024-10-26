import { createTheme } from "@mui/material";

const defaultTheme = createTheme()


///// configuration /////


const mainBGColor = "#fefefe"
const appBarBGColor = "#ba1aeb"
const drawerBGColor = "#f2f1ef"

const drawerWidth = 240


///// create theme /////


export const theme = createTheme({
    topMarginToClearAppBar: "130px",
    colors: {
        mainBGColor
    },
    components: {
        MuiDrawer: {
            styleOverrides: {
                root: {
                    width: drawerWidth,
                    [`& .MuiDrawer-paper`]: { 
                        width: drawerWidth, 
                        boxSizing: 'border-box', 
                        backgroundColor: drawerBGColor
                    }
                }
            }
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    zIndex: defaultTheme.zIndex.drawer + 1,
                    backgroundColor: appBarBGColor
                }
            }
        }
    }
})


// backgroundColor: '#8b02b5', 
// backgroundColor: "#f2f1ef",
// backgroundColor: "#3b0053",
// color: "white"

declare module '@mui/material/styles' {
    interface Theme {
        topMarginToClearAppBar: string;
        colors: { [key: string]: string};
    }
    interface ThemeOptions {
        topMarginToClearAppBar: string;
        colors: { [key: string]: string};
    }
}