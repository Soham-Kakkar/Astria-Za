// src/app/events/page.tsx
import './EventsPage.css';
import eventData from './events.json';

export default function EventsPage() {
    function dateToSortNumber(dateString: string): number {
        const [year, month, day] = dateString.split('-').map(Number);
        return year * 10000 + month * 100 + day;
    }

    const currentDate = new Date();
    const currentDateString = currentDate.toISOString().split('T')[0]; // Get current date in YYYY-MM-DD format

    // Separate events into past and upcoming
    const pastEvents: any[] = [];
    const upcomingEvents: any[] = [];

    Object.entries(eventData).forEach(([eventType, events]) => {
        events.forEach(event => {
            if (dateToSortNumber(event.date) < dateToSortNumber(currentDateString)) {
                pastEvents.push({ ...event, eventType });
            } else {
                upcomingEvents.push({ ...event, eventType });
            }
        });
    });

    // Sort both arrays by date in descending order
    pastEvents.sort((a, b) => dateToSortNumber(b.date) - dateToSortNumber(a.date));
    upcomingEvents.sort((a, b) => dateToSortNumber(b.date) - dateToSortNumber(a.date));

    return (
        <div className="events-page">
            <div className="events-header">
                <h1 className="events-title">Astria-Za Events</h1>
            </div>
            <div className="events-container">
                {/* Upcoming Events Section */}
                <div className="event-section">
                    <h2 className="event-type">Upcoming Events</h2>
                    <div className="event-cards">
                        {upcomingEvents.map((event, index) => (
                            <div
                            key={index}
                            className="event-card"
                            data-event-type={event.typeOfEvent}
                        >
                            <h3 className="event-name">{event.eventType}</h3>
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
                        {upcomingEvents.length === 0 && <p>Waiting for the next event!</p>}
                    </div>
                </div>

                {/* Past Events Section */}
                <div className="event-section">
                    <h2 className="event-type">Past Events</h2>
                    <div className="event-cards">
                        {pastEvents.map((event, index) => (
                            <div
                                key={index}
                                className="event-card"
                                data-event-type={event.typeOfEvent}
                            >
                                <h3 className="event-name">{event.eventType}</h3>
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
            </div>
        </div>
    );
}