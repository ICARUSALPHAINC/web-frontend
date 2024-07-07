import {routes} from "../configs/routesConfig";
import {menuItems} from "../configs/menuItems";
import {AppBar, Toolbar, useTheme} from "@mui/material";

function itemButton({item}) {

}

function TopNavBar() {
    const theme = useTheme();

    return (
        <AppBar position="static" sx={{
            background: `${theme.palette.appBar.background}`,
        }}>
            <Toolbar>

            </Toolbar>
        </AppBar>
    );
}

export default TopNavBar;