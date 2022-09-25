import React, { useState, useContext } from "react";
import styled from "styled-components";
import {
  useSpring,
  animated,
  config,
  useTransition,
  useTrail,
} from "react-spring";
import { AppContext } from "../../../AppContext";
import { animateScroll as scroll } from "react-scroll";

const Container = styled.a`
  font-family: "Times New Roman", Times, serif;
  cursor: pointer;

  font-size: 6rem;
  @media (max-width: 810px) {
    font-size: 5rem;
  }
  @media (max-width: 675px) {
    font-size: 4rem;
  }
  @media (max-width: 549px) {
    font-size: 2rem;
  }
  margin: 1rem;
  margin-right: 5vw;
  @media (max-width: 1425px) {
    margin-right: 3vw;
    font-size: 3.5rem;
  }
  text-decoration: none;
  font-weight: bold;
  color: black;
`;

function TitleLink(props) {
  const { to, children } = props;
  const { dataDispatch } = useContext(AppContext);

  const activateLoading = () => {
    dataDispatch({ type: "APP_LOADING" });
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <Container onClick={scrollToTop} to={to}>
      {children}
    </Container>
  );
}

export default TitleLink;
