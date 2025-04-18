import Image from "next/image";
import './AboutPage.css';
import { Metadata } from 'next'
 
export const metadata: Metadata = {
    title: "About Us",
    description:
      "Learn about Astria-Za, IIT Jammu's Astronomy Club — our mission, our journey, and how we inspire a passion for space and science through community-driven exploration.",
    openGraph: {
      description:
        "Get to know our vision, values, and the story behind IIT Jammu’s Astronomy Club.",
      url: "https://astriaza-iitjammu.vercel.app/about",
    },
};
  

export default function AboutPage() {
    return (
        <div className="about-page">
            <div className="about-left section">

            <h1 className="about-title">About Astria-Za</h1>
                <div className="about-description">
                    <div className="desc-img Astriaza">
                        <Image
                        src="/resources/astriaza-nobg.png"
                        alt="Astriaz-Za Logo"
                        height={200}
                        width={200} />
                    </div>
                    Astria-Za is the Physics and Astronomy Club of IIT Jammu, 
                    dedicated to exploring the wonders of the universe and 
                    promoting scientific curiosity. We aim to provide a platform 
                    for students to learn, discuss, and engage with fascinating 
                    concepts in physics and astronomy through various events, 
                    workshops, and collaborative projects.
                </div>
            </div>
            <div className="about-right section">
            <h2 className="fic-title">Faculty In-Charge</h2>
                <div className="about-description">
                    <div className="desc-img FIC">
                        <Image
                        src="/resources/FIC.jpeg"
                        alt="FIC Image"
                        height={200}
                        width={150} />
                    </div>
                    <p>Our Faculty In-Charge, Dr. S. R. K. Chaitanya Indukuri provides guidance, support and mentorship 
                    to the Astria-Za club. With extensive experience in physics and 
                    astronomy, they play a crucial role in shaping the club's 
                    academic direction and fostering a passion for scientific exploration 
                    among students.</p>
                </div>
            </div>
        </div>
    );
}