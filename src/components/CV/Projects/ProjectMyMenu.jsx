import React, { useState } from 'react'
import styled from 'styled-components'
import CreatorImage from './images/meal-creator.png'
import ListImage from './images/meal-list.png'
import PlannerImage from './images/menu-planner.png'
import AuthImage from './images/menu-auth.png'
import GitHubIcon from '@material-ui/icons/GitHub';
import { useSpring, animated, config, useTransition, useTrail } from 'react-spring'

const Container = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: stretch;
    margin-left: 5vw;
    margin-right: 5vw;
`;

const ImageComponent = styled.img`

    width: 40vw;
    @media (max-width: 768px) {
        width: 80vw;
    }
    margin: 1rem;
`;

const InfoContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: center;

    ${props => props.reverse ? "flex-direction:row-reverse;" : ""}
`;

const GithubLinkContainer = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;

    font-size:2rem;
    @media (max-width: 768px) {
        font-size:1.5rem;
    }
`;

const GitLink = styled(animated.a)`
    margin: 1rem;
    text-decoration: none;
    color: black;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
`;

const TextArea = styled.div`
    display: flex;
    flex-flow: column wrap;
    /* flex-flow: row-reverse wrap; */
    font-size:1.5rem;
    @media (max-width: 768px) {
        font-size:1rem;
    }

    width: 40vw;
    @media (max-width: 768px) {
        width: 80vw;
    }
`;

function ProjectMyMenu()
{
    const [isHovered, setIsHovered] = useState(false)
    const [isAppLinkHovered, setIsAppLinkOvered] = useState(false)

    const linkColorSpring = useSpring({
        color: (isHovered) ? '#ffca08' : 'black',
    })

    const projectLinkSpring = useSpring({
        color: (isAppLinkHovered) ? '#ffca08' : 'black',
    })

    const hoverAppIn = () => { setIsAppLinkOvered(true) }
    const hoverAppOut = () => { setIsAppLinkOvered(false) }

    const hoverIn = () => { setIsHovered(true) }
    const hoverOut = () => { setIsHovered(false) }

    return (
        <Container>
            <InfoContainer >
                <TextArea>
                    <p>
                        Mes menus est une application développée en utilisant la MERN (MongoDB, Express, React js, Node js) stack, afin de planifier simplement et rapidement les menus de la semaine.
                    </p>
                    <p>
                        L'accès à l'application se fait via un compte google afin d'en faciliter l'accès.
                    </p>
                </TextArea>
                <ImageComponent src={AuthImage} alt="Page de connexion de l'application" />
            </InfoContainer>
            <InfoContainer reverse>
                <TextArea>
                    <p>
                        L'application permet dans un premier temps la création des différents plats pouvant par la suite être utilisés afin de constituer les menus par la suite. <br />
                    </p>
                    <p>
                        Un plat étant représenté par son nom, ses ingrédients ainsi que sa recette.
                    </p>
                </TextArea>
                <ImageComponent src={CreatorImage} alt="Formulaire de création d'un plat" />
            </InfoContainer>
            <InfoContainer >
                <TextArea>
                    <p>
                        Une fois les différents plats créés, il est possible de les consulter individuelement et de les modifier à souhait.
                    </p>
                </TextArea>
                <ImageComponent src={ListImage} alt="Liste des différents plats créés, représentés par une image" />
            </InfoContainer>
            <InfoContainer reverse>
                <TextArea>
                    <p>
                        Ensuite, il ne reste plus qu'à constituer les différents menus en glissant pour chaque jour de la semaine les différents plats souhaités.<br />
                    </p>
                    <p>
                        Les menus étant enregistrés automatiquement.
                    </p>
                </TextArea>
                <ImageComponent src={PlannerImage} alt="Interface de planification des menus" />
            </InfoContainer>
            <GithubLinkContainer>
                <GitLink href="https://github.com/QuentinLeFourbe/my-menu" onMouseEnter={hoverIn} onMouseLeave={hoverOut} style={linkColorSpring}>
                    Voir le projet sur GitHub
                    <GitHubIcon fontSize="large" style={{ marginLeft: "1rem" }} />
                </GitLink>
            </GithubLinkContainer>
            <GithubLinkContainer>
                <GitLink href="https://mes-menus.herokuapp.com/" onMouseEnter={hoverAppIn} onMouseLeave={hoverAppOut} style={projectLinkSpring}>
                    Lien vers l'application (bêta)
                    {/* <GitHubIcon fontSize="large" style={{ marginLeft: "1rem" }} /> */}
                </GitLink>
            </GithubLinkContainer>
        </Container>
    )
}

export default ProjectMyMenu
