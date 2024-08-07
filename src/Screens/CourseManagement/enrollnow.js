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
  priceIcon,
  instructorIcon,
  durationIcon,
  lessonIcon,
  studentIcon,
  languageIcon,
  certificateIcon,
  instructorIconSecondary,
  languageIconSecondary,
  ratingStarIcon,
} from "../../Assets/images";
import { useDispatch, useSelector } from "react-redux";
import {
    addToCart,
    incrementvariationQuantity,
    incrementQuantityCart,
    patient_name,
    patient_file,
    decrementQuantityCart,
    removeFromCart,
    updateCartItem,
    deleteitem,
} from "../../Components/store/action";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//   import { fetchProducts, addToCart, incrementQuantity, decrementQuantity } from '../../store/action';
import { Alert, Dropdown } from "react-bootstrap";
import detailvideo from "../../Assets/images/coursedetailvideo.png";
import { DashboardLayout } from "../../Components/Layout/DashboardLayout";
import Star from "../../Assets/images/Star 1.png";
import Ellipse from "../../Assets/images/Ellipse 1.png";
import CustomTable from "../../Components/CustomTable";
import CustomModal from "../../Components/CustomModal";

import { useParams } from "react-router-dom";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import CustomPagination from "../../Components/CustomPagination";
import CustomInput from "../../Components/CustomInput";
import CustomButton from "../../Components/CustomButton";
// import Tab from 'react-bootstrap/Tab';
// import Tabs from 'react-bootstrap/Tabs';

import "./enroll.css";
import { BASE_URL } from "../../Api/apiConfig";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMagnifyingGlass,
    faUserAlt,
    faPlay,
    faStar,
    faTable,
    faChainSlash,
} from "@fortawesome/free-solid-svg-icons";

export const EnrollNow = () => {
    const LogoutData = localStorage.getItem("login");

    const notify = () => toast("Course added successfully");
    const quiznotify = () => toast("Quiz Completed successfully");
    // console.log("quiznotify" , quiznotify() )
    const [getanswerid, setGetanswerid] = useState([]);
    const [formData, setFormData] = useState({});
    const [data, setData] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const [showModal3, setShowModal3] = useState(false);
    const [showModal4, setShowModal4] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(8);
    const [inputValue, setInputValue] = useState("");

    const navigate = useNavigate();

    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);
    console.log("cartItems", cartItems);
    const categories = [
        { id: 1, name: "Category 1" },
        { id: 2, name: "Category 2" },
        { id: 3, name: "Category 3" },
    ];

    const courseLists = {
        1: [
            { id: 1, name: "Course 1A" },
            { id: 2, name: "Course 1B" },
        ],
        2: [
            { id: 3, name: "Course 2A" },
            { id: 4, name: "Course 2B" },
        ],
        3: [
            { id: 5, name: "Course 3A" },
            { id: 6, name: "Course 3B" },
        ],
    };

    const [activeCategory, setActiveCategory] = useState(null);

    const handleCategoryClick = (id) => {
        setActiveCategory(id);
    };

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

    const [items, setItems] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    const [quizindex, setquizIndex] = useState(10)
    const [answers, setAnswers] = useState({});

    const [detail, setDetail] = useState({});

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (detail && detail.course_quiz_questions_data) {
            setLoading(false);
        }
    }, [detail]);

 



    const [isOptionSelected, setIsOptionSelected] = useState(false);

    const handleOptionChange = (questionId, optionId) => {
        setSelectedOptions((prev) => ({
            ...prev,
            [questionId]: optionId,
        }));
        setIsOptionSelected(true); // Enable the Next/Submit button when an option is selected
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex < detail?.course_quiz_questions_data.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setIsOptionSelected(false); // Reset for the next question
        }
    };

    const handleSubmitQuiz = () => {
        // Implement the submit quiz functionality here
        console.log("Quiz submitted", selectedOptions);
    };
 
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
        const LogoutData = localStorage.getItem("login");
        document.querySelector(".loaderBox").classList.remove("d-none");
        fetch(`${process.env.REACT_APP_API_URL}api/user/course-view/${id}`, {
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
                setDetail(data?.data);
            })
            .catch((error) => {
                document.querySelector(".loaderBox").classList.add("d-none");
                console.log(error);
            });
    };

    useEffect(() => {
        coursedetail();
    }, []);

    const { id } = useParams();




    const [quizresponse, setQuizresponse] = useState()

    const [quizresponsestatus, setQuizresponsestatus] = useState(false)

    const handleSubmitquiz = () => {
        const quizData = [];
 
        detail?.course_quiz_questions_data?.forEach((item, index) => {
            const selectedOption = document.querySelector(
                `input[name="question_${index}"]:checked`
            );
            if (selectedOption) {
                quizData.push({
                    question_id: item.id, // Use item.id for question ID
                    option_id: selectedOption.value, // Use selected option value for option ID
                });
            }
        });

        const formDataMethod = new FormData();
        formDataMethod.append("quiz_data", JSON.stringify(quizData));

        // Show loader
        document.querySelector(".loaderBox").classList.remove("d-none");

        fetch(`${process.env.REACT_APP_API_URL}api/user/course-quiz-sumbit/${id}`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${LogoutData}`,
            },
            body: formDataMethod,
        })
            .then((response) => response.json())
            .then((data) => {
                // Hide loader
                document.querySelector(".loaderBox").classList.add("d-none");

                if (data?.status === true) {
                    // Handle successful response
                    quiznotify();
                    setQuizresponsestatus(data?.status)
                    setQuizresponse(data?.data);
                } else {
                    // Handle unsuccessful response
                    console.log("Quiz submission failed", data);
                }
            })
            .catch((error) => {
                // Hide loader and log error
                document.querySelector(".loaderBox").classList.add("d-none");
                console.log("Error submitting quiz", error);
            });
    };

 






    console.log("quizresponse", quizresponse)
 
    const [selectedOptions, setSelectedOptions] = useState({});
 

    return (
        <DashboardLayout>
            <div className="container-fluid">
                <section className="web">
                    {/* <div className="container-fluid"> */}
                    <div className="container">
                        <div className="row mx-auto ">
                            <div className="col-xl-7 col-md-7">
                                <h2 className="enroll-title  ">
                                    Web Development Beginner <br /> To Master || HTML, CSS, PHP
                                </h2>
                                <div className="enrollist d-flex text-black       text-center  mx-auto  ">
                                    <span>
                                        <i className="fa fa-user icon" aria-hidden="true"></i>
                                        <p>By Edward Norton</p>
                                    </span>
                                    <span>
                                        <i className="fa-solid fa-globe icon"></i>
                                        <p>Business</p>
                                    </span>

                  {/* <span className=" d-flex  mb-0 ">
                    <span className="fa fa-star checked star ">
                      <span className="fa fa-star checked star"></span>
                      <span className="fa fa-star checked star"></span>
                      <span className="fa fa-star checked star"></span>
                      <span className="fa fa-star checked star"></span>
                      <p>(3 Reviews)</p>
                    </span>
                  </span> */}
                </div>
              </div>
              <div className="col-xl-4 col-md-5">
                <img className="img-fluid" src={detailvideo} />
              </div>
            </div>
          </div>
        </section>
        <section className="overview ">
          <div className="container-fluid">
            <div className="container">
              <div className="row">
                <div className="col-xl-7 col-md-7">
                  <Tabs
                    defaultActiveKey="OverView"
                    // id="uncontrolled-tab-example"
                    className="mb-3 course_tabs"
                  >
                    <Tab eventKey="OverView" title="OverView">
                      <h3>Course Description</h3>
                      <p>{detail?.course_description} </p>
                    </Tab>
                    <Tab eventKey="Curriculum" title="Curriculum">
                      <h3>Curriculum</h3>
                    </Tab>
                    <Tab eventKey="Instructor" title="Instructor">
                      <h3>{detail?.instructor_detail?.name}</h3>
                      <p>{detail?.instructor_detail?.profile_description} </p>
                    </Tab>
                    <Tab eventKey="Reviews" title="Reviews">
                      <div class="rate">
                        <div class="container-fluid">
                          <div class="conatiner">
                            <div class="ratebg">
                              <div class="row justify-content-center">
                                <div class="col-12 col-sm-12 col-lg-12  mt-4">
                                  {detail?.course_review?.map(
                                    (items, index) => (
                                      <div className=" ">
                                        <div className="helpful_user_details">
                                          <div className="helpful_user_img">
                                            <img src={manImg} />
                                          </div>

                                                                                    <div>
                                                                                        <h6 className="helpful_user_name">
                                                                                            Lorem ipsum dolor sit amet
                                                                                        </h6>
                                                                                        <p className="helpful_user_likes mt-1">
                                                                                            <span>{items?.created_at} </span>
                                                                                            <span className="circle_between"></span>
                                                                                            <span>
                                                                                                {" "}
                                                                                                {items?.rating} Raiting
                                                                                            </span>
                                                                                        </p>
                                                                                    </div>
                                                                                </div>
                                                                                <div>
                                                                                    <p className="helpful_user_main_para">
                                                                                        {items?.review}
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        )
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Tab>

                                    







                                        {detail?.course_status === "Paid" && (
                                            <Tab eventKey="quiz" title="Attempt Quiz">
                                           




                                                {!quizresponse ? (
                                                    <>
                                                        <h3>Attempt Quiz</h3>

                                                        {detail?.course_quiz_questions_data.length > 0 && (
                                                            <div key={currentQuestionIndex}>
                                                                <div className=" ">
                                                                    <div className="questionclass mb-2 d-flex g-3 gap-2">
                                                                        <span className="d-flex">
                                                                            Question {currentQuestionIndex + 1}:{" "}
                                                                        </span>

                                                                        <span className="questionclass">
                                                                            {detail?.course_quiz_questions_data[currentQuestionIndex]?.question}
                                                                        </span>
                                                                    </div>
                                                                    <div>
                                                                        {detail?.course_quiz_questions_data[currentQuestionIndex]?.options?.map(
                                                                            (data, optionIndex) => (
                                                                                <p key={optionIndex} className="quiz_option">
                                                                                    <input
                                                                                        type="radio"
                                                                                        name={`question_${currentQuestionIndex}`}
                                                                                        value={data.id}
                                                                                        onChange={() =>
                                                                                            handleOptionChange(
                                                                                                detail?.course_quiz_questions_data[currentQuestionIndex]?.id,
                                                                                                data.id
                                                                                            )
                                                                                        }
                                                                                    />{" "}
                                                                                    {data?.text}
                                                                                </p>
                                                                            )
                                                                        )}
                                                                    </div>
                                                                </div>
                                                                {isOptionSelected && (
                                                                    currentQuestionIndex < detail?.course_quiz_questions_data.length - 1 ? (
                                                                        <button onClick={handleNextQuestion} id="quizsubmit">
                                                                            Next
                                                                        </button>
                                                                    ) : (
                                                                        <button onClick={handleSubmitquiz} id="quizsubmit">
                                                                            Submit
                                                                        </button>
                                                                    )
                                                                )}
                                                            </div>
                                                        )}
                                                    </>
                                                ) : (
                                                    quizresponse && (
                                                        <div className="quiz-result">
                                                            <h4>{quizresponse?.msg}</h4>
                                                            <div>
                                                                <p>Correct Answers: {quizresponse.quiz_right_questions}</p>
                                                                <p>Wrong Answers: {quizresponse.wrong_right_questions}</p>
                                                                <p>Score Ratio: {quizresponse.ratio}</p>
                                                            </div>
                                                        </div>
                                                    )
                                                )}
                                            





                                    </Tab>
                                        )}











                                </Tabs>



                            </div>

                            <div className="col-xl-4 col-md-5 ">
                                <div className="box">
                                    <h3>Course Includes:</h3>
                                    <div className="row align-items-center course_rows">
                                        <div className="col-6">
                                            <div class="text_with_icon">
                                                {/* <i className="fa-solid fa-money-bill-1-wave"></i> */}
                                                <img src={priceIcon} className="text_icon" alt="" />
                                                <p className="coursepara">Price:</p>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <p className="coursepara1">${detail?.course_price}</p>
                                        </div>
                                        {/* <hr /> */}
                                    </div>
                                    <div className="row align-items-center course_rows">
                                        <div className="col-6">
                                            <div class="text_with_icon">
                                                {/* <i className="fa fa-user" aria-hidden="true"></i> */}
                                                <img
                                                    src={instructorIcon}
                                                    className="text_icon"
                                                    alt=""
                                                />
                                                <p className="coursepara">Instructor:</p>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <p className="coursepara2">
                                                {detail?.instructor_detail?.name}
                                            </p>
                                        </div>
                                        {/* <hr /> */}
                                    </div>
                                    <div className="row align-items-center course_rows">
                                        <div className="col-6">
                                            <div class="text_with_icon">
                                                {/* <i className="fa-solid fa-clock"></i> */}
                                                <img
                                                    src={durationIcon}
                                                    className="text_icon"
                                                    alt=""
                                                />
                                                <p className="coursepara">Duration:</p>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <p className="coursepara2">{detail?.course_duration}</p>
                                        </div>
                                        {/* <hr /> */}
                                    </div>
                                    <div className="row align-items-center course_rows">
                                        <div className="col-6">
                                            <div class="text_with_icon">
                                                {/* <i className="fa-solid fa-gift"></i> */}
                                                <img src={lessonIcon} className="text_icon" alt="" />
                                                <p className="coursepara">Lessons:</p>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <p className="coursepara2">
                                                {detail?.instructor_detail?.total_lessons || 0}
                                            </p>
                                        </div>
                                        {/* <hr /> */}
                                    </div>
                                    <div className="row align-items-center course_rows">
                                        <div className="col-6">
                                            <div class="text_with_icon">
                                                {/* <i className="fa-solid fa-user-nurse"></i> */}
                                                <img src={studentIcon} className="text_icon" alt="" />
                                                <p className="coursepara">Students:</p>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <p className="coursepara2">229</p>
                                        </div>
                                        {/* <hr /> */}
                                    </div>
                                    <div className="row align-items-center course_rows">
                                        <div className="col-6">
                                            <div class="text_with_icon">
                                                {/* <i className="fa-solid fa-globe"></i> */}
                                                <img
                                                    src={languageIcon}
                                                    className="text_icon"
                                                    alt=""
                                                />
                                                <p className="coursepara">Language:</p>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <p className="coursepara2">English</p>
                                        </div>
                                        {/* <hr /> */}
                                    </div>
                                    <div className="row align-items-center course_rows">
                                        <div className="col-6">
                                            <div class="text_with_icon">
                                                {/* <i className="fa-solid fa-certificate"></i> */}
                                                <img
                                                    src={certificateIcon}
                                                    className="text_icon"
                                                    alt=""
                                                />
                                                <p className="coursepara">Certifications:</p>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <p className="coursepara2">Yes</p>
                                        </div>
                                    </div>
                                    <div className="enroll">
                                        <div className="row">
                                            <div className="col-md-12">
                                                {detail?.course_status === "Free" ? (
                                                    <button className="btn"> Enroll Now</button>
                                                ) : (
                                                    <button
                                                        className="btn1"
                                                        onClick={() => (
                                                            dispatch(addToCart(detail)), notify()
                                                        )}
                                                    >
                                                        {" "}
                                                        Add to Cart
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="enroll">
                                        <div className="row">
                                            <div className="col-md-12 ">
                                                {/* {detail.course_status === "Free" ? " " :        <button className="btn1"
                                                   

                                                        onClick={() => (dispatch(addToCart(detail)), notify())}
                                                    > Add to Cart</button>} */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </section>
            </div >
    <ToastContainer />
        </DashboardLayout >
    );
};

