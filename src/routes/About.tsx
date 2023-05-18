import DougLinks from '../components/DougLinks'

const about = {
    skills: [
        ["html", "HTML"],
        ["css", "CSS"],
        ["js", "Javascript"],
        ['ts', 'Typescript'],
        ["sass", "Sass/SCSS"],
        ["responsive", "Responsive design"],
        ["node", "Node/Express"],
        ["react", "React"],
        ["svelte", "Svelte"],
        ["oop", "Object oriented programming"],
        ["mvc", "MVC architecture"],
        ["mdb", "MongoDB/Mongoose"],
        ["py", "Python"]
    ],
    testimonials: [
        ["Simen Fossnes, CTO of Diggit", "[Doug] is an excellent backend developer. Solid knowledge of modern principles. A perfect API according to specifications. [...] Highly recommended.", "/backend-eval.webp"],
        ["a student", "His expertise in the subject is truly impressive, and he has a unique ability to explain complex concepts in a way that is easy to understand.", "https://preply.com/en/tutor/3316660"],
        ["a student", "Doug relentlessly tries his best to create an enjoyable place that lets students learn in fun and efficient ways. He is willing to help students with his wide range of JavaScript and Web Development knowledge.", "https://preply.com/en/tutor/3316660"],
        ["a student", "Every session with Doug I learn something new and my interest in what I'm learning grows bigger by the day.", "https://preply.com/en/tutor/3316660"]
    ],
    experiences: [
        {
            title: 'Webdev tutor',
            company: 'Preply',
            time: '2023 - present'
        },
        {
            title: 'Web developer',
            company: 'freelance',
            time: '2021 - present'
        },
        {
            title: 'Self-education',
            company: 'Webdev',
            time: '2002 - present'
        }
    ]
}

function About() {
    return (
        <div id="about">
            <div id="about-header">
                <img src="/me.jpeg" alt="Photo of Doug Alcedo" id="me" />
                <div>
                    <h1>Doug Alcedo</h1>
                    <p>Full-stack web developer and tutor</p>
                </div>
            </div>
            <DougLinks classes="c"/>
            <h3 className="c">Testimonials</h3>
            <div id="about-testimonials">
                {about.testimonials.map(([author, text, src], idx) => (
                    <div className="about-testimonial" key={author+idx}>
                        <blockquote className="about-testimonial_text"
                        cite={src}>
                            {text}
                        </blockquote>
                        <div className="about-testimonial_author">
                            - {author}
                            <sup>
                                <a href={src} target="_blank">
                                    [{idx+1}]
                                </a>
                            </sup>
                        </div>
                    </div>
                ))}
            </div>
            <h3 className='c'>Skills</h3>
            <div id="about-skills">
                {about.skills.map(([abbr, title]) => (
                    <div className="about-skill" key={abbr}>
                        <img src={`/icons/${abbr}.png`} alt={title} />
                        <span>{title}</span>
                    </div>
                ))}
            </div>
            <h3 className="c">Relevant experience</h3>
            <div id="about-experiences">
                {about.experiences.map(exp => (
                    <div className="about-experience" key={exp.title+exp.company}>
                        <div className="ae-header">
                            <h4 className="ae-title">
                                {exp.title}
                            </h4>
                            <div className="ae-time">
                                {exp.time}
                            </div>
                        </div>
                        <div className="ae-company">
                            {exp.company}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default About