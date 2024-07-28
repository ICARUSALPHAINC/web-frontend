import {theme} from "../themes/primaryTheme";
import {Box, useMediaQuery} from "@mui/material";
import TopNavBarDesktop from "../components/layout/TopNavBarDesktop";
import Footer from "../components/layout/Footer";
import TopNavBarMobile from "../components/layout/TopNavBarMobile";


/**
 * Wraps the children screens under relevant layouts based on viewport width.
 * @param children children to be returned inside the wrapped
 * @constructor
 */
function MainLayout({children}) {
    const mobileView = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            width: '100vw',
            overflow: 'auto',
        }}>
            <Box sx={{
                position: 'sticky',
                top: 0,
                width: '100%',
                zIndex: 1100,
            }}>
                {mobileView ? <TopNavBarMobile/> : <TopNavBarDesktop/>}
            </Box>
            <Box sx={{
                flex: 1,
                overflowY: 'auto',
            }}>
                {children}
            </Box>
            <Footer sx={{width: '100%'}}/>
        </Box>
    );
}

export default MainLayout;