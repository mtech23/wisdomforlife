import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { courseBannerImage } from "../../Assets/images";
import { eventsImg01, eventsImg02, eventsImg03, eventsImg04, eventsImg05, eventsImg06 } from "../../Assets/images";

import { Dropdown } from "react-bootstrap";
import eventsnews from '../../Assets/images/events-and-news-img.png'
import { DashboardLayout } from "../../Components/Layout/DashboardLayout";
import CustomTable from "../../Components/CustomTable";
import CustomModal from "../../Components/CustomModal";

import CustomPagination from "../../Components/CustomPagination"
import CustomInput from "../../Components/CustomInput";
import CustomButton from "../../Components/CustomButton";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


import "./style.css";
import { BASE_URL } from "../../Api/apiConfig";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faUserAlt, faPlay, faStar, faTable, faCalendarDays } from "@fortawesome/free-solid-svg-icons";

export const EventsAndNewsdetail = () => {

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




    return (

        <DashboardLayout>
            <div className="container-fluid">
                <div className="hearder-img  text-center    mb-5  ">
                    <h1>Creative Teaching Seminar Master Class</h1>
                </div>
                <div className="row">



                    <div className="col-md-10     mx-auto    ">


                        <div className="event_card_img  mb-5   ">
                            <img src={eventsnews} className="   w-100  " />
                        </div>

                        <div className="row">
                            <div className="col-md-8">
                                <span className="title-event   mb-5   text-dark  flex-nowrap ">
                                    About The Event
                                </span>
                                <p className="para-event ">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore
                                    et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip
                                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                    fugiat nulla pariatur enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia
                                    consequuntur magni dolores.</p>
                            </div>
                            <div className="event-info col-md-4  mb-4">
                                <div>
                                    <span className="event-para  mx-auto">
                                        Event Info
                                    </span>
                                    <div className=" d-flex justify-content-between   mx-auto ">
                                        <span className="cost">
                                            Cost</span>
                                        <span className="cost-price">
                                            $59.00
                                        </span>
                                    </div>


                                    <div className=" d-flex justify-content-between   mx-auto">
                                        <span className="cost">
                                        Total Slot:</span>
                                        <span className="cost-price">
                                            $59.00
                                        </span>
                                    </div>
                                </div>




                            </div>
                        </div>




                    </div>

                </div>




            </div>

        </DashboardLayout >

    );
};


