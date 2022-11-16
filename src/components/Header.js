
import LogoBug from '../images/logobug.png';

export default function Header() {
    return(
        <header>
        <div id="logobox">
            <img src={LogoBug} alt="jcberry.io" width="80" />
            <h1>
                J.C. Berry
            </h1>
            <h2>
                Cybersecurity Analyst, Web Developer, and Freelance Writer
            </h2>
        </div>
        <nav id="topnav">
            <ul>
                <li>
                    <a href="#aboutme">About Me</a>
                </li>
                <li>
                    <a href="#work">Work</a>
                </li>
                <li>
                    <a href="#contactme">Contact Me</a>
                </li>
                <li>
                    <a href="#resume">Resume</a>
                </li>
            </ul>
        </nav>
    </header>
    )
};