import Footer from "../parts/footer"
import Header from "../parts/header"
import "./about.css"
import "../styles/fonts.css"

let officers = [{"Name": "Saketh Bongu", "Description": "Saketh is currently a sophomore in the Class of 2026 at BRHS in New Jersey. He loves to volunteer and has great interest in the Finance and Economics field. At school he partakes in FBLA, Bloom Institute, and plays Lacrosse and does Track. In his free time, Saketh enjoys going on bike rides, playing video games, or playing basketball at his local park."},
            {"Name": "Ethan Chan", "Description": "Ethan is a sophomore in Bridgewater Raritan High School. He volunteers to serve his community, and wants to explore an engineering field. He enjoys playing video games and talking with friends in his free time."},
            {"Name": "Arya Vaidya", "Description": "Built the website."}]


export default function AboutPage() {
    return (
        <main>
            <Header />
            <section className="about-content"> 
                <div className="about-center">
                    <h1 className="header-text redhat-bold">The Story</h1>
                    <p className="storyStartEnd manrope-medium">The Fresh Future Foundation was created by Ethan Chan, Saketh Bongu, and Arya Vaidya. They were just a couple of sophomores in high school, however, these kids saw true problems in the world, problems they felt compelled to fix.</p>
                    
                    <div className="storySection">
                        <img className="blankImg" src="images/saigon-water.jpg" style={{height: 312.5, width: 500}} />
                        <p className="storyText cloud-3 manrope-regular">
                            <p className="cloudText"><br></br><br></br>In 2019, Ethan ventured on a trip to Vietnam to reconnect with his family and explore the culture. While he mostly stayed in the beautiful city of Saigon, his perspective shifted when he travelled to the countryside. There, he was warned that the water was unsafe to drink because of a high bacterial presence. Even after leaving Vietnam, the thought lingered in the back of his head, why was a necessity to life such as risk in many areas of the world.</p>
                        </p>
                    </div>

                    <div className="storySection">
                        <p className="storyText cloud-2 manrope-regular">
                            <p className="cloudText"><br></br><br></br><br></br>In the summer of 2023, Saketh visited India for an internship and to see relatives. He taught various subjects at a tribal school in a remote community. Advised to bring a LifeStraw Water Bottle due to potential waterborne diseases, he complied. After completing the internship, Saketh was inspired to help address the water-related issues affecting tribal areas in India.</p>
                        </p>
                        <img className="blankImg saketh-story-img" src="images/india-water.jpg" style={{height: 312.5, width: 500}} />
                    </div>

                    <div className="storySection">
                        <img className="blankImg" src="/images/boy-drinking-water.jpg" style={{height: 312.5, width: 500}} />
                        <p className="storyText cloud-3 manrope-regular">
                            <p className="cloudText"><br></br><br></br>For Arya's whole life, he had always had a particular interest in trying to save our planet and our people with any type of technology. When he went to Mumbai in 2019 for the summer, it was there he understood how hard it was for people to get water just to survive and feed their families. After that trip and hearing about this new foundation that Saketh and Ethan started, I jumped to join and gladly offered my coding expertise to help make the Fresh Future Foundation website.</p>
                        </p>
                    </div>

                    <p className="storyStartEnd end-text manrope-medium">These three kids met in high school, became friends, and shared this one question: How could the issue of water purity be fixed? Saketh researched the problem and found very few people attempting to make a difference in the parts of the world they had seen. Ethan became interested in devising a solution to this question and researched different methods for purifying water. Arya spent countless hours building this website in order to make our information more accisible and stylish at the same time. They combined their ideas and decided to create the Fresh Future Foundation because it was something they truly cared about and wanted to see change in the world.</p>
                </div>
                <div className="about-center bottomdiv">
                    <h1 className="header-text redhat-bold">Meet The Team</h1>
                    <div className="team-people">
                        <div className="person-card">
                            <div className="stuff-div">
                                <img className="blankImg top-margin" src="images/saketh-headshot.png" style={{height: 175, width: 175}}></img>
                                <h1 className="person-name redhat-bold">Saketh Bongu</h1>
                                <h6 className="person-title manrope-semibold">Co-Founder + President</h6>
                                <p className="break-line"></p>
                            </div>
                            <div className="disc-div"><p className="person-disc manrope-light">Saketh is a junior at the Bridgewater Raritan High School in New Jersey. He loves to volunteer and would like to pursue a career in the field of Finance. In his free time, Saketh enjoys going on bike rides, playing video games, or playing basketball at his local park.</p></div>
                        </div>
                        <div className="person-card">
                            <div className="stuff-div">
                                <img className="blankImg top-margin" src="images/ethan-headshot.png" style={{height: 175, width: 175}}></img>
                                <h1 className="person-name redhat-bold">Ethan Chan</h1>
                                <h6 className="person-title manrope-semibold">Co-Founder + President</h6>
                                <p className="break-line"></p>
                            </div>
                            <div className="disc-div"><p className="person-disc manrope-light">Ethan is a junior currently attending Bridgewater-Raritan High School.  He volunteers to serve his community, partakes in extra-curriculars to better round himself, and aspires to explore the engineering field. In his free time, he enjoys playing video games and talking with friends.</p></div>
                        </div>
                        <div className="person-card">
                            <div className="stuff-div">
                                <img className="blankImg top-margin" src="images/arya-headshot.png" style={{height: 175, width: 175}}></img>
                                <h1 className="person-name redhat-bold">Arya Vaidya</h1>
                                <h6 className="person-title manrope-semibold">Co-Founder + Webmaster</h6>
                                <p className="break-line"></p>
                            </div>
                            <div className="disc-div"><p className="person-disc manrope-light">Arya is currently attending Bridgewater-Raritan High School as a junior. He volunteers all over his community, such as: at his local temple, multiple libraries, and at cleanups for the community. He would like to pursue a career in Computer Science and likes to spend his free time playing with his friends.
</p></div>
                        </div>
                        <div className="person-card">
                            <div className="stuff-div">
                                <img className="blankImg top-margin" src="/images/missing-person.png" style={{height: 175, width: 175}}></img>
                                <h1 className="person-name redhat-bold smaller-name">Sheraz Muhammad</h1>
                                <h6 className="person-title manrope-semibold">Social Media Manager</h6>
                                <p className="break-line"></p>
                            </div>
                            <div className="disc-div"><p className="person-disc manrope-light">Sheraz is currently entering The Woodlands Secondary School as a senior in Mississauga, Ontario and is planning on pursuing a career in Computer Science. Sheraz enjoys playing sports like Basketball, Soccer, Badminton, etc and also enjoys partaking in extra curricular activicties which serve his community.</p></div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}