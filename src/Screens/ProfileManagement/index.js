import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { courseBannerImage } from "../../Assets/images";
import {
  profileImg01,
  profilePic01,
  profilePic02,
  profilePic03,
  profilePic04,
  profilePic05,
  profilePic06,
  profilePic07,
  profilePic08,
  profilePic09,
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

export const ProfileManagement = () => {
  const [data, setData] = useState([]);
  const [editData, setEditData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  const [formData, setFormData] = useState({
    image: "",
  });
  const [showModal3, setShowModal3] = useState(false);
  const [showModal4, setShowModal4] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [inputValue, setInputValue] = useState("");
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

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const profilelist = () => {
    document.title = "Wisdom For Life | User Management";
    const LogoutData = localStorage.getItem("login");

    document.querySelector(".loaderBox")?.classList.remove("d-none");

    fetch(`${process.env.REACT_APP_API_URL}api/user/profile-view`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${LogoutData}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data?.data);
        setEditData(data?.data);
        document.querySelector(".loaderBox")?.classList.add("d-none");
        setData(data?.data);
      })
      .catch((error) => {
        document.querySelector(".loaderBox")?.classList.add("d-none");
        console.log(error);
      });
  };
  useEffect(() => {
    profilelist();
  }, []);

  const LogoutData = localStorage.getItem("login");
  const handleRedirect = () => {
    const LogoutData = localStorage.getItem("login");
    fetch(`${process.env.REACT_APP_API_URL}api/logout`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${LogoutData}`,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        localStorage.removeItem("login");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const filehandleChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileName = file;
      setEditData((prevData) => ({
        ...prevData,
        image: fileName,
      }));
    }
  };

  const handleEdit = (event) => {
    event.preventDefault();

    const formDataMethod = new FormData();
    for (const key in editData) {
      formDataMethod.append(key, editData[key]);
    }

    document.querySelector(".loaderBox").classList.remove("d-none");
    fetch(`${process.env.REACT_APP_API_URL}api/user/profile-edit`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${LogoutData}`,
      },
      body: formDataMethod,
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        document.querySelector(".loaderBox").classList.add("d-none");
        profilelist();
      })
      .catch((error) => {
        document.querySelector(".loaderBox").classList.add("d-none");
        console.log(error);
      });
  };
  const base_url = `${process.env.REACT_APP_API_URL}`;

  return (
    <DashboardLayout>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-xl-3 col-lg-4 col-md-10 mb-4">
            <div className="profile_left_part">
              <div className="text-center">
                <img
                  src={base_url + data?.image}
                  className="img-fluid user_profile_image"
                />
              </div>

              <div className="user_profile_details">
                <h6 className="user_profile_name ">{data?.name}</h6>

                <p className="user_profile_para">{data?.profile_description}</p>
              </div>

              <div className="">
                <div className="profile_course_details">
                  <span className="profile_course_number">03</span>
                  <span className="profile_course_enrolls">
                    Course Enrolled
                  </span>
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
                <Link className="profile_logout_btn " onClick={handleRedirect}>
                  <span>Log Out</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-xl-9 col-lg-8 col-md-10">
            <div className="profile_right_part">
              <h6 className="profile_edit_heading">EDIT</h6>

              <div className="mb-3">
                {/* <input type="text" className="input_name form-control" id="exampleFormControlInput1" placeholder="Your Name"/> */}
                <CustomInput
                  // label='Enter Email'
                  required
                  id="name"
                  type="email"
                  placeholder="Your Name"
                  labelclassName="mainLabel"
                  inputclassName="input_name form-control"
                  name="name"
                  value={editData?.name}
                  onChange={handleChange}
                />
              </div>

              <p className="profile_edit_para">
                This field can be seen by: <span>Everyone</span>
              </p>

              <div className="general_settings_main">
                <h6 className="profile_edit_heading mb-4">
                  General Account Settings
                </h6>

                <div className="mb-5">
                  {/* <input type="email" className="email_input form-control" id="" placeholder="Your Account Email"/> */}

                  <CustomInput
                    // label="Enter Email"
                    required
                    id="name"
                    type="email"
                    placeholder="Your Account Email"
                    labelclassName="mainLabel"
                    inputclassName="email_input emailInputField form-control"
                    name="email"
                    value={editData?.email}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <p className="profile_edit_para">
                    Change Password <span>(leave blank for no change)</span>
                  </p>
                </div>

                <div className="mb-3">
                  {/* <input
                    type="text"
                    className="input_name form-control"
                    id="password"
                    placeholder="New Password"
                  /> */}

                  <CustomInput
                    // label="Enter Email"
                    required
                    id="password"
                    type="passwaord"
                    placeholder="  New Password"
                    labelclassName="mainLabel"
                    inputclassName="input_name form-control"
                    name="password"
                    value={editData?.password}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <CustomInput
                    // label="Enter Email"
                    required
                    id="repeat_password"
                    type="passwaord"
                    placeholder="Repeat New Password"
                    labelclassName="mainLabel"
                    inputclassName="nput_name form-control"
                    name="change_password"
                    value={editData?.change_password}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="change_profile_photo_main">
                <h6 className="profile_edit_heading">Change Profile Photo</h6>

                <p className="profile_edit_para mb-3">
                  Select Profile Picture from the avatars given below
                  <span></span>
                </p>

                <div className="profile_picture_avatars mb-3">
                  <div>
                    <img src={profilePic01} />
                  </div>

                  <div>
                    <img src={profilePic02} />
                  </div>

                  <div>
                    <img src={profilePic03} />
                  </div>

                  <div>
                    <img src={profilePic04} />
                  </div>

                  <div>
                    <img src={profilePic01} />
                  </div>

                  <div>
                    <img src={profilePic05} />
                  </div>

                  <div>
                    <img src={profilePic06} />
                  </div>

                  <div>
                    <img src={profilePic07} />
                  </div>

                  <div>
                    <img src={profilePic08} />
                  </div>

                  <div>
                    <img src={profilePic09} />
                  </div>
                </div>

                <p className="profile_edit_para">
                  Click below to select a JPG, GIF or PNG format photo from your
                  computer and then click 'Upload Image' to proceed.
                  <span></span>
                </p>

                <div className="mb-3">
                  <input
                    className="form-control form-control-sm border-0"
                    id="formFileSm"
                    type="file"
                    name="formFile"
                    onChange={filehandleChange}
                  />
                </div>

                {/* <CustomInput
                    // label="Enter Email"
                    required
                    id="repeat_password"
                    type="passwaord"
                    placeholder="Repeat New Password"
                    labelclassName="mainLabel"
                    inputclassName="nput_name form-control"
                    name="repeat-new-password"
                    value={formData?.repeat_password}
                    onChange={handleChange}
                  /> */}

                <div>
                  <button className="profile_save_btn " onClick={handleEdit}>
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};
