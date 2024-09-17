import React, {useState, useEffect} from "react";
import {Container, CircularProgress, Alert} from "@mui/material";
import {getProjectData} from '../services/projectDataService';

export default function AutoCarousel() {
    const [projects, setProjects] = useState([]);
    const [projectIdx, setProjectIdx] = useState(0);  // the index in projects to access
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

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

    useEffect(() => {
        let interval;
        if (projects) {
            interval = setInterval(() => {
                setProjectIdx((projectIdx + 1) % projects.length);
            }, 4000);
        }

        return () => {
            clearInterval(interval);
        };
    }, [projects, projectIdx]);

    if (loading) {
        return <CircularProgress></CircularProgress>
    }

    if (error) {
        return <Container sx={{mt: '1rem', padding: '1rem'}}><Alert severity="error"> {error} </Alert></Container>
    }

    /**
     * todo: layout
     */
    return (
        <Container sx={{
            // border: '1px solid red',
            flex: 1,
            aspectRatio: 1,
            maxWidth: '50%',
            background: `center / contain no-repeat url(${projects[projectIdx].logo})`,
        }} alt="alt text">
        </Container>
    );
}