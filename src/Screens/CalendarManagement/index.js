
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { courseBannerImage } from "../../Assets/images";
import { courseImg01, courseImg02, courseImg03, courseImg04, courseImg05, courseImg06 } from "../../Assets/images";

import { Dropdown } from "react-bootstrap";

import Calendar from "@ericz1803/react-google-calendar";
import { css } from "@emotion/react";
import { DashboardLayout } from "../../Components/Layout/DashboardLayout";
import CustomTable from "../../Components/CustomTable";
import CustomModal from "../../Components/CustomModal";

import CustomPagination from "../../Components/CustomPagination"
import CustomInput from "../../Components/CustomInput";
import CustomButton from "../../Components/CustomButton";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

// import Calendar from "@ericz1803/react-google-calendar";
// import { css } from "@emotion/react";


import "./style.css";
import { BASE_URL } from "../../Api/apiConfig";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faUserAlt, faPlay, faStar, faTable } from "@fortawesome/free-solid-svg-icons";

export const CalendarManagement = () => {



    const [data, setData] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const [showModal3, setShowModal3] = useState(false);
    const [showModal4, setShowModal4] = useState(false);
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


    const inActive = () => {
        setShowModal(false)
        setShowModal2(true)
    }
    const ActiveMale = () => {
        setShowModal3(false)
        setShowModal4(true)
    }

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    const filterData = data.filter(item =>
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


    const API_KEY = "eternal-splicer-400310"
    let calendars = [
        {
            calendarId: "09opmkrjova8h5k5k46fedmo88@group.calendar.google.com",
            color: "#B241D1",
        }, //add a color field to specify the color of a calendar
        { calendarId: "hkr1dj9k6v6pa79gvpv03eapeg@group.calendar.google.com" }, //without a specified color, it defaults to blue (#4786ff)
        {
            calendarId: "rg4m0k607609r2jmdr97sjvjus@group.calendar.google.com",
            color: "rgb(63, 191, 63)",
        }, //accepts hex and rgb strings (doesn't work with color names)
    ];

    let styles = {
        //you can use object styles (no import required)
        calendar: {
            borderWidth: "3px", //make outer edge of calendar thicker
        },

        title: {
            // Change the title color to green
            color: 'red',
        },

        //you can also use emotion's string styles

        today: css`
          /* highlight today by making the text red and giving it a red border */
          color: red;
          border: 1px solid red;
        `,
    };



    return (

        <DashboardLayout>
            <div className="container-fluid">


                <div className="row">

                    <div className=" col-md-12">
                        <div className="calender-bdy  p-5 ">
                            <Calendar
                                apiKey={API_KEY}
                                calendars={calendars}
                                styles={styles}

                            />
                        </div>

                    </div>

                </div>


            </div>

        </DashboardLayout >

    );
};


