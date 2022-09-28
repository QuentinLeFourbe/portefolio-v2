import styled from "styled-components";
import { animated } from "react-spring";
import TitleSeparator from "../components/CV/TitleSeparator";
import Projets from "../components/CV/Projets";
import { Element } from "react-scroll";
import WhoAmICard from "./Cards/WhoAmICard";
import SkillsCard from "./Cards/SkillsCard";

const Container = styled(animated.div)`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  margin: 0;
  padding-top: 10vh;
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
      <WhoAmICard />
      <SkillsCard />
      <Element name="projects">
        <TitleSeparator title="Projets" />
        <Projets />
      </Element>
    </Container>
  );
}

export default Main;
