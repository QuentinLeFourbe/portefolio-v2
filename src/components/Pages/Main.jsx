import styled from "styled-components";
import { animated } from "react-spring";
import WhoAmICard from "../Organisms/WhoAmICard";
import SkillsCard from "../Organisms/SkillsCard";
import CVCard from "../Organisms/CVCard";
import ContactCard from "../Organisms/ContactCard";

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
      <CVCard />
      <ContactCard />
    </Container>
  );
}

export default Main;
