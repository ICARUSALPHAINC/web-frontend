import React, { useState } from 'react';
import {
    Container,
    Box,
    Button,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Grid,
    Card,
    CardContent
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { contactRoutes } from "../configs/routesConfig";
import cloudImage from "../assets/clouds/2.png";
import characterImage from "../assets/careers-assets/Blue Girl Cutoff.png";
import pinkImage from "../assets/careers-assets/pink 1.png";
import headerBarImage from "../assets/careers-assets/background-short.png";


// Import job category icons
import devIcon from "../assets/careers-icons/Dev Icon.png";
import designIcon from "../assets/careers-icons/Design Icon.png";
import artistIcon from "../assets/careers-icons/Artist Icon.png";
import animationIcon from "../assets/careers-icons/Animation Icon.png";
import audioIcon from "../assets/careers-icons/Audio Icon.png";
import narrativeIcon from "../assets/careers-icons/Writing_Narrative Icon.png";
import mediaIcon from "../assets/careers-icons/Media Icon.png";
import marketingIcon from "../assets/careers-icons/Marketing Icon.png";
import productionIcon from "../assets/careers-icons/Production Icon.png";
import financeIcon from "../assets/careers-icons/Finance Icon.png";
import operationsIcon from "../assets/careers-icons/Operations Icon.png";

// Import feature icons
import calendarIcon from "../assets/careers-icons/Calendar.png";
import lightbulbIcon from "../assets/careers-icons/Light Bulb 1.png";
import growthIcon from "../assets/careers-icons/Growth 1.png";
import developmentIcon from "../assets/careers-icons/Development 1.png";
import rocketIcon from "../assets/careers-icons/Rocket 1.png";
import globalIcon from "../assets/careers-icons/Global.png";

import collegeOfEngineeringLogo from "../assets/contact-images/CollegeofEngineeringLogoTransparent.png";
import avenueEChevronHorizontalColor from "../assets/contact-images/AveE_Chevron_Horizontal-Color.png";

// Job categories data
const jobCategories = [
    { name: 'Developers', icon: devIcon, expanded: false },
    { name: 'Designers', icon: designIcon, expanded: false },
    { name: 'Artists', icon: artistIcon, expanded: false },
    { name: 'Animation/Rigging', icon: animationIcon, expanded: false },
    { name: 'Audio', icon: audioIcon, expanded: false },
    { name: 'Narrative & Writing', icon: narrativeIcon, expanded: false },
    { name: 'Media', icon: mediaIcon, expanded: false },
    { name: 'Marketing', icon: marketingIcon, expanded: false },
    { name: 'Production', icon: productionIcon, expanded: false },
    { name: 'Finance', icon: financeIcon, expanded: false },
    { name: 'Operations', icon: operationsIcon, expanded: false },
];

// Feature cards data
const features = [
    {
        title: 'Flexible Scheduling',
        description: 'Define your own hours and work when you feel most productive.',
        icon: calendarIcon
    },
    {
        title: 'Creative Environment',
        description: 'A culture of fearless innovation dedicated to building exciting new worlds.',
        icon: lightbulbIcon
    },
    {
        title: 'Growth and Learning',
        description: 'Sharpen your craft alongside a diverse group of passionate professionals.',
        icon: growthIcon
    },
    {
        title: 'Professional Development',
        description: 'Gain immersive experience with industry-standard pipelines on large-scale projects.',
        icon: developmentIcon
    },
    {
        title: 'Momentum',
        description: 'We are moving with purpose and precision to turn our vision into a reality.',
        icon: rocketIcon
    },
    {
        title: 'Fully Remote',
        description: 'Join a digital workforce that connects talent from 6 different continents.',
        icon: globalIcon
    },
];

function ContactUsPage() {
    const [expanded, setExpanded] = useState();

    const handleAccordionChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const renderCategoryDescription = (name) => {
        switch (name) {
            case 'Developers':
                return (
                    <>
                        <Typography sx={{ color: '#ccc', marginBottom: '0.75rem' }}>
                            We are looking for technically strong developers who can build scalable, production-ready systems
                            and collaborate closely with designers and artists.
                        </Typography>
                        <Typography sx={{ color: '#ccc', marginBottom: '0.5rem' }}>
                            <strong>Unreal Engine Developers:</strong> Strong experience with Unreal Engine 5 (Blueprints
                            and/or C++). Familiar with gameplay systems, optimization, and engine workflows.
                        </Typography>
                        <Typography sx={{ color: '#ccc', marginBottom: '0.5rem' }}>
                            <strong>Unity Developers:</strong> Proficient in Unity and C#. Experience with mobile or
                            cross-platform development is a plus.
                        </Typography>
                        <Typography sx={{ color: '#ccc', marginBottom: '0.5rem' }}>
                            <strong>Backend Developers:</strong> Experience building scalable backend systems, APIs,
                            databases, and live-service infrastructure. Familiarity with game backends, authentication, and
                            cloud services preferred.
                        </Typography>
                        <Typography sx={{ color: '#ccc' }}>
                            <strong>Web Developers:</strong> Proficient in modern web development (React preferred).
                            Experience building dashboards, internal tools, or consumer-facing web products.
                        </Typography>
                    </>
                );
            case 'Designers':
                return (
                    <>
                        <Typography sx={{ color: '#ccc', marginBottom: '0.75rem' }}>
                            Designers at Icarus Alpha shape how our games play, feel, and communicate with players. This
                            role bridges creativity and structure.
                        </Typography>
                        <Typography sx={{ color: '#ccc', marginBottom: '0.5rem' }}>
                            <strong>Game Designers:</strong> Responsible for core gameplay systems, mechanics, progression,
                            balance, and player experience. Strong documentation and systems-thinking required.
                        </Typography>
                        <Typography sx={{ color: '#ccc', marginBottom: '0.5rem' }}>
                            <strong>Level Designers:</strong> Design engaging levels, encounters, and environments using
                            gameplay metrics and player flow. Experience with blockouts, iteration, and playtesting.
                        </Typography>
                        <Typography sx={{ color: '#ccc', marginBottom: '0.5rem' }}>
                            <strong>UI/UX Designers:</strong> Design intuitive, clean, and scalable interfaces for games and
                            tools. Strong understanding of usability, hierarchy, and player feedback.
                        </Typography>
                        <Typography sx={{ color: '#ccc', marginBottom: '0.5rem' }}>
                            <strong>Technical Designers:</strong> Bridge design and engineering by implementing systems using
                            engine tools, scripting, or visual logic. Strong technical understanding without being full
                            engineers.
                        </Typography>
                        <Typography sx={{ color: '#ccc' }}>
                            <strong>Graphic Designers:</strong> Create visual assets for marketing, branding, and internal
                            communication. Proficiency in the Adobe Creative Suite (Photoshop, Illustrator, InDesign)
                            required.
                        </Typography>
                    </>
                );
            case 'Artists':
                return (
                    <>
                        <Typography sx={{ color: '#ccc', marginBottom: '0.75rem' }}>
                            Artists bring our worlds, characters, and stories to life with strong visual identity and
                            technical awareness.
                        </Typography>
                        <Typography sx={{ color: '#ccc', marginBottom: '0.5rem' }}>
                            <strong>3D Character Artists:</strong> Create high-fidelity characters from concept to game-ready
                            assets. Proficient in ZBrush, Maya/Blender, and Substance Painter. Strong understanding of
                            anatomy and topology required.
                        </Typography>
                        <Typography sx={{ color: '#ccc', marginBottom: '0.5rem' }}>
                            <strong>3D Environment Artists:</strong> Build immersive worlds, props, and architectural
                            elements. Experience with modular workflows, lighting, and optimization for real-time engines is
                            essential.
                        </Typography>
                        <Typography sx={{ color: '#ccc', marginBottom: '0.5rem' }}>
                            <strong>2D Concept Artists:</strong> Visualize characters, environments, and props to guide the
                            3D team. Strong painting skills and ability to iterate quickly on ideas.
                        </Typography>
                        <Typography sx={{ color: '#ccc', marginBottom: '0.5rem' }}>
                            <strong>Splash Artists:</strong> Create high-impact, polished illustrations for marketing and
                            loading screens. Mastery of composition, lighting, and rendering is required to tell a story in a
                            single image.
                        </Typography>
                        <Typography sx={{ color: '#ccc' }}>
                            <strong>Technical Artists:</strong> Responsible for shader development, render pipelines, and
                            asset optimization. Strong understanding of real-time engines, optimization, and art pipelines
                            required.
                        </Typography>
                    </>
                );
            case 'Animation/Rigging':
                return (
                    <>
                        <Typography sx={{ color: '#ccc', marginBottom: '0.75rem' }}>
                            We look for animators who understand the weight of movement and can breathe life and personality
                            into every frame, from subtle idles to explosive combat.
                        </Typography>
                        <Typography sx={{ color: '#ccc', marginBottom: '0.5rem' }}>
                            <strong>Riggers / Technical Animators:</strong> Build efficient, flexible rigs and animation
                            systems. Experience with skinning, constraints, and engine integration preferred.
                        </Typography>
                        <Typography sx={{ color: '#ccc', marginBottom: '0.5rem' }}>
                            <strong>3D Animators:</strong> Bring characters and objects to life. Strong understanding of the
                            12 principles of animation. Experience with gameplay animation cycles and state machines is
                            preferred.
                        </Typography>
                        <Typography sx={{ color: '#ccc' }}>
                            <strong>2D Animators:</strong> Create high-quality 2D character and UI animations for gameplay
                            and cinematics. Proficiency with Spine 2D is strongly preferred. Experience working with
                            game-ready animation systems required.
                        </Typography>
                    </>
                );
            case 'Audio':
                return (
                    <>
                        <Typography sx={{ color: '#ccc', marginBottom: '0.75rem' }}>
                            Audio is not just background noise; it is half the experience. We need experts who can craft
                            immersive soundscapes and dynamic scores.
                        </Typography>
                        <Typography sx={{ color: '#ccc', marginBottom: '0.5rem' }}>
                            <strong>Composers:</strong> Write and produce original music that fits the game’s tone and
                            dynamic intensity. Ability to deliver stemmed tracks for adaptive music systems.
                        </Typography>
                        <Typography sx={{ color: '#ccc', marginBottom: '0.5rem' }}>
                            <strong>Sound Designers:</strong> Create immersive sound effects (SFX) for gameplay, UI, and
                            ambiance. Proficiency with middleware (Wwise/FMOD) and DAWs required.
                        </Typography>
                        <Typography sx={{ color: '#ccc', marginBottom: '0.5rem' }}>
                            <strong>Audio Engineers:</strong> Responsible for the technical pipeline, recording, mixing, and
                            mastering of all game audio. Ensures audio levels are balanced and optimized for various
                            platforms.
                        </Typography>
                        <Typography sx={{ color: '#ccc' }}>
                            <strong>Voice Actors:</strong> Bring characters to life through compelling vocal performances.
                            Ability to take direction well and provide high-quality recordings from a home studio is
                            preferred.
                        </Typography>
                    </>
                );
            case 'Narrative & Writing':
                return (
                    <>
                        <Typography sx={{ color: '#ccc', marginBottom: '0.75rem' }}>
                            This team defines the story, characters, and world that give our games meaning and emotional
                            weight.
                        </Typography>
                        <Typography sx={{ color: '#ccc', marginBottom: '0.75rem' }}>
                            We need storytellers who can weave compelling narratives into the fabric of gameplay, creating
                            worlds that are as rich in lore as they are in mechanics.
                        </Typography>
                        <Typography sx={{ color: '#ccc', marginBottom: '0.5rem' }}>
                            <strong>Writers:</strong> Focus on world-building, character bibles, and scriptwriting.
                            Responsible for writing dialogue, item descriptions, and lore documentation.
                        </Typography>
                        <Typography sx={{ color: '#ccc' }}>
                            <strong>Narrative Designers:</strong> Responsible for weaving the story into gameplay mechanics
                            and mission structures. Must be able to implement dialogue and narrative events directly in the
                            engine.
                        </Typography>
                    </>
                );
            case 'Media':
                return (
                    <>
                        <Typography sx={{ color: '#ccc', marginBottom: '0.75rem' }}>
                            The Media team captures, produces, and presents our work to the world. We are looking for
                            creatives who can capture the excitement of development and showcase our games in their best
                            light.
                        </Typography>
                        <Typography sx={{ color: '#ccc', marginBottom: '0.5rem' }}>
                            <strong>Videographers:</strong> Record gameplay, behind-the-scenes footage, and promotional
                            content.
                        </Typography>
                        <Typography sx={{ color: '#ccc' }}>
                            <strong>Video Editors:</strong> Edit trailers, dev logs, social clips, and cinematic content with
                            strong pacing and storytelling.
                        </Typography>
                    </>
                );
            case 'Marketing':
                return (
                    <>
                        <Typography sx={{ color: '#ccc', marginBottom: '0.75rem' }}>
                            Our Marketing team builds the bridge between our games and our players. We need strategists who
                            can grow our community and define our market positioning.
                        </Typography>
                        <Typography sx={{ color: '#ccc', marginBottom: '0.5rem' }}>
                            <strong>Social Media Managers:</strong> Manage studio presence across varied social platforms.
                            Responsible for scheduling content, engaging with the community, and analyzing engagement
                            metrics.
                        </Typography>
                        <Typography sx={{ color: '#ccc', marginBottom: '0.5rem' }}>
                            <strong>Community Managers:</strong> Act as the voice of the studio to the players. Manage
                            Discord servers, forums, and feedback loops to build a healthy, active player base.
                        </Typography>
                        <Typography sx={{ color: '#ccc' }}>
                            <strong>Brand Managers:</strong> Develop and execute go-to-market strategies. Responsible for the
                            game's positioning, voice, and long-term marketing roadmap.
                        </Typography>
                    </>
                );
            case 'Production':
                return (
                    <>
                        <Typography sx={{ color: '#ccc', marginBottom: '0.75rem' }}>
                            Producers are the heartbeat of the studio. We need organized leaders who can unblock teams,
                            manage timelines and assets, and ensure we ship quality games on schedule.
                        </Typography>
                        <Typography sx={{ color: '#ccc' }}>
                            <strong>Producers:</strong> Own the schedule and budget. Responsible for removing blockers,
                            facilitating communication between departments, and ensuring milestones are met on time.
                            Agile/Scrum experience preferred.
                        </Typography>
                    </>
                );
            case 'Finance':
                return (
                    <>
                        <Typography sx={{ color: '#ccc', marginBottom: '0.75rem' }}>
                            We are looking for analytical minds to ensure the financial health of the studio, managing
                            resources efficiently so our creative teams can focus on development.
                        </Typography>
                        <Typography sx={{ color: '#ccc' }}>
                            <strong>Finance Analysts:</strong> Manage studio budgeting, forecasting, and financial reporting.
                            Responsible for tracking burn rates and project ROI.
                        </Typography>
                    </>
                );
            case 'Operations':
                return (
                    <>
                        <Typography sx={{ color: '#ccc', marginBottom: '0.75rem' }}>
                            We need individuals who can spot talent, run the recruitment pipeline from interview to
                            onboarding, and manage HR to keep the team active and accountable.
                        </Typography>
                        <Typography sx={{ color: '#ccc', marginBottom: '0.5rem' }}>
                            <strong>Operations Managers:</strong> Oversee the studio's recruitment pipeline and personnel
                            management. Responsible for scheduling interviews, tracking team activity levels, and ensuring HR
                            processes are followed.
                        </Typography>
                        <Typography sx={{ color: '#ccc' }}>
                            <strong>HR Specialists:</strong> Execute the hiring and offboarding process. Conduct initial
                            screenings/interviews, manage disputes, and handle inactivity management to ensure the roster
                            stays effective.
                        </Typography>
                    </>
                );
            default:
                return (
                    <Typography sx={{ color: '#ccc' }}>
                        Job description for {name} goes here
                    </Typography>
                );
        }
    };

    return (
        <Box
            sx={{
                backgroundImage: `url(${cloudImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed',
                minHeight: '100vh',
                width: '100%',
                paddingBottom: '4rem',
            }}
        >
            {/* Hero Section */}
            {/* Wrap hero in a full-width header bar */}
            <Box
                sx={{
                    backgroundImage: `url(${headerBarImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: '#000', // fallback so the bar is always dark
                }}
            >
                <Container maxWidth="lg" sx={{ paddingTop: '4rem', paddingBottom: 0 }}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'row' },
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            gap: '2rem',
                        }}
                    >
                    <Box sx={{ flex: 1, maxWidth: { xs: '100%', md: '50%' } }}>
                        <Typography
                            variant="h1"
                            sx={{
                                fontSize: { xs: '3rem', md: '4rem' },
                                fontWeight: 700,
                                color: '#fff',
                                lineHeight: 1.2,
                                marginBottom: '2rem',
                            }}
                        >
                            ARE YOU<br></br>
                            <Box component="span" sx={{
                                                        color: '#FF8E53',
                                                        fontSize: { xs: '5rem', md: '7rem' },

                            }}>
                                READY<br></br>
                            </Box>
                            FOR A CHANGE IN PACE?
                        </Typography>
                        <Typography
                            variant="h6"
                            sx={{
                                color: '#fff',
                                lineHeight: 1.6,
                                maxWidth: '90%',
                            }}
                        >
                            We are bringing together talented creators from around the world to build some of the most exciting interactive experiences being developed today. If you think you are the right fit for our team, we would love to hear from you!
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            position: 'relative',
                            flex: 1,
                            maxWidth: { xs: '100%', md: '40%' },
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Box
                            component="img"
                            src={pinkImage}
                            alt="Pink splash"
                            sx={{
                                position: 'absolute',
                                zIndex: 1,
                                width: '100%',
                                height: 'auto',
                                maxWidth: '500px',
                            }}
                        />
                        <Box
                            component="img"
                            src={characterImage}
                            alt="Character illustration"
                            sx={{
                                position: 'relative',
                                zIndex: 2,
                                width: '100%',
                                height: 'auto',
                                maxWidth: '400px',
                            }}
                        />
                    </Box>
                    </Box>
                </Container>
            </Box>

            {/* Open Positions Section */}
            <Container maxWidth="md" sx={{ marginBottom: '4rem', paddingTop: '2rem' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '3rem', color: '#ff4081', fontSize: { xs: '1rem', md: '3rem' }, fontWeight: 700,}}>
                        Open Positions
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {jobCategories.map((category) => (
                        <Accordion
                            key={category.name}
                            expanded={expanded === category.name}
                            onChange={handleAccordionChange(category.name)}
                            sx={{
                                backgroundColor: '#333',
                                color: '#fff',
                                borderRadius: '8px',
                                '&:before': {
                                    display: 'none',
                                },
                                boxShadow: 'none',
                            }}
                        >
                            <AccordionSummary
                                expandIcon={
                                    expanded === category.name ? (
                                        <ExpandMoreIcon sx={{ color: '#FF8E53' }} />
                                    ) : (
                                        <KeyboardArrowRightIcon sx={{ color: '#FF8E53' }} />
                                    )
                                }
                                sx={{
                                    padding: '1rem 1.5rem',
                                    '& .MuiAccordionSummary-content': {
                                        margin: 0,
                                        alignItems: 'center',
                                    },
                                }}
                            >
                                <Box
                                    component="img"
                                    src={category.icon}
                                    alt={category.name}
                                    sx={{
                                        width: '32px',
                                        height: '32px',
                                        marginRight: '1rem',
                                    }}
                                />
                                <Typography sx={{ fontSize: '1.1rem', fontWeight: 500 }}>
                                    {category.name}
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails sx={{ padding: '1.5rem', backgroundColor: '#2a2a2a' }}>
                                {renderCategoryDescription(category.name)}
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </Box>
            </Container>

            {/* Why Work With Us Section */}
            <Container maxWidth="lg" sx={{ marginBottom: '4rem' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '3rem', color: '#ff4081', fontSize: { xs: '1rem', md: '3rem' }, fontWeight: 700,}}>
                        Why Work With Us?
                </Box>

                <Grid container spacing={3}>
                    {features.map((feature, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card
                                sx={{
                                    backgroundColor: '#333',
                                    color: '#fff',
                                    height: '100%',
                                    borderRadius: '8px',
                                    padding: '1.5rem',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                    boxShadow: 'none',
                                }}
                            >
                                <Box
                                    component="img"
                                    src={feature.icon}
                                    alt={feature.title}
                                    sx={{
                                        width: '64px',
                                        height: '64px',
                                        marginBottom: '1rem',
                                    }}
                                />
                                <CardContent sx={{ padding: 0 }}>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            fontWeight: 600,
                                            marginBottom: '1rem',
                                            color: '#fff',
                                        }}
                                    >
                                        {feature.title}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: '#ccc',
                                            lineHeight: 1.6,
                                        }}
                                    >
                                        {feature.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            {/* Apply Now Button */}
            <Container maxWidth="md">
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Button
                        variant="contained"
                        href={contactRoutes.apply}
                        rel="noopener noreferrer"
                        target="_blank"
                        sx={{
                            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                            color: '#fff',
                            padding: '1.5rem 4rem',
                            fontSize: '1.3rem',
                            fontWeight: 700,
                            borderRadius: '8px',
                            textTransform: 'none',
                            transition: 'opacity 0.3s',
                            '&:hover': {
                                opacity: 0.9,
                                background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                            },
                        }}
                    >
                        Apply Now!
                    </Button>
                </Box>
            </Container>


            {/* Partner Logos at Bottom */}
            <Container
                maxWidth="lg"
                sx={{
                    marginTop: '3rem',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: { xs: '1.5rem', md: '3rem' },
                    flexWrap: 'wrap',
                }}
            >
                <Box
                    component="img"
                    src={collegeOfEngineeringLogo}
                    alt="UC Davis College of Engineering"
                    sx={{
                        height: { xs: 40, md: 60 },
                        width: 'auto',
                    }}
                />
                <Box
                    component="img"
                    src={avenueEChevronHorizontalColor}
                    alt="AvenueE Chevron partnership"
                    sx={{
                        height: { xs: 40, md: 60 },
                        width: 'auto',
                    }}
                />
            </Container>
        </Box>

    );
}

export default ContactUsPage;
