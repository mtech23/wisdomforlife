import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { courseBannerImage } from "../../Assets/images";
import { courseImg01, courseImg02, courseImg03, courseImg04, courseImg05, courseImg06 } from "../../Assets/images";

import { Dropdown } from "react-bootstrap";
import detailvideo from '../../Assets/images/coursedetailvideo.png'
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

export const EnrollNow = () => {

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


                {/* <section class="web">
                    <div class="container-fluid">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-8">
                                    <h2>
                                        Web Development Beginner <br /> To Master || HTML, CSS, PHP
                                    </h2>

                                    <i class="fa fa-user" aria-hidden="true" style="color:#b6803a;"></i><p >By Edward Norton</p>
                                    <i class="fa-solid fa-globe" style="color:#b6803a; padding-left: 10px;"></i>
                                    <p >Business</p>
                                    <span class="fa fa-star checked" style="color: #F8B81F; padding-left: 10px;" ></span>
                                    <span class="fa fa-star checked" style="color: #F8B81F;"  ></span>
                                    <span class="fa fa-star checked" style="color: #F8B81F;" ></span>
                                    <span class="fa fa-star checked" style="color: #F8B81F;"></span>
                                    <span class="fa fa-star checked" style="color: #F8B81F; "></span><p >(3 Reviews)</p>
                                </div>
                                <div class="col-md-4">
                                    <img class="img-fluid"/ src="img/div.edublink-course-details-card-preview.png" />
                                </div>



                            </div>
                        </div>
                    </div>
                </section>
                <section class="overview">
                    <div class="container-fluid">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-8">
                                    <button style="color:#b6803a;">
                                        OverView
                                    </button>
                                    <button>
                                        Curriculum
                                    </button>
                                    <button>
                                        Instructor
                                    </button>
                                    <button>
                                        Reviews
                                    </button>
                                    <hr />
                                    <h3>
                                        Course Description
                                    </h3>
                                    <p>
                                        Lorem ipsum dolor sit amet consectur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna
                                        aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                        fugiat nulla pariatur enim ipsam.
                                        <p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim idest laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                            accusantiumdoloremque laudantium totam rem aperiam. </p>

                                    </p>
                                    <h3>
                                        What You’ll Learn?
                                    </h3>
                                    <ul>
                                        <li>
                                            Neque sodales ut etiam sit amet nisl purus non tellus orci ac auctor
                                        </li>
                                        <li>Tristique nulla aliquet enim tortor at auctor urna. Sit amet aliquam id diam maer</li>
                                        <li>Nam libero justo laoreet sit amet. Lacus sed viverra tellus in hac</li>
                                        <li>Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis</li>
                                    </ul>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                        labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                                    </p>

                                </div>

                                <div class="col-md-4 ">
                                    <div class="box">
                                        <h3 style="padding:30px;">Course Includes:</h3>
                                        <div class="row" style="padding-left:20px;">
                                            <div class="col-md-6">
                                                <i class="fa-solid fa-money-bill-1-wave"></i><p style=" padding-left:15px; display:inline;" class="coursepara">Price:</p>
                                            </div>
                                            <div class="col-md-6">
                                                <p class="coursepara1">$30</p>
                                            </div>
                                            <hr />
                                        </div>
                                        <div class="row" style="padding-left:20px;">
                                            <div class="col-md-6">
                                                <i class="fa fa-user" aria-hidden="true"></i><p style=" padding-left:15px; display:inline;" class="coursepara">Instructor:</p>
                                            </div>
                                            <div class="col-md-6">
                                                <p class="coursepara2">Edward Norton</p>
                                            </div>
                                            <hr />
                                        </div>
                                        <div class="row" style="padding-left:20px;">
                                            <div class="col-md-6">
                                                <i class="fa-solid fa-clock"></i><p style=" padding-left:15px; display:inline;" class="coursepara">Duration:</p>
                                            </div>
                                            <div class="col-md-6">
                                                <p class="coursepara2">15 weeks</p>
                                            </div>
                                            <hr />
                                        </div>
                                        <div class="row" style="padding-left:20px;">
                                            <div class="col-md-6">
                                                <i class="fa-solid fa-gift"></i><p style=" padding-left:15px; display:inline;" class="coursepara">Lessons:</p>
                                            </div>
                                            <div class="col-md-6">
                                                <p class="coursepara2">11</p>
                                            </div>
                                            <hr />
                                        </div>
                                        <div class="row" style="padding-left:20px;">
                                            <div class="col-md-6">
                                                <i class="fa-solid fa-user-nurse"></i><p style=" padding-left:15px; display:inline;" class="coursepara">Students:</p>
                                            </div>
                                            <div class="col-md-6">
                                                <p class="coursepara2">229</p>
                                            </div>
                                            <hr />
                                        </div>
                                        <div class="row" style="padding-left:20px;">
                                            <div class="col-md-6">
                                                <i class="fa-solid fa-globe" ></i><p style=" padding-left:15px; display:inline;" class="coursepara">Language:</p>
                                            </div>
                                            <div class="col-md-6">
                                                <p class="coursepara2">English</p>
                                            </div>
                                            <hr />
                                        </div>
                                        <div class="row" style="padding-left:20px;">
                                            <div class="col-md-6">
                                                <i class="fa-solid fa-certificate"></i><p style=" padding-left:15px; display:inline;" class="coursepara">Certifications:</p>
                                            </div>
                                            <div class="col-md-6">
                                                <p class="coursepara2">Yes</p>
                                            </div>
                                        </div>
                                        <div class="row justify-content-center" style="padding: 20px;">

                                            <button class="btn"> Enroll Now</button>


                                        </div>
                                        <div class="row justify-content-center" style="padding: 20px;">

                                            <button class="btn1"> Add to Cart</button>

                                        </div>
                                        <div style="padding: 20px;">
                                            <h4>Share On:</h4>
                                            <i class="fa-brands fa-facebook socials" ></i>
                                            <i class="fa-brands fa-x-twitter socials"></i>
                                            <i class="fa-brands fa-linkedin-in socials" ></i>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </section> */}



                <section class="web">
                    <div class="container-fluid">

                        <div class="row mx-auto ">
                            <div class=" col-md-7">
                                <h2 className="enroll-title  ">
                                    Web Development Beginner <br /> To Master || HTML, CSS, PHP
                                </h2>
                                <div className="enrollist d-flex  gap-5 text-black       text-center  mx-auto  ">
                                    <span><i class="fa fa-user icon" aria-hidden="true" ></i><p >By Edward Norton</p>

                                    </span>
                                    <span>
                                        <i class="fa-solid fa-globe icon" ></i><p >Business</p>
                                    </span>

                                    <span className=" d-flex  mb-0 ">
                                        <span class="fa fa-star checked star " >
                                            <span class="fa fa-star checked star" ></span>
                                            <span class="fa fa-star checked star" ></span>
                                            <span class="fa fa-star checked star"></span>
                                            <span class="fa fa-star checked star" ></span><p >(3 Reviews)</p>
                                        </span>

                                    </span>

                                </div></div>
                            <div class="col-md-4">
                                <img class="img-fluid" src={detailvideo} />
                            </div>



                        </div>

                    </div>
                </section>
                <section class="overview ">
                    <div class="container-fluid">
                        <div class="container">
                            <div class="row">

                                <div class="col-md-7 ">

                                    <button class="view">
                                        OverView
                                    </button>

                                    <button>
                                        Curriculum
                                    </button>
                                    <button>
                                        Instructor
                                    </button>
                                    <button>
                                        Reviews
                                    </button>
                                    <hr />
                                    <h3>
                                        Course Description
                                    </h3>
                                    <p>
                                        Lorem ipsum dolor sit amet consectur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna
                                        aliqua enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                        fugiat nulla pariatur enim ipsam.
                                        <p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim idest laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                            accusantiumdoloremque laudantium totam rem aperiam. </p>

                                    </p>
                                    <h3>
                                        What You’ll Learn?
                                    </h3>
                                    <ul>
                                        <li>
                                            Neque sodales ut etiam sit amet nisl purus non tellus orci ac auctor
                                        </li>
                                        <li>Tristique nulla aliquet enim tortor at auctor urna. Sit amet aliquam id diam maer</li>
                                        <li>Nam libero justo laoreet sit amet. Lacus sed viverra tellus in hac</li>
                                        <li>Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis</li>
                                    </ul>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                        labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                                    </p>

                                </div>

                                <div class="col-md-4 ">
                                    <div class="box">
                                        <h3 >Course Includes:</h3>
                                        <div class="row p-4">
                                            <div class="col-md-6">
                                                <i class="fa-solid fa-money-bill-1-wave"></i><p class="coursepara">Price:</p>
                                            </div>
                                            <div class="col-md-6">
                                                <p class="coursepara1">$30</p>
                                            </div>
                                            <hr />
                                        </div>
                                        <div class="row p-4">
                                            <div class="col-md-6">
                                                <i class="fa fa-user" aria-hidden="true"></i><p class="coursepara">Instructor:</p>
                                            </div>
                                            <div class="col-md-6">
                                                <p class="coursepara2">Edward Norton</p>
                                            </div>
                                            <hr />
                                        </div>
                                        <div class="row p-4">
                                            <div class="col-md-6">
                                                <i class="fa-solid fa-clock"></i><p class="coursepara">Duration:</p>
                                            </div>
                                            <div class="col-md-6">
                                                <p class="coursepara2">15 weeks</p>
                                            </div>
                                            <hr />
                                        </div>
                                        <div class="row p-4">
                                            <div class="col-md-6">
                                                <i class="fa-solid fa-gift"></i><p class="coursepara">Lessons:</p>
                                            </div>
                                            <div class="col-md-6">
                                                <p class="coursepara2">11</p>
                                            </div>
                                            <hr />
                                        </div>
                                        <div class="row p-4">
                                            <div class="col-md-6">
                                                <i class="fa-solid fa-user-nurse"></i><p class="coursepara">Students:</p>
                                            </div>
                                            <div class="col-md-6">
                                                <p class="coursepara2">229</p>
                                            </div>
                                            <hr />
                                        </div>
                                        <div class="row p-4">
                                            <div class="col-md-6">
                                                <i class="fa-solid fa-globe" ></i><p class="coursepara">Language:</p>
                                            </div>
                                            <div class="col-md-6">
                                                <p class="coursepara2">English</p>
                                            </div>
                                            <hr />
                                        </div>
                                        <div class="row p-4">
                                            <div class="col-md-6">
                                                <i class="fa-solid fa-certificate"></i><p class="coursepara">Certifications:</p>
                                            </div>
                                            <div class="col-md-6">
                                                <p class="coursepara2">Yes</p>
                                            </div>
                                        </div>
                                        <div class="enroll" >
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <button class="btn"> Enroll Now</button>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="enroll" >
                                            <div class="row" >
                                                <div class="col-md-12 ">
                                                    <button class="btn1"> Add to Cart</button>
                                                </div>

                                            </div>
                                        </div>
                                        <div class="row p-3">
                                            <div class="col-md-12">

                                                <h4>Share On:</h4>
                                                <i class="fa-brands fa-facebook socials" ></i>
                                                <i class="fa-brands fa-x-twitter socials"></i>
                                                <i class="fa-brands fa-linkedin-in socials" ></i>

                                            </div>
                                        </div>

                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                {/* <section>
                    <div class="container-fluid">
                        <div class="conatiner">
                            <div class="row">

                                <div class="col-md-8">
                                    <div class="cart">
                                        <h3> My Cart </h3>
                                        <table class="table">
                                            <tr>
                                                <td><img src="image/Rectangle 85.png" alt="" class="img-fluid" /></td>
                                                <td ><h5>Web Development Beginner - Master <br />| HTML, CSS.</h5>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut</p>
                                                    <button>Remove</button>
                                                </td>
                                                <td><p class="dollar">$99</p></td>
                                            </tr>
                                            <tr>
                                                <td ><img src="image/Rectangle 89.png" alt="" class="img-fluid" /></td>
                                                <td ><h5 >Web Development Beginner - Master <br />| HTML, CSS.</h5>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut</p>
                                                    <button>Remove</button>
                                                </td>
                                                <td><p class="dollar" >$99</p></td>
                                            </tr>
                                            <tr>
                                                <td ><img src="image/Rectangle 91.png" alt="" class="img-fluid" /></td>
                                                <td ><h5 >Web Development Beginner - Master <br />| HTML, CSS.</h5>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut</p>
                                                    <button>Remove</button>
                                                </td>
                                                <td><p class="dollar" >$99</p></td>
                                            </tr>
                                            <tr>
                                                <div class="lastrow">
                                                    <td ><img src="image/Rectangle 178.png" alt="" class="img-fluid" /></td>
                                                    <td ><h5>Web Development Beginner - Master <br />| HTML, CSS.</h5>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut</p>
                                                        <button>Remove</button>
                                                    </td>
                                                    <td><p class="dollar" >$99</p></td>
                                                </div>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="cart">
                                        <h3>Cart Summary</h3>
                                        <div class="row" >
                                            <div class="col-md-6">
                                                <p class="summary">Subtotal (4 Items)</p>
                                            </div>
                                            <div class="col-md-6">
                                                <p class="sum">$480</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <p class="summary">Discount</p>
                                            </div>
                                            <div class="col-md-6">
                                                <p class="sum">$35.2</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <p class="summary">Tax</p>
                                            </div>
                                            <div class="col-md-6">
                                                <p class="sum">$0.00</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <p class="summary">Total</p>
                                            </div>
                                            <div class="col-md-6">
                                                <p class="sum">$445</p>
                                            </div>
                                        </div>
                                        <hr/>

                                            <div class="row mx-auto" >
                                                <div class="col-md-12">
                                                    <div class="btn">
                                                        <button class="btn">Checkout</button>
                                                    </div>
                                                </div>
                                            </div>

                                    </div>

                                    <div class="cart">
                                        <div class="row ">
                                            <div class="col-md-12">
                                                <h3>Have A Coupon?</h3>
                                                <div class="dot" >
                                                    <input type="text" id="fname" name="fname" placeholder="Coupon Code"/>
                                                        <button >Apply</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </section> */}
            </div>

        </DashboardLayout >

    );
};


