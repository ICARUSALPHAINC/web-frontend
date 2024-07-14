import React, {useEffect, useState} from 'react';
import {Card, CardContent, Typography, Grid, CircularProgress, CardMedia, Pagination, Box, Alert} from '@mui/material';
import {getProjectData} from '../services/projectDataService';
import {Typewriter} from "react-simple-typewriter";

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
        <Box sx={{textAlign: 'center', m: 4}}>
            <Typography variant="h2" gutterBottom>
                Innovative Projects
            </Typography>

            <Typography variant="h6" component="h2" color="textSecondary" sx={{mb: '1rem'}}>
                {/*Invisible character placed before typewriter to preserve layout on typewriter delete animation. */}
                ‎ <Typewriter
                    words={['Discover what we\'re building and explore our latest endeavors!', 'Dive into what our team is creating!']}
                    loop={3}
                    cursor
                    cursorStyle=""
                    typeSpeed={50}
                    deleteSpeed={50}
                    delaySpeed={300}
                />
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
                                <Typography variant="body2" color="textSecondary">
                                    {project.description}
                                </Typography>
                                <Typography component="a" href={project.link} target="_blank" rel="noopener noreferrer"
                                            sx={{
                                                textDecoration: 'none',
                                                color: 'primary.main',
                                                '&:hover': {textDecoration: 'underline'}
                                            }}>
                                    Learn More
                                </Typography>
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
    );
}

export default ProjectsPage;