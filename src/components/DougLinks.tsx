interface DougLinkObject {
    title: string
    href: string
}

const links: DougLinkObject[] = [
    {
        title: 'email',
        href: 'dougalcedo@gmail.com'
    },
    {
        title: 'github',
        href: 'https://github.com/dugalcedo'
    },
    {
        title: 'linkedin',
        href: 'https://www.linkedin.com/in/dalcedo'
    }
]

export default function DougLinks (props: any) {
    return (
        <div className={`dougLinks ${props.classes || ""}`}>
            {links.map(({title, href}) => (
                <div className={`dougLink${props.dark ? " dark": ""}`} key={title}>
                    <a href={href} target="_blank">
                        <img src={`/icons/${title}.png`} alt={title} />
                    </a>
                </div>
            ))}
        </div>
    )
}