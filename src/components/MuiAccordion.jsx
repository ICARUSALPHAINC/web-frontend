import { useState } from "react";
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { pink } from "@mui/material/colors";

const MuiAccordion = ({items}) => {
    const [expanded, setExpanded] = useState(false);
    const handleChange = (isExpanded, panel) => {
        setExpanded(isExpanded ? panel : false)
    }
    // Refer: https://www.youtube.com/watch?v=t4XH7XwUqa0
    // const toggle = (index) => {
    //     setOpenIdx(prev => (prev === index ? null : index));
    // };
    // items = [{role: "", desc: ""}, {...}, ...] arr of objs
    

    return (
        <div>
            {items.map((item, index) => (
                <Accordion
                    sx={{
                        color: '#fff',
                        borderRadius: 3,        // theme spacing, small rounding
                        mb: 2,                  // margin bottom
                        boxShadow: "2px 2px 5px #ff5aa7" // optional shadow
                    }}
                    expanded={expanded === `panel${index}`} 
                    onChange={(_event, isExpanded) => handleChange(isExpanded, `panel${index}`)}>
                    <AccordionSummary 
                        id={`panel${index}-header`} 
                        aria-controls={`panel${index}-content`} 
                        expandIcon={<ExpandMoreIcon sx={{ color: pink[500] }} />}>
                        <Typography>
                            {item.role}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            {item.desc}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
    );
};

export default MuiAccordion