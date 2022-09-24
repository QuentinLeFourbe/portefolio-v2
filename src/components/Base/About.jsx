import React from 'react'
import styled from 'styled-components'
import { useSpring, animated, config } from 'react-spring'



const Container = styled(animated.div)`
    grid-area: main;
    padding: 5vh 10vw 5vh 10vw;
`;



function About() {
    const springStyle = useSpring(
        {
            from: {
                opacity: 0,
            },
            opacity: 1,
            config: config.tight,
            delay: 500,
        });


    return (
        <Container style={springStyle}>
            Créé par Quentin GARCIA
        </Container>
    )
}

export default About
