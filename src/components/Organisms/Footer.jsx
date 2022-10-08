import React, { useState } from "react";
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";
import VisiblitySensor from "react-visibility-sensor";

const Container = styled(animated.footer)`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: footer;
  min-height: 20vh;
  /* border-top: solid 1px #18534f; */
  overflow: hidden;
  /* background-color: #18534F; */
  margin-top: 15vh;
`;

const MailLink = styled(animated.a)`
  font-family: "Times New Roman", Times, serif;
  color: #18534f;

  margin: 1rem;
  padding: 0.5rem;
  font-size: 3rem;
  @media (max-width: 700px) {
    font-size: 2rem;
  }

  text-decoration: none;

  &:before {
    content: "";
    position: absolute;
    border: 1px solid black;
    z-index: -1;
    width: 350px;
    height: 50px;
  }
`;

function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const hoverSpring = useSpring({
    y: isHovered ? 2 : 0,
    config: config.wobbly,
  });

  const onChangeVisibility = (isVisible) => {
    if (isVisible) setIsVisible(true);
  };

  const onMouseEnter = () => {
    setIsHovered(true);
  };

  const onMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Container>
      <MailLink
        href="mailto:quentingarcia40@gmail.com"
        style={hoverSpring}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        Contactez-moi !
      </MailLink>
    </Container>
  );
}

export default Footer;
