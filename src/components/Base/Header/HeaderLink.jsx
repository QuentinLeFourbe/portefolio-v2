import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import {
  useSpring,
  animated,
  config,
  useTransition,
  useTrail,
} from "react-spring";
import { AppContext } from "../../../AppContext";
import { Link } from "react-scroll";

const Container = styled(animated(Link))`
  padding: 1rem;
  text-decoration: none;
  font-size: 3rem;
  font-family: "Times New Roman", Times, serif;
  cursor: pointer;

  @media (max-width: 1425px) {
    font-size: 2.5rem;
  }
`;

function HeaderLink(props) {
  const { to, children } = props;
  const { dataDispatch } = useContext(AppContext);
  const [isHover, setIsHover] = useState(false);
  const [isTriggered, setIsTriggered] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const timing = 50;
  const springStyle = useSpring({
    from: {
      y: 0,
    },
    y: isHover ? 5 : 0,
    config: {
      tension: 300,
      friction: 10,
    },
  });

  const colorSpring = useSpring({
    color: isTriggered || isActive ? "#ffca08" : "black",
    config: config.tight,
  });

  const hover = () => {
    setIsHover(true);
    setIsTriggered(true);
  };
  const notHover = () => {
    setIsTriggered(false);
  };

  const linkActive = () => {
    setIsActive(true);
  };

  const linkInactive = () => {
    setIsActive(false);
  };

  const activateLoading = () => {
    dataDispatch({ type: "APP_LOADING" });
  };

  useEffect(() => {
    if (!true) {
      //TODO ????????
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setIsHover(false);
    }, timing);
    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [isHover, timing]);

  return (
    // <Container
    //     to={to}
    //     onMouseEnter={hover}
    //     onMouseLeave={notHover}
    //     onClick={activateLoading}
    //     style={springStyle}
    // >
    //     {children}
    // </Container>

    <Container
      // activeClass="active"
      // className="active"
      onSetActive={linkActive}
      onSetInactive={linkInactive}
      spy={true}
      smooth={true}
      duration={1000}
      to={to}
      onMouseEnter={hover}
      onMouseLeave={notHover}
      style={{ ...springStyle, ...colorSpring }}
      offset={-200}
    >
      {children}
    </Container>
  );
}

export default HeaderLink;
