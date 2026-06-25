import React, { useState } from "react";
import { Box, Typography, IconButton, Button, useMediaQuery, useTheme } from "@mui/material";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

// Asset Imports
const arrowAsset = require('../../assets/home-page/featured-projects/arrow.png');


const teamData = [
    {
        id: 1,
        name: 'Marc Senteney',
        role: '3D Character Artist',
        img: require('../../assets/home-page/team/members/Marc_Senteney_1.png'),
        hover_img: require('../../assets/home-page/team/members/Marc_Senteney_1_COLOR.png'),
        logos: [require('../../assets/home-page/team/logos/tomb_raider_underworld.png'), require('../../assets/home-page/team/logos/smite_2.png')]
    },
    {
        id: 2,
        name: 'John Lungaro',
        role: '',
        img: require('../../assets/home-page/team/members/John_Lungaro_1.png'),
        hover_img: require('../../assets/home-page/team/members/John_Lungaro_1_COLOR.png'),
        logos: [],
    },
    {
        id: 3,
        name: 'Jonathan Aguillon',
        role: 'Project Lead - Art Director',
        img: require('../../assets/home-page/team/members/Jonathan_Aguillon_1.png'),
        hover_img: require('../../assets/home-page/team/members/Jonathan_Aguillon_1_COLOR.png'),
        logos: [],
    },
    {
        id: 4,
        name: 'Justin Gozal',
        role: 'Project Lead - Assistant Art Director',
        img: require('../../assets/home-page/team/members/Justin_Gozal_2.png'),
        hover_img: require('../../assets/home-page/team/members/Justin_Gozal_2_COLOR.png'),
        logos: [],
    },
    {
        id: 5,
        name: 'Charles Cloonan',
        role: '',
        img: require('../../assets/home-page/team/members/Charles_Cloonan_1.png'),
        hover_img: require('../../assets/home-page/team/members/Charles_Cloonan_1_COLOR.png'),
        logos: [],
    },
    {
        id: 6,
        name: 'Rikki Muser',
        role: 'Project Lead - 3D Character Artist',
        img: require('../../assets/home-page/team/members/Rikki_Muser_1.png'),
        hover_img: require('../../assets/home-page/team/members/Rikki_Muser_1_COLOR.png'),
        logos: [],
    },
    {
        id: 7,
        name: 'Sam Bradley',
        role: '',
        img: require('../../assets/home-page/team/members/Sam_Bradley_1.png'),
        hover_img: require('../../assets/home-page/team/members/Sam_Bradley_1_COLOR.png'),
        logos: [],
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
    const [selectedId, setSelectedId] = useState(null);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const handleMemberClick = (id) => {
        setSelectedId(prev => prev === id ? null : id);
        
        // Wait for the 400ms CSS width transition to finish before 
        // telling Swiper to recalculate its drag boundaries
        setTimeout(() => {
            swiperRef?.update();
        }, 400);
    };

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

                <Box sx={{
                    paddingLeft: { xs: 2, md: 4 },
                    paddingRight: { xs: 2, md: 4 },
                    cursor: 'grab',
                    '&:active': { cursor: 'grabbing' },
                    paddingY: 2,
                }}>
                    <Swiper
                        onSwiper={setSwiperRef}
                        grabCursor={true}
                        spaceBetween={20}
                        slidesPerView={'auto'}
                        breakpoints={{ 600: { spaceBetween: 30 }, 900: { spaceBetween: 40 } }}
                    >
                        {teamData.map((member, index) => {
                            const isSelected = selectedId === member.id;
                            return (
                                <SwiperSlide key={`${member.id}-${index}`} style={{ width: 'auto' }}>
                                    
                                    {/* Outer wrapper */}
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center', 
                                        width: isSelected
                                            ? { xs: '560px', md: '760px' }
                                            : { xs: '280px', md: '380px' },
                                        position: 'relative',
                                        // THIS IS THE FIX: Smoothly animate the expansion of the container
                                        transition: 'width 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)', 
                                    }}>

                                        {/* Image Card (Top Layer) */}
                                        <Box
                                            onClick={() => handleMemberClick(member.id)}
                                            sx={{
                                                flexShrink: 0,
                                                width: { xs: '280px', md: '380px' },
                                                borderRadius: '16px',
                                                overflow: 'hidden',
                                                position: 'relative',
                                                zIndex: 2, // Keeps image floating above the sliding box
                                                cursor: 'pointer',
                                                transition: 'transform 0.4s ease-in-out',
                                                '&:hover': {
                                                    transform: isMobile ? 'none' : 'scale(1.02)',
                                                },
                                                '&:hover .color-image': {
                                                    opacity: isMobile ? 0 : 1,
                                                }
                                            }}
                                        >
                                            <Box
                                                component="img"
                                                src={isMobile ? member.hover_img : member.img}
                                                alt={member.name}
                                                sx={{ width: '100%', height: 'auto', display: 'block' }}
                                            />
                                            {!isMobile && (
                                                <Box
                                                    className="color-image"
                                                    component="img"
                                                    src={member.hover_img}
                                                    alt={`${member.name} Color`}
                                                    sx={{
                                                        position: 'absolute',
                                                        top: 0, left: 0, width: '100%', height: '100%',
                                                        objectFit: 'cover', opacity: 0,
                                                        transition: 'opacity 0.4s ease-in-out',
                                                    }}
                                                />
                                            )}
                                        </Box>

                                        {/* Dark Info Box (Bottom Layer, Pops Out) */}
                                        <Box
                                            sx={{
                                                flexShrink: 0,
                                                width: { xs: '280px', md: '380px' },
                                                height: { xs: '85%', md: '80%' },
                                                position: 'relative',
                                                zIndex: 1, 
                                                backgroundColor: '#16161F', 
                                                borderTopRightRadius: '16px',
                                                borderBottomRightRadius: '16px',
                                                marginLeft: '-1px', 
                                                transform: isSelected ? 'translateX(0)' : 'translateX(-100%)',
                                                transition: 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)', 
                                                display: 'flex',
                                                flexDirection: 'column',
                                                justifyContent: 'center',
                                                padding: { xs: 3, md: 4 },
                                                boxSizing: 'border-box',
                                                boxShadow: 'inset 15px 0 15px -15px rgba(0,0,0,0.8)', 
                                            }}
                                        >
                                            <Typography sx={{
                                                fontFamily: '"bebas-neue", sans-serif',
                                                fontSize: { xs: '1.8rem', md: '2.2rem' },
                                                letterSpacing: '1px',
                                                color: 'white',
                                                lineHeight: 1.1,
                                                mb: 0.5,
                                            }}>
                                                {member.name}
                                            </Typography>
                                            
                                            {member.role && (
                                                <Typography sx={{
                                                    fontFamily: '"myriad-pro", sans-serif',
                                                    fontSize: { xs: '0.85rem', md: '1rem' },
                                                    color: '#ED6C02',
                                                    fontWeight: 'bold',
                                                    textTransform: 'uppercase',
                                                    mb: 3,
                                                    lineHeight: 1.3,
                                                }}>
                                                    {member.role}
                                                </Typography>
                                            )}

                                            {/* Company logos */}
                                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, alignItems: 'center' }}>
                                                {member.logos.map((logo, i) => (
                                                    <Box
                                                        key={i}
                                                        component="img"
                                                        src={logo}
                                                        alt={`company-logo-${i}`}
                                                        sx={{ height: '32px', width: 'auto' }}
                                                    />
                                                ))}
                                            </Box>
                                        </Box>

                                    </Box>
                                </SwiperSlide>
                            );
                        })}
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