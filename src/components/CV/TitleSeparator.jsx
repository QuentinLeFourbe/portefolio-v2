import React, { useState } from 'react'
import styled from 'styled-components';
import { useSpring, animated, config } from 'react-spring'
import ReactVisibilitySensor from 'react-visibility-sensor'

const TitleRow = styled(animated.div)`
    display: flex;
    flex-flow: column wrap;
    align-items:center;
    margin-top: 10vh;
    margin-bottom: 10vh;
`;

const Title = styled(animated.div)`
    
    font-size: 4rem;
    @media (max-width: 768px) {
        font-size: 3rem;
    }
    padding-bottom: 8px;
    /* flex-shrink: 1; */
`;

const TitleUnderline = styled(animated.div)`
    max-width: 600px;
    width: 80vw;
    border-bottom: solid black 1px;
`;

function TitleSeparator(props) {
    const { title, delay, visibility } = props;
    const [isVisible, setIsVisible] = useState(visibility);

    const titleSpring = useSpring({
        from: { x: -100, opacity: 0 },
        x: isVisible ? 0 : -100,
        opacity: isVisible ? 1 : 0,
        config: config.molasses,
        delay: delay,
        // ref: springRef,
    });

    const underlineSpring = useSpring({
        from: { opacity: 0 },
        opacity: isVisible ? 1 : 0,
        config: config.molasses,
        delay: delay + 500,
        // ref: springRef,
    });

    const onChangeVisibility = (isVisible) => {
        if (isVisible)
            setIsVisible(true);
    }

    return (
        <ReactVisibilitySensor onChange={onChangeVisibility} partialVisibility>
            <TitleRow>
                <Title style={titleSpring}>{title}</Title>
                <TitleUnderline style={underlineSpring} />
            </TitleRow>
        </ReactVisibilitySensor>
    )
}

export default TitleSeparator

TitleSeparator.defaultProps = {
    delay: 500,
    visibility: false,
}
