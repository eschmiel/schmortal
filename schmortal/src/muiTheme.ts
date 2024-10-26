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
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    variants: [
                        {
                            props: { variant: 'appBar'},
                            style: {
                                alignItems: 'center', 
                                justifyContent: "center", 
                                display:"flex", 
                                width: "150px", 
                                color: "#ffd700",
                                fontWeight: 'bold',
                                fontSize: '1.5rem',
                                "&:hover": {cursor: "pointer", backgroundColor: '#8b02b5'}
                            }
                        }
                    ]
                }
            }
        },
        MuiAvatar: {
            styleOverrides: {
                root: {
                    variants: [
                        {
                            props: {variant: 'appBar'},
                            style: {
                                width: "6rem", 
                                height: "6rem",
                                "&:hover": {
                                    cursor: "pointer",
                                    border: "2px solid yellow"
                                }
                            }
                        }
                    ]
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

declare module '@mui/material/Button' {
    interface ButtonPropsVariantOverrides {
        appBar: true;
    }
}

declare module '@mui/material/Avatar' {
    interface AvatarPropsVariantOverrides {
        appBar: true;
    }
}