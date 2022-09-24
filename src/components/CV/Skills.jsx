import React, { useState } from 'react'
import styled from 'styled-components'
import { useSpring, animated, config } from 'react-spring'
import ReactVisibilitySensor from 'react-visibility-sensor'
import TitleSeparator from './TitleSeparator';
import SkillsGrid from './Skills/SkillsGrid';

const Container = styled(animated.div)`
    margin: 5vh 10vw 20vh 10vw;
    display:flex;
    /* flex-flow: row wrap; */
    /* min-width: 300px; */
    justify-content: center;
    width: 80vw;
`;

const SkillTypeCol = styled.div`
    margin: 1rem 1rem 1rem 1rem;
    display:flex;
    flex-flow: column wrap;
    /* align-items:center; */
`;

const TypeTitle = styled.div`
    font-size: 1.5rem;
    /* margin: 1rem; */
    margin-bottom: 1rem;
`;

const SkillItem = styled.div`

`;

function Skills() {
    const [isVisible, setIsVisible] = useState(false);

    const springEffect = useSpring({
        from: { x: -100, opacity: 0 },
        x: isVisible ? 0 : -100,
        opacity: isVisible ? 1 : 0,
        config: config.molasses,
        delay: 1000,
    });

    const onChangeVisibility = (isVisible) => {
        if (isVisible)
            setIsVisible(true);
    }


    return (
        <ReactVisibilitySensor onChange={onChangeVisibility} partialVisibility>
            <div>
                {/* <animated.div style={springEffect}> */}
                    <SkillsGrid isVisible={isVisible}/>
                {/* </animated.div> */}
            </div>
        </ReactVisibilitySensor>
    )
}

export default Skills
