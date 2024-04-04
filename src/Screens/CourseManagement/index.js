import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { courseBannerImage } from "../../Assets/images";
import {
  courseImg01,
  courseImg02,
  courseImg03,
  courseImg04,
  courseImg05,
  courseImg06,
} from "../../Assets/images";

import { Dropdown } from "react-bootstrap";

import { DashboardLayout } from "../../Components/Layout/DashboardLayout";
import CustomTable from "../../Components/CustomTable";
import CustomModal from "../../Components/CustomModal";

import CustomPagination from "../../Components/CustomPagination";
import CustomInput from "../../Components/CustomInput";
import CustomButton from "../../Components/CustomButton";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import "./style.css";
import { BASE_URL } from "../../Api/apiConfig";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUserAlt,
  faPlay,
  faStar,
  faTable,
} from "@fortawesome/free-solid-svg-icons";

export const CourseManagemet = () => {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [showModal4, setShowModal4] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [inputValue, setInputValue] = useState("");

  const navigate = useNavigate();


  const base_url = `${process.env.REACT_APP_API_URL}`;
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const hanldeRoute = () => {
    navigate("/add-user");
  };

  const inActive = () => {
    setShowModal(false);
    setShowModal2(true);
  };
  const ActiveMale = () => {
    setShowModal3(false);
    setShowModal4(true);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  // const filterData = data?.filter(item =>
  //     item?.name.toLowerCase().includes(inputValue.toLowerCase())
  // );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // const currentItems = filterData.slice(indexOfFirstItem, indexOfLastItem);

  const courselist = () => {
    document.title = "Wisdom For Life | User Management";
    const LogoutData = localStorage.getItem("login");
    document.querySelector(".loaderBox").classList.remove("d-none");
    fetch(`${process.env.REACT_APP_API_URL}api/user/course-listing`, {
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
    courselist();
  }, []);

  return (
    <DashboardLayout>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="course_main_content">
              <div className="course_top_banner text-center">
                <h2 className="course_main_title">
                  explore a world of courses
                </h2>

                <p className="course_main_para">
                  just for you start your journey now - learn & grow.
                </p>

                <div className="courses_info_details">
                  <div>
                    <p className="course_num m-0">1,500+</p>
                    <p className="course_num_title">Courses</p>
                  </div>

                  <div>
                    <p className="course_num m-0">200+</p>
                    <p className="course_num_title">Mentors</p>
                  </div>

                  <div>
                    <p className="course_num m-0">10,000+</p>
                    <p className="course_num_title">Students</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Tabs
                defaultActiveKey="Trending"
                id="justify-tab-example"
                className="mb-3 mt-4"
                justify
              >
                <Tab eventKey="Trending" title="Trending">
                  {/* <Link to="/"><FontAwesomeIcon icon={faUserAlt}></FontAwesomeIcon></Link> */}
                  <div className="row">

                      {data?.map((item, index) => (
                                            <div className="col-sm-10 col-lg-6 col-xl-4 mb-5  ">
                        <div className="course_card">
                          <div className="course_card_img">
                            <img src={base_url + item?.image} className="w-100" />
                          </div>

                          <div className="course_card_body">
                            <div className="course_ratings">
                              <div className="course_rating_detail border-0 p-0">
                                <span className="course_rating_icon">
                                  <FontAwesomeIcon icon={faPlay} />
                                </span>
                                <span className="course_rating_information">
                                  20 videos
                                </span>
                              </div>

                              <div className="course_rating_detail">
                                <span className="course_rating_icon">
                                  <FontAwesomeIcon icon={faStar} />
                                </span>
                                <span className="course_rating_information">
                                  1.1K Reviews
                                </span>
                              </div>

                              <div className="course_rating_detail border-0 p-0">
                                <span className="course_rating_icon">
                                  <FontAwesomeIcon icon={faTable} />
                                </span>
                                <span className="course_rating_information">
                                  8 Tests
                                </span>
                              </div>
                            </div>

                            <div>
                              <h4 className="course_card_title">
                                {/* web development <br /> beginner - master | HTML,
                                CSS. */}
                             {item?.course_name}
                             
                              </h4>

                              <span className="students_enrolled_details">
                                {item?.total_students} Students Enrolled.
                              </span>
                            </div>

                            <div className="course_card_body_footer">
                              <div>
                                <Link to={`enroll-now/${item?.id}`}>
                                  <button className="course_enroll_btn">
                                    Enroll
                                  </button>
                                </Link>
                              </div>
 
                              <div className="course_card_price">
                                <span>${item?.course_price}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        </div>
                      ))}

                  </div>
                </Tab>

                <Tab eventKey="IT & Software" title="IT & Software">
                  Tab content for Profile
                </Tab>

                <Tab eventKey="Design" title="Design">
                  Tab content for Loooonger Tab
                </Tab>

                <Tab eventKey="Marketing" title="Marketing">
                  Tab content for Contact
                </Tab>

                <Tab eventKey="Science" title="Science">
                  Tab content for Contact
                </Tab>

                <Tab eventKey="Language" title="Language">
                  Tab content for Contact
                </Tab>

                <Tab eventKey="Law" title="Law">
                  Tab content for Contact
                </Tab>
              </Tabs>

              {/* <div>
                                <div>
                                    <input placeholder="Search Courses"/>
                                </div>

                                <div>
                                    <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
                                </div>
                            </div> */}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};
