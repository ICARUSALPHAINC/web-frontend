// Item has item.text, item.img
// ex. items = [{img: "/contant-images/SixSevenHAHHA.png" title: "Brainrot and Memes", text: "A culture of humor that bolsters creativity and productivity" }]
// Todo: test with ContactUsPage by making an items array for benefits
import { Container, Box, Typography } from "@mui/material";

function BenefitIcons({items}) {
    return (
        <Container // Benefits row 1, switch to map function for rows 1 and 2 possibly
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 0.5,
                color: '#fff',
                width: '100%',
                // marginTop: '2rem',
                // marginBottom: '2rem',
                borderRadius: '20px',
            }}
            >
            {items.map((item, index) => (
                <Box 
                    sx={{
                        background: '#333333',
                        borderRadius: '10px',
                        padding: '2rem',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        width: {xs: '80%', md: '40%'}, // Adjusted width for responsiveness
                        // height: {xs: 'auto', md: '50ch'}, // Adjusted minimum height for content
                        marginTop: '2rem',
                    }}
                >
                    <Box
                        component="img"
                        src={`${item.img}`}
                        alt={`${index}`}
                        sx={{
                            width: "100%",
                            height: 200,
                            objectFit: "cover",
                            borderRadius: 2,
                        }}
                    />
                    <Typography>
                        {`${item.title}`}
                        {`${item.text}`}
                    </Typography>
                </Box>
                ))
            }
        </Container>
    )
}

export default BenefitIcons;