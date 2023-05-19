export interface DougProject {
    title: string
    type: string | string[]
    techs: string[]
    descShort: string,
    desc: string,
    to: string,
    links: Array<string[]>
    attr?: Attr[]
}

interface Attr {
    text: string,
    href: string
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
        attr: [
            {
                text: "Email icons created by Freepik - Flaticon",
                href: "https://www.flaticon.com/free-icons/email"
            },
            {
                text: "Linkedin icons created by Freepik - Flaticon",
                href: "https://www.flaticon.com/free-icons/linkedin"
            },
            {
                text: "Github icons created by Freepik - Flaticon",
                href: "https://www.flaticon.com/free-icons/github"
            },
            {
                text: "HTML icons created by Freepik - Flaticon",
                href: "https://www.flaticon.com/free-icons/html"
            },
            {
                text: "Css icons created by Pixel perfect",
                href: "https://www.flaticon.com/free-icons/css"
            },
            {
                text: "Object icons created by juicy_fish",
                href: "https://www.flaticon.com/free-icons/object"
            },
            {
                text: "javascript icons created by edt.im - Flaticon",
                href: "https://www.flaticon.com/free-icons/javascript"
            },
            {
                text: "animation icons created by Freepik - Flaticon",
                href: "https://www.flaticon.com/free-icons/animation"
            },
            {
                text: "react icons created by Freepik - Flaticon",
                href: "https://www.flaticon.com/free-icons/react"
            },
            {
                text: "context icons created by Freepik - Flaticon",
                href: "https://www.flaticon.com/free-icons/context"
            },
            {
                text: "typescript icons created by Freepik - Flaticon",
                href: "https://www.flaticon.com/free-icons/typescript"
            },
        ]
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

export {projects}