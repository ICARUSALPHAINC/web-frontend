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

    return (<>

        <Box sx={{
            display: 'grid',
            gridTemplateColumns: 'auto',
            gridTemplateRows: 'auto 1fr',
            overflowX: 'auto',
            height: '100vh',
            width: '100vw',
        }}>
            {mobileView ?
                <>
                    <Box sx={{
                        position: 'sticky',
                        width: '100%',
                    }}>
                        <TopNavBarMobile/>
                    </Box>
                    {children}
                    <Footer/>
                </>
                :
                <>
                    <Box sx={{
                        position: 'sticky',
                        width: '100%',
                    }}>
                        <TopNavBarDesktop/>
                    </Box>
                    {children}
                    <Box sx={{
                        marginTop: 'auto'
                    }}>
                        <Footer/>
                    </Box>
                </>
            }

        </Box>

    </>);
}

export default MainLayout;