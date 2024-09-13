/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import {getTeamMemberData, teamMembers} from "../services/teamDataService";
import {
    Alert,
    Avatar,
    Box,
    Card,
    CircularProgress,
    Container,
    Grid,
    Link,
    Typography,
    Pagination,
    Skeleton
} from "@mui/material";
import { Typewriter } from "react-simple-typewriter";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LanguageIcon from '@mui/icons-material/Language';

// Default color for team member background color
const defaultTeamMemberBackgroundColor = {
    backgroundColor: '#232323',
    bioColor: '#181818',
};

// MemberData must be <object> containing name, role, profileImage, bio, profileLink
function TeamMember(memberData, index, backgroundColor = defaultTeamMemberBackgroundColor) {
    if (!memberData) {
        return (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index} sx={{ height: '25rem' }}>
                <Card
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
                    }}
                >
                    <Skeleton variant="circular" width={'7rem'} height={'7rem'} />
                    <Skeleton variant="text" width="60%" height={'1rem'} sx={{ mt: 2 }} />
                    <Skeleton variant="text" width="40%" height={'1rem'} sx={{ mt: 1 }} />
                    <Skeleton variant="rectangular" width="80%" height={60} sx={{ mt: 2, borderRadius: '1rem' }} />
                    <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
                        <Skeleton variant="circular" width={40} height={40} />
                        <Skeleton variant="circular" width={40} height={40} />
                    </Box>
                </Card>
            </Grid>
        );
    }

    return (
        <Grid item xs={6} sm={6} md={4} lg={3} key={index}>
            <Card component={Link}
                  href={memberData.profileLink} target={"_blank"} rel="noopener noreferrer"
                  sx={{
                      width: 'auto',
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
                                <LanguageIcon sx={{ fontSize: 40 }}/>
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
    const itemsPerPage = 12;  // Number of items to display per page

    useEffect(() => {
        const fetchTeamData = async () => {
            setLoading(true);
            try {
                const data = teamMembers.sort((a, b) => a.name.localeCompare(b.name));
                setTeamData(data);
            } catch (e) {
                setError("Failed to load team data");
            }
            setLoading(false);
        };

        fetchTeamData();
    }, [currentPage]); // Re-fetch data whenever currentPage changes


    const handlePageChange = (event, value) => {
        // Set the team data to an empty array to clear the current members
        setTeamData(Array(itemsPerPage).fill(null));

        // Delay the loading of new data
        setTimeout(() => {
            setCurrentPage(value);
        }, 200); // Adjust the de lay time as needed
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
                    Get to know the people behind our
                    ‎<Typewriter
                    words={['code', 'ideas', 'stories', 'designs']}
                    cursor
                    loop={0}
                    cursorStyle="_"
                    typeSpeed={100}
                    deleteSpeed={100}
                    delaySpeed={2000}
                />
                </Typography>

                <Typography variant="body1" sx={{m: '1rem'}}>
                    Our team is our greatest asset. Each member brings unique skills and perspectives, contributing to
                    our collective creativity. Our diversity allows us to overcome challenges and develop advanced solutions.
                    With a fearless drive to innovate, we redefine the boundaries of what’s possible.
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
