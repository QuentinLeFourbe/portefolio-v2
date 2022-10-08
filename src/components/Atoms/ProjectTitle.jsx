import React, { useState } from "react";
import styled from "styled-components";
import { useTransition, useSpring, animated, config } from "react-spring";

const TitleContainer = styled(animated.div)`
  width: 70vw;
  min-width: fit-content;

  display: flex;
  ${(props) =>
    props.rightSide
      ? "flex-flow: row-reverse nowrap;"
      : "flex-flow: row nowrap;"};
  align-items: center;
  justify-content: space-between;

  background-color: #fff4cd;

  padding: 1rem;
  ${(props) => (props.rightSide ? "padding-right: 5vw;" : "padding-left: 5vw;")}
  font-size: 3rem;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 90vw;
    font-size: 2rem;
  }
`;

const Container = styled(animated.div)``;

function ProjectTitle(props) {
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
  });

  const expandTransition = useTransition(isExpanded, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    // leave: { opacity: 0 },
    config: { tension: 280, friction: 200 },
  });

  const titleColorSpring = useSpring({
    backgroundColor: isHovered ? "#18534F" : isExpanded ? "#226D68" : "#fff4cd",
    color: isHovered || isExpanded ? "#fff" : "black",
  });

  const hoverEnter = () => {
    setIsHovered(true);
  };

  const hoverLeave = () => {
    setIsHovered(false);
  };

  return (
    <Container style={spring}>
      <TitleContainer
        style={titleColorSpring}
        onClick={() => setExpanded(!isExpanded)}
        onMouseEnter={hoverEnter}
        onMouseLeave={hoverLeave}
      >
        {title}
      </TitleContainer>
    </Container>
  );
}

export default ProjectTitle;
