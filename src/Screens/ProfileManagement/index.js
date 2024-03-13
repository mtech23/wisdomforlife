import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { courseBannerImage } from "../../Assets/images";
import {  profileImg01, profilePic01, profilePic02, profilePic03, profilePic04, profilePic05, profilePic06, profilePic07, profilePic08, profilePic09 } from "../../Assets/images";

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
import { faMagnifyingGlass, faUserAlt, faPlay, faStar, faTable } from "@fortawesome/free-solid-svg-icons";

export const ProfileManagement = () => {

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

                    <div className="col-md-3">

                        <div className="profile_left_part">

                            <div className="text-center">
                                <img src={profileImg01} className="img-fluid"/>
                            </div>

                            <div className="user_profile_details">
                                <h6 className="user_profile_name">Angela Rose</h6>

                                <p className="user_profile_para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem</p>
                            </div>

                            <div className="">

                                <div className="profile_course_details">
                                    <span className="profile_course_number">03</span>
                                    <span className="profile_course_enrolls">Course Enrolled</span>
                                </div>

                                <div className="profile_course_details">
                                    <span className="profile_course_number">07</span>
                                    <span className="profile_course_enrolls">Posts</span>
                                </div>

                                <div className="profile_course_details">
                                    <span className="profile_course_number">23</span>
                                    <span className="profile_course_enrolls">Appreciations</span>
                                </div>

                            </div>

                            

                            <div>
                                <Link className="profile_logout_btn">
                                    <span>Log Out</span>
                                </Link>
                            </div>

                        </div>

                    </div>

                    <div className="col-md-9">

                        <div className="profile_right_part">

                            <h6 className="profile_edit_heading">EDIT</h6>

                            <div className="mb-3">
                                <input type="text" className="input_name form-control" id="exampleFormControlInput1" placeholder="Your Name"/>
                            </div>

                            <p className="profile_edit_para">This field can be seen by: <span>Everyone</span></p>


                            <div className="general_settings_main">

                                <h6 className="profile_edit_heading mb-4">General Account Settings</h6>

                                <div class="mb-5">
                                    <input type="email" class="email_input form-control" id="" placeholder="Your Account Email"/>
                                </div>

                                <div>
                                    <p className="profile_edit_para">Change Password <span>(leave blank for no change)</span></p>
                                </div>

                                <div className="mb-3">
                                    <input type="text" className="input_name form-control" id="password" placeholder="New Password"/>
                                </div>

                                <div className="mb-3">
                                    <input type="text" className="input_name form-control" id="repeat_password" placeholder="Repeat New Password"/>
                                </div>

                            </div>

                            <div className="change_profile_photo_main">

                                <h6 className="profile_edit_heading">Change Profile Photo</h6>

                                <p className="profile_edit_para mb-3">Select Profile Picture from the avatars given below<span></span></p>

                                <div className="profile_picture_avatars mb-3">

                                    <div>
                                        <img src={profilePic01}/>
                                    </div>

                                    <div>
                                        <img src={profilePic02}/>
                                    </div>

                                    <div>
                                        <img src={profilePic03}/>
                                    </div>

                                    <div>
                                        <img src={profilePic04}/>
                                    </div>

                                    <div>
                                        <img src={profilePic01}/>
                                    </div>

                                    <div>
                                        <img src={profilePic05}/>
                                    </div>

                                    <div>
                                        <img src={profilePic06}/>
                                    </div>

                                    <div>
                                        <img src={profilePic07}/>
                                    </div>

                                    <div>
                                        <img src={profilePic08}/>
                                    </div>

                                    <div>
                                        <img src={profilePic09}/>
                                    </div>

                                </div>

                                <p className="profile_edit_para">Click below to select a JPG, GIF or PNG format photo from your computer and then click 'Upload Image' to proceed.<span></span></p>

                                <div className="mb-3">
                                    <input className="form-control form-control-sm border-0" id="formFileSm" type="file"/>
                                </div>

                                <div>
                                    <button className="profile_save_btn">Save</button>
                                </div>

                            </div>


                        </div>

                    </div>

                </div>    
            
                


            </div>

        </DashboardLayout >

    );
};


