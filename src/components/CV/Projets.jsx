import React from 'react'
import ProjectCard from './Projects/ProjectCard'
import ProjectMyMenu from './Projects/ProjectMyMenu'

function Projets() {
    return (
        <>
            <ProjectCard title="Application de gestion des menus de la semaine: Mes petits menus">
                <ProjectMyMenu/>
            </ProjectCard>
        </>
    )
}

export default Projets
