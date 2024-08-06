import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { courseBannerImage } from "../../Assets/images";
import {
  eventsImg01,
  eventsImg02,
  eventsImg03,
  eventsImg04,
  eventsImg05,
  eventsImg06,
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
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";

export const EventsAndNews = () => {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
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

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const filterData = data?.filter((item) =>
    item?.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filterData.slice(indexOfFirstItem, indexOfLastItem);

  const base_url = `${process.env.REACT_APP_API_URL}`;

  console.log("base_url ", base_url);
  useEffect(() => {
    document.title = "Wisdom For Life | User Management";
    const LogoutData = localStorage.getItem("login");
    document.querySelector(".loaderBox").classList.remove("d-none");
    fetch(`${BASE_URL}api/admin/user`, {
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
        setData(data.users);
      })
      .catch((error) => {
        document.querySelector(".loaderBox").classList.add("d-none");
        console.log(error);
      });
  }, []);
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

  return (
    <DashboardLayout>
      <section className="news_and_event_page">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 mb-4">
              <h2 className="upcoming_events_heading">upcoming events</h2>
            </div>

            {data?.map((item) => (
              <div className="col-xl-4 col-md-6 mb-5">
                <div className="main_events_card">
                  <div className="event_card_img">
                    <img src={base_url + item?.image} className="w-100" />
                  </div>

                  <div className="event_card_body">
                    <div className="event_card_date">
                      <span>
                        <FontAwesomeIcon icon={faCalendarDays} />
                      </span>
                      <span className="ps-3">{item?.event_date}</span>
                    </div>

                    <div>
                      <h6 className="event_title">{item?.name}</h6>

                      <p className="event_para">{item?.short_description}</p>
                    </div>

                    <div>
                      <Link to={`/events-and-news/detail/${item.id}`}>
                        <span className="event_readmore_btn">Read More</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </DashboardLayout>
  );
};
