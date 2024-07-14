import React, {useEffect, useState} from "react";
import {getTeamMemberData} from "../services/teamDataService";
import {Alert, Avatar, Box, Card, CircularProgress, Container, Grid, Link, Typography} from "@mui/material";
import {Typewriter} from "react-simple-typewriter";

// Default color for team member background color
// TODO: MOVE THIS INTO PRIMARY THEMES
const defaultTeamMemberBackgroundColor = {
    backgroundColor: '#232323',
    bioColor: '#181818',
};

// MemberData must be <object> containing name, role, profileImage, bio, profileLink
function TeamMember(memberData, index, backgroundColor = defaultTeamMemberBackgroundColor) {
    // <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
    //     <Card component={Link} href={member.profileLink} target="_blank" rel="noopener noreferrer" sx={{
    //         display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2,
    //         textDecoration: 'none', '&:hover': { transform: 'scale(1.05)' }
    //     }}>
    //         <Avatar alt={member.name} src={member.profileImage} sx={{ width: 56, height: 56, mb: 2 }} />
    //         <Typography variant="h6">{member.name}</Typography>
    //         {member.role && <Typography color="textSecondary">{member.role}</Typography>}
    //     </Card>
    // </Grid>
    return (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index} sx={{height: '25rem',}}>
            <Card component={Link}
                  href={memberData.profileLink} target={"_blank"} rel="noopener noreferrer"
                  sx={{
                      display: 'grid',
                      gridTemplateColumns: 'auto',
                      justifyContent: 'center',
                      justifyItems: 'center',
                      alignItems: 'center',
                      alignText: 'center',
                      height: '20rem',
                      transition: '0.3s',
                      '&:hover': {transform: 'scale(1.05)'},
                      background: backgroundColor.backgroundColor,
                      borderRadius: '1rem',
                      padding: '1rem',
                      textDecoration: 'none', // Remove underline
                  }}>
                <Avatar alt={memberData.name} src={memberData.profileImage} sx={{width: '7rem', height: '7rem',}}/>

                <Typography variant='h5' component='body1'>
                    <b>{memberData.name}</b>
                </Typography>

                {memberData?.specificRole &&
                    <Typography variant='body1'>
                        <b>{memberData.specificRole}</b>
                    </Typography>
                }

                {memberData.bio && (
                    <Box bgcolor={backgroundColor.bioColor}
                         sx={{padding: '1rem', marginTop: '1rem', borderRadius: '2rem',}}>
                        <Typography variant={"body2"}>
                            {memberData.bio}
                        </Typography>
                    </Box>
                )}
            </Card>
        </Grid>);
}

function TeamPage() {
    const [teamData, setTeamData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTeamData = async () => {
            try {
                const data = await getTeamMemberData();
                setTeamData(data);
            } catch (e) {
                setError("Failed to load team data");
            }
            setLoading(false);
        };
        fetchTeamData();
    }, []);

    if (loading) return <CircularProgress/>;
    if (error) return <Alert severity="error">{error}</Alert>;

    return (
        <Container maxWidth="lg">
            <Box sx={{mt: 4, textAlign: 'center'}}>
                <Typography variant="h2" gutterBottom>Meet the Team</Typography>
                <Typography variant="h6" color="textSecondary" mb={4}>
                    {/*Invisible character placed before typewriter to preserve layout on typewriter delete animation. */}
                    ‎<Typewriter
                    words={['Get to know the people behind our projects', 'Meet the brains of our projects']}
                    loop={3}
                    cursor
                    cursorStyle=""
                    typeSpeed={50}
                    deleteSpeed={50}
                    delaySpeed={300}
                />
                </Typography>
                <Grid container spacing={4}>
                    {teamData.map((member, index) => TeamMember(member, index))}
                </Grid>
            </Box>
        </Container>
    );
}

export default TeamPage;
