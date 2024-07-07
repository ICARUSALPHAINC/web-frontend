import {theme} from "../themes/primaryTheme";
import {Box, useMediaQuery} from "@mui/material";

/**
 * Wraps the children screens under relevant layouts based on viewport width.
 * @param children children to be returned inside the wrapped
 * @constructor
 */
function MainLayout({ children }) {
    const mobileView = useMediaQuery(theme.breakpoints.down('md'));

    return(<>

        <Box sx={{
            display: 'grid',
            gridTemplateColumns: mobileView? '1fr' : 'auto 1fr auto',
            gridTemplateRows: mobileView ? 'auto 1fr auto' : 'auto',
            overflowX: 'auto',
            width: '100vw',
        }}>
            {mobileView?
            <>{children}</>
            :
             <>{children}</>
            }

        </Box>

        </>);
}

export default MainLayout;