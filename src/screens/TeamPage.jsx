import React, {useEffect, useState} from "react";
import {getTeamMemberData} from "../services/teamDataService";
import {Alert, Box, CircularProgress, useMediaQuery} from "@mui/material";
import {theme} from "../themes/primaryTheme";

// MemberData must be <object>
function TeamMember(memberData){

}

function SideBarJumpMenu(){
    return(<>
    </>);
}

function TeamPage({showSidebar = true}){

    // Data
    const [loading, setLoading] = useState(true);
    const [teamData, setTeamData] = useState(null);
    const [error, setError] = useState(null);

    // Refs
    const [devloperRef, setDevloperRef] = useState(null);
    const [designerRef, setDesignerRef] = useState(null);
    const [operationsRef, setOperationsRef] = useState(null);
    const [financeRef, setFinanceRef] = useState(null);

    // Media Query
    const mobileView = useMediaQuery(theme.breakpoints.down('md'));

    // Fetch team member data on component mount
    useEffect( ()=> {

        async function fetchTeamData(){
            const data = await getTeamMemberData();
            setTeamData(data);
            if(data[0].error){
                setError(`Error Loading Projects: ${(data[0]).error}`);
            }
            setLoading(false);
        }

        fetchTeamData();

    }, []);

    if(loading){
        return(
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                mt: '1rem',
                padding: '1rem'
            }}>
                <CircularProgress/>
            </Box>);
    }

    if (error){
        return(
            <Box sx={{mt: '1rem', padding: '1rem'}}>
                <Alert severity="error"> {error} </Alert>
            </Box>
        );
    }

    return(<>
        <Box sx={{

        }}>
            test
        </Box>

    </>);
}

export default TeamPage;