import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { courseBannerImage } from "../../Assets/images";
import { eventsImg01, eventsImg02, eventsImg03, eventsImg04, eventsImg05, eventsImg06 } from "../../Assets/images";

import { Dropdown } from "react-bootstrap";

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

export const EventsAndNews = () => {

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
                <div className="row">

                    <div className="col-md-12 mb-4">
                        <h2 className="upcoming_events_heading">upcoming events</h2>
                    </div>

                    <div className="col-sm-10 col-lg-6 col-xl-4 mx-auto">

                        <div className="main_events_card">
                            <div className="event_card_img">
                                <img src={eventsImg01} className="w-100"/>
                            </div>

                            <div className="event_card_body">

                                <div className="event_card_date">
                                    <span><FontAwesomeIcon icon={faCalendarDays} /></span>
                                    <span className="ps-3">January 11, 2023</span>
                                </div>

                                <div>
                                    <h6 className="event_title">Lorem ipsume simply dummy text</h6>

                                    <p className="event_para">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text ever since the when an unknown printer took Lorem Ipsum is simply
                                    </p>
                                </div>

                                <div>
                                    
                                    <Link to="">
                                        <span className="event_readmore_btn">Read More</span>
                                    </Link>
                                </div>

                            </div>
                        </div>

                    </div>

                    <div className="col-sm-10 col-lg-6 col-xl-4 mx-auto">

                        <div className="main_events_card">
                            <div className="event_card_img">
                                <img src={eventsImg02} className="w-100"/>
                            </div>

                            <div className="event_card_body">

                                <div className="event_card_date">
                                    <span><FontAwesomeIcon icon={faCalendarDays} /></span>
                                    <span className="ps-3">January 11, 2023</span>
                                </div>

                                <div>
                                    <h6 className="event_title">Lorem ipsume simply dummy text</h6>

                                    <p className="event_para">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text ever since the when an unknown printer took Lorem Ipsum is simply
                                    </p>
                                </div>

                                <div>
                                    
                                    <Link to="">
                                        <span className="event_readmore_btn">Read More</span>
                                    </Link>
                                </div>

                            </div>
                        </div>

                    </div>

                    <div className="col-sm-10 col-lg-6 col-xl-4 mx-auto">

                        <div className="main_events_card">
                            <div className="event_card_img">
                                <img src={eventsImg03} className="w-100"/>
                            </div>

                            <div className="event_card_body">

                                <div className="event_card_date">
                                    <span><FontAwesomeIcon icon={faCalendarDays} /></span>
                                    <span className="ps-3">January 11, 2023</span>
                                </div>

                                <div>
                                    <h6 className="event_title">Lorem ipsume simply dummy text</h6>

                                    <p className="event_para">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text ever since the when an unknown printer took Lorem Ipsum is simply
                                    </p>
                                </div>

                                <div>
                                    <Link to="">
                                        <span className="event_readmore_btn">Read More</span>
                                    </Link>
                                </div>

                            </div>
                        </div>

                    </div>


                    <div className="col-sm-10 col-lg-6 col-xl-4 mx-auto">

                        <div className="main_events_card">
                            <div className="event_card_img">
                                <img src={eventsImg04} className="w-100"/>
                            </div>

                            <div className="event_card_body">

                                <div className="event_card_date">
                                    <span><FontAwesomeIcon icon={faCalendarDays} /></span>
                                    <span className="ps-3">January 11, 2023</span>
                                </div>

                                <div>
                                    <h6 className="event_title">Lorem ipsume simply dummy text</h6>

                                    <p className="event_para">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text ever since the when an unknown printer took Lorem Ipsum is simply
                                    </p>
                                </div>

                                <div>
                                    <Link to="">
                                        <span className="event_readmore_btn">Read More</span>
                                    </Link>
                                </div>

                            </div>
                        </div>

                    </div>


                    <div className="col-sm-10 col-lg-6 col-xl-4 mx-auto">

                        <div className="main_events_card">
                            <div className="event_card_img">
                                <img src={eventsImg05} className="w-100"/>
                            </div>

                            <div className="event_card_body">

                                <div className="event_card_date">
                                    <span><FontAwesomeIcon icon={faCalendarDays} /></span>
                                    <span className="ps-3">January 11, 2023</span>
                                </div>

                                <div>
                                    <h6 className="event_title">Lorem ipsume simply dummy text</h6>

                                    <p className="event_para">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text ever since the when an unknown printer took Lorem Ipsum is simply
                                    </p>
                                </div>

                                <div>
                                    <Link to="">
                                        <span className="event_readmore_btn">Read More</span>
                                    </Link>
                                </div>

                            </div>
                        </div>

                    </div>

                    <div className="col-sm-10 col-lg-6 col-xl-4 mx-auto">

                        <div className="main_events_card">
                            <div className="event_card_img">
                                <img src={eventsImg06} className="w-100"/>
                            </div>

                            <div className="event_card_body">

                                <div className="event_card_date">
                                    <span><FontAwesomeIcon icon={faCalendarDays} /></span>
                                    <span className="ps-3">January 11, 2023</span>
                                </div>

                                <div>
                                    <h6 className="event_title">Lorem ipsume simply dummy text</h6>

                                    <p className="event_para">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text ever since the when an unknown printer took Lorem Ipsum is simply
                                    </p>
                                </div>

                                <div>
                                    <Link to="">
                                        <span className="event_readmore_btn">Read More</span>
                                    </Link>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>
            
                


            </div>

        </DashboardLayout >

    );
};


