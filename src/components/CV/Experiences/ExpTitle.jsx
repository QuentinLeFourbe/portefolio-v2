import React, { useState } from 'react'
import styled from 'styled-components'
import DateRangeIcon from '@material-ui/icons/DateRange';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { useTransition, useSpring, animated, config } from 'react-spring';

const TitleContainer = styled(animated.div)`
    width: 70vw;
    
    min-width:fit-content;
    display: flex;
    ${props => props.rightSide ? 'flex-flow: row-reverse wrap;' : 'flex-flow: row wrap;'};
    align-items: center;
    justify-content: space-between;

    /* background-color: #fff4cd; */

    padding: 1rem;
    ${props => props.rightSide ? 'padding-right: 5vw;' : 'padding-left: 5vw;'}
    font-size: 3rem;
    cursor: pointer;

    @media (max-width: 768px) {
        width: 90vw;
        font-size: 2rem;
    }

`;

const DateContainer = styled.div`
    display:flex;
    align-items: center;
    font-size: 1rem;
    ${props => props.rightSide ? 'margin-right: 5vw;' : 'margin-left: 5vw;'}
    ${props => props.rightSide ? 'flex-flow: row-reverse wrap;' : 'flex-flow: row wrap;'};
    margin-bottom:0.5rem;
`;

const ExpandIcon = styled(animated(AddIcon))`
    margin: "0 1rem 0 1rem";
`;

// const ReduceIcon = styled(animated(RemoveIcon))`
const ReduceIcon = styled(animated(RemoveIcon))`
    margin: "0 1rem 0 1rem";

`;

const Container = styled(animated.div)`

`;

function ExpTitle(props) {
    const { date, title, rightSide, isExpanded, setExpanded } = props;
    const [isHovered, setIsHovered] = useState(false);

    const spring = useSpring({
        from: {
            x: rightSide ? 100 : -100,
            opacity: 0,
        },
        x: 0,
        opacity: 1,
        config: config.molasses,
        
    })

    const titleColorSpring = useSpring({
        backgroundColor: isHovered ? "#18534F" : isExpanded ? "#226D68": "#fff4cd",
        color: (isHovered || isExpanded) ? "#fff": "black",
    })

    const hoverEnter = () => {
        setIsHovered(true)
        console.log()
    }

    const hoverLeave = () => {
        setIsHovered(false)
    }

    return (
        <Container style={spring}>
            <DateContainer>
                <DateRangeIcon style={{ margin: "0 1rem 0 1rem" }} />
                {date}
            </DateContainer>

            <TitleContainer style={titleColorSpring} onClick={() => setExpanded(!isExpanded)} onMouseEnter={hoverEnter} onMouseLeave={hoverLeave}>
                {title}
            </TitleContainer>
        </Container>
    )
}

export default ExpTitle
