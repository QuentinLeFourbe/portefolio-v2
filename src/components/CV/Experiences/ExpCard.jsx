import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useSpring, useTransition, animated, config } from 'react-spring'
import RoomIcon from '@material-ui/icons/Room';
import BusinessIcon from '@material-ui/icons/Business';
import ExpTitle from './ExpTitle';
import VisiblitySensor from 'react-visibility-sensor';
import { useMeasure } from 'react-use';

const Container = styled(animated.div)`
    display:flex;
    padding-bottom: 5vh;
    padding-top: 5vh;
 
    ${props => props.rightSide ? 'flex-flow: row-reverse wrap;' : 'flex-flow: row wrap;'};
    justify-content:space-between;
`;

const ExpContainer = styled.div`
    display:flex;
    flex-flow: column wrap;
    min-width: fit-content;
    ${props => props.rightSide ? 'align-items: flex-end;' : 'align-items: flex-start;'}
`;
 
const InfoContainer = styled(animated.div)`
    display:flex;
    ${props => props.rightSide ? 'flex-flow: row-reverse wrap;' : 'flex-flow: row wrap;'};
    justify-content:space-between;
    max-height: fit-content;
    overflow: hidden;
`;


const CompanyContainer = styled.div`
    display:flex;
    flex-flow: column wrap;
    margin:  0 2rem 0 2rem;
    /* align-items:center; */
    ${props => props.rightSide ? 'margin-right: 5vw;' : 'margin-left: 5vw;'}

`;


const CompanyItem = styled.div`
    font-size: 2rem;
    display:flex;
    align-items: center;
    ${props => props.rightSide ? 'flex-flow: row-reverse wrap;' : 'flex-flow: row wrap;'};
    margin-top: 1rem;
    @media (max-width: 1100px) {
        font-size: 1.5rem;
    }
`;

const LocalisationContainer = styled.div`
    font-size: 2rem;
    display:flex;
    align-items: center;
    ${props => props.rightSide ? 'flex-flow: row-reverse wrap;' : 'flex-flow: row wrap;'};
    margin-top: 1rem;
    @media (max-width: 1100px) {
        font-size: 1.5rem;
    }
`;

const DetailsListItem = styled.ul`
    list-style: square outside none;
    ${props => !props.rightSide ? '' : 'text-align: right;'}
    padding:0;
    ${props => props.rightSide ? 'padding-right: 5vw;' : 'padding-left: 5vw;'}
    margin: 1rem;
    margin-top: 1rem;
`;

const DetailListItem = styled.li`
    margin-bottom:1rem;
`;

function ExpCard(props) {
    const { date, title, company, localisation, detailsList } = props
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
                    <ExpContainer >
                        <ExpTitle
                            date={date}
                            title={title}

                            isExpanded={isExpanded}
                            setExpanded={setExpanded}
                        />

                        <animated.div style={{ overflow: "hidden", ...expandSpring }} >
                            <InfoContainer ref={measureRef} >
                                <CompanyContainer >
                                    <CompanyItem >
                                        <BusinessIcon style={{ margin: "0 1rem 0 1rem" }} />
                                        {company}
                                    </CompanyItem>

                                    <LocalisationContainer >
                                        <RoomIcon style={{ margin: "0 1rem 0 1rem" }} />
                                        {localisation}
                                    </LocalisationContainer>
                                </CompanyContainer>

                                <DetailsListItem >
                                    {
                                        detailsList.map((x, index) => <DetailListItem key={index}>{x}</DetailListItem>)
                                    }
                                </DetailsListItem>
                            </InfoContainer>
                        </animated.div>


                    </ExpContainer>
                </Container>
            </div>
        </VisiblitySensor>
    )
}

export default ExpCard
