import { useState } from "react";
import { Accordion, AccordionDetails, AccordionSummary, Container, Typography } from "@mui/material";
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
        <Container
            sx={{
                //container undos Accordion's default column layout
                //set again below
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            {items.map((item, index) => (
                <Accordion
                    sx={{
                        width: 600,
                        maxWidth: "100%",
                        color: '#fff',
                        borderRadius: 3, // theme spacing, small rounding
                        mb: 2, // margin bottom 2
                        boxShadow: "2px 2px 5px #ff5aa7" // optional shadow, 1,2 = X,Y and 3 = blur amount
                        
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
        </Container>
    );
};

export default MuiAccordion