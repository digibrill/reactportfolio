import Form from './Form/index';
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
                    <Form /><img src={Avatar} className="intrographics" alt="J.C. Berry, Cyber Analyst, Web Developer, Writer etc." width="80" />
                    <p>Hi, I'm J.C. Berry (pen name Cross) and I'm a cybersecurity analyst (CySA+), web developer, and freelance writer.
                    I hold a BA in English Literature from Point Loma Nazarene University and an MA in
                    Journalism and Visual Communication from Regent University. My dev work is mostly coding and marketing support.
                    I am also a Linux+ certified professional.</p>
                    <img className="intrographics" src={DrupalImg} alt="Drupal!" width="80" />
                    <p>I previously worked 8 years as a web designer for a busy marketing department and 3 years as an interface developer
                    for the San Diego Union-Tribune. I was very dedicated to both my jobs, so most of my older contract design samples
                    are not live anymore. But you can still see below thumbnails and descriptions of my part in developing those sites.</p>
                    <p>I'm currently writing cybersecurity content (blogs / eBooks) for <a href="https://www.TechKahunas.com" className="whiteTextLink">Tech
                    Kahunas</a>. Other pieces available by request. I value candor in the pursuit of excellence. I conquer problems.</p>
                    <p>I live in San Diego with my Boston Terrier Jax. </p>
                    
                        
                </div>
            </section>
        </section>
    )
}
