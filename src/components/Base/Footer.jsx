import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useSpring, animated, config } from 'react-spring'
import VisiblitySensor from 'react-visibility-sensor';

const Container = styled(animated.footer)`
    grid-area: footer;
    min-height: 20vh;
    /* border-top: solid 1px #18534F; */
    overflow: hidden;
    /* background-color: #18534F; */
    margin-top: 15vh;
`;

const AnimatedContent = styled(animated.div)`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: center;
    background-color: #18534F;
    width: 100%;
    height: 100%;
`;

const FooterLink = styled(Link)`
    font-family: "Times New Roman", Times, serif;
    color: white;
    font-size: 3rem;
    margin: 1rem;
    text-decoration: none;
`;

const MailLink = styled(animated.a)`
    font-family: "Times New Roman", Times, serif;
    color: white;
    margin: 1rem;
    padding: 0.5rem;
    font-size: 3rem;
    @media(max-width: 700px){
        font-size: 2rem;
    }

    text-decoration: none;
`;

function Footer() {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const springProps = useSpring({
        from: {
            y: 100,
            opacity: 0,
        },
        y: isVisible ? 0 : 100,
        opacity: isVisible ? 1 : 0,
        config: config.molasses,
    });

    const hoverSpring = useSpring({
        backgroundColor: isHovered ? "#ECF8F6" : '#18534F',
        color: isHovered ? '#18534F' : "#ECF8F6",
        borderRadius: isHovered ? 20 : 10,
        y: isHovered ? -10 : 0,
        config: config.wobbly,
    })

    const onChangeVisibility = (isVisible) => {
        if (isVisible)
            setIsVisible(true);
    }

    const onMouseEnter = () => {
        setIsHovered(true);
    }

    const onMouseLeave = () => {
        setIsHovered(false);
    }

    return (
        <VisiblitySensor onChange={onChangeVisibility} partialVisibility>
            <Container>
                <AnimatedContent style={springProps}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                >
                    <MailLink
                        href="mailto:quentingarcia40@gmail.com"
                        style={hoverSpring}
                    >
                        Contactez-moi !
                    </MailLink>
                </AnimatedContent>
            </Container>
        </VisiblitySensor>
    )
}



export default Footer
