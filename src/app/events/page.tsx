// src/app/events/page.tsx
import './EventsPage.css';
import { pastEvents } from './utils'

import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Events - Astria-Za",
    description: "Events conducted by Astria-Za - IIT Jammu's Physics and Astronomy Club",
}

export default function EventsPage() {
    return (
        <div className="events-page">
            <div className="events-header">
                <h1 className="events-title">Astria-Za Past Events</h1>
            </div>
            {/* Past Events Section */}
            <div className="event-cards">
                {pastEvents.map((event, index) => (
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
                            <p className="event-description">{event.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}