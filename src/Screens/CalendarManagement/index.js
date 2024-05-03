
import { useState, useEffect } from "react";

import 'react-big-calendar/lib/css/react-big-calendar.css';

import { Link, useNavigate } from "react-router-dom";
 
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';


import { css } from "@emotion/react";

import { DashboardLayout } from "../../Components/Layout/DashboardLayout";


import "./style.css";
import { BASE_URL } from "../../Api/apiConfig";
 
 



const localizer = momentLocalizer(moment);
const CALENDAR_ID = "f7jnetm22dsjc3npc2lu3buvu4@group.calendar.google.com";
const API_KEY = 'AIzaSyCBA9RHBW-G4DZwO7WamhfaVM0Kx_o-Ug4';

 

const PUBLIC_KEY = 'AIzaSyCBA9RHBW-G4DZwO7WamhfaVM0Kx_o-Ug4';
export const CalendarManagement = () => {
    const [events, setEvents] = useState([]);


    let styles = {

        calendar: {
            borderWidth: "3px", //make outer edge of calendar thicker
        },
        title: {
            // Change the title color to green
            color: 'red',
        },
        today: css`
          `,

    };

    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(8);
    const [inputValue, setInputValue] = useState('');

    const navigate = useNavigate();

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const hanldeRoute = () => {
        navigate('/add-user')
    }



    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    const filterData = data?.filter(item =>
        item?.name.toLowerCase().includes(inputValue.toLowerCase())
    );

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filterData.slice(indexOfFirstItem, indexOfLastItem);



    useEffect(() => {
        document.title = 'Wisdom For Life | User Management';
        const LogoutData = localStorage.getItem('login');
        document.querySelector('.loaderBox').classList.remove("d-none");
        fetch(`${BASE_URL}api/admin/user`,
            {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${LogoutData}`
                },
            }
        )
            .then(response =>
                response.json()
            )
            .then((data) => {
                console.log(data)
                document.querySelector('.loaderBox').classList.add("d-none");
                setData(data.users);
            })
            .catch((error) => {
                document.querySelector('.loaderBox').classList.add("d-none");
                console.log(error)
            })


    }, []);


    // const API_KEY = "eternal-splicer-400310"
    let calendars = [
        {
            title: 'Static Event 1',
            start: new Date('2024-04-25T09:00:00'),
            end: new Date('2024-04-25T12:00:00'),
        },
        {
            title: 'Static Event 2',
            start: new Date('2024-05-26T09:00:00'),
            end: new Date('2024-05-26T12:00:00'),
        },
        {
            calendarId: "f7jnetm22dsjc3npc2lu3buvu4@group.calendar.google.com",
            color: "#B241D1",
        },
        { calendarId: "f7jnetm22dsjc3npc2lu3buvu4@group.calendar.google.com" },
        {
            calendarId: "f7jnetm22dsjc3npc2lu3buvu4@group.calendar.google.com",
            color: "rgb(63, 191, 63)",
        },
    ];
    





    const staticEvents = [
        {
            title: 'Static Event 1',
            start: new Date('2024-04-25T09:00:00'),
            end: new Date('2024-04-25T12:00:00'),
        },

    ];


    const newEvent = {
        summary: 'New Event', // Title of the event
        start: {
            dateTime: '2024-05-23T10:00:00', // Start time of the event
            timeZone: 'Pakistan/Karachi', // Time zone of the event
        },
        end: {
            dateTime: '2024-05-23T12:00:00', // End time of the event
            timeZone: 'Pakistan/Karachi', // Time zone of the event
        },

    };




    // useEffect(() => {
    //     const fetchEvents = async () => {
    //         try {
    //             const response = await fetch(
    //                 `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`,
    //                 {
    //                     headers: {
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



    // const allEvents = events.map(event => ({
    //     title: event.summary,
    //     start: new Date(event.start.dateTime),
    //     end: new Date(event.end.dateTime),
    // }));

    // allEvents.push(...staticEvents);


    return (
<>
        <DashboardLayout>
            <div className="container-fluid">


                <div className="row">

                    <div className=" col-md-12">
                        <div className="calender-bdy  p-5 ">
                            {/* <Calendar
                                // apiKey={API_KEY}
                                event={staticEvents}



                                calendars={calendars}
                                styles={styles}

                            /> */}





                            <Calendar
                                localizer={localizer}
                                events={staticEvents}
                             
                                startAccessor="start"
                                endAccessor="end"
                                style={{ height: 800 }}
                            />
                        </div>

                    </div>

                </div>


            </div>

        </DashboardLayout >
        </>
    );
};


