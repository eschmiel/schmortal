import AppBar from "@mui/material/AppBar/AppBar";
import IconButton from "@mui/material/IconButton/IconButton";
import Toolbar from "@mui/material/Toolbar/Toolbar";
import Typography from "@mui/material/Typography/Typography";
import { Avatar, Button } from "@mui/material";

export const LayoutAppBar = ({auth = false, setAuth = ()=>{}}) => (
    <AppBar>
        <Toolbar sx={{alignItems: 'stretch'}}  >
            
            <Typography variant="h1" fontWeight='bold' sx={{flexGrow: 1, margin: "2px"}}>SCHMORTAL</Typography>
            {auth ? <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                edge="end"
                sx={{
                    margin: "0px",
                    // width:"150px", 
                    "&:hover": {cursor: "pointer"}}
                }
                onClick={setAuth}
                disableRipple
            >
                <Avatar src="/unnamed.jpg" sx={{
                    width: "6rem", 
                    height: "6rem",
                    "&:hover": {
                        cursor: "pointer",
                        border: "2px solid yellow"
                    }
                }}/>
            </IconButton>
            : 
            // <Button sx={{alignItems: 'center', justifyContent: "center", display:"flex", width: "150px", color: "#ffd700",
            //     "&:hover": {cursor: "pointer", backgroundColor: '#8b02b5'}
            // }}>
            <Button variant="appBar" onClick={setAuth}>
            <Typography
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                sx={{
                    fontWeight: 'bold',
                    fontSize: '1.5rem',
                }}
            >
                Sign In
            </Typography>  
            </Button>
            }
        </Toolbar>
    </AppBar>
)