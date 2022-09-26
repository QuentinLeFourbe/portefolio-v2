import styled from "styled-components";
import { animated } from "react-spring";
import Presentation from "../CV/Presentation";
import Skills from "../CV/Skills";
import Experiences from "../CV/Experiences";
import TitleSeparator from "../CV/TitleSeparator";
import Projets from "../CV/Projets";
import { Element } from "react-scroll";

const Container = styled(animated.div)`
  grid-area: main;
  margin: 0;
  /* display: grid;
    grid-template-columns: 1fr 5vw 1fr;
    grid-template-rows: auto;
    grid-template-areas:
    "left middle right"; */
  /* overflow: hidden; */
`;

function Main() {
  return (
    <Container>
      <TitleSeparator title="Qui suis-je ?" delay={0} />
      <Presentation />

      <Element name="skills">
        <TitleSeparator title="Compétences" />
        <Skills />
      </Element>
      <Element name="projects">
        <TitleSeparator title="Projets" />
        <Projets />
      </Element>
    </Container>
  );
}

export default Main;
