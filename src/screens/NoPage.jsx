import {Box, Button, Container, Typography} from "@mui/material";
import {routes} from "../configs/routesConfig";
import clouds from "../assets/clouds/clouds3.jpg";

function NoPage(){

    return(

        <Container
            maxWidth='md'
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                // marginTop: '15vh',  // (DISABLED) xx% below the top of the viewport
                // height: '85vh' // (DISABLED) ensure view port height is not exceeded.
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    '& > *': {
                        marginBottom: '1rem',
                        textAlign: 'center',
                    }
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center", // Center the image horizontally
                        alignItems: "center",
                        height: "30rem", // Set a maximum height for the image container
                        "& img": { // Target the image element within the Box
                            width: "100%", // Make the image fill the width of its container
                            objectFit: "cover", // Maintain aspect ratio while covering the container
                        },
                    }}
                >
                    <img src={clouds} alt="Icarus Cloudy Banner" />
                </Box>
                <Typography variant="h1" element="h1"> The page you are looking for does not exist. </Typography>
                <Button
                    variant="contained"
                    color="secondary"
                    href={routes.home}
                    sx={{ margin: '15px' }}
                >
                    Go Back To The Homepage
                </Button>
            </Box>
        </Container>

    );
}

export default NoPage;