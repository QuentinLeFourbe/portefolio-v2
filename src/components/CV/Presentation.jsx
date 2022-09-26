import React, { useState } from "react";
import styled from "styled-components";
import { useSpring, animated, config, useTrail } from "react-spring";
import ReactVisibilitySensor from "react-visibility-sensor";
import TitleSeparator from "./TitleSeparator";

const Container = styled(animated.div)`
  margin: 0vh 20vw 0vh 20vw;
  display: flex;
  flex-flow: row wrap;
  /* width: 30vw; */
  min-width: 300px;
`;

const TextPresentation = styled.div`
  padding: 1rem;

  font-size: 1rem;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const texts = [
  "Je m'appelle Quentin GARCIA, je suis un développeur passionné ayant un bagage technique varié. Passant de la VR au développement C# en client lourd, je suis aujourd'hui développeur React.js / Node.js",
  "J'ai choisis cette voie pour la flexibilité qu'elle offre et sa position centrale dans le monde d'aujourd'hui. Développeur Web aujourd'hui, c'est pouvoir travailler pour le compte de n'importe qui, de la plus grosse des ESN au boucher du coin, tous le monde est concerné par le web.",
  "Être développeur Web aujourd'hui, c'est aussi avoir un meilleur équilibre dans sa vie personnelle grâce au télétravail. C'est aussi évoluer sans cesse et ne cesser d'apprendre.",
  "Aujourd'hui tech lead chez Linxo, ce challenge me permet d'être touche à tout et être maître de toutes les phases de la vie d'une application Web. Idéaliste de nature, je n'hésite pas à me lancer dans les chantiers les plus périlleux si le besoin s'en fait ressentir",
  "Je suis aussi pratiquant de force athlétique, il s'agit d'un sport encore peu connu consistant à soulever le plus lourd sur le mouvement du squat, du développé couché et du soulevé de terre.",
];

function Presentation() {
  const [isVisible, setIsVisible] = useState(false);

  // const springEffect = useSpring({
  //     from: { x: -100, opacity: 0 },
  //     x: isVisible ? 0 : -100,
  //     opacity: isVisible ? 1 : 0,
  //     config: config.molasses,
  //     delay: 1000,
  //     ref: springRef,
  // });

  const skillsTrail = useTrail(texts.length, {
    from: { opacity: 0, x: -50 },
    opacity: isVisible ? 1 : 0,
    x: isVisible ? 0 : -50,
    delay: 1000,
  });

  const onChangeVisibility = (isVisible) => {
    if (isVisible) setIsVisible(true);
  };

  return (
    <>
      <ReactVisibilitySensor onChange={onChangeVisibility} partialVisibility>
        <div>
          <Container>
            {/* <Title>Qui suis-je ?</Title> */}
            <TextPresentation>
              {skillsTrail.map((style, i) => (
                <animated.div key={i} style={style}>
                  {texts[i]}
                </animated.div>
              ))}
            </TextPresentation>
          </Container>
        </div>
      </ReactVisibilitySensor>
    </>
  );
}

export default Presentation;
