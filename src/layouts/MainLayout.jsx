import {theme} from "../themes/primaryTheme";
import {Box, useMediaQuery} from "@mui/material";
import { Outlet } from "react-router-dom";
import TopNavBarDesktop from "../components/layout/TopNavBarDesktop";
import Footer from "../components/layout/Footer";
import TopNavBarMobile from "../components/layout/TopNavBarMobile";


/**
 * Wraps the children screens under relevant layouts based on viewport width.
 * @param children children to be returned inside the wrapped
 * @constructor
 */
function MainLayout() {
    const mobileView = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            width: '100%',
            position: 'relative',
        }}>
            {mobileView ? <TopNavBarMobile/> : <TopNavBarDesktop/>}
            <Box sx={{
                flex: 1,
            }}>
                <Outlet />
            </Box>
            <Footer sx={{width: '100%'}}/>
        </Box>
    );
}

export default MainLayout;