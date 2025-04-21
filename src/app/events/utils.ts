
import eventData from './events.json';

interface Event {
  eventName: string; 
  date: string;
  natureOfEvent: string; 
  objective: string; 
  description: string;
  imageURL?: string;
  link?: string;
}

function dateToSortNumber(dateString: string): number {
  const [year, month, day] = dateString.split('-').map(Number);
  return year * 10000 + month * 100 + day;
}

const currentDate = new Date();
const currentDateString = currentDate.toISOString().split('T')[0]; // Get current date in YYYY-MM-DD format

// Separate events into past and upcoming
const pastEvents: Event[] = [];
const upcomingEvents: Event[] = [];

Object.entries(eventData).forEach(([eventName, events]) => {
  events.forEach(event => {
      if (dateToSortNumber(event.date) < dateToSortNumber(currentDateString)) {
          pastEvents.push({ ...event, eventName });
      } else {
          upcomingEvents.push({ ...event, eventName });
      }
  });
});

// Sort both arrays by date in descending order
pastEvents.sort((a, b) => dateToSortNumber(b.date) - dateToSortNumber(a.date));
upcomingEvents.sort((a, b) => dateToSortNumber(b.date) - dateToSortNumber(a.date));

export { type Event, pastEvents, upcomingEvents };