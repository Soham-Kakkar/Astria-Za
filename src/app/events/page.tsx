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
                        <div className="event-card-header">
                            <span className="event-name">{event.eventName}</span>
                            <span className="event-date">
                                {new Date(event.date).toLocaleDateString('en-IN', {
                                    year: 'numeric',
                                    month: 'short',
                                    day: 'numeric'
                                })}
                            </span>
                        </div>
                        <div className="event-card-content">
                        <p className="future-event-description"><img src={`${process.env.NEXT_PUBLIC_SITE_NAME}/${event.imageURL}`} alt="event poster" className='event-img'/></p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}