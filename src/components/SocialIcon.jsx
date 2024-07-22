// Item has item.link, item.icon
import {Link} from "@mui/material";

function SocialIcon(item) {
    return (
        <Link
            component={item.route ? 'a' : 'button'} 
            href={item.route ? item.route : undefined} 
            target={item.route ? "_blank" : undefined} 
            rel={item.route ? "noopener noreferrer" : undefined}
            onClick={(item.onClickFunction && !item.route) ? item.onClickFunction : undefined}
            sx={{
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