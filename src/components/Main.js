import Touchstone from '../images/landingpage-touchstone.png';
import eBook from "../pdfs/the_road_to_cyber_strength.pdf";
import Airdndhome from "../images/airdnd-home.png";
import Airdndaddchar from "../images/airdnd-addchar.png";
import Airdndaddmeetup from "../images/airdnd-addmeetup.png";
import Airdndchar from "../images/airdnd-char.png";
import WeatherChecker from "../images/WeatherChecker.png";
import WorkdayScheduler from "../images/WorkdayScheduler.png";
import CodingQuiz from "../images/CodingQuiz.png"
import PasswordGenerator from "../images/PasswordGenerator.png"
import EcommerceBackend from "../images/EcommerceBackend.png"
import ReadmeGenerator from "../images/ReadmeGenerator.png"
import ManageScreen from "../images/managescreencap.png";
import LoginScreen from "../images/loginscreencap.png";
import ResultsScreen from "../images/resultsscreencap.png";
import eBookImg from "../images/cyberstrength-ebook.png";
import xifinCard from "../images/xifingreeting-edit.png";
import contentalternate1 from "../images/xifin_alt_layout4.png";
import contentalternate2 from "../images/xifin_alt_layout-icc2.png";
import xifinSite from "../images/xifin.jpg";
import xifinGlobe from "../images/xifingreeting-staticglobe.png";
import Certifications from "../images/portfolios-cert.png";
import resume from "../pdfs/resume.pdf";

export default function Main() {
    return(
        <main>
            <div className="stripesheader">
                <h3>
                Portfolio
                </h3>
            </div>
            <section className="pagestripes" id="work">
                <div id="loading_section" className="portfoliosection">
                    <h5>Cyberstrength eBook</h5>
                        <a href={eBook} target="_blank"><img src={eBookImg} alt="Cyberstrength eBook" width="300" /></a><br />
                        My crowning achievement right now. This brings together my cyber analyst and writing skills.<br/><br />
                            I wrote the content, targeted at small-to-medium businesses and organizations, and chose the images.
                            I am looking for a marketing person to advise on any proposed changes to the graphics.<br /><br />
                            Click for a look at my cyber creds.<br/><br/><br/>
                        {/*<h5>Touchstone White Paper</h5>
                        My uncle's company in the U.K. - not yet available&nbsp;&nbsp;
                        <img className="wide" src={Touchstone} alt="Touchstone Landing Page" width="300" />*/}
                </div>
                <div className="portfoliosection">
                    <div>
                        <h5>Weather Checker & Third-Party API Work Day Scheduler</h5>
                        Express, Node, localstorage<br />
                        <a href="https://digibrill.github.io/WeatherChecker-challenge6/"><img src={WeatherChecker} alt="Weather Checker" className="narrow" width="300" /></a>&nbsp;&nbsp;<a href="https://digibrill.github.io/WorkDayScheduler-challenge5/"><img src={WorkdayScheduler} alt="Work Day Scheduler" className="narrow" width="300" /></a>
                    </div>
                    <div>
                        <h5>Web APIs Coding Quiz & JavaScript Password Generator</h5>
                        Node/Javascript<br/>
                        <a href="https://digibrill.github.io/CodingQuiz-challenge4/"><img src={CodingQuiz} alt="Coding Quiz" className="narrow" width="300" /></a>&nbsp;&nbsp;<a href="https://digibrill.github.io/JavascriptPasswordGenerator-challenge3/"><img src={PasswordGenerator} alt="Password Generator" className="narrow" width="300" /></a>
                    </div>
                    <div>
                        <h5>Object-Relational Mapping E-commerce Back End (VIDEO, left) & Node.js README.md Generator (VIDEO, right)</h5>
                        Sequelize, Express<br/>
                        <a href="https://drive.google.com/file/d/1O6T3F3gyxULKlVyuk__sHl-WJzF7p5xw/view"><img src={EcommerceBackend} alt="Ecommerce Backend" className="narrow" width="300" /></a>&nbsp;&nbsp;<a href="https://drive.google.com/file/d/1Oo_JdEhNY6zicGqQYyxXlwUZIZMS9yJd/view"><img src={ReadmeGenerator} alt="Readme Generator" className="narrow" width="300" /></a>
                    </div>
                    <div>
                        <h5>RegEx Tutorial</h5>
                        Did a Regex Tutorial in an README.md format text file<br />
                        <a href="https://github.com/digibrill/RegExTutorial-challenge17/blob/main/README.md">https://github.com/digibrill/RegExTutorial-challenge17/blob/main/README.md</a><br/>
                        <br />
                    </div>
                    <div>
                        <h5>AirDnD Project (under development)</h5>
                        React, MongoDB, Apollo/GraphQL, Express, Node<br />
                        Home & Character Card <br/><a href="https://peaceful-sea-97652.herokuapp.com/"><img src={Airdndhome} alt="AirDnd Homepage" className="narrow" width="300" /></a>&nbsp;&nbsp;<a href="https://peaceful-sea-97652.herokuapp.com/"><img src={Airdndchar} alt="AirDnD Character" className="narrow" width="300" /></a>
                    </div>
                    <div><br/>
                        Add Character & Add Meetup<br />
                        <a href="https://peaceful-sea-97652.herokuapp.com/"><img src={Airdndaddchar} alt="AirDnD Add Character" className="narrow" width="300" /></a>&nbsp;&nbsp;<a href="https://peaceful-sea-97652.herokuapp.com/"><img src={Airdndaddmeetup} alt="AirDnD Add Meetup" className="narrow" width="300" /></a>
                    </div>
                    <div>
                        <h5>SwiftInv Project</h5>
                        My part was a fully responsive front-end. (currently unavailable)<br/>
                        Login<br />
                        <img src={LoginScreen} alt="SwiftInv login" width="300" className="narrow" /><br /><br/>
                        
                        Results and Manage pages.<br />
                        <img src={ResultsScreen} alt="SwiftInv Results Screen" width="300" className="narrow" />&nbsp;&nbsp;
                        <img src={ManageScreen} alt="SwiftInv Manage Screen" width="300" className="narrow" />
                        
                    </div>
                </div>
                <div id="xifin_samples">
                    <div className="portfoliosection">
                            <h5>
                                XIFIN Corporate Site
                            </h5>
                            <p>
                                My position at XIFIN involved marketing processes (Salesforce, Marketo, Google Analytics), support, SEO, and Drupal administration and training. I saw the site through three versions. We eventually used the <a href="https://www.xifin.com">pre-built theme below for the current site at www.xifin.com</a>. It remains unchanged since I left. Below that are some ideas I put forward for the content page layouts. I also built a customer portal and product microsites.</p>
                            <a href="https://www.xifin.com"><img src={xifinSite} className="wide" alt="XIFIN thumbnail" width="500" /></a>
                            <h5>
                                CONTENT page layouts
                            </h5>
                            <img src={contentalternate1} className="narrow" alt="XIFIN content page alternate 1" width="387" height="423" target="_blank"/>
                            &nbsp;&nbsp;<img src={contentalternate2} className="narrow" alt="XIFIN content page alternate 3" width="387" height="423" />
                            <h5>
                                XIFIN Customer Christmas Card
                            </h5>
                            <p>
                                For our customers, the email graphic(left) led to the shakeable globe animation(was in Flash so only used internally).
                            </p>
                            <img src={xifinCard} alt="XIFIN Christmas Card email" width="370" height="303" className="narrow" /><img src={xifinGlobe} className="narrow" alt="XIFIN Christmas Card animated globe" width="400" height="426" />
                    </div>
                </div>
                <div id="sdut_samples">
                        <h4 className="clearg">SD Union-Tribune</h4>
                        <div className="portfoliosection">
                            <h5>
                                SignOnSanDiego development pieces I am proud of, most of which no longer online.
                            </h5>
                            <h5>
                                SII Converter
                            </h5>
                            <p>
                                This widget allowed the entering of text content from the newsroom SII terminals, reading the control characters, and converting the text into plain text for pasting and repurposing on the web.
                            </p>
                            <img className="narrow" src="./Assets/images/sosd_sii_converter-cap.jpg" alt="San Diego Union-Tribune SII terminal conversion widget" width="756" height="433" />
                            <h5>
                                San Diego Casino Guide(left/top). WROTE INTRO. Content editors updated the Casino Guide with my widget (PHP and XML)(right/bottom).
                            </h5>
                            <img src="./Assets/images/sosd_casino_guide-cap.jpg" alt="San Diego Casino Guide" width="410" height="302" /> <img src="./Assets/images/sosd_casino_guide_widgets-cap.jpg" alt="SOSD Casino Guide editing interface" width="410" height="198" />
                            <h5>
                                Dynamic news widget for the Chumby IoT device(left/top). Ad configurator spits out some Javascript for pasting by colleagues(right/bottom).
                            </h5>
                            <img src="./Assets/images/sosd-news-chumby-cap.jpg" alt="SignOnSanDiego.com Chumby News widget" width="426" height="317" /> <img src="./Assets/images/sosd_adsgen-cap.jpg" alt="SignOnSanDiego.com Ad Code creator" width="426" height="117" />
                            <h5>
                                Radio site player(left/top). Media player for all site audio(right/bottom).
                            </h5>
                            <img src="./Assets/images/sosd_amplify_radio_player-cap.jpg" alt="SignOnSanDiego.com Amplify Radio widget" width="331" height="205" /> <img src="./Assets/images/sosd_signon_radio-cap.jpg" alt="SignOnSanDiego.com sitewide media player" width="331" height="250" />
                            <h5>
                                First MySQL project(left/top)! First Drupal project(right/bottom)!
                            </h5>
                            <img src="./Assets/images/sosd_legal_fin_guide-cap.jpg" alt="San Diego Legal-Financial Guide" width="374" height="300" /> <img src="./Assets/images/sosd_eldercare-cap.jpg" alt="San Diego Eldercare Guide" width="374" height="234" />
                            <h5>
                                Street Scene Guide
                            </h5>
                            <img className="narrow" src="./Assets/images/sosd_ss_2005_cover-cap.jpg" alt="Street Scene 2005" width="644" height="429" />
                            <p>
                                Flash video players from live event! Wrote intros
                            </p>
                            <img src="./Assets/images/sosd_ss_2006-cap.jpg" alt="Street Scene 2006" width="230" height="177" /><br /><img src="./Assets/images/sosd_ss_2007-cap.jpg" alt="Street Scene 2007" width="230" height="145" />
                            <h5>
                                JSON/PHP sites on SignOnSanDiego.com for car news and south county communities. WROTE INTROS. Users could upload commentary and video.
                            </h5>
                            <img src="./Assets/images/sosd_car_news_interact-cap.jpg" alt="SignOnSanDiego.com Car News" width="410" height="259" /> <img src="./Assets/images/sosd_ut_south_county-cap.jpg" alt="South County Guide" width="410" height="257" /> <br />
                            <h5>
                                San Diego Gaslamp Guide (left/top, mostly design, WROTE INTRO.); San Diego Tidepool Guide. (right/bottom. WROTE INTRO.)
                            </h5>
                            <img src="./Assets/images/sosd_gaslamp_guide-cap.jpg" alt="San Diego Gaslamp Guide" width="410" height="325" /> <img src="./Assets/images/sosd_tidepools-cap.jpg" alt="San Diego Tidepool Guide" width="410" height="256" />
                            <h5>
                                I handled the San Diego Council on Literacy site every year(left/top) and helped with the Comic-con Guide. WROTE INTRO.(right/bottom)
                            </h5>
                            <br /><img src="./Assets/images/sosd_council_on_lit-cap.jpg" alt="San Diego Council on Literacy" width="253" height="230" /> <img src="./Assets/images/sosd_comicon_2007-cap.jpg" alt="Comic-con Guide" width="230" height="142" />
                        </div>
                </div>
                <div id="contract_samples">
                        <h4 className="clearg">
                            Past Contracts
                        </h4>
                        <div className="portfoliosection">
                            <p>
                                Either internal projects, have new sites or are now defunct.
                            </p>
                            <h5>
                                Buildpods
                            </h5>
                            <img src="./Assets/images/buildpods-cap.jpg" alt="BuildPods home" width="410" height="310" /><img src="./Assets/images/buildpods-cap2.jpg" alt="Buildpods content pages" width="410" height="323" />
                            <h5>
                                RJS Structures(left/top) and Pacific Structures(right/bottom)
                            </h5>
                            <br />
                            <img src="./Assets/images/rjs-cap.jpg" alt="" width="410" height="307" /><img src="./Assets/images/pacific-structures-cap.jpg" alt="Pacific Structures" width="410" height="294" /><br />
                            <h5>
                                I animated the VW TDI(left/top) and Tiguan sites(right/bottom) designer's work with Flash (Kratos contract)
                            </h5>
                            <br /><img src="./Assets/images/vw-tdi-cap.jpg" alt="VW TDI Kratos" width="410" height="278" /><img src="./Assets/images/vw-tiguan-cap.png" alt="VW Tiguan Kratos" width="413" height="297" />
                            <h5>
                                PLNU Newsletter Template(left/top), Interwest Capital login(middle), Operation Smile Resource CD(right/bottom)
                            </h5>
                            <br /><img src="./Assets/images/plnu-email-cap.jpg" alt="PLNU Email newsletter template" width="230" height="175" /><img src="./Assets/images/interwestcap-cap.jpg" alt="Interwest User Login" width="230" height="155" /><img src="./Assets/images/opsmilecd-cap.png" alt="Operation Smile resource CD" width="230" height="151" />
                            <h5>
                                FJRoadtrip.com was in Flash (possibly working on HTML5/widgets version!) and TRICARE Dental (DefenseWeb contract)
                            </h5>
                            <br /><img src="./Assets/images/fjroadtrip-cap.jpg" alt="" width="410" height="246" /><img src="./Assets/images/tricaredental-cap.jpg" alt="TRICARE Dental Website" width="410" height="427" /><br />
                            <h5>
                                NASA Norbert's Lab (with NCI (Raytheon)) and Vianix (defunct)
                            </h5>
                            <br />
                            <p>
                                My first position while in grad school was a short contract at NASA Langley. I worked in the base Education Department as a "Web Programmer," on the Norbert's Lab site (left/top) and also on contract with Vianix.
                            </p>
                            <br /><img src="./Assets/images/flowcapture-cap.jpg" alt="NASA Norbert project 1" width="410" height="282" />
                            <img src="/mindtan/wp-content/uploads/2021/08/func&statscapture-raw.jpg" width="410" height="401" alt="NASA Norbert project 2" className="img-fluid" />
                            <img src="./Assets/images/vianix-rev1_consumer.jpg" alt="Vianix consumer site" width="400" height="340" /><br /><br />
                            <img src="./Assets/images/vianix-rev3_home.jpg" alt="Vianix homepage" width="408" height="262" />
                             <img src="./Assets/images/vianix-rev1_oem.jpg" alt="Vianix OEM site" width="410" height="231" />
                            <h5>
                                Friends' sites
                            </h5>
                            <img src="./Assets/images/gijodesign-cap.jpg" alt="Gijo Design" width="410" height="329" /><img src="./Assets/images/jomtech-cap.gif" alt="Jombie's Tech Support" width="410" height="288" />
                        </div>
                </div>
                <div id="resume__skills">
                    <h3>
                    Resume and Skills
                    </h3>
                    <div className="portfoliosection">
                        <p>
                            React, Express, Sequelize, MongoDB, Mongoose, Apollo, gql, Node, Drupal, git
                            <br/>
                            <a href={resume}>Click for Resume</a>
                        </p>
                    </div>
                    <div className="portfoliosection">
                        <img src={Certifications} width="500" className="wide" alt="My certifications" />
                    </div>
                </div>
            </section>
        </main>
    )
}