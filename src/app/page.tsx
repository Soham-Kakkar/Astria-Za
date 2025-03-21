// src/app/page.tsx
'use client'
import './HomePage.css';
import Image from 'next/image'
import titleImg from '../../public/resources/astronomy.jpg';
import { upcomingEvents } from './events/utils';
import { useRef, useState } from 'react';
import ConfirmationDialog, { type ConfirmationDialogState } from "../components/ConfirmPopup/ConfirmPopup";

export default function HomePage() {
    const futureEventsContainerRef = useRef<HTMLDivElement>(null);

    const [openConfirmationDialog, setOpenConfirmationDialog] = useState<ConfirmationDialogState>(["", false]);

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

                            <div className="future-event-card-header">
                                <span className="future-event-name">{futureEvent.eventName}</span>

                                <span className="future-event-date">
                                    {new Date(futureEvent.date).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </span>
                            </div>
                            <div className="future-event-card-content">
                                <p className="future-event-description"><img src={`${process.env.NEXT_PUBLIC_SITE_NAME}/${futureEvent.imageURL}`} alt="event poster" className='event-img' /></p>
                            </div>
                            <button
                                className="link-button"
                                onClick={() => setOpenConfirmationDialog([futureEvent.eventName, true])}>Register Now!
                            </button>
                            {openConfirmationDialog[1] && <ConfirmationDialog eventName={openConfirmationDialog[0]} setOpenConfirmationDialog={setOpenConfirmationDialog} />}
                        </div>
                    ))}
                    {upcomingEvents.length === 0 && <p>Waiting for the next event!</p>}
                </div>
            </div>
            <div style={{ height: '0.1px' }} id="future-events"></div>
        </div>
    );
}