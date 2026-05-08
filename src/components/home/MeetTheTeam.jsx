import React, { useState } from "react";
import { Box, Typography, IconButton, Button, useMediaQuery, useTheme } from "@mui/material";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

// Asset Imports
const arrowAsset = require('../../assets/home-page/featured-projects/arrow.png');

const teamData = [
    {
        id: 1,
        img: require('../../assets/home-page/team/Charles_Cloonan_1.png'),
        hover_img: require('../../assets/home-page/team/Charles_Cloonan_1_COLOR.png'),
    },
    {
        id: 2,
        img: require('../../assets/home-page/team/John_Lungaro_1.png'),
        hover_img: require('../../assets/home-page/team/John_Lungaro_1_COLOR.png'),
    },
    {
        id: 3,
        img: require('../../assets/home-page/team/Jonathan_Aguillon_1.png'),
        hover_img: require('../../assets/home-page/team/Jonathan_Aguillon_1_COLOR.png'),
    },
    {
        id: 4,
        img: require('../../assets/home-page/team/Justin_Gozal_2.png'),
        hover_img: require('../../assets/home-page/team/Justin_Gozal_2_COLOR.png'),
    },
    {
        id: 5,
        img: require('../../assets/home-page/team/Marc_Senteney_1.png'),
        hover_img: require('../../assets/home-page/team/Marc_Senteney_1_COLOR.png'),
    },
    {
        id: 6,
        img: require('../../assets/home-page/team/Rikki_Muser_1.png'),
        hover_img: require('../../assets/home-page/team/Rikki_Muser_1_COLOR.png'),
    },
    {
        id: 7,
        img: require('../../assets/home-page/team/Sam_Bradley_1.png'),
        hover_img: require('../../assets/home-page/team/Sam_Bradley_1_COLOR.png'),
    },
];

const teamHeaderStyle = {
    fontWeight: 'bold',
    fontFamily: '"bebas-neue", sans-serif',
    textTransform: 'uppercase',
    fontSize: { xs: '2.5rem', sm: '4rem', md: '5.5rem' },
    lineHeight: 1,
    whiteSpace: 'nowrap',
};

function MeetTheTeam() {
    const [swiperRef, setSwiperRef] = useState(null);
    const theme = useTheme();
    // Check if the screen is mobile size (below 600px)
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box
            sx={{
                backgroundColor: '#0a0a0a',
                color: 'white',
                paddingY: 4,
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Header Section */}
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 2 }}>
                <Box sx={{ display: 'inline-block', borderLeft: '6px solid #ED6C02', borderBottom: '6px solid #ED6C02', padding: { xs: 1, md: 2 } }}>
                    <Typography sx={{ ...teamHeaderStyle, color: 'white' }}>
                        Meet the <span style={{ color: '#ED6C02' }}>Team</span>
                    </Typography>
                </Box>
            </Box>

            {/* Carousel Section */}
            <Box sx={{ position: 'relative', width: '100%' }}>
                <IconButton
                    onClick={() => swiperRef?.slidePrev()}
                    sx={{
                        position: 'absolute', left: { xs: '16px', md: '32px' }, top: '50%', transform: 'translateY(-50%)', zIndex: 10,
                        backgroundColor: 'rgba(0,0,0,0.6)', width: { xs: '50px', md: '70px' }, height: { xs: '50px', md: '70px' },
                        '&:hover': { backgroundColor: 'rgba(0,0,0,0.9)' }
                    }}
                >
                    <Box component="img" src={arrowAsset} sx={{ width: { xs: '25px', md: '35px' }, height: 'auto' }} />
                </IconButton>

                <IconButton
                    onClick={() => swiperRef?.slideNext()}
                    sx={{
                        position: 'absolute', right: { xs: '16px', md: '32px' }, top: '50%', transform: 'translateY(-50%)', zIndex: 10,
                        backgroundColor: 'rgba(0,0,0,0.6)', width: { xs: '50px', md: '70px' }, height: { xs: '50px', md: '70px' },
                        '&:hover': { backgroundColor: 'rgba(0,0,0,0.9)' }
                    }}
                >
                    <Box component="img" src={arrowAsset} sx={{ width: { xs: '25px', md: '35px' }, height: 'auto', transform: 'rotate(180deg)' }} />
                </IconButton>

                <Box sx={{ paddingLeft: { xs: 2, md: 4 }, paddingRight: { xs: 2, md: 4 }, cursor: 'grab', '&:active': { cursor: 'grabbing' }, paddingY: 2 }}>
                    <Swiper
                        onSwiper={setSwiperRef}
                        grabCursor={true}
                        spaceBetween={20}
                        slidesPerView={'auto'}
                        breakpoints={{ 600: { spaceBetween: 30 }, 900: { spaceBetween: 40 } }}
                    >
                        {teamData.map((member, index) => (
                            <SwiperSlide key={`${member.id}-${index}`} style={{ width: 'auto' }}>
                                <Box
                                    sx={{
                                        width: { xs: '280px', md: '380px' },
                                        borderRadius: '16px',
                                        overflow: 'hidden',
                                        position: 'relative',
                                        transition: 'transform 0.4s ease-in-out',
                                        '&:hover': {
                                            transform: isMobile ? 'none' : 'scale(1.04)',
                                        },
                                        '&:hover .color-image': {
                                            opacity: isMobile ? 0 : 1,
                                        }
                                    }}
                                >
                                    {/* 
                                        On mobile, we show hover_img directly. 
                                        On desktop, we show base img and layer hover_img on top.
                                    */}
                                    <Box
                                        component="img"
                                        src={isMobile ? member.hover_img : member.img}
                                        alt={`Team member ${member.id}`}
                                        sx={{
                                            width: '100%',
                                            height: 'auto',
                                            display: 'block',
                                        }}
                                    />
                                    
                                    {!isMobile && (
                                        <Box
                                            className="color-image"
                                            component="img"
                                            src={member.hover_img}
                                            alt={`Team member ${member.id} Color`}
                                            sx={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                                opacity: 0,
                                                transition: 'opacity 0.4s ease-in-out',
                                            }}
                                        />
                                    )}
                                </Box>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Box>
            </Box>

            {/* Bottom Button Section */}
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 4 }}>
                <Button
                    href="/team"
                    sx={{
                        backgroundColor: '#ED6C02', 
                        filter: 'brightness(0.9)',
                        color: 'white',
                        paddingX: 6,
                        paddingY: 2,
                        fontFamily: '"bebas-neue", sans-serif',
                        fontSize: '1.4rem',
                        letterSpacing: '2px',
                        borderRadius: '4px',
                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
                        transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)', 
                        '&:hover': {
                            backgroundColor: '#ED6C02',
                            filter: 'brightness(1.1)',
                            transform: 'scale(1.1)',
                            boxShadow: '0px 8px 16px rgba(237, 108, 2, 0.6)',
                        }
                    }}
                >
                    View All Team Members
                </Button>
            </Box>
        </Box>
    );
}

export default MeetTheTeam;