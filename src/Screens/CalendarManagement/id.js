

// import { Calendar, momentLocalizer } from 'react-big-calendar';
// import moment from 'moment';
// import 'react-big-calendar/lib/css/react-big-calendar.css';
// import 'react-big-calendar/lib/css/react-big-calendar.css';

            // Change the title color to green
// const localizer = momentLocalizer(moment);


    // const API_KEY = "eternal-splicer-400310"
  // // let styles = {
    //   //you can use object styles
    //   calendar: {
    //     borderWidth: "3px" //make outer edge of calendar thicker
    //   },

    //   //you can also use emotion's string styles (remember to add the line 'import { css } from "@emotion/react";')
    //   today: css`
    //     /* highlight today by making the text red and giving it a red border */
    //     color: red;
    //     border: 1px solid red;
    //   `
    // };


    // const CALENDAR_ID = "f7jnetm22dsjc3npc2lu3buvu4@group.calendar.google.com"

    // const API_KEY = 'AIzaSyCBA9RHBW-G4DZwO7WamhfaVM0Kx_o-Ug4';
    // const [events, setEvents] = useState([])

    // useEffect(() => {
    //     const PUBLIC_KEY = 'AIzaSyCBA9RHBW-G4DZwO7WamhfaVM0Kx_o-Ug4';
    //     const fetchEvents = async () => {
    //         try {
    //             const response = await fetch(
    //                 `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${PUBLIC_KEY}`,
    //                 {
    //                     headers: {
    //                         'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
    //                         'Accept': 'application/json',
    //                     },
    //                 }
    //             );
    //             const data = await response.json();
    //             setEvents(data.items);
    //         } catch (error) {
    //             console.error('Error fetching events:', error);
    //         }
    //     };

    //     fetchEvents();
    // }, []);


    // const staticEvents = [
    //     {
    //         title: 'Static Event 1',
    //         start: new Date('2024-04-25T09:00:00'),
    //         end: new Date('2024-04-25T12:00:00'),
    //     },
    //     {
    //         title: 'Static Event 2',
    //         start: new Date('2024-05-26T09:00:00'),
    //         end: new Date('2024-05-26T12:00:00'),
    //     },
    //     // Add more static events as needed
    // ];

    // const allEvents = [];
    // if (events && Array.isArray(events)) {
    //     allEvents.push(...events.map(event => ({
    //         title: event.summary,
    //         start: new Date(event.start.dateTime),
    //         end: new Date(event.end.dateTime),
    //     })));
    // }

    // if (allEvents.length === 0) {
    //     allEvents.push(...staticEvents);
    // }


 // const staticEvents = [
    //     {
    //         title: 'Static Event 1',
    //         start: new Date('2024-04-25T09:00:00'),
    //         end: new Date('2024-04-25T12:00:00'),
    //     },
    //     {
    //         title: 'Static Event 2',
    //         start: new Date('2024-05-26T09:00:00'),
    //         end: new Date('2024-05-26T12:00:00'),
    //     },
    //     // Add more static events as needed
    // ];
    // const allEvents = [  ...staticEvents];

    // const calendars = [
    //     {
    //         calendarId: CALENDAR_ID,
    //         color: "#B241D1",
    //     },
    //     { calendarId: CALENDAR_ID }, //without a specified color, it defaults to blue (#4786ff)
    //     {
    //         calendarId: CALENDAR_ID,
    //         color: "rgb(63, 191, 63)",
    //     },  
    // ];

    // const styles = {}; // Define your calendar styles here


                            {/* <Calendar
  apiKey="API_KEY"
                // apiKey={API_KEY}
                events={staticEvents}
                calendars={calendars}
                style={{ height: 500 }}
            /> */}
                            {/* <Calendar
                                localizer={localizer}

                                events={allEvents}
                                startAccessor="start"
                                endAccessor="end"
                                style={{ height: 500 }}
                            /> */}