import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Grid, CircularProgress, CardMedia, Pagination, Box } from '@mui/material';
import { styled } from '@mui/system';
import { Typewriter } from 'react-simple-typewriter';
import { getProjectData } from '../services/projectDataService'; 

// Styled components for Card and Link
const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: '100%',
  width: '100%',
  transition: '0.3s',
  borderRadius: 10,
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

const StyledLink = styled('a')(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.primary.main,
  '&:hover': {
    textDecoration: 'underline',
  },
}));


// Styled component for the pagination container
const PaginationContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  marginTop: theme.spacing(4),
}));


const ProjectsPage = () => {
  // State for projects data, loading state, error state, and current page
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Number of projects per page

// Fetch projects data on component mount
useEffect(() => {
  const fetchProjects = async () => {
    try {
      const data = getProjectData();
      setProjects(data);
    } catch (err) {
      setError('Failed to fetch projects');
    } finally {
      setLoading(false);
    }
  };
  fetchProjects();
}, []);

const handlePageChange = (event, value) => {
  setCurrentPage(value);
};

// Calculate pagination
const startIndex = (currentPage - 1) * itemsPerPage;
const paginatedProjects = projects.slice(startIndex, startIndex + itemsPerPage);

// Show loading spinner while data is being fetched
if (loading) {
  return <CircularProgress />;
}

// Show error message if data fetching fails
if (error) {
  return <Typography variant="h6" color="error">{error}</Typography>;
}

return (
  <div>
    <Box textAlign="center" mb={4} mt={4}>
      <Typography variant="h2" component="h1" gutterBottom>
          Innovative Projects
      </Typography>
      <Typography variant="h6" component="h2" color="textSecondary">
          D<Typewriter
              words={['iscover what we\'re building and explore our latest endeavors!', 'ive into what our team is creating!']}
              loop={3}
              cursor
              cursorStyle=""
              typeSpeed={50}
              deleteSpeed={50}
              delaySpeed={300}
          />
      </Typography>
    </Box>
    <Grid container spacing={4} justifyContent="center" style={{ padding: '20px' }}>
      {paginatedProjects.map((project, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <StyledCard>
            <CardMedia
              component="img"
              height="140"
              image={project.logo}
              alt={project.title}
            />
            <CardContent>
              <Typography variant="h5" component="div">
                {project.title}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {project.description}
              </Typography>
              <StyledLink href={project.link} target="_blank" rel="noopener noreferrer">Learn More</StyledLink>
            </CardContent>
          </StyledCard>
        </Grid>
      ))}
    </Grid>
    <PaginationContainer>
      <Pagination
        count={Math.ceil(projects.length / itemsPerPage)}
        page={currentPage}
        onChange={handlePageChange}
        color="primary"
      />
    </PaginationContainer>
  </div>
);
};

export default ProjectsPage;
