import {Box, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";

function SideNavBar(){

    // Each Individual List Item
    function ListItem(item, index) {
        return (<ListItemButton
            key={index}
            sx={{
                justifyContent: 'flex-start',
                backgroundColor: 'inherit',
                '&:hover': {
                    backgroundColor: 'action.hover',
                },
                color: 'inherit',
                marginBottom: '0',
            }}
            onClick={(event) => {
                // If there is a function assigned that needs to be called, call that function, otherwise redirect to the required item route.
                if (!item.onClickFunction) {
                    window.location.href = item.route;
                } else {
                    item.onClickFunction(event);
                }
            }}
        >
            <ListItemIcon sx={{
                color: 'sidebar.iconColor', // Inherit color from ListItemButton
                justifyContent: 'flex-start',
            }}>
                {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.text}/>
        </ListItemButton>);
    }

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            top: 0,
            left: 0,
            justifyContent: 'flex-start',
            backgroundColor: 'sidebar.background',
            height: '100vh',
            width: '11.5rem',
            padding: '10px 0', // 10 on top and bottom, 0 on left and right
            overflow: 'hidden', // This ensures any overflow is hidden
            position: 'sticky',
        }}>



        </Box>
    );


}

export default SideNavBar;