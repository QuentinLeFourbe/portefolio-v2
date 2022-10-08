import React from "react";
import AnimatedText from "../Atoms/AnimatedText";
import Card from "../Molecules/Card";

const texts = [
  "Je m'appelle Quentin GARCIA, je suis un développeur passionné ayant un bagage technique varié. Passant de la VR au développement C# en client lourd, je suis aujourd'hui développeur React.js / Node.js",
  "J'ai choisis cette voie pour la flexibilité qu'elle offre et sa position centrale dans le monde d'aujourd'hui. Développeur Web aujourd'hui, c'est pouvoir travailler pour le compte de n'importe qui, de la plus grosse des ESN au boucher du coin, tous le monde est concerné par le web.",
  "Être développeur Web aujourd'hui, c'est aussi avoir un meilleur équilibre dans sa vie personnelle grâce au télétravail. C'est aussi évoluer sans cesse et ne cesser d'apprendre.",
  "Aujourd'hui tech lead chez Linxo, ce challenge me permet d'être touche à tout et être maître de toutes les phases de la vie d'une application Web. Idéaliste de nature, je n'hésite pas à me lancer dans les chantiers les plus périlleux si le besoin s'en fait ressentir",
  "Je suis aussi pratiquant de force athlétique, il s'agit d'un sport encore peu connu consistant à soulever le plus lourd sur le mouvement du squat, du développé couché et du soulevé de terre.",
];

function WhoAmICard() {
  return (
    <Card title="Qui suis-je ?">
      <AnimatedText texts={texts} />
    </Card>
  );
}

export default WhoAmICard;
