import {Container} from "@mui/material";
import Home from "../components/layout/Home"
// TODO: Add a brief description about who we are, appropriate headings, and links
//   use the clouds assets to make it look fancy. Make sure its colorful. Add those assets in assets/banners/clouds
//   (files will be shared on discord shortly after assigning the page, until then use any random banner like image to test layout)


function HomePage() {

    return (
    <Container size='xl'>
        <Home />
    </Container>);
}

export default HomePage;