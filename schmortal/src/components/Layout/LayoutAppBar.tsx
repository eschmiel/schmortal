import AppBar from "@mui/material/AppBar/AppBar";
import IconButton from "@mui/material/IconButton/IconButton";
import Toolbar from "@mui/material/Toolbar/Toolbar";
import Typography from "@mui/material/Typography/Typography";
import { Avatar, Button } from "@mui/material";

export const LayoutAppBar = ({auth = false, setAuth = ()=>{}}) => (
    <AppBar>
        <Toolbar sx={{alignItems: 'stretch'}}  >
            <Typography variant="h1" fontWeight='bold' sx={{flexGrow: 1, margin: "2px"}}>SCHMORTAL</Typography>
            {auth ? 
                <IconButton disableRipple sx={{cursor: "default", margin: "0px" }} >
                    <Avatar src="/unnamed.jpg" onClick={setAuth} variant="appBar"/>
                </IconButton>
            : 
                <Button variant="appBar" onClick={setAuth}>
                    Sign In
                </Button>
            }
        </Toolbar>
    </AppBar>
)
