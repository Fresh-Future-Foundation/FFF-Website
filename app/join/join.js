import Footer from "../parts/footer";
import Header from "../parts/header";
import "./join.css" 
import "../styles/fonts.css"
import InternshipOpporunity from "../parts/intern-opp";

export default function JoinPage() {
    return (
        <main>
            <Header />
            <section className="join-content"> 
                <div className="join-header">
                    <h1 className="title-text redhat-bold">Join Our Team!</h1>
                    <p className="title-disc manrope-medium">Joining Fresh Future Foundation is an opportunity to create and direct work, which will positively impact the lives of others, and spread awareness of a global problem. With us, you will gain hands-on experience with international networking and gain experience in a professional environment. Additionally, you will gain new insights and perspectives on ongoing problems, and explore different ways to solve these issues.</p>
                </div>
                <div className="internship-opportunities">
                    <div className="intern-positions">
                        <InternshipOpporunity 
                            title="Creative Director Intern 🎨"
                            taken="0"
                            total_spots="1"
                            extra_letter=""
                            description="Fresh Future Foundation is looking for an applicant who has a background in creative design to help develop the organization and aesthetics of the content and media produced by our organization. This role is for those who are creatively inclined to form ideas for future projects."
                        />
                        <div className="linebreak"></div>
                        <InternshipOpporunity 
                            title="Software Team Intern 💻"
                            taken="0"
                            total_spots="1"
                            extra_letter=""
                            description="Fresh Future Foundation is seeking an applicant who is proficient in Java Script and HTML to create programs necessary for the effective continuation of our organization. Both members will be working closely together with the Software Lead to create and maintain the upkeep of our website."
                        />
                        <div className="linebreak"></div>
                        <InternshipOpporunity 
                            title="Social Media Manager 📱"
                            taken="0"
                            total_spots="2"
                            extra_letter="s"
                            description="Fresh Future Foundation is looking for an applicant who is knowledgeable in multiple Social media apps. This role is for those who are able to create content and awareness to advocate for our organization's goal."
                        />
                        <div className="linebreak"></div>
                        <InternshipOpporunity 
                            title="Outreach Intern ✉️"
                            taken="0"
                            total_spots="1"
                            extra_letter=""
                            description="Fresh Future Foundation is currently seeking an outreach intern who is proficient in researching partnerships, grants, etc. This role entails researching potential partners for Fresh Future to further expand and contribute to its mission."
                        />
                    </div>
                    <div className="join-button">
                        <a target="_blank" href="https://tally.so/r/3E0d5q" className="apply-button redhat-semibold">Click Here To Apply For Any/All Internships!</a>
                    </div>
                </div>
                <p className="manrope-regular email-text">If you have any questions about the opportunities or want extra information, email us at freshfuturefoundations@gmail.com or join our discord!</p>
            </section>
            <Footer />
        </main>
    );
}