import React, { useEffect, useContext, useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import Main from './Main';
import Header from './Header';
import Footer from './Footer';
import About from './About';
import LoadingComponent from './Loading/LoadingComponent';
import ScrollToTop from './ScrollToTop';
import { AppContext } from '../../AppContext';
import styled from 'styled-components'
import { useSpring, animated, config, useTransition } from 'react-spring'

const Container = styled.div`
    position:absolute;
    width: 100%;
    min-height:100vh;
    padding:0;
    margin:0;
    display: grid;
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
    "header"
    "main"
    "footer";
`;


function ContentFromRoute() {
    const { dataState } = useContext(AppContext);

    return (
        <Router>
            <Container>
                {/* <Header  show={!showLoading} /> */}
                <Header show={true} />
                {
                    dataState.isAppLoading ?
                        <LoadingComponent />
                        :
                        (<>
                            <ScrollToTop />
                            <Main />
                            <Footer />
                        </>)
                }
            </Container>
        </Router>
    )
}

export default ContentFromRoute
