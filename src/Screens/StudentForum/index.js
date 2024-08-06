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
  manImg,
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
  faThumbsUp,
  faThumbsDown,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";

export const StudentForum = () => {
  const [detail, setDetail] = useState("");
  const [formeditData, setFormeditData] = useState({});
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [showModal4, setShowModal4] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [inputValue, setInputValue] = useState("");

  const [getanswerid, setGetanswerid] = useState([]);

  const userimage = localStorage.getItem("userimage");
  const username = localStorage.getItem("username");
  console.log(username, userimage);
  const navigate = useNavigate();

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

  // const handleChange = (e) => {
  //     setInputValue(e.target.value);
  // }

  // const filterData = data?.filter(item =>
  //     item?.name.toLowerCase().includes(inputValue.toLowerCase())
  // );

  // const indexOfLastItem = currentPage * itemsPerPage;
  // const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // const currentItems = filterData.slice(indexOfFirstItem, indexOfLastItem);
  const base_url = `${process.env.REACT_APP_API_URL}`;

  const commentslist = () => {
    document.title = "Wisdom For Life | User Management";
    const LogoutData = localStorage.getItem("login");
    document.querySelector(".loaderBox").classList.remove("d-none");
    fetch(`${process.env.REACT_APP_API_URL}api/user/post-listing`, {
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
        setData(data?.data);
      })
      .catch((error) => {
        document.querySelector(".loaderBox").classList.add("d-none");
        console.log(error);
      });
  };

  useEffect(() => {
    commentslist();
  }, []);

  const coursedetail = (id) => {
    const LogoutData = localStorage.getItem("login");
    document.querySelector(".loaderBox").classList.remove("d-none");
    fetch(`${process.env.REACT_APP_API_URL}api/user/note-view/${id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${LogoutData}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        document.querySelector(".loaderBox").classList.add("d-none");
        setDetail(data?.data);
        setFormeditData(data?.data);
      })
      .catch((error) => {
        document.querySelector(".loaderBox").classList.add("d-none");
        console.log(error);
      });
  };
  const [formData, setFormData] = useState("");

  const LogoutData = localStorage.getItem("login");

  const handleSubmit = (event) => {
    event.preventDefault();

    const formDataMethod = new FormData();
    for (const key in formData) {
      formDataMethod.append(key, formData[key]);
    }

    document.querySelector(".loaderBox").classList.remove("d-none");
    // https://custom3.mystagingserver.site/Steve-Lentini/public/api/user/post-replay/1
    fetch(`${process.env.REACT_APP_API_URL}api/user/post-add-update`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${LogoutData}`,
      },
      body: formDataMethod,
    })
      .then((response) => response.json())
      .then((data) => {
        document.querySelector(".loaderBox").classList.add("d-none");
        // data?.status ? setSuccessStatus(data?.msg) : setSuccessStatus(data?.msg)
        // setStatus(data?.status)
        // setShowModal(true)
      })
      .catch((error) => {
        document.querySelector(".loaderBox").classList.add("d-none");
      });
  };

  const handlereplySubmit = (id) => {
    // event.preventDefault();

    const formDataMethod = new FormData();
    for (const key in formData) {
      formDataMethod.append(key, formData[key]);
    }

    document.querySelector(".loaderBox").classList.remove("d-none");

    fetch(`${process.env.REACT_APP_API_URL}api/user/post-replay/${id}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${LogoutData}`,
      },
      body: formDataMethod,
    })
      .then((response) => response.json())
      .then((data) => {
        // return  data.json();
        document.querySelector(".loaderBox").classList.add("d-none");
        commentslist();
        // data?.status ? setSuccessStatus(data?.msg) : setSuccessStatus(data?.msg)
        // setStatus(data?.status)
        // setShowModal(true)
      })
      .catch((error) => {
        document.querySelector(".loaderBox").classList.add("d-none");
      });
  };
  const handlechange = (event) => {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const pstunlike = async (id) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}api/user/post-dislike-undisLike/${id}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${LogoutData}`,
          },
        }
      );

      const data = await response.json();
      document.querySelector(".loaderBox").classList.add("d-none");
      commentslist();
    } catch (error) {
      console.error("Error fetching data:", error);
      // userData(0);
    }
  };

  // https://custom3.mystagingserver.site/Steve-Lentini/public/api/user/post-dislike-undisLike/3

  const like = async (id) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}api/user/post-like-unlike/${id}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${LogoutData}`,
          },
        }
      );

      const data = await response.json();
      document.querySelector(".loaderBox").classList.add("d-none");
      commentslist();
    } catch (error) {
      console.error("Error fetching data:", error);
      // userData(0);
    }
  };
  const replypostlike = async (id) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}api/user/post-replay-like-unlike/${id}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${LogoutData}`,
          },
        }
      );

      const data = await response.json();
      document.querySelector(".loaderBox").classList.add("d-none");
      commentslist();
    } catch (error) {
      console.error("Error fetching data:", error);
      // userData(0);
    }
  };

  const replypostdislike = async (id) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}api/user/post-replay-dislike-undisLike    /${id}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${LogoutData}`,
          },
        }
      );

      const data = await response.json();
      document.querySelector(".loaderBox").classList.add("d-none");
      commentslist();
    } catch (error) {
      console.error("Error fetching data:", error);
      // userData(0);
    }
  };

  return (
    <DashboardLayout>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 mb-4">
            <div className="main_category_search">
              <div className="category_btns">
                <button className="category_actionBtn">All</button>
                <button className="category_actionBtn">Newest</button>
                {/* <button className="category_actionBtn">Active</button>
                                <button className="category_actionBtn">Bountied</button>
                                <button className="category_actionBtn">More</button> */}
              </div>

              <div className="personal_notes_search">
                <div className="">
                  <input className="search_input" placeholder="Search Notes" />
                </div>

                <div className="notes_search_icon">
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-lg-4 col-xl-3 mb-4">
            <div className="most_helpful_user_main">
              <h6 className="most_useful_users_heading">Most Helpful Users</h6>

              {data?.map((item, index) => (
                <div
                  className="helpful_users_information"
                  onClick={() => coursedetail(item.id)}
                >
                  <div className="helpful_user_details">
                    <div className="helpful_user_img">
                      <img src={manImg} />
                    </div>

                    <div>
                      <h6 className="helpful_user_name">{item?.name}</h6>
                      <p className="helpful_user_likes">
                        {item?.post_likes} Likes
                      </p>
                    </div>
                  </div>

                  <div>
                    <span className="helpful_user_fancy_number">
                      {index + 1}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="recent_topics_main">
              <h6 className="most_useful_users_heading mb-4">Recent Topics</h6>

              <div className="recent_topic">
                <div className="recent_div1">
                  <span className="recent_topic_number">01</span>
                </div>

                <div className="recent_dev2">
                  <h6 className="topic_name_heading">Topic Name Here</h6>
                  <p className="recent_topic_para">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed{" "}
                  </p>
                </div>
              </div>

              <div className="recent_topic">
                <div className="recent_div1">
                  <span className="recent_topic_number">02</span>
                </div>

                <div className="recent_dev2">
                  <h6 className="topic_name_heading">Topic Name Here</h6>
                  <p className="recent_topic_para">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed{" "}
                  </p>
                </div>
              </div>

              <div className="recent_topic">
                <div className="recent_div1">
                  <span className="recent_topic_number">03</span>
                </div>

                <div className="recent_dev2">
                  <h6 className="topic_name_heading">Topic Name Here</h6>
                  <p className="recent_topic_para">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-lg-8 col-xl-9">
            <div className="main_student_forum">
              <div className="helpful_user_details mb-5 ">
                <div className="helpful_user_img">
                  <img src={base_url + userimage} />
                </div>

                <div>
                  <h6 className="helpful_user_name">{username}</h6>
                  <p className="helpful_user_likes mt-1">
                    <span>13-Feb-2024 </span>
                    <span className="circle_between"></span>
                    <span> Michael Anderson</span>
                  </p>
                </div>
              </div>

              <div className="main_input_field_for_user">
                <div className="input_with_icon">
                  <FontAwesomeIcon icon={faMessage} className="input_icon" />
                  <div className="w-100">
                    <input
                      type="text"
                      className="write_something_input_here form-control"
                      id=""
                      name="description"
                      onChange={handlechange}
                      placeholder="Write Something Here..."
                    />
                  </div>
                </div>

                <div className="message_post_actionBtn">
                  <button onClick={handleSubmit} className="post_actionBtn">
                    POST
                  </button>
                </div>
              </div>
            </div>

            {data?.map((items, index) => (
              <div className="main_student_forum">
                <div className="helpful_user_details">
                  <div className="helpful_user_img">
                    <img src={manImg} />
                  </div>

                  <div>
                    <h6 className="helpful_user_name">{items?.name}</h6>
                    <p className="helpful_user_likes mt-1">
                      <span>13-Feb-2024 </span>
                      <span className="circle_between"></span>
                      <span> Michael Anderson</span>
                    </p>
                  </div>
                </div>

                <div>
                  <p className="helpful_user_main_para">{items?.description}</p>
                </div>

                <div className="all_likes_dislikes_reponses">
                  <div className="like_dislike_main">
                    <div className="for_like">
                      <button
                        const
                        pstunlike
                        onClick={() => like(items?.id)}
                        className="main_like_icon"
                      >
                        <FontAwesomeIcon icon={faThumbsUp} />
                      </button>
                      <span className="like_icon_numbering">
                        +{items?.post_likes}
                      </span>
                    </div>

                    <div className="for_dislike">
                      <button
                        onClick={() => pstunlike(items?.id)}
                        className="main_dislike_icon"
                      >
                        <FontAwesomeIcon icon={faThumbsDown} />
                      </button>
                      <span className="dislike_icon_numbering">
                        {items?.post_unlikes}
                      </span>
                    </div>
                  </div>
                </div>

                {items?.post_replies?.map((response, index) => (
                  <div className="other_user_responses">
                    <div className="other_user_details_response">
                      <div className="helpful_user_details">
                        <div className="helpful_user_img">
                          <img src={manImg} />
                        </div>

                        <div>
                          <h6 className="helpful_user_name">
                            {response?.name}
                          </h6>
                          <p className="helpful_user_likes mt-1">
                            <span>Posted 33 Min Ago </span>
                            <span className="circle_between"></span>
                            <span> {response?.title}</span>
                          </p>
                        </div>
                      </div>

                      <div className="like_dislike_main">
                        <div className="for_like">
                          <button
                            onClick={() => replypostlike(response?.id)}
                            className="main_like_icon"
                          >
                            <FontAwesomeIcon icon={faThumbsUp} />
                          </button>
                          <span className="like_icon_numbering">
                            +{response?.post_replay_likes}
                          </span>
                        </div>

                        <div className="for_dislike">
                          <button
                            onClick={() => replypostdislike(response?.id)}
                            className="main_dislike_icon"
                          >
                            <FontAwesomeIcon icon={faThumbsDown} />
                          </button>
                          <span className="dislike_icon_numbering">
                            {response?.post_replay_unlikes}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <p className="helpful_user_main_para">
                        {response?.description}
                      </p>
                    </div>
                  </div>
                ))}

                <div className="main_input_field_for_user">
                  <div className="input_with_icon">
                    <FontAwesomeIcon icon={faMessage} className="input_icon" />
                    <div className="w-100">
                      <input
                        type="text"
                        className="write_something_input_here form-control"
                        id=""
                        name="description"
                        onChange={handlechange}
                        placeholder="Write Something Here..."
                      />
                    </div>
                  </div>

                  <div className="message_post_actionBtn">
                    <button
                      onClick={() => handlereplySubmit(items?.id)}
                      className="post_actionBtn"
                    >
                      POST
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};
