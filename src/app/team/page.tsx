// src/app/team/page.tsx
import './TeamPage.css';

export default function TeamPage() {
    return (
        <div className="team-page">
            <h1>Meet Our Team</h1>
            <div className="scrollable-container">
                <div className="team-section">
                    <h2>Senior Advisor</h2>
                    <p>
                        <span>Vedika Aggarwal</span><span>2022UCH0072</span>
                    </p>
                </div>
                <div className="team-section">
                    <h2>Event Management Team</h2>
                    <p>
                        <span>Shlok Tiwari</span><span>2023UCE0067 </span>
                    </p>
                    <p>
                        <span>Anirudh Garg</span><span>2023UCH0005</span>
                    </p>
                </div>
                <div className="team-section">
                    <h2>Sponsorship & Outreach Team</h2>
                    <p>
                        <span>Yuvraj Singh</span><span>2023UEE0160 </span>
                    </p>
                </div>
                <div className="team-section">
                    <h2>Social Media Team</h2>
                    <p>
                        <span>Sachin Kumar Sah</span><span>2023UMA0234 </span>
                    </p>
                </div>
                <div className="team-section">
                    <h2>Web Dev Team</h2>
                    <p>
                        <span>Sujal Kapoor</span><span>2023UEE0154 </span>
                    </p>
                </div>
                <div className="team-section">
                    <h2>Brain Ticklers Team</h2>
                    <p>
                        <span>Arjun Verma</span><span>2023UMA0204 </span>
                    </p>
                </div>
                <div className="team-section">
                    <h2>Inventory Team</h2>
                    <p>
                        <span>Somil Pandita</span><span>2023UEE0153 </span>
                    </p>
                </div>
                <div className="team-section">
                    <h2>Design Team</h2>
                    <p>
                        <span>Jay Mangal Pandey</span><span>2023UMA0216 </span>
                    </p>
                </div>
            </div>
        </div>
    );
}