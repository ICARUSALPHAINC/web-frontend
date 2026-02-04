import { useState } from "react";
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const MuiAccordion = ({items}) => {
    const [expanded, setExpanded] = useState(false);
    const handleChange = (isExpanded, panel) => {
        setExpanded(isExpanded ? panel : false)
    }

    // const toggle = (index) => {
    //     setOpenIdx(prev => (prev === index ? null : index));
    // };
    // items = [{role: "", desc: ""}, {...}, ...] arr of objs
    

    return (
        <div>
            {items.map((item, index) => (
                <div>
                <Accordion expanded={expanded === 'panel${index}'} onChange={(event, isExpanded) => handleChange(isExpanded, 'panel${index}')}>
                    <AccordionSummary id='panel${index}-header' aria-controls='panel${index}-content' expandIcon={<ExpandMoreIcon/>}>
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
                </div>
            ))};
        </div>
    );
};

export default MuiAccordion