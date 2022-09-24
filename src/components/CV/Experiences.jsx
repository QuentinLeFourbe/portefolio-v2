import React, { useState } from 'react';
import styled from 'styled-components';
import ExpCard from './Experiences/ExpCard';
import { useSpring, animated, config } from 'react-spring'
import ReactVisibilitySensor from 'react-visibility-sensor'
import TitleSeparator from './TitleSeparator';

const Title = styled(animated.div)`
    display: flex;
    justify-content:center;
    border-bottom: solid black 1px;
    font-size: 2rem;
    width: 400px;
    padding-bottom: 8px;
`;


function Experiences(props) {
    return (
        <>
            <ExpCard
                date="Décembre 2020"
                title="Ingénieur d'étude conception"
                company="CS Group"
                localisation="Aix-en-Provence"
                detailsList={[
                    "Application destinée à la gestion de connexion de systèmes tactiques",
                    "Rédaction des exigences systèmes",
                    "Analyse du besoin",
                ]}
            />

            <ExpCard
                date="Août 2019 - Décembre 2020"
                title="Développeur simulation C# WPF"
                company="Diginext CS Group"
                localisation="Aix-en-Provence"
                detailsList={[
                    "Application de simulation pour le commandement, destinée à l’armée de terre",
                    "Développement C# sur client lourd",
                    "Architecture modulaire sous forme de plugins",
                    "Analyse et conception",
                    "Rédactions de spécifications fonctionnels",
                    "Travail au sein d’une équipe de 20 personnes"
                ]}
            />

            <ExpCard
                date="Septembre 2018 – Février 2019"
                title="Consultant indépendant Unity3D VR"
                company="Faurecia "
                localisation="Seloncourt"
                detailsList={[
                    "Application de simulation de chaîne de production en réalité virtuelle",
                    "Projet R&D en collaboration avec le CEA de Saclay",
                    "Leader développement Unity3D",
                    "Recueil des besoins métiers",
                    "Organisation des workshops avec l’équipe projet",
                    "Présentation et démonstration du produit dans différents salons internes à Faurecia en France et à l’étranger",
                ]}
            />

            <ExpCard
                date="Avril – Septembre 2018"
                title="Stage Unity3D VR"
                company="Faurecia"
                localisation="Seloncourt"
                detailsList={[
                    "Application de simulation de chaîne de production en réalité virtuelle",
                    "Reprise et compréhension du code de l’application déjà existante",
                    "Développement de nouvelles fonctionnalités en accord avec les retours utilisateurs",
                    "Rédaction des spécifications fonctionnelles pour la phase 2 de l’application",
                ]}
            />

            <ExpCard
                date="Avril – Septembre 2017"
                title="Stage développement ASP.net MVC"
                company="Rimeo"
                localisation="Aix-en-Provence"
                detailsList={[
                    "Accompagnement à la mise en production d’une application de collecte de données auprès de collectivités territoriales.",
                    "Suivi de la campagne de collecte et mise en place de service BI pour le client.",
                    "Développement Web ASP MVC .NET",
                    "Intégration graphique",
                    "Création de reporting en temps réel",
                    "Intégration de donnée à partir de documents Excel"
                ]}
            />



        </>
    )
}

export default Experiences
