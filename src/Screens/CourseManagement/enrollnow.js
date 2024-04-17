import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { courseBannerImage } from "../../Assets/images";
import { courseImg01, courseImg02, courseImg03, courseImg04, courseImg05, courseImg06, manImg } from "../../Assets/images";

import { Dropdown } from "react-bootstrap";
import detailvideo from '../../Assets/images/coursedetailvideo.png'
import { DashboardLayout } from "../../Components/Layout/DashboardLayout";
import Star from "../../Assets/images/Star 1.png";
import Ellipse from "../../Assets/images/Ellipse 1.png";
import CustomTable from "../../Components/CustomTable";
import CustomModal from "../../Components/CustomModal";


import { useParams } from 'react-router-dom'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import CustomPagination from "../../Components/CustomPagination"
import CustomInput from "../../Components/CustomInput";
import CustomButton from "../../Components/CustomButton";
// import Tab from 'react-bootstrap/Tab';
// import Tabs from 'react-bootstrap/Tabs';


import "./enroll.css";
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




    const categories = [
        { id: 1, name: 'Category 1' },
        { id: 2, name: 'Category 2' },
        { id: 3, name: 'Category 3' },
    ];

    const courseLists = {
        1: [{ id: 1, name: 'Course 1A' }, { id: 2, name: 'Course 1B' }],
        2: [{ id: 3, name: 'Course 2A' }, { id: 4, name: 'Course 2B' }],
        3: [{ id: 5, name: 'Course 3A' }, { id: 6, name: 'Course 3B' }],
    };

    const [activeCategory, setActiveCategory] = useState(null);

    const handleCategoryClick = (id) => {
        setActiveCategory(id);
    };

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

    // const indexOfLastItem = currentPage * itemsPerPage;
    // const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    // const currentItems = filterData.slice(indexOfFirstItem, indexOfLastItem);








    const [items, setItems] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const [detail, setDetail] = useState({});

    console.log("detail", detail)
    const handleItemClick = async (itemId) => {
        setSelectedItem(itemId);
        // Fetch detail note data based on the selected item ID
        try {
            const response = await fetch(`API_URL_TO_FETCH_DETAIL_NOTE/${itemId}`);
            const data = await response.json();

        } catch (error) {
            console.error('Error fetching detail note:', error);
        }
    };





    const coursedetail = () => {

        const LogoutData = localStorage.getItem('login');
        document.querySelector('.loaderBox').classList.remove("d-none");
        fetch(`${process.env.REACT_APP_API_URL}api/user/course-view/${id}`,
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


    useEffect(() => {
        coursedetail()
    }, [])


    const { id } = useParams();
    // console.log("detail?.course_quiz_questions_data" , detail?.course_quiz_questions_data?.Array.isArray[1])


    return (

        <DashboardLayout>
            <div className="container-fluid">


                {/* <section className="web">
                    <div className="container-fluid">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8">
                                    <h2>
                                        Web Development Beginner <br /> To Master || HTML, CSS, PHP
                                    </h2>

                                    <i className="fa fa-user" aria-hidden="true" style="color:#b6803a;"></i><p >By Edward Norton</p>
                                    <i className="fa-solid fa-globe" style="color:#b6803a; padding-left: 10px;"></i>
                                    <p >Business</p>
                                    <span className="fa fa-star checked" style="color: #F8B81F; padding-left: 10px;" ></span>
                                    <span className="fa fa-star checked" style="color: #F8B81F;"  ></span>
                                    <span className="fa fa-star checked" style="color: #F8B81F;" ></span>
                                    <span className="fa fa-star checked" style="color: #F8B81F;"></span>
                                    <span className="fa fa-star checked" style="color: #F8B81F; "></span><p >(3 Reviews)</p>
                                </div>
                                <div className="col-md-4">
                                    <img className="img-fluid"/ src="img/div.edublink-course-details-card-preview.png" />
                                </div>



                            </div>
                        </div>
                    </div>
                </section>
                <section className="overview">
                    <div className="container-fluid">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8">
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

                                <div className="col-md-4 ">
                                    <div className="box">
                                        <h3 style="padding:30px;">Course Includes:</h3>
                                        <div className="row" style="padding-left:20px;">
                                            <div className="col-md-6">
                                                <i className="fa-solid fa-money-bill-1-wave"></i><p style=" padding-left:15px; display:inline;" className="coursepara">Price:</p>
                                            </div>
                                            <div className="col-md-6">
                                                <p className="coursepara1">$30</p>
                                            </div>
                                            <hr />
                                        </div>
                                        <div className="row" style="padding-left:20px;">
                                            <div className="col-md-6">
                                                <i className="fa fa-user" aria-hidden="true"></i><p style=" padding-left:15px; display:inline;" className="coursepara">Instructor:</p>
                                            </div>
                                            <div className="col-md-6">
                                                <p className="coursepara2">Edward Norton</p>
                                            </div>
                                            <hr />
                                        </div>
                                        <div className="row" style="padding-left:20px;">
                                            <div className="col-md-6">
                                                <i className="fa-solid fa-clock"></i><p style=" padding-left:15px; display:inline;" className="coursepara">Duration:</p>
                                            </div>
                                            <div className="col-md-6">
                                                <p className="coursepara2">15 weeks</p>
                                            </div>
                                            <hr />
                                        </div>
                                        <div className="row" style="padding-left:20px;">
                                            <div className="col-md-6">
                                                <i className="fa-solid fa-gift"></i><p style=" padding-left:15px; display:inline;" className="coursepara">Lessons:</p>
                                            </div>
                                            <div className="col-md-6">
                                                <p className="coursepara2">11</p>
                                            </div>
                                            <hr />
                                        </div>
                                        <div className="row" style="padding-left:20px;">
                                            <div className="col-md-6">
                                                <i className="fa-solid fa-user-nurse"></i><p style=" padding-left:15px; display:inline;" className="coursepara">Students:</p>
                                            </div>
                                            <div className="col-md-6">
                                                <p className="coursepara2">229</p>
                                            </div>
                                            <hr />
                                        </div>
                                        <div className="row" style="padding-left:20px;">
                                            <div className="col-md-6">
                                                <i className="fa-solid fa-globe" ></i><p style=" padding-left:15px; display:inline;" className="coursepara">Language:</p>
                                            </div>
                                            <div className="col-md-6">
                                                <p className="coursepara2">English</p>
                                            </div>
                                            <hr />
                                        </div>
                                        <div className="row" style="padding-left:20px;">
                                            <div className="col-md-6">
                                                <i className="fa-solid fa-certificate"></i><p style=" padding-left:15px; display:inline;" className="coursepara">Certifications:</p>
                                            </div>
                                            <div className="col-md-6">
                                                <p className="coursepara2">Yes</p>
                                            </div>
                                        </div>
                                        <div className="row justify-content-center" style="padding: 20px;">

                                            <button className="btn"> Enroll Now</button>


                                        </div>
                                        <div className="row justify-content-center" style="padding: 20px;">

                                            <button className="btn1"> Add to Cart</button>

                                        </div>
                                        <div style="padding: 20px;">
                                            <h4>Share On:</h4>
                                            <i className="fa-brands fa-facebook socials" ></i>
                                            <i className="fa-brands fa-x-twitter socials"></i>
                                            <i className="fa-brands fa-linkedin-in socials" ></i>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </section> */}

                <section className="web">
                    <div className="container-fluid">

                        <div className="row mx-auto ">
                            <div className=" col-md-7">
                                <h2 className="enroll-title  ">
                                    Web Development Beginner <br /> To Master || HTML, CSS, PHP
                                </h2>
                                <div className="enrollist d-flex  gap-5 text-black       text-center  mx-auto  ">
                                    <span><i className="fa fa-user icon" aria-hidden="true" ></i><p >By Edward Norton</p>

                                    </span>
                                    <span>
                                        <i className="fa-solid fa-globe icon" ></i><p >Business</p>
                                    </span>

                                    <span className=" d-flex  mb-0 ">
                                        <span className="fa fa-star checked star " >
                                            <span className="fa fa-star checked star" ></span>
                                            <span className="fa fa-star checked star" ></span>
                                            <span className="fa fa-star checked star"></span>
                                            <span className="fa fa-star checked star" ></span><p >(3 Reviews)</p>
                                        </span>

                                    </span>

                                </div></div>
                            <div className="col-md-4">
                                <img className="img-fluid" src={detailvideo} />
                            </div>



                        </div>

                    </div>
                </section>
                <section className="overview ">
                    <div className="container-fluid">
                        <div className="container">
                            <div className="row">

                                <div className="col-md-7 ">

                                    <Tabs
                                        defaultActiveKey="profile"
                                        // id="uncontrolled-tab-example"
                                        className="mb-3"
                                    >
                                        <Tab eventKey="OverView" title="OverView">
                                            <h3>
                                                Course Description
                                            </h3>
                                            <p>
                                                {detail?.course_description} </p>


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
                                        </Tab>
                                        <Tab eventKey="Curriculum" title="Curriculum">
                                            Curriculum
                                        </Tab>
                                        <Tab eventKey="Instructor" title="Instructor" >
                                            <h3>
                                                {detail?.instructor_detail?.name}
                                            </h3>
                                            <p>
                                                {detail?.instructor_detail?.profile_description} </p>



                                        </Tab>
                                        <Tab eventKey="Reviews" title="Reviews" >
                                            <div class="rate">
                                                <div class="container-fluid">
                                                    <div class="conatiner">
                                                        <div class="ratebg">
                                                            <div class="row justify-content-center">
                                                                {/* <div class="col-sm-12 col-lg-3 my-auto ">
                                  <div class="star">
                                    <h2>4.5</h2>
                                    <img class="img-fluid" src={Star} />
                                  </div>
                                  <button>653 reviews</button> <br />
                                  <button class="rev">Add Review</button>
                                </div>

                                <div class="col-12 col-sm-12 col-lg-2 my-auto ">
                                  <div class="num">
                                    <p>5 </p>
                                    <i class="fa-solid fa-star numstar"></i>
                                    <div class="line"></div>
                                  </div>
                                  <div class="num">
                                    <p>4 </p>
                                    <i class="fa-solid fa-star numstar"></i>
                                    <div class="line1"></div>
                                  </div>
                                  <div class="num">
                                    <p>3 </p>
                                    <i class="fa-solid fa-star numstar"></i>
                                    <div class="line2"></div>
                                  </div>
                                  <div class="num">
                                    <p>2 </p>
                                    <i class="fa-solid fa-star numstar"></i>
                                    <div class="line3"></div>
                                  </div>
                                  <div class="num">
                                    <p>1 </p>
                                    <i class="fa-solid fa-star numstar"></i>
                                    <div class="line4"></div>
                                  </div>
                                </div> */}
                                                                <div class="col-12 col-sm-12 col-lg-12  mt-4">
                                                                    {detail?.course_review?.map((items, index) => (

                                                                        <div className=" ">

                                                                            <div className="helpful_user_details">
                                                                                <div className="helpful_user_img">
                                                                                    <img src={manImg} />
                                                                                </div>

                                                                                <div>
                                                                                    <h6 className="helpful_user_name">Lorem ipsum dolor sit amet</h6>
                                                                                    <p className="helpful_user_likes mt-1"><span>{items?.created_at} </span><span className="circle_between"></span><span> {items?.rating} Raiting</span></p>
                                                                                </div>

                                                                            </div>
                                                                            <div>
                                                                                <p className="helpful_user_main_para">
                                                                                    {items?.review}
                                                                                </p>
                                                                            </div>
                                                                        </div>))}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Tab>



                                {        <Tab eventKey="quiz" title="Attem Quiz" >

                                            <ul>
                                                <h3>Attempt Quiz</h3>
                                                {detail?.course_quiz_questions_data?.map((item, index) => (

                                                    <li className="    gap-3  ">
                                                        <span className="d-flex">
                                                            <h3> {index + 1}  {item?.question}</h3>
                                                        </span>
                                                        <p>

                                                            {item?.options?.map((data) => (
                                                                <p className="quiz_opction"> <input type="radio" name={`question_${index}`} /> {data?.text} </p>
                                                            ))} </p></li>
                                                ))}
                                            </ul>
                                            <button className="quiz_submit">Submit</button>



                                        </Tab>}
                                    </Tabs>


                                    {/* <button className="view">
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
                                    <hr /> */}


                                </div>

                                <div className="col-md-4 ">
                                    <div className="box">
                                        <h3 >Course Includes:</h3>
                                        <div className="row p-4">
                                            <div className="col-md-6">
                                                <i className="fa-solid fa-money-bill-1-wave"></i><p className="coursepara">Price:</p>
                                            </div>
                                            <div className="col-md-6">
                                                <p className="coursepara1">${detail?.course_price}</p>
                                            </div>
                                            <hr />
                                        </div>
                                        <div className="row p-4">
                                            <div className="col-md-6">
                                                <i className="fa fa-user" aria-hidden="true"></i><p className="coursepara">Instructor:</p>
                                            </div>
                                            <div className="col-md-6">
                                                <p className="coursepara2">{detail?.instructor_detail?.name}</p>
                                            </div>
                                            <hr />
                                        </div>
                                        <div className="row p-4">
                                            <div className="col-md-6">
                                                <i className="fa-solid fa-clock"></i><p className="coursepara">Duration:</p>
                                            </div>
                                            <div className="col-md-6">
                                                <p className="coursepara2">{detail?.course_duration}</p>
                                            </div>
                                            <hr />
                                        </div>
                                        <div className="row p-4">
                                            <div className="col-md-6">
                                                <i className="fa-solid fa-gift"></i><p className="coursepara">Lessons:</p>
                                            </div>
                                            <div className="col-md-6">
                                                <p className="coursepara2">{detail?.instructor_detail?.total_lessons || 0}</p>
                                            </div>
                                            <hr />
                                        </div>
                                        <div className="row p-4">
                                            <div className="col-md-6">
                                                <i className="fa-solid fa-user-nurse"></i><p className="coursepara">Students:</p>
                                            </div>
                                            <div className="col-md-6">
                                                <p className="coursepara2">229</p>
                                            </div>
                                            <hr />
                                        </div>
                                        <div className="row p-4">
                                            <div className="col-md-6">
                                                <i className="fa-solid fa-globe" ></i><p className="coursepara">Language:</p>
                                            </div>
                                            <div className="col-md-6">
                                                <p className="coursepara2">English</p>
                                            </div>
                                            <hr />
                                        </div>
                                        <div className="row p-4">
                                            <div className="col-md-6">
                                                <i className="fa-solid fa-certificate"></i><p className="coursepara">Certifications:</p>
                                            </div>
                                            <div className="col-md-6">
                                                <p className="coursepara2">Yes</p>
                                            </div>
                                        </div>
                                        <div className="enroll" >
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <button className="btn"> Enroll Now</button>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="enroll" >
                                            <div className="row" >
                                                <div className="col-md-12 ">
                                                    <button className="btn1"> Add to Cart</button>
                                                </div>

                                            </div>
                                        </div>
                                        {/* <div className="row p-3">
                                            <div className="col-md-12">

                                                <h4>Share On:</h4>
                                                <i className="fa-brands fa-facebook"></i>
 
                                                <i className="fa-brands fa-x-twitter socials"></i>
                                                <i className="fa-brands fa-linkedin-in socials" ></i>

                                            </div>
                                        </div> */}

                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                {/* <section>
                    <div className="container-fluid">
                        <div className="conatiner">
                            <div className="row">

                                <div className="col-md-8">
                                    <div className="cart">
                                        <h3> My Cart </h3>
                                        <table className="table">
                                            <tr>
                                                <td><img src="image/Rectangle 85.png" alt="" className="img-fluid" /></td>
                                                <td ><h5>Web Development Beginner - Master <br />| HTML, CSS.</h5>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut</p>
                                                    <button>Remove</button>
                                                </td>
                                                <td><p className="dollar">$99</p></td>
                                            </tr>
                                            <tr>
                                                <td ><img src="image/Rectangle 89.png" alt="" className="img-fluid" /></td>
                                                <td ><h5 >Web Development Beginner - Master <br />| HTML, CSS.</h5>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut</p>
                                                    <button>Remove</button>
                                                </td>
                                                <td><p className="dollar" >$99</p></td>
                                            </tr>
                                            <tr>
                                                <td ><img src="image/Rectangle 91.png" alt="" className="img-fluid" /></td>
                                                <td ><h5 >Web Development Beginner - Master <br />| HTML, CSS.</h5>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut</p>
                                                    <button>Remove</button>
                                                </td>
                                                <td><p className="dollar" >$99</p></td>
                                            </tr>
                                            <tr>
                                                <div className="lastrow">
                                                    <td ><img src="image/Rectangle 178.png" alt="" className="img-fluid" /></td>
                                                    <td ><h5>Web Development Beginner - Master <br />| HTML, CSS.</h5>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut</p>
                                                        <button>Remove</button>
                                                    </td>
                                                    <td><p className="dollar" >$99</p></td>
                                                </div>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="cart">
                                        <h3>Cart Summary</h3>
                                        <div className="row" >
                                            <div className="col-md-6">
                                                <p className="summary">Subtotal (4 Items)</p>
                                            </div>
                                            <div className="col-md-6">
                                                <p className="sum">$480</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <p className="summary">Discount</p>
                                            </div>
                                            <div className="col-md-6">
                                                <p className="sum">$35.2</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <p className="summary">Tax</p>
                                            </div>
                                            <div className="col-md-6">
                                                <p className="sum">$0.00</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <p className="summary">Total</p>
                                            </div>
                                            <div className="col-md-6">
                                                <p className="sum">$445</p>
                                            </div>
                                        </div>
                                        <hr/>

                                            <div className="row mx-auto" >
                                                <div className="col-md-12">
                                                    <div className="btn">
                                                        <button className="btn">Checkout</button>
                                                    </div>
                                                </div>
                                            </div>

                                    </div>

                                    <div className="cart">
                                        <div className="row ">
                                            <div className="col-md-12">
                                                <h3>Have A Coupon?</h3>
                                                <div className="dot" >
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


