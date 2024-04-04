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

import Rectangle1 from "../../Assets/images/Rectangle1.png";
import Rectangle89 from "../../Assets/images/Rectangle89.png";
import Rectangle178 from "../../Assets/images/Rectangle178.png";
import Rectangle91 from "../../Assets/images/Rectangle91.png";

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

export const CartManagement = () => {
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

  return (
    <DashboardLayout>
      <div className="">
        <section>
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-lg-8">
                <div className="cart">
                  <h3> My Cart </h3>{" "}
                  <div className="table-responsive">
                    <table className="table tableh">
                      <tr className="  mb-5 ">
                        <td className="firsttd mx-auto ">
                          {" "}
                          <img src={Rectangle1} alt="" className="img-fluid" />{" "}
                        </td>{" "}
                        <td className="secountsttd">
                          {" "}
                          <h5>
                            {" "}
                            Web Development Beginner - Master <br /> | HTML,
                            CSS.{" "}
                          </h5>{" "}
                          <p className="cart-para">
                            {" "}
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do <br /> eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.Ut{" "}
                          </p>{" "}
                          <button> Remove </button>{" "}
                        </td>{" "}
                        {/* <td><p className="dollar">$99</p></td> */}{" "}
                      </tr>{" "}
                      <tr className="  mb-5 ">
                        <td className="firsttd mx-auto ">
                          {" "}
                          <img
                            src={Rectangle89}
                            alt=""
                            className="img-fluid"
                          />{" "}
                        </td>{" "}
                        <td className="secountsttd">
                          {" "}
                          <h5>
                            {" "}
                            Web Development Beginner - Master <br /> | HTML,
                            CSS.{" "}
                          </h5>{" "}
                          <p className="cart-para">
                            {" "}
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do <br /> eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.Ut{" "}
                          </p>{" "}
                          <button> Remove </button>{" "}
                        </td>{" "}
                        <td>
                          {" "}
                          <p className="dollar"> $99 </p>
                        </td>
                      </tr>
                      <tr className="  mb-5 ">
                        <td className="firsttd mx-auto ">
                          {" "}
                          <img
                            src={Rectangle91}
                            alt=""
                            className="img-fluid"
                          />{" "}
                        </td>{" "}
                        <td className="secountsttd">
                          {" "}
                          <h5>
                            {" "}
                            Web Development Beginner - Master <br /> | HTML,
                            CSS.{" "}
                          </h5>{" "}
                          <p className="cart-para">
                            {" "}
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do <br /> eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.Ut{" "}
                          </p>{" "}
                          <button> Remove </button>{" "}
                        </td>{" "}
                        <td>
                          {" "}
                          <p className="dollar"> $99 </p>
                        </td>
                      </tr>
                      <tr className="  mb-5 ">
                        <td className="firsttd mx-auto ">
                          {" "}
                          <img
                            src={Rectangle178}
                            alt=""
                            className="img-fluid"
                          />{" "}
                        </td>{" "}
                        <td className="secountsttd">
                          {" "}
                          <h5>
                            {" "}
                            Web Development Beginner - Master <br /> | HTML,
                            CSS.{" "}
                          </h5>{" "}
                          <p className="cart-para">
                            {" "}
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do <br /> eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.Ut{" "}
                          </p>{" "}
                          <button> Remove </button>{" "}
                        </td>{" "}
                        <td>
                          {" "}
                          <p className="dollar"> $99 </p>
                        </td>
                      </tr>
                    </table>{" "}
                  </div>
                </div>{" "}
              </div>{" "}
              <div className="col-md-4">
                <div className="cart">
                  <h3> Cart Summary </h3>{" "}
                  <div className="row">
                    <div className="col-md-6">
                      <p className="summary"> Subtotal(4 Items) </p>{" "}
                    </div>{" "}
                    <div className="col-md-6">
                      <p className="sum"> $480 </p>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="row">
                    <div className="col-md-6">
                      <p className="summary"> Discount </p>{" "}
                    </div>{" "}
                    <div className="col-md-6">
                      <p className="sum"> $35 .2 </p>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="row">
                    <div className="col-md-6">
                      <p className="summary"> Tax </p>{" "}
                    </div>{" "}
                    <div className="col-md-6">
                      <p className="sum"> $0 .00 </p>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="row">
                    <div className="col-md-6">
                      <p className="summary"> Total </p>{" "}
                    </div>{" "}
                    <div className="col-md-6">
                      <p className="sum"> $445 </p>{" "}
                    </div>{" "}
                  </div>{" "}
                  <hr />
                  <div className="row mx-auto">
                    <div className="col-md-12">
                      <div className="btn">
                        <button className="btn"> Checkout </button>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>
                </div>
                <div className="cart">
                  <div className="row ">
                    <div className="col-md-12">
                      <h3> Have A Coupon ? </h3>{" "}
                      <div className="dot">
                        <input
                          type="text"
                          id="fname"
                          name="fname"
                          placeholder="Coupon Code"
                        />
                        <button> Apply </button>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>
            </div>{" "}
          </div>{" "}
        </section>
        <section>
          <div className="container-fluid">
            <div className="conatiner">
              <div className="row">
                <div className="col-md-8">
                  <div className="cart">
                    <h3> My Cart </h3>
                    <table className="table">
                      <tr>
                        <td>
                          {" "}
                          <img
                            src={Rectangle1}
                            alt=""
                            className="img-fluid resimg"
                          />{" "}
                        </td>{" "}
                        <td>
                          {" "}
                          <h5 className="resh">
                            {" "}
                            Web Development Beginner - Master | HTML, CSS.{" "}
                          </h5>{" "}
                          <p className="res">
                            {" "}
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.Ut{" "}
                          </p>{" "}
                          <button> Remove </button>{" "}
                        </td>{" "}
                        <td>
                          {" "}
                          <p className="dollar"> $99 </p>
                        </td>
                      </tr>{" "}
                      <tr>
                        <td>
                          {" "}
                          <img
                            src={Rectangle89}
                            alt=""
                            className="img-fluid resimg"
                          />{" "}
                        </td>{" "}
                        <td>
                          {" "}
                          <h5 className="resh">
                            {" "}
                            Web Development Beginner - Master | HTML, CSS.{" "}
                          </h5>{" "}
                          <p className="res">
                            {" "}
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.Ut{" "}
                          </p>{" "}
                          <button> Remove </button>{" "}
                        </td>{" "}
                        <td>
                          {" "}
                          <p className="dollar"> $99 </p>
                        </td>
                      </tr>{" "}
                      <tr>
                        <td>
                          {" "}
                          <img
                            src={Rectangle91}
                            alt=""
                            className="img-fluid resimg"
                          />{" "}
                        </td>{" "}
                        <td>
                          {" "}
                          <h5 className="resh">
                            {" "}
                            Web Development Beginner - Master | HTML, CSS.{" "}
                          </h5>{" "}
                          <p className="res">
                            {" "}
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.Ut{" "}
                          </p>{" "}
                          <button> Remove </button>{" "}
                        </td>{" "}
                        <td>
                          {" "}
                          <p className="dollar"> $99 </p>
                        </td>
                      </tr>{" "}
                      <tr>
                        <div className="lastrow">
                          <td>
                            {" "}
                            <img
                              src={Rectangle178}
                              alt=""
                              className="img-fluid resimg"
                            />{" "}
                          </td>{" "}
                          <td>
                            {" "}
                            <h5 className="resh">
                              {" "}
                              Web Development Beginner - Master | HTML, CSS.{" "}
                            </h5>{" "}
                            <p className="res">
                              {" "}
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua.Ut{" "}
                            </p>{" "}
                            <button> Remove </button>{" "}
                          </td>{" "}
                          <td>
                            {" "}
                            <p className="dollar"> $99 </p>
                          </td>
                        </div>{" "}
                      </tr>{" "}
                    </table>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="col-md-4">
                  <div className="cart">
                    <h3> Cart Summary </h3>{" "}
                    <div className="row">
                      <div className="col-6 col-md-6">
                        <p className="summary"> Subtotal(4 Items) </p>{" "}
                      </div>{" "}
                      <div className=" col-6 col-md-6">
                        <p className="sum"> $480 </p>{" "}
                      </div>{" "}
                    </div>{" "}
                    <div className="row">
                      <div className=" col-6 col-md-6">
                        <p className="summary"> Discount </p>{" "}
                      </div>{" "}
                      <div className=" col-6 col-md-6">
                        <p className="sum"> $35 .2 </p>{" "}
                      </div>{" "}
                    </div>{" "}
                    <div className="row">
                      <div className=" col-6 col-md-6">
                        <p className="summary"> Tax </p>{" "}
                      </div>{" "}
                      <div className=" col-6 col-md-6">
                        <p className="sum"> $0 .00 </p>{" "}
                      </div>{" "}
                    </div>{" "}
                    <div className="row">
                      <div className="col-6 col-md-6">
                        <p className="summary"> Total </p>{" "}
                      </div>{" "}
                      <div className="col-6 col-md-6">
                        <p className="sum"> $445 </p>{" "}
                      </div>{" "}
                    </div>{" "}
                    <hr />
                    <div className="row mx-auto">
                      <div className="col-md-12">
                        <div className="btn">
                          <button className="btn"> Checkout </button>{" "}
                        </div>{" "}
                      </div>{" "}
                    </div>
                  </div>
                  <div className="cart">
                    <div className="row ">
                      <div className="col-md-12">
                        <h3> Have A Coupon ? </h3>{" "}
                        <div className="dot">
                          <input
                            type="text"
                            id="fname"
                            name="fname"
                            placeholder="Coupon Code"
                          />
                          <button> Apply </button>{" "}
                        </div>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
      </div>
    </DashboardLayout>
  );
};
