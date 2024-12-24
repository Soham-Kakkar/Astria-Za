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
                            <p key={member.id}>
                                <span>
                                    {member.image && (
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            width={30}
                                            height={30}
                                        />
                                    )}
                                    {member.name}
                                </span>
                                <span>{member.id}</span>
                            </p>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}