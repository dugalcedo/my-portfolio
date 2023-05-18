import { Link } from 'react-router-dom'
import { requestBackgroundChange } from '../assets/lib.ts'

const navLinks = [
    {
        title: 'HOME',
        to: '/'
    },
    {
        title: "PROJECTS",
        to: '/projects'
    },
    // {
    //     title: "ABOUT",
    //     to: '/about'
    // },
    // {
    //     title: "CONTACT",
    //     to: '/contact'
    // }
]

function Nav() {

    window.addEventListener('popstate', requestBackgroundChange)

    return (
        <nav id="mainNav">
            {navLinks.map(({title, to}) => (
                <Link className="mainNav-item" to={to} key={title}
                onClick={requestBackgroundChange}>
                    <span>
                        {title}
                    </span>
                </Link>
            ))}
        </nav>
    )
}

export default Nav