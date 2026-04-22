import React, { useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

// Asset Imports
const arrowAsset = require('../../assets/home-page/featured-projects/arrow.png');

const teamData = [
    {
        id: 1,
        name: "Neil",
        role: "Localization Specialist",
        company: "Mymicry",
        img: require('../../assets/home-page/team/jonathan.png'),
    },
    {
        id: 2,
        name: "João Xavier",
        role: "Technical Director",
        company: "Asencion",
        img: require('../../assets/home-page/team/jonathan.png'),
    },
    {
        id: 3,
        name: "Alex Liu",
        role: "Finance Director",
        company: "The Come Up",
        img: require('../../assets/home-page/team/jonathan.png'),
    },
    {
        id: 4,
        name: "Astra",
        role: "Community Manager",
        company: "Web Dev",
        img: require('../../assets/home-page/team/jonathan.png'),
    },
    // Adding duplicates as per your provided code
    {
        id: 5,
        name: "Neil",
        role: "Localization Specialist",
        company: "Mymicry",
        img: require('../../assets/home-page/team/jonathan.png'),
    },
    {
        id: 6,
        name: "João Xavier",
        role: "Technical Director",
        company: "Asencion",
        img: require('../../assets/home-page/team/jonathan.png'),
    },
];

const teamHeaderStyle = {
    color: '#ED6C02',
    fontWeight: 'bold',
    fontFamily: '"bebas-neue", sans-serif',
    textTransform: 'uppercase',
    fontSize: { xs: '2rem', sm: '3rem', md: '5rem' },
    lineHeight: 1,
};

function MeetTheTeam() {
    // We use state to hold the swiper instance so our custom buttons can talk to it
    const [swiperRef, setSwiperRef] = useState(null);

    return (
        <Box
            sx={{
                backgroundColor: '#0a0a0a',
                color: 'white',
                paddingY: { xs: 2, md: 4 },
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Header Section */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: { xs: 'flex-start', md: 'center' },
                    justifyContent: 'space-between',
                    paddingX: { xs: 2, md: 4 },
                    marginBottom: { xs: 4, md: 6 },
                }}
            >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box sx={{ width: '4px', height: { xs: '60px', md: '100px' }, backgroundColor: '#ED6C02' }} />
                    <Box>
                        <Typography sx={{ ...teamHeaderStyle, color: 'white' }}>Meet the</Typography>
                        <Typography sx={teamHeaderStyle}>Team</Typography>
                    </Box>
                </Box>
                
                <Typography
                    variant="body1"
                    sx={{
                        maxWidth: { xs: '100%', md: '450px' },
                        marginTop: { xs: 2, md: 0 },
                        opacity: 0.9,
                        fontSize: { xs: '1rem', md: '1.2rem' },
                        lineHeight: 1.5,
                    }}
                >
                    Learn more about the leaders behind the Icarus Team.
                </Typography>
            </Box>

            {/* Carousel Section with Arrows */}
            <Box sx={{ position: 'relative', width: '100%' }}>
                
                {/* Left Arrow Button */}
                <IconButton
                    onClick={() => swiperRef?.slidePrev()}
                    sx={{
                        position: 'absolute',
                        left: { xs: '16px', md: '32px' },
                        top: '50%',
                        transform: 'translateY(-50%)',
                        zIndex: 10,
                        backgroundColor: 'rgba(0,0,0,0.6)', // Darker translucent background
                        width: { xs: '50px', md: '70px' },   // Fixed uniform width
                        height: { xs: '50px', md: '70px' },  // Fixed uniform height
                        borderRadius: '50%',                 // Perfect circle
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        '&:hover': { backgroundColor: 'rgba(0,0,0,0.9)' }
                    }}
                >
                    <Box 
                        component="img" 
                        src={arrowAsset} 
                        // Make the arrow image slightly smaller than its container so it fits inside perfectly
                        sx={{ width: { xs: '25px', md: '35px' }, height: 'auto', objectFit: 'contain' }} 
                    />
                </IconButton>

                {/* Right Arrow Button */}
                <IconButton
                    onClick={() => swiperRef?.slideNext()}
                    sx={{
                        position: 'absolute',
                        right: { xs: '16px', md: '32px' },
                        top: '50%',
                        transform: 'translateY(-50%)',
                        zIndex: 10,
                        backgroundColor: 'rgba(0,0,0,0.6)', 
                        width: { xs: '50px', md: '70px' },
                        height: { xs: '50px', md: '70px' },
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        '&:hover': { backgroundColor: 'rgba(0,0,0,0.9)' }
                    }}
                >
                    <Box 
                        component="img" 
                        src={arrowAsset} 
                        // Added rotate(180deg) directly to the image since rotating the container messes with transform/translateY
                        sx={{ 
                            width: { xs: '25px', md: '35px' }, 
                            height: 'auto', 
                            objectFit: 'contain', 
                            transform: 'rotate(180deg)' 
                        }} 
                    />
                </IconButton>

                <Box
                    sx={{
                        paddingLeft: { xs: 2, md: 4 },
                        paddingRight: { xs: 2, md: 4 },
                        cursor: 'grab',
                        '&:active': { cursor: 'grabbing' },
                    }}
                >
                    <Swiper
                        // Removed Mousewheel module to fix vertical scroll issue
                        onSwiper={setSwiperRef}
                        grabCursor={true}
                        spaceBetween={20}
                        slidesPerView={'auto'}
                        breakpoints={{
                            600: { spaceBetween: 30 },
                            900: { spaceBetween: 40 },
                        }}
                    >
                        {teamData.map((member, index) => (
                            <SwiperSlide key={`${member.id}-${index}`} style={{ width: 'auto' }}>
                                <Box
                                    sx={{
                                        width: { xs: '280px', md: '380px' }, 
                                        height: { xs: '380px', md: '500px' },
                                        borderRadius: '16px',
                                        overflow: 'hidden',
                                        position: 'relative',
                                        background: `linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%), url(${member.img})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                    }}
                                >
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            bottom: 0,
                                            left: 0,
                                            padding: 3,
                                            width: '100%',
                                        }}
                                    >
                                        <Typography
                                            variant="subtitle2"
                                            sx={{
                                                textTransform: 'uppercase',
                                                fontWeight: 'bold',
                                                color: 'white',
                                                fontSize: '0.75rem',
                                                letterSpacing: '1px',
                                            }}
                                        >
                                            {member.company} –
                                        </Typography>
                                        <Typography
                                            variant="h5"
                                            sx={{
                                                fontFamily: '"bebas-neue", sans-serif',
                                                textTransform: 'uppercase',
                                                color: 'white',
                                                marginTop: 0.5,
                                                lineHeight: 1.1,
                                            }}
                                        >
                                            {member.name},
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                textTransform: 'uppercase',
                                                color: 'white',
                                                opacity: 0.9,
                                                fontSize: '0.8rem',
                                            }}
                                        >
                                            {member.role}
                                        </Typography>
                                    </Box>
                                </Box>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Box>
            </Box>
        </Box>
    );
}

export default MeetTheTeam;