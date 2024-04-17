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
  faPlus,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

export const PersonalNotes = () => {
  const [addUser, setUser] = useState(false);
  const [status, setStatus] = useState();
  const [formData, setFormData] = useState({});

  const [detail, setDetail] = useState("");
  const [formeditData, setFormeditData] = useState({});
  const [EditUser, seteditUser] = useState(false);
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [detailnote, setdetailnote] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [showModal4, setShowModal4] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [inputValue, setInputValue] = useState("");
  const [editid, seteditid] = useState("");

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

  //   const filterData = data?.filter((item) =>
  //     item?.name.toLowerCase().includes(inputValue.toLowerCase())
  //   );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  //   const currentItems = filterData?.slice(indexOfFirstItem, indexOfLastItem);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleeditChange = (event) => {
    const { name, value } = event.target;
    setFormeditData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const LogoutData = localStorage.getItem("login");

  const notlist = () => {
    document.title = "Wisdom For Life | User Management";
    const LogoutData = localStorage.getItem("login");

    document.querySelector(".loaderBox")?.classList.remove("d-none");

    fetch(`${process.env.REACT_APP_API_URL}api/user/note-listing`, {
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
        // setEditData(data?.data)
        document.querySelector(".loaderBox")?.classList.add("d-none");
        setData(data?.data);
      })
      .catch((error) => {
        document.querySelector(".loaderBox")?.classList.add("d-none");
        console.log(error);
      });
  };

  const deletenote = (id) => {
    console.log("ids", id);

    const LogoutData = localStorage.getItem("login");

    document.querySelector(".loaderBox")?.classList.remove("d-none");

    fetch(`${process.env.REACT_APP_API_URL}api/user/note-delete/${id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${LogoutData}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // setData(data?.data);
        // setEditData(data?.data)
        document.querySelector(".loaderBox")?.classList.add("d-none");
        // setData(data?.data);
        notlist();
        notDeteil();
      })
      .catch((error) => {
        document.querySelector(".loaderBox")?.classList.add("d-none");
        console.log(error);
      });
  };

  const notDeteil = (id) => {
    const LogoutData = localStorage.getItem("login");

    document.querySelector(".loaderBox")?.classList.remove("d-none");

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
        setdetailnote(data?.data);
        // setEditData(data?.data)
        document.querySelector(".loaderBox")?.classList.add("d-none");
        setdetailnote(data?.data);
      })
      .catch((error) => {
        document.querySelector(".loaderBox")?.classList.add("d-none");
        console.log(error);
      });
  };

  useEffect(() => {
    notDeteil();
  }, []);

  useEffect(() => {
    notlist();
  }, []);

  const handleEditSubmit = (event) => {
    event.preventDefault();

    const formDataMethod = new FormData();
    for (const key in formeditData) {
      formDataMethod.append(key, formeditData[key]);
    }

    document.querySelector(".loaderBox").classList.remove("d-none");
    fetch(
      `${process.env.REACT_APP_API_URL}api/user/note-add-update/${detail?.id}`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${LogoutData}`,
        },
        body: formDataMethod,
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        document.querySelector(".loaderBox").classList.add("d-none");
        notlist();
        seteditUser(false);
      })
      .catch((error) => {
        document.querySelector(".loaderBox").classList.add("d-none");
        console.log(error);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formDataMethod = new FormData();
    for (const key in formData) {
      formDataMethod.append(key, formData[key]);
    }

    document.querySelector(".loaderBox").classList.remove("d-none");
    fetch(`${process.env.REACT_APP_API_URL}api/user/note-add-update`, {
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
        notlist();
        setUser(false);
      })
      .catch((error) => {
        document.querySelector(".loaderBox").classList.add("d-none");
        console.log(error);
      });
  };

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

 

  return (
    <DashboardLayout>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-lg-4 col-xl-3 mb-4">
            <div className="personal_notes_main">
              <div className="personal_notes_search">
                <div className="w-100">
                  <input className="search_input" placeholder="Search Notes" />
                </div>

                <div className="notes_search_icon">
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </div>
              </div>

              <div className="mynotes_main">
                <div className="mynotes_heading">
                  <h4>my notes</h4>
                  <div>
                    <button
                      className="mynotes_plus_icon"
                      onClick={() => setUser(true)}
                    >
                      <FontAwesomeIcon icon={faPlus} />
                    </button>
                  </div>
                </div>
              </div>

              <div className="all_personal_notes ">
                {data?.map((itm, id) => (
                  <div
                    className="user_personal_note mb-3 "
                    onClick={() => coursedetail(itm.id)}
                  >
                    <h6 className="personal_note_title">{itm?.title}</h6>

                    <p className="personal_note_content">{itm?.description}</p>

                    <p className="user_note_date">Today {itm?.created_at}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-lg-8 col-xl-8">
            <div className="personal_note_onright">
              <div className="personalnote_user_onright">
                <div>
                  <h6 className="personalnote_title_onright">
                    Personal Notes / Lorem ipsum dolor sit amet
                  </h6>
                  <span className="user_personalnote_date_onright">
                    Today 2:30 P.M
                  </span>
                </div>

                <div className="personalnote_top_actionBtn">
                  <button
                    className="personalnote_edit_btn"
                    onClick={() => {
                      seteditUser(true);
                      seteditid(detail?.id);
                    }}
                  >
                    <FontAwesomeIcon icon={faPenToSquare} />
                  </button>
                  <button
                    className="personalnote_trash_btn"
                    onClick={() => deletenote(detail?.id)}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-12 col-lg-10 col-xl-8 mx-auto">
                  <div className="current_personal_note">
                    <h2 className="current_personalnote_title text-center">
                      {detail?.title}
                    </h2>

                    <p className="current_personalnote_para">
                      {detail?.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <CustomModal
          show={addUser}
          close={() => {
            setUser(false);
          }}
        >
          <CustomInput
            label="Notes Title"
            type="text"
            placeholder="Add Title"
            required
            name="title"
            labelclass="mainLabel"
            inputclass="mainInput color-black"
            value={formData?.title}
            onChange={handleChange}
          />
          <label className="mainLabel">
            Add Description<span></span>
          </label>
          <textarea
            className="mainInput"
            type="text"
            placeholder="Notes Description"
            required
            name="description"
            labelclassName="mainLabel"
            value={formData?.description}
            onChange={handleChange}
          />

          <CustomButton
            variant="primaryButton"
            text="Add Notes"
            type="button"
            onClick={handleSubmit}
          />
        </CustomModal>

        <CustomModal
          show={EditUser}
          close={() => {
            seteditUser(false);
          }}
        >
          <CustomInput
            label="Notes Title"
            type="text"
            placeholder="Add Title"
            required
            name="title"
            labelclass="mainLabel"
            inputclass="mainInput color-black"
            value={formeditData?.title}
            onChange={handleeditChange}
          />
          <label className="mainLabel">
            Add Description<span></span>
          </label>
          <textarea
            className="mainInput"
            type="text"
            placeholder="Notes Description"
            required
            name="description"
            labelclassName="mainLabel"
            value={formeditData?.description}
            onChange={handleeditChange}
          />

          <CustomButton
            variant="primaryButton"
            text="Edit Notes"
            type="button"
            onClick={handleEditSubmit}
          />
        </CustomModal>
      </div>
    </DashboardLayout>
  );
};
