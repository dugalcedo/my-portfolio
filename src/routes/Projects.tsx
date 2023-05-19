import Card from '../components/Card'
import Tooltip from '../components/Tooltip'
import ProjectFull from './ProjectFull'
import { Link, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { requestBackgroundChange } from '../assets/lib.ts'

const getAttr = async () => {
    let res = await fetch('/attr.txt')
    let txt = await res.text()
    let div = document.createElement('div')
    div.innerHTML = txt
    let links = div.querySelectorAll('a')
    let arr = [...links].map(link => ({
        text: link.innerText,
        href: link.getAttribute('href')
    }))
    return arr
}

const attr = await getAttr()


const techs: any = {
    "hcj": {
        title: "HTML, CSS, & JavaScript",
        desc: "The backbone of any front-end web app."
    },
    "oop": {
        title: "Object oriented programming",
        desc: "A programming paradigm that makes heavy use of class instances."
    },
    "aniframes": {
        title: "Animation frames",
        desc: "A browser API for processing animation frames."
    },
    "react": {
        title: "React",
        desc: "A popular and powerful javascript library for creating component-based web applications."
    },
    "context": {
        title: "React context API",
        desc: "An API built-in to React which allows state to be provided to many components at once without the need for 'prop-drilling'. Often used as an alternative to Redux."
    },
    "svelte": {
        title: "Svelte",
        desc: "A component-based javascript compiler frequently voted as one of the most loved web frameworks. Its predecessor, Ractive, inspired Vue."
    },
    "ts": {
        title: "Typescript",
        desc: "A superset of javascript that allows static typing."
    },
    "router": {
        title: "React router",
        desc: "A plugin for the React framework that facilitates the development of single-page applications."
    },
    "js": {
        title: "Javascript",
        desc: "The programming language used on the front-end of web applications."
    },
    "mvc": {
        title: "Model-view-controller architecture",
        desc: "A software design pattern used to organize information and its relationship to a user."
    },
    "test": {
        title: "Unit testing",
        desc: "A method of testing software."
    },
    "node": {
        title: "Node/express",
        desc: "Node is a back-end runtime enviroment that allows servers to be written with javascript. Express is a plugin for node which makes dealing with HTTP requests and responses easy."
    },
    "sass": {
        title: "Sass",
        desc: "A CSS pre-processor which adds many useful features to CSS."
    }
}

interface DougProject {
    title: string
    type: string | string[]
    techs: string[]
    descShort: string,
    desc: string,
    to: string,
    links: Array<string[]>
    attr?: object[]
}

const projects: DougProject[] = [
    {
        title: "this website",
        type: ["personal", "professional"],
        techs: ["hcj", "ts", "react", "router", "sass"],
        descShort: "My webdev portfolio",
        to: "this",
        desc: "A React SPA to use as my personal portfolio. ",
        links: [
            ["Link", "/"],
            ["github", "https://github.com/dugalcedo/my-portfolio"]
        ],
        attr
    },
    {
        title: "Back-end challenge",
        type: ["practice", 'professional'],
        techs: ["js", "mvc", "node", "test"],
        descShort: "A job simulation with the goal of creating an API for coffee drinks.",
        to: "coffee",
        desc: "A job simulation provided by diggit.io where I was tasked with creating an API for getting information about coffee drinks. I created it with express. See the evaluation link for more info.",
        links: [
            ["Evaluation", "/backend-eval.webp"]
        ]
    },
    {
        title: "react useContext tutorial",
        type: ["educational"],
        techs: ["hcj", "react", "context"],
        descShort: "Educational tool for my students.",
        to: "useContext",
        desc: "A github repository that walks the developer through different examples of React's context API. Designed to help my students.",
        links: [
            ['github repo', 'https://github.com/dugalcedo/use-context-tutorial']
        ]
    },
    {
        title: "dug.wtf",
        type: "personal",
        techs: ["hcj", "svelte", "sass"],
        descShort: "Personal website for showcasing my electronic music.",
        to: "dugwtf",
        desc: "Personal website for showcasing my electronic music.",
        links: [
            ['Link', 'https://dug.wtf/'],
            ['github repo', 'https://github.com/dugalcedo/dugwtf']
        ],
    },
    {
        title: "javascript pong",
        type: ["personal", "practice"],
        techs: ["hcj", "oop"],
        descShort: "Recreation of Pong.",
        to: "pong",
        desc: "Recreation of the classic game Pong using OOP-principles.",
        links: [
            ['github repo', 'https://github.com/dugalcedo/pong'],
            ['Play', 'https://dugpong.vercel.app/']
        ]
    },
]

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