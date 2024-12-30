// src/app/team/page.tsx
import './TeamPage.css';
import Image from 'next/image';
import teamData from './team.json'; // Adjust the path as necessary

export default function TeamPage() {
    return (
        <div className="team-page">
            <h1>Meet Our Team</h1>
            <div className="scrollable-container">
                {Object.entries(teamData).map(([role, members]) => (
                    <div className="team-section" key={role}>
                        <h2>{role}</h2>
                        {members.map(member => (
                            <div key={member.id} className="member-card">
                                {member.image && (
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        width={100} // Increased width
                                        height={100} // Increased height
                                    />
                                )}
                                <p>{member.name}</p> {/* Moved name below the image */}
                                <span>{member.id}</span>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}