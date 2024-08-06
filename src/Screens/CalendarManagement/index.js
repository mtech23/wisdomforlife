
import { useState, useEffect } from "react";

import 'react-big-calendar/lib/css/react-big-calendar.css';

import { Link, useNavigate } from "react-router-dom";

import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';


import { css } from "@emotion/react";

import { DashboardLayout } from "../../Components/Layout/DashboardLayout";


import "./style.css"; 

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


 
    const filterData = data?.filter(item =>
        item?.name.toLowerCase().includes(inputValue.toLowerCase())
    );

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filterData?.slice(indexOfFirstItem, indexOfLastItem);


    const LogoutData = localStorage.getItem('login');
    useEffect(() => {
        document.title = 'Wisdom For Life | User Management';

        document.querySelector('.loaderBox').classList.remove("d-none");
        fetch(`${process.env.REACT_APP_API_URL}api/admin/user`,
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

                document.querySelector('.loaderBox').classList.add("d-none");
                setData(data.users);
            })
            .catch((error) => {
                document.querySelector('.loaderBox').classList.add("d-none");
                console.log(error)
            })


    }, []);
 

    const [dateList, setDateList] = useState([]);


    useEffect(() => {
        const fetchDateList = () => {
            document.querySelector('.loaderBox').classList.remove("d-none");
            fetch(`${process.env.REACT_APP_API_URL}api/user/event-dates`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${LogoutData}`
                },
            })
                .then(response => response.json())
                .then((data) => {
                    document.querySelector('.loaderBox').classList.add("d-none");
                  
                   
                    setDateList(data?.data);
 
                })
                .catch((error) => {
                    document.querySelector('.loaderBox').classList.add("d-none");
                    console.log(error);
                });
        }

        fetchDateList();
    }, []);
 
 

 
 


    return (
        <>
            <DashboardLayout>
                <div className="container-fluid">


                    <div className="row">

                        <div className=" col-md-12">
                            <div className="calender-bdy  p-5 ">
                            




                                <Calendar
                                    localizer={localizer}
                                    events={dateList}

                                    startAccessor="start_date"
                                    endAccessor="end_date"
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


