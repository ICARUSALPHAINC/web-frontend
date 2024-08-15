import React, {useState} from "react";
import {Box, Typography, Button} from "@mui/material";

// props needs props.lines
function ExpandableText(props) {
    const [isExpanded, setIsExpanded] = useState(false);  // whether the text is currently expanded

    return (
        <Box>
            <Typography variant="body2" color="textSecondary" sx={
                // truncate text with CSS when text is not expanded
                // otherwise use default styles
                (!isExpanded) ?
                {
                    overflow: "hidden", 
                    display: "-webkit-box", 
                    WebkitLineClamp: props.lines, 
                    WebkitBoxOrient: "vertical", 
                    textOverflow: "ellipsis",
                } : {}}>
                    {props.children}
                </Typography>
            <Button variant="link" disableRipple onClick={() => {
                setIsExpanded(!isExpanded);
            }}>
                {(isExpanded)? "Read less" : "Read more"}
            </Button>
        </Box>
    );
}

export default ExpandableText;