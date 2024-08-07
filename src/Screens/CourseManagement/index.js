import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { courseBannerImage } from "../../Assets/images";


import { Dropdown } from "react-bootstrap";

import { DashboardLayout } from "../../Components/Layout/DashboardLayout";
import "./style.css";
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
  const [catigorieslists, setCatigorieslists] = useState([]);

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

  const filterData = data?.filter((item) =>
    item?.course_name?.toLowerCase().includes(inputValue.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filterData?.slice(indexOfFirstItem, indexOfLastItem);





  const Catigorylist = () => {
    const LogoutData = localStorage.getItem("login");
    document.querySelector(".loaderBox").classList.remove("d-none");
    fetch(`${process.env.REACT_APP_API_URL}api/user/category-listing`, {
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
        setCatigorieslists(data?.data);
      })
      .catch((error) => {
        document.querySelector(".loaderBox").classList.add("d-none");
        console.log(error);
      });
  };
  useEffect(() => {
    Catigorylist();
  }, []);




  const [isLoading, setIsLoading] = useState(false);







  const fetchCourseList = (id) => {
    const LogoutData = localStorage.getItem("login");
    document.querySelector(".loaderBox").classList.remove("d-none");
    let apiUrl = `${process.env.REACT_APP_API_URL}api/user/course-listing`;
    if (id) {
      apiUrl += `/${id}`;
    }
    fetch(apiUrl, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: LogoutData ? `Bearer ${LogoutData}` : "", // Handle when LogoutData is not available
      },
    })
      .then((response) => response.json())
      .then((data) => {
        document.querySelector(".loaderBox").classList.add("d-none");
        setData(data?.data);
      })
      .catch((error) => {
        document.querySelector(".loaderBox").classList.add("d-none");
        console.log(error);
      });
  };


  useEffect(() => {
    fetchCourseList();
  }, []);




  useEffect(() => {
    fetchCourseList();
  }, []);

  const handleCategoryClick = (id) => {
    fetchCourseList(id);
  };







  return (
    <DashboardLayout>
      <div className="container">
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




              <div>
                <ul
                  role="tablist"
                  class="mb-3 mt-4 nav nav-tabs nav-justified align-items-center courses_tabs"
                >
                  {catigorieslists?.map((items, index) => (

                    <li class="nav-item" role="presentation">
                      <button onClick={() => handleCategoryClick(items.id)} class="nav-link  " id="justify-tab-example-tab-Trending" role="tab" type="button">{items?.name}</button>
                    </li>
                  ))}

                  <li className="course_searchBar">
                    <div className="personal_notes_search">
                      <div className="">
                        <input onChange={handleChange} className="search_input" placeholder="Search Notes" />
                      </div>
                      <div className="notes_search_icon">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                      </div>
                    </div>
                  </li>
                </ul>

                <div className="contw">
                  <div className="row justify-content-center">
                    {data?.map((item, index) => (
                      <div className=" col-lg-6 col-xl-4 col-md-6 mb-3  ">
                        <div className="course_card">
                          <div className="course_card_img">
                            <img
                              src={base_url + item?.image}
                              className="w-100"
                            />
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
                                  {item?.total_reviews} Reviews
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
                                {item?.course_name?.substring(0, 15)}
                                <br />
                                {item?.course_name?.substring(15)}
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

                </div>


              </div>


            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};
