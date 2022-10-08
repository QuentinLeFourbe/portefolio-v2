import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSpring, animated, config, useTrail } from "react-spring";
import ReactVisibilitySensor from "react-visibility-sensor";

const TextPresentation = styled.div`
  padding: 1rem;
  font-size: 1rem;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

function AnimatedText({ texts }) {
  const [isVisible, setIsVisible] = useState(false);

  const skillsTrail = useTrail(texts.length, {
    from: { opacity: 0, x: -50 },
    opacity: isVisible ? 1 : 0,
    x: isVisible ? 0 : -50,
    delay: 1000,
  });

  useEffect(() => {
    setIsVisible(true);
  });

  return (
    <TextPresentation>
      {skillsTrail.map((style, i) => (
        <animated.p key={i} style={style}>
          {texts[i]}
        </animated.p>
      ))}
    </TextPresentation>
  );
}

export default AnimatedText;
