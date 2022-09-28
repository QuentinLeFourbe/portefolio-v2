import React, { useEffect } from "react";
import styled from "styled-components";
import CssIcon from "../../images/icon_css.svg";
import HtmlIcon from "../../images/icon_html.svg";
import MongodbIcon from "../../images/icon_mongodb.svg";
import ReactIcon from "../../images/icon_react.svg";
import NodeIcon from "../../images/icon_node.svg";
import JsIcon from "../../images/icon_js.svg";
import { useTrail, animated, config } from "react-spring";
import Card from "../../components/Card";
import Badge from "../../components/Badge";

const Grid = styled.div`
  display: grid;
  margin-left: 8vw;
  margin-right: 8vw;
  grid-template-columns: repeat(3, minmax(200px, 1fr));
  /* This is better for small screens, once min() is better supported */
  /* grid-template-columns: repeat(auto-fill, minmax(min(200px, 100%), 1fr)); */
  /* This is the standardized property now, but has slightly less support */

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(100px, 1fr));
  }
  justify-items: center;
  align-items: center;
`;

const cards = [
  {
    image: ReactIcon,
    altImage: "React.js icon",
    text: "React.js",
  },
  {
    image: NodeIcon,
    altImage: "Node.js icon",
    text: "Node.js",
  },
  {
    image: MongodbIcon,
    altImage: "MongoDB icon",
    text: "MongoDB",
  },
  {
    image: HtmlIcon,
    altImage: "HTML icon",
    text: "HTML 5",
  },
  {
    image: CssIcon,
    altImage: "CSS icon",
    text: "CSS 3",
  },
  {
    image: JsIcon,
    altImage: "Javascript icon",
    text: "Javascript ES6",
  },
];

function SkillsCard(props) {
  //   const { isVisible } = props;
  const isVisible = true;
  const skillsTrail = useTrail(cards.length, {
    from: { opacity: 0, x: -20 },
    opacity: isVisible ? 1 : 0,
    x: isVisible ? 0 : -20,
    delay: 1000,
  });

  return (
    <Card title="Compétences">
      <Grid>
        {skillsTrail.map((styles, i) => (
          <animated.div style={styles}>
            <Badge
              key={i}
              imageSrc={cards[i].image}
              alt={cards[i].altImage}
              text={cards[i].text}
            />
          </animated.div>
        ))}
        {/* (x, index) => <SkillCard key={index} src={x.image} alt={x.altImage}>{x.text}</SkillCard>) */}
      </Grid>
    </Card>
  );
}

export default SkillsCard;
