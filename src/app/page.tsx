// src/app/page.tsx
'use client'
import './HomePage.css';
import Image from 'next/image'
import titleImg from '../../public/resources/astronomy.jpg';
import { upcomingEvents } from './events/utils'
// import type { Metadata } from 'next'

// export const metadata: Metadata = {
//     title: "Astria-Za - IIT Jammu",
//     description: "Astria-Za - IIT Jammu's Physics and Astronomy Club",
// }

import { useRef } from 'react';


export default function HomePage() {
    const eventsContainerRef = useRef<HTMLDivElement>(null);

    return (
        <div className="home-page">
            <div className="home-content">
                <Image
                    width={800}
                    height={500}
                    src={titleImg}
                    alt={"Main Title"}
                    priority
                    className='main-title-image' />
                <h1>ASTRIAZA</h1>
                <p className="subtitle">Physics And Astronomy Club - IIT Jammu</p>
            </div>
            {/* Upcoming Events Section */}
            <div className="event-section">
                <h2 className="event-type">Upcoming Events</h2>
                <div className="event-cards" ref={eventsContainerRef}>
                    {upcomingEvents.map((event, index) => (
                        <div
                            key={index}
                            className="event-card"
                            data-event-type={event.typeOfEvent}
                        >
                            <h3 className="event-name">{event.eventName}</h3>
                            <div className="event-card-header">
                                <span className="event-date">
                                    {new Date(event.date).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </span>
                                <span className="event-tag">
                                    {event.typeOfEvent}
                                </span>
                            </div>
                            <div className="event-card-content">
                                <p className="event-description">{event.objective}</p>
                            </div>
                            {event.link && (
                                <a href={event.link} target="_blank" rel="noopener noreferrer" className="event-link">
                                    <button className="link-button">View Event Link</button>
                                </a>
                            )}
                        </div>
                    ))}
                    {upcomingEvents.length === 0 && <p>Waiting for the next event!</p>}
                </div>
            </div>
        </div>
    );
}