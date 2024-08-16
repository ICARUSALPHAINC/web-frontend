import React, { useEffect, useState } from "react";
import { getTeamMemberData } from "../services/teamDataService";
import { Alert, Avatar, Box, Card, CircularProgress, Container, Grid, Link, Typography, Pagination } from "@mui/material";
import { Typewriter } from "react-simple-typewriter";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WebIcon from '@mui/icons-material/Web';

// Default color for team member background color
const defaultTeamMemberBackgroundColor = {
    backgroundColor: '#232323',
    bioColor: '#181818',
};

// MemberData must be <object> containing name, role, profileImage, bio, profileLink
function TeamMember(memberData, index, backgroundColor = defaultTeamMemberBackgroundColor) {
    return (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index} sx={{ height: '25rem' }}>
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
                      '&:hover': { transform: 'scale(1.05)' },
                      background: backgroundColor.backgroundColor,
                      borderRadius: '1rem',
                      padding: '1rem',
                      textDecoration: 'none', // Remove underline
                  }}>
                <Avatar alt={memberData.name} src={memberData.profilePicture} sx={{ width: '7rem', height: '7rem' }} />

                <Typography variant='h5' component='body1'>
                    <b>{memberData.name}</b>
                </Typography>

                {memberData?.role &&
                    <Typography variant='body1'>
                        <b>{memberData.role}</b>
                    </Typography>
                }

                {memberData.bio && (
                    <Box bgcolor={backgroundColor.bioColor}
                         sx={{ padding: '1rem', marginTop: '1rem', borderRadius: '2rem' }}>
                        <Typography variant={"body2"}>
                            {memberData.bio}
                        </Typography>
                    </Box>
                )}

                {memberData.linkedIn || memberData.website ? (
                    <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
                        {memberData.linkedIn && (
                            <Link href={memberData.linkedIn} target="_blank" rel="noopener noreferrer">
                                <LinkedInIcon sx={{ fontSize: 40 }}/>
                            </Link>
                        )}
                        {memberData.website && (
                            <Link href={memberData.website} target="_blank" rel="noopener noreferrer">
                                <WebIcon sx={{ fontSize: 40 }}/>
                            </Link>
                        )}
                    </Box>
                ) : null}
            </Card>
        </Grid>);
}

function TeamPage() {
    const [teamData, setTeamData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;  // Number of items to display per page

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

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedTeamData = teamData.slice(startIndex, startIndex + itemsPerPage);

    if (loading) return <CircularProgress />;
    if (error) return <Alert severity="error">{error}</Alert>;

    return (
        <Container maxWidth="lg">
            <Box sx={{ mt: 4, textAlign: 'center' }}>
                <Typography variant="h2" gutterBottom>Meet the Team</Typography>
                <Typography variant="h6" color="textSecondary" mb={4}>
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
                    {paginatedTeamData.map((member, index) => TeamMember(member, index))}
                </Grid>
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: '1rem', mb: '1rem', }}>
                    <Pagination
                        count={Math.ceil(teamData.length / itemsPerPage)}
                        page={currentPage}
                        onChange={handlePageChange}
                        color="primary"
                    />
                </Box>
            </Box>
        </Container>
    );
}

export default TeamPage;
