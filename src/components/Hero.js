//import Form from './Form/index';
import Avatar from '../images/portfolioavatar.jpg';
import DrupalImg from '../images/portfoliointrographic.png';

export default function Hero() {
    return(
        <section id="contentContainer">
            <section className="stripesheader">
                <h3>Profile</h3>
            </section>
            <section className="pagestripes" id="aboutme">
                <div className="stripesbody">
                    {/*<Form />*/}<img src={Avatar} className="intrographics" alt="J.C. Berry, Cyber Analyst, Web Developer, Writer etc." width="80" />
                    <p>Hi, I'm J.C. Berry (pen name Cross) and I'm a cybersecurity analyst (CySA+), web developer, and freelance writer.
                    My dev work is mostly coding and marketing support. I am also a Linux+ certified professional.</p>
                    <img className="intrographics" src={DrupalImg} alt="Drupal!" width="80" />
                    <p>I previously worked 8 years as a web designer for a busy marketing department and 3 years as an interface developer
                    for the San Diego Union-Tribune. I'm currently writing cybersecurity content (blogs / eBooks). Other pieces available
                    by request. I live in San Diego with my Boston Terrier Jax.</p>
                    <p>I value candor in the pursuit of excellence. I conquer problems.</p>
                </div>
            </section>
        </section>
    )
}
