import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useSpring, useTransition, animated, config } from 'react-spring'
import VisiblitySensor from 'react-visibility-sensor';
import { useMeasure } from 'react-use';
import ProjectTitle from './ProjectTitle'

const Container = styled(animated.div)`
    display:flex;
    /* background-color: #226D68; */
    padding-bottom: 5vh;
    padding-top: 3vh;
 
    ${props => props.rightSide ? 'flex-flow: row-reverse wrap;' : 'flex-flow: row wrap;'};
    flex-flow: column nowrap;
    justify-content:space-between;
`;

const InfoContainer = styled(animated.div)`
    display:flex;
    ${props => props.rightSide ? 'flex-flow: row-reverse wrap;' : 'flex-flow: row wrap;'};
    justify-content:space-between;
    max-height: fit-content;
    overflow: hidden;
`;


function ProjectCard(props) {
    const { title } = props
    const [isExpanded, setExpanded] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [contentHeight, setContentHeight] = useState(1);

    const spring = useSpring({
        from: {
            x: -100,
            opacity: 0,
        },
        x: isVisible ? 0 : -100,
        opacity: isVisible ? 1 : 0,
        config: config.molasses,
        delay: 500,
    })

    const expandSpring = useSpring({
        from: { height: 0, opacity: 0 },
        to: isExpanded ?
            [{
                height: contentHeight,
            },
            {
                opacity: 1,
            }]
            :
            [
                {
                    opacity: 0,
                },
                {
                    height: 0,
                }

            ],
        config: config.tight,
    })

    const onChangeVisibility = (isVisible) => {
        if (isVisible)
            setIsVisible(true);
    }

    const [measureRef, { height }] = useMeasure();

    useEffect(() => {
        //Sets initial height
        setContentHeight(height);
        //Adds resize event listener
        window.addEventListener("resize", setContentHeight(height));

        // Clean-up
        return window.removeEventListener("resize", setContentHeight(height));
    }, [height]);

    return (
        <VisiblitySensor onChange={onChangeVisibility} partialVisibility>
            <div>
                <Container style={spring} >
                    <ProjectTitle
                        title={title}
                        isExpanded={isExpanded}
                        setExpanded={setExpanded}
                    />

                    <animated.div style={{ overflow: "hidden", ...expandSpring }} >
                        <InfoContainer ref={measureRef} >
                            {props.children}
                        </InfoContainer>
                    </animated.div>
                </Container>
            </div>
        </VisiblitySensor>
    )
}

export default ProjectCard
