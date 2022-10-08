import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { animated, useTransition, config } from "react-spring";

const Container = styled(animated.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  text-align: center;

  /* border: solid 1px black; */

  height: 192px;
  width: 192px;

  @media (max-width: 768px) {
    height: 128px;
    width: 128px;
  }

  @media (max-width: 530px) {
    height: 96px;
    width: 96px;
  }
`;

const Icon = styled(animated.img)`
  /* position: absolute; */

  height: 128px;
  width: 128px;

  @media (max-width: 530px) {
    height: 96px;
    width: 96px;
  }
`;

function Badge({ imageSrc, text, alt }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isToggled, setIsToggled] = useState(false); //déclenche les animations
  const [animationOnGoing, setIsAnimationOnGoing] = useState(false); //assure qu'après la fin d'un hover, un hover enter rapide pendant la phase leave ne produise pas une animation moche
  const [minToggleWaiting, setMinToggleWaiting] = useState(false); //assure un temps mini d'affichage de l'info sur un hover

  const hoverEnter = () => {
    setIsHovered(true);
  };

  const hoverLeave = () => {
    setIsHovered(false);
  };

  const IconTransition = useTransition(isToggled, {
    from: { opacity: 0, y: isToggled ? -50 : 0 },
    enter: { opacity: 1, y: 0 },
    leave: { opacity: 0, y: !isToggled ? 50 : 0 },
    trail: 500,
  });

  useEffect(() => {
    let timeoutId;

    if (isHovered && !isToggled && !animationOnGoing) {
      setIsToggled(true);
      setIsAnimationOnGoing(true);
      setMinToggleWaiting(true);
    }

    if (!isHovered && isToggled && !minToggleWaiting) {
      setIsToggled(false);
    }

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [isHovered, minToggleWaiting]);

  useEffect(() => {
    let timeoutId;

    if (!isToggled) {
      timeoutId = window.setTimeout(() => {
        setIsAnimationOnGoing(false);
      }, 800);
    }

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [isToggled]);

  useEffect(() => {
    let timeoutId;

    if (!animationOnGoing && isHovered) {
      setIsToggled(true);
      setIsAnimationOnGoing(true);
      setMinToggleWaiting(true);
    }

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [animationOnGoing]);

  useEffect(() => {
    let timeoutId;

    if (minToggleWaiting) {
      timeoutId = window.setTimeout(() => {
        setMinToggleWaiting(false);
      }, 1000);
    }

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [minToggleWaiting]);
  return (
    <Container onMouseEnter={hoverEnter} onMouseLeave={hoverLeave}>
      {IconTransition((styles, isToggled) =>
        isToggled ? (
          <animated.div style={{ position: "absolute", ...styles }}>
            {text}
          </animated.div>
        ) : (
          <Icon src={imageSrc} alt={alt} style={styles} />
        )
      )}
    </Container>
  );
}

export default Badge;
