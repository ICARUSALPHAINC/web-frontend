import React, { useState, useEffect } from "react";
import { Container, CircularProgress, Alert, useTheme, Box,} from "@mui/material";
import { getProjectData } from '../services/projectDataService';
import {routes} from "../configs/routesConfig";
import {Link} from "react-router-dom";


export default function AutoCarousel() {
    const [projects, setProjects] = useState([]);
    const [projectIdx, setProjectIdx] = useState(0);  // the index in projects to access
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [slideDirection, setSlideDirection] = useState("left");  // Slide direction for animation


    // Load project data / handle error on component mount
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

    useEffect(() => {
        let interval;
        if (projects.length > 0) {
            interval = setInterval(() => {
                // Set slide direction for smooth animation
                setSlideDirection("left");
                setProjectIdx((prevIdx) => (prevIdx + 1) % projects.length);
            }, 4000);
        }

        return () => {
            clearInterval(interval);
        };
    }, [projects]);

    const handleNextSlide = () => {
        setSlideDirection("left");
        setProjectIdx((prevIdx) => (prevIdx + 1) % projects.length);
    };
    
    const handlePrevSlide = () => {
        setSlideDirection("right");
        setProjectIdx((prevIdx) => (prevIdx === 0 ? projects.length - 1 : prevIdx - 1));
    };

    if (loading) {
        return <CircularProgress />;
    }

    if (error) {
        return (
            <Container sx={{ mt: '1rem', padding: '1rem' }}>
                <Alert severity="error">{error}</Alert>
            </Container>
        );
    }

    return (
        <Box
            sx={{
                position: 'relative',
                overflow: 'hidden',  // Hide images that are out of the view
                borderRadius: '10px',
            }}
        >
            {/* Image container with sliding effect */}
            <Box
                sx={{
                    display: 'flex',
                    transition: 'transform 0.5s ease-in-out',
                    transform: `translateX(-${projectIdx * 100}%)`, // Adjusted for both directions
                }}
            >
                {projects.map((project, idx) => (
                    <Link 
                        key={idx} 
                        to={routes.projects} 
                        style={{ display: 'flex', width: '100%', height: '100%' }} 
                    >
                        <Box
                            component="img"
                            src={project.logo}
                            alt={project.name}
                            sx={{
                                minWidth: '100%',  // Ensures each image takes full width of container
                                height: '100%',
                                objectFit: 'contain',
                                cursor: 'pointer',  // Visual cue that it's clickable
                            }}
                        />
                    </Link>
                ))}
            </Box>


            {/* Navigation buttons for manual control */}
            <Box
                onClick={handlePrevSlide}
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '10px',
                    transform: 'translateY(-50%)',
                    cursor: 'pointer',
                    zIndex: 1,
                    color: 'primary.main', 
                    transition: 'transform 0.3s ease', // Smooth transition for scaling
                    '&:hover': {
                        transform: 'scale(1.3) translateY(-50%)', // Scale on hover
                    },
                }}
            >
                &lt;
            </Box>

            <Box
                onClick={handleNextSlide}
                sx={{
                    position: 'absolute',
                    top: '50%',
                    right: '10px',
                    transform: 'translateY(-50%)',
                    cursor: 'pointer',
                    zIndex: 1,
                    color: 'primary.main', 
                    transition: 'transform 0.3s ease', // Smooth transition for scaling
                    '&:hover': {
                        transform: 'scale(1.3) translateY(-50%)', // Scale on hover
                    },
                }}
            >
                &gt;
            </Box>

        </Box>
    );
}
