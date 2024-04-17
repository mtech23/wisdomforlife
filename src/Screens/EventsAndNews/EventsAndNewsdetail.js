import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { courseBannerImage } from "../../Assets/images";
import { eventsImg01, eventsImg02, eventsImg03, eventsImg04, eventsImg05, eventsImg06 } from "../../Assets/images";
import { useParams } from "react-router-dom";
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
    const [detail, setDetail] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const [showModal3, setShowModal3] = useState(false);
    const [showModal4, setShowModal4] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(8);

    
    const [inputValue, setInputValue] = useState('');

    const navigate = useNavigate();

const base_url = `${process.env.REACT_APP_API_URL}`

    console.log("detail" ,detail)
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

    // const filterData = data?.filter(item =>
    //     item?.name.toLowerCase().includes(inputValue.toLowerCase())
    // );

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    // const currentItems = filterData.slice(indexOfFirstItem, indexOfLastItem);
    const { id } = useParams();
    const Eventdetail = () => {
 
        const LogoutData = localStorage.getItem('login');
        document.querySelector('.loaderBox').classList.remove("d-none");
        fetch(`${process.env.REACT_APP_API_URL}api/user/event-view/${id}`,
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
                setDetail(data?.data);
             
            })
            .catch((error) => {
                document.querySelector('.loaderBox').classList.add("d-none");
                console.log(error)
            })
    
    
    }


    useEffect(() =>{
        Eventdetail()
    } , [])
    // useEffect(() => {
    //     document.title = 'Wisdom For Life | User Management';
    //     const LogoutData = localStorage.getItem('login');
    //     document.querySelector('.loaderBox').classList.remove("d-none");
    //     fetch(`${process.env.REACT_APP_API_URL}api/user/event-listing`,
    //         {
    //             method: 'GET',
    //             headers: {
    //                 'Accept': 'application/json',
    //                 'Content-Type': 'application/json',
    //                 'Authorization': `Bearer ${LogoutData}`
    //             },
    //         }
    //     )

    //         .then(response =>
    //             response.json()
    //         )
    //         .then((data) => {
    //             console.log(data)
    //             document.querySelector('.loaderBox').classList.add("d-none");
    //             setData(data.users);
    //         })
    //         .catch((error) => {
    //             document.querySelector('.loaderBox').classList.add("d-none");
    //             console.log(error)
    //         })


    // }, []);


    const Eventlist = () => {
 
        const LogoutData = localStorage.getItem("login");
        document.querySelector(".loaderBox").classList.remove("d-none");
        fetch(`${process.env.REACT_APP_API_URL}api/user/event-listing`, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${LogoutData}`,
          },
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            document.querySelector(".loaderBox").classList.add("d-none");
            setData(data.data);
          })
          .catch((error) => {
            document.querySelector(".loaderBox").classList.add("d-none");
            console.log(error);
          });
      };
      useEffect(() => {
        Eventlist();
      }, []);


console.log("detail" , detail)


    return (

        <DashboardLayout>
            <div className="container-fluid">
                <div className="hearder-img  text-center    mb-5  ">
                    <h1>Creative Teaching Seminar Master Class</h1>
                </div>
                <div className="row">



                    <div className="col-md-10     mx-auto    ">


                        <div className="event_card_img  mb-5   ">
                            <img src={base_url + detail?.image} className="   w-100  " />
                        </div>

                        <div className="row">
                            <div className="col-md-8">
                                <span className="title-event   mb-5   text-dark  flex-nowrap ">
                                {detail?.name}
                                </span>
                                <p className="para-event ">{detail?.description}</p>
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
                                            ${detail?.cost}
                                        </span>
                                    </div>


                                    <div className=" d-flex justify-content-between   mx-auto">
                                        <span className="cost">
                                        Total Slot:</span>
                                        <span className="cost-price">
                                            ${detail?.cost}
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


