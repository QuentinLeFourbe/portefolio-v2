import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import {
  useSpring,
  animated,
  config,
  useTransition,
  useTrail,
} from "react-spring";
import MenuLink from "./MenuLink";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";

const MenuOverlay = styled(animated.div)`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #18534fe8;
  z-index: 1;

  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
`;

const MenuButton = styled(animated.button)`
  margin: 2rem;
  margin-left: auto;
  text-decoration: none;
  background-color: transparent;
  border: none;
  z-index: 2;
`;

function MobileMenu(props) {
  const [isMenuHovered, setIsMenuHovered] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const onHover = () => {
    setIsMenuHovered(true);
  };
  const onNotHover = () => {
    setIsMenuHovered(false);
  };

  const menuSpring = useSpring({
    color: isMenuHovered ? "#ffca08" : showMobileMenu ? "white" : "black",
    config: config.tight,
  });

  const targetRef = useRef(null);
  useEffect(() => {
    if (showMobileMenu) {
      targetRef.current && disableBodyScroll(targetRef.current);
    } else {
      targetRef.current && enableBodyScroll(targetRef.current);
    }
  }, [showMobileMenu]);

  const showHideMenuOverlay = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const overlayTransition = useTransition(showMobileMenu, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return (
    <>
      <MenuButton
        ref={targetRef}
        style={menuSpring}
        onMouseEnter={onHover}
        onMouseLeave={onNotHover}
        onClick={showHideMenuOverlay}
      >
        {/* <MenuIcon fontSize="large"></MenuIcon> */}
      </MenuButton>
      {overlayTransition(
        (style, showMobileMenu) =>
          showMobileMenu && (
            <MenuOverlay id="mobileMenu" style={style}>
              <MenuLink hideMenu={showHideMenuOverlay} to="cv">
                CV
              </MenuLink>
              <MenuLink hideMenu={showHideMenuOverlay} to="skills">
                Compétences
              </MenuLink>
              <MenuLink hideMenu={showHideMenuOverlay} to="projects">
                Projets
              </MenuLink>
            </MenuOverlay>
          )
      )}
    </>
  );
}

export default MobileMenu;
