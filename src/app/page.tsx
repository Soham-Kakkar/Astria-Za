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
    const futureEventsContainerRef = useRef<HTMLDivElement>(null);

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
                <h1>ASTRIA-ZA</h1>
                <p className="subtitle">Physics And Astronomy Club - IIT Jammu</p>
            </div>
            {/* Upcoming Events Section */}
            <div className="future-event-section">
                <h2 className="future-event-type">Upcoming Events</h2>
                <div className="future-event-cards" ref={futureEventsContainerRef}>
                    {upcomingEvents.map((futureEvent, index) => (
                        <div
                            key={index}
                            className="future-event-card"
                            data-future-event-type={futureEvent.typeOfEvent}
                        >
                            <h3 className="future-event-name">{futureEvent.eventName}</h3>
                            <div className="future-event-card-header">
                                <span className="future-event-date">
                                    {new Date(futureEvent.date).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </span>
                                <span className="future-event-tag">
                                    {futureEvent.typeOfEvent}
                                </span>
                            </div>
                            <div className="future-event-card-content">
                                <p className="future-event-description">{futureEvent.objective}</p>
                            </div>
                            {futureEvent.link && (
                                <a href={futureEvent.link} target="_blank" rel="noopener noreferrer" className="future-event-link">
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