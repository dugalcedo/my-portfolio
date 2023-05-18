export default function ProjectFull(props) {
    const { current, techs } = props
    return (
        <div className="project-full">
            <h2>{current.title}</h2>
            <p>{current.desc}</p>
            <div className="project-full-links">
                {current.links.map(link => (
                    <a href={link[1]} className="project-full-link" key={link[1]}>
                        {link[0]}
                    </a>
                ))}
            </div>
            <h3>Technology used</h3>
            <div className="project-full-techs">
                {current.techs.map(tech => (
                    <div className="project-full-tech" key={tech}>
                        <img src={`/icons/${tech}.png`} alt={techs[tech].title} />
                        <div>
                            <h4>{techs[tech].title}</h4>
                            <p>{techs[tech].desc}</p>
                        </div>
                    </div>
                ))}
            </div>
            {current.attr && (
                <>
                    <h3>Attribution</h3>
                    <div className="project-full-attrs">
                        {current.attr.map((a: any) => (
                            <div className="project-full-attr" key={a.text}>
                                <a href={a.href} target="_blank">{a.text}</a>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}