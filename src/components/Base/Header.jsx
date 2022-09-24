import React, { useState } from 'react'
import styled from 'styled-components'
import { useSpring, animated, config, useTransition, useTrail } from 'react-spring'
import { Link } from 'react-router-dom'
import TitleLink from './Header/TitleLink';
import HeaderLink from './Header/HeaderLink';
import { useMediaQuery } from '../../Hooks/useMediaQuery';
import MenuIcon from '@material-ui/icons/Menu';
import MenuLink from './Header/MenuLink';
import MobileMenu from './Header/MobileMenu';

const Container = styled(animated.header)`
    box-sizing:border-box;
    /* padding: 0px 1rem 0px 1rem; */
    background-color: #fff;
    min-height:15vh;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    /* align-items: stretch; */
    border-color:#ffd127;
    border-style:solid;
    border-width: 0px 0px 1px 0px;

    position: sticky;
    top:0;
    z-index: 1;
    /* grid-area: header; */
`;

const LinkContainer = styled.div`
    display: flex;
    flex-flow: row nowrap;
    margin-right: 2rem;
    /* margin-left: 10vw; */
`;





function Header(props) {
    const { show } = props;
    let isScreenBig = useMediaQuery('(min-width: 995px)')

    const headerTransition = useTransition(show, {
        from: { y: -50, opacity: 0 },
        enter: { y: 0, opacity: 1 },
        leave: { y: -50, opacity: 0 },
        config: config.tight,
    })
  

    return (headerTransition((style, show) => show &&
        <Container style={style}>
            <TitleLink to="/">Quentin GARCIA</TitleLink>
            {
                isScreenBig ? <LinkContainer>
                    <HeaderLink to="cv">CV</HeaderLink>
                    <HeaderLink to="skills">Compétences</HeaderLink>
                    <HeaderLink to="projects">Projets</HeaderLink>
                </LinkContainer>
                    :
                    <MobileMenu/>
            }
    
        </Container >)
    )
}

export default Header
