import React from 'react';

function AboutUsPage() {

    const divStyle = {
        margin: '0 auto', 
        padding: '4rem 16px', 
        backgroundImage: 'url(/about-images/temp-about-background.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }

    return (
        <div style={ divStyle }>
            <div 
                style={{
                    display: 'flex',
                    position: 'relative',
                    maxWidth: '1200px',
                    flexDirection: window.innerWidth < 768 ? 'row' : 'column',
                    alignContent: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(45deg, #444 30%, #FF8E53 90%)',
                    color: '#fff',
                    minHeight: '80vh',
                    width: '100%',
                    marginTop: '2rem',
                    marginBottom: '2rem',
                    borderRadius: '20px',
                }}
            >
                <div
                    style={{
                        boxSizing: 'initial',
                        borderRadius: '10px',
                        padding: '2rem',
                        width: window.innerWidth < 768 ? '80%' : '50ch',
                        textAlign: 'center',
                        height: 'auto',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignContent: 'center',
                        alignItems: 'center',
                        marginBottom: window.innerWidth < 768 ? '2rem' : '0',
                    }}
                >
                    <h1 style={{ fontWeight: 700, marginBottom: '2rem', margin: '0 0 2rem 0' }}>
                        About Icarus Development
                    </h1>
                    <div style={{ maxWidth: 800, marginBottom: '3rem', margin: '0 0 3rem 0' }}>
                        <p style={{ lineHeight: '1.6', marginBottom: '1.5rem' }}>
                            Icarus Alpha is a next-generation creative studio dedicated to building groundbreaking digital experiences. We specialize in game development and interactive media, uniting a world-class team of developers, artists, and visionaries under one mission: to redefine what's possible for the future.
                        </p>

                        <p style={{ lineHeight: '1.6', marginBottom: '1.5rem' }}>
                            Our gaming division is focused on delivering expansive projects that combine creativity and technical innovation at the highest level. By pushing the limits of storytelling and world-building, we aim to create unforgettable experiences that elevate the future of play.
                        </p>

                        <p style={{ lineHeight: '1.6', marginBottom: '1.5rem' }}>
                            We are also developing a new social media platform designed to reshape how people connect and share in the digital age, where meaningful connections grow naturally from shared interests and creativity. With an emphasis on authenticity and collaboration, it reflects our vision of building digital spaces that matter.
                        </p>

                        <p style={{ lineHeight: '1.6', marginBottom: '0' }}>
                            At Icarus Alpha, our greatest strength is our team—creators, innovators, and leaders who push each other to achieve more. We are building something big, and the opportunity to be a part of it is open to all who share our vision. Together, we are shaping ideas into reality.
                        </p>
                    </div>
                </div>
                <div style={{ marginBottom: '3rem' }}>
                    <img
                        src="../about-images/6581038.png"
                        alt="Maker Illustration"
                        style={{
                            maxWidth: 300,
                            width: "100%",
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export default AboutUsPage;
