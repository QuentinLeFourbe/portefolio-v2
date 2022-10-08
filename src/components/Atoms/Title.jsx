import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";

const TitleRow = styled(animated.div)`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
`;

const TitleLabel = styled(animated.label)`
  font-size: 2.5rem;
  @media (max-width: 768px) {
    font-size: 3rem;
  }
  padding-bottom: 8px;
  /* flex-shrink: 1; */
`;

const TitleUnderline = styled(animated.div)`
  max-width: 600px;
  width: 80vw;
  border-bottom: solid black 1px;
`;

function Title(props) {
  const { title, delay, visibility } = props;
  const [isVisible, setIsVisible] = useState(visibility);

  const titleSpring = useSpring({
    from: { x: -100, opacity: 0 },
    x: isVisible ? 0 : -100,
    opacity: isVisible ? 1 : 0,
    config: config.molasses,
    delay: delay,
    // ref: springRef,
  });

  const underlineSpring = useSpring({
    from: { opacity: 0 },
    opacity: isVisible ? 1 : 0,
    config: config.molasses,
    delay: delay + 500,
    // ref: springRef,
  });

  useEffect(() => {
    setIsVisible(true);
  });

  return (
    <TitleRow>
      <TitleLabel style={titleSpring}>{title}</TitleLabel>
      <TitleUnderline style={underlineSpring} />
    </TitleRow>
  );
}

export default Title;
