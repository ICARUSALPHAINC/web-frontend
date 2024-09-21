import React, {useEffect, useState} from 'react';
import {
    Card,
    CardContent,
    Typography,
    Grid,
    CircularProgress,
    CardMedia,
    Pagination,
    Box,
    Alert,
    Container
} from '@mui/material';
import {getProjectData} from '../services/projectDataService';
import {Typewriter} from "react-simple-typewriter";
import ExpandableText from '../components/ExpandableText';

// ProjectsPage Component: Displays a list of projects with pagination
function ProjectsPage() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    // Load project data / error on component mount
    useEffect(() => {
        const fetchProjects = async () => {
            const data = await getProjectData();
            setProjects(data);
            if ((data[0]).error) {
                setError(`Error Loading Projects: ${(data[0]).error}`);
            }
            setLoading(false);
        };
        fetchProjects();
    }, []);
    //

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedProjects = projects.slice(startIndex, startIndex + itemsPerPage);

    if (loading) {
        return <CircularProgress/>;
    }

    if (error) {
        return <Box sx={{mt: '1rem', padding: '1rem'}}><Alert severity="error"> {error} </Alert></Box>
    }

    return (
        <Container maxWidth="lg">
            <Box sx={{textAlign: 'center', m: 4}}>
                <Typography variant="h2" gutterBottom>
                    Innovative Projects
                </Typography>

                <Typography variant="h6" component="h2" color="textSecondary" sx={{mb: '1rem'}}>
                    {/*Invisible character placed before typewriter to preserve layout on typewriter delete animation. */}
                    ‎ <Typewriter
                    words={['See what we\'re working on!', 'Discover what we\'re building!']}
                    loop={0}
                    cursor
                    cursorStyle="_"
                    typeSpeed={50}
                    deleteSpeed={50}
                    delaySpeed={1000}
                />
                </Typography>

                <Typography variant="body1" sx={{m: '1rem'}}>
                    Our projects span various industries, from AI and gaming to social media and productivity tools.
                    At Icarus Development, we tackle complex challenges and develop forward-thinking solutions that make
                    a meaningful impact. We are committed to pushing technological boundaries and creating groundbreaking advancements.
                </Typography>

                <Grid container spacing={4} justifyContent="center">
                    {paginatedProjects.map((project, index) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                            <Card sx={{maxWidth: '100%', transition: '0.3s', '&:hover': {transform: 'scale(1.05)'}}}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={project.logo}
                                    alt={project.title}
                                />
                                <CardContent>
                                    <Typography variant="h5">{project.title}</Typography>
                                    <ExpandableText lines="3">{project.description}</ExpandableText>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
                <Box sx={{display: 'flex', justifyContent: 'center', mt: 4}}>
                    <Pagination
                        count={Math.ceil(projects.length / itemsPerPage)}
                        page={currentPage}
                        onChange={handlePageChange}
                        color="primary"
                    />
                </Box>
            </Box>
        </Container>
    );
}

export default ProjectsPage;