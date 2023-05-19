import Card from '../components/Card'
import Tooltip from '../components/Tooltip'
import ProjectFull from './ProjectFull'
import { Link, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { requestBackgroundChange } from '../assets/lib.ts'

import {techs} from '../lib/techs'
import {projects, DougProject} from '../lib/projects'

function Projects() {

    let location = useLocation()
    let path = location.pathname.replace('/projects/',"")

    const getProject = () : DougProject => projects.find(x => path === x.to) || {
        title: "",
        type: "",
        techs: [],
        descShort: "",
        desc: "",
        to: "",
        links: []
    }
    let current = getProject()

    useEffect(()=>{
        path = location.pathname.replace('/projects/',"")
        current = getProject()
    })

    return (
        <Routes>
            <Route path="/" element={(
                <div id="projects">
                    {projects.map(project => (
                        <Card key={project.title} classes="project">
                            <h3>{project.title}</h3>
                            <h4>{ typeof project.type === "string" ? project.type : project.type.join(', ')}</h4>
                            <div className="project-techs">
                                {project.techs.map(tech => (
                                    <Tooltip tip={techs[tech].title} key={`project.title-${tech}`}>
                                        <div className="project-tech">
                                            <img src={`/icons/${tech}.png`} alt={techs[tech].title} />
                                        </div>
                                    </Tooltip>
                                ))}
                            </div>
                            <p>{project.descShort}</p>
                            <div className="seeMore">
                                <Link to={project.to}
                                onClick={requestBackgroundChange}>
                                    See more
                                </Link>
                            </div>
                        </Card>
                    ))}
                </div>
            )}/>
            <Route path="/:projectName" 
            element={<ProjectFull current={current} techs={techs} />}
            />
        </Routes>
    )
}

export default Projects