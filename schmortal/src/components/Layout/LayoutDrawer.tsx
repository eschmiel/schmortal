import Box from "@mui/material/Box/Box";
import Drawer from "@mui/material/Drawer/Drawer";
import List from "@mui/material/List/List";
import ListItem from "@mui/material/ListItem/ListItem";
import ListItemButton from "@mui/material/ListItemButton/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon/ListItemIcon";
import ListItemText from "@mui/material/ListItemText/ListItemText";
import InboxIcon from '@mui/icons-material/MoveToInbox';

export const LayoutDrawer = () => (
    <Drawer variant="permanent">
        <Box sx={{marginTop:'130px'}}>
            <List>
                <ListItem key='bingo' disablePadding>
                    <ListItemButton>
                        <ListItemIcon >
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary={"BINGO"}/>
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    </Drawer>
)