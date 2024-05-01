 
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

const localizer = momentLocalizer(moment);
export const CalendarManagement = () => {
  const staticEvents = [
    {
      title: 'Static Event 1',
      start: new Date('2024-04-25T09:00:00'),
      end: new Date('2024-04-25T12:00:00'),
    },

  ];

  return (
    <div className="App">
      <Calendar
        localizer={localizer}
        events={staticEvents}
        // events={events?.map(event => ({
        //     title: event.summary,
        //     start: event.start.dateTime,
        //     end: event.end.dateTime,
        // }))}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />

    </div>
  );
}

 