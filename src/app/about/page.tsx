import './AboutPage.css';

export default function AboutPage() {
    return (
        <div className="about-page">
            <div className="about-left-section">
                <h2 className="fic-title">Faculty In-Charge</h2>
                <p className="fic-description">
                    Our Faculty In-Charge provides guidance, support, and mentorship 
                    to the Astria-Za club. With extensive experience in physics and 
                    astronomy, they play a crucial role in shaping the club's 
                    academic direction and fostering a passion for scientific exploration 
                    among students.
                </p>
            </div>
            <div className="about-right-section">
                <h1 className="about-title">About Astria-Za</h1>
                <p className="about-description">
                    Astria-Za is the Physics and Astronomy Club of IIT Jammu, 
                    dedicated to exploring the wonders of the universe and 
                    promoting scientific curiosity. We aim to provide a platform 
                    for students to learn, discuss, and engage with fascinating 
                    concepts in physics and astronomy through various events, 
                    workshops, and collaborative projects.
                </p>
            </div>
        </div>
    );
}