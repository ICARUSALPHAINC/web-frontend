// Item has item.link, item.icon
import {Link} from "@mui/material";

function SocialIcon(item) {
    return (
        <Link href={item.link} target="_blank" sx={{
            margin: '0 0.5rem',
            fontSize: 40,
            color: '#fff',
            transition: 'scale 0.5s',
            '&:hover': {scale: '1.2'}
        }}>
            {item.icon}
        </Link>);
}

export default SocialIcon;