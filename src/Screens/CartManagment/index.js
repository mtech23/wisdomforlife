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
import {
  addToCart,
  incrementvariationQuantity, incrementQuantityCart,
  patient_name,
  patient_file,
  decrementQuantityCart,
  deleteitem,
  removeFromCart,
  updateCartItem,

} from "../../Components/store/action";

import Rectangle1 from "../../Assets/images/Rectangle1.png";
import Rectangle89 from "../../Assets/images/Rectangle89.png";
import Rectangle178 from "../../Assets/images/Rectangle178.png";
import Rectangle91 from "../../Assets/images/Rectangle91.png";

import { Dropdown } from "react-bootstrap";

import { DashboardLayout } from "../../Components/Layout/DashboardLayout";
import CustomTable from "../../Components/CustomTable";
import CustomModal from "../../Components/CustomModal";
import { useDispatch, useSelector } from "react-redux";
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
  const cartItems = useSelector((state) => state.cart.items);
  const [formData, setFormData] = useState({});
  const [showModal3, setShowModal3] = useState(false);
  const [showModal4, setShowModal4] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch()
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






  console.log("cartItems", cartItems)
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

  const baseurl = `${process.env.REACT_APP_API_URL}`;
  console.log("baseurl ,", baseurl)


  const quantity = cartItems.reduce((total, currentItem) => {
    return total + currentItem.category_id;
  }, 0);

  console.log("quantity:", quantity);

  const totalprice = cartItems.reduce((total, currentItem) => {
    return total + currentItem.course_price;
  }, 0);




  console.log("cartItems", cartItems)
  const handleSubmit = (event) => {
    const LogoutData = localStorage.getItem("login");
    event.preventDefault();

    const formDataMethod = new FormData();
       formDataMethod.append('products', JSON.stringify(cartItems));
      //  formDataMethod.append('quantity', 1);
    

    document.querySelector(".loaderBox").classList.remove("d-none");
    fetch(`${process.env.REACT_APP_API_URL}api/user/checkout`, {
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
        // notlist();
        // setUser(false);
      })
      .catch((error) => {
        document.querySelector(".loaderBox").classList.add("d-none");
        console.log(error);
      });
  };

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
                      {/* <tr className="  mb-5 ">
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
                        <td><p className="dollar">$99</p></td>{" "}
                      </tr>{" "} */}
                      {/* <tr className="  mb-5 ">
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
                      </tr> */}
                      {/* <tr className="  mb-5 ">
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
                      </tr> */}
                      {/* <tr className="  mb-5 ">
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
                      </tr> */}
                      {cartItems.map((items, index) => (
                        <tr className="  mb-5 ">
                          <td className="firsttd mx-auto ">
                            {" "}
                            <img
                              src={baseurl + items?.image}
                              alt=""
                              className="img-fluid"
                            />{" "}
                          </td>{" "}
                          <td className="secountsttd">
                            {" "}
                            <h5>
                              {" "}
                              {items?.course_name}{" "}
                            </h5>{" "}
                            <p className="cart-para">
                              {" "}
                              {items?.course_description.slice(0, 112)}{" "}
                            </p>{" "}
                            <button onClick={() => dispatch(deleteitem(items.id))}> Remove </button>{" "}
                          </td>{" "}
                          <td>
                            {" "}
                            <p className="dollar"> ${items?.course_price} </p>
                          </td>
                        </tr>
                      ))}
                    </table>{" "}
                  </div>
                </div>{" "}
              </div>{" "}
              <div className="col-md-4">
                <div className="cart">
                  <h3> Cart Summary </h3>{" "}
                  <div className="row">
                    <div className="col-md-6">
                      <p className="summary"> Subtotal  </p>{" "}
                    </div>{" "}
                    <div className="col-md-6">
                      <p className="sum"> ${totalprice} </p>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="row">
                    <div className="col-md-6">
                      <p className="summary"> Discount </p>{" "}
                    </div>{" "}
                    <div className="col-md-6">
                      <p className="sum"> $00 .0 </p>{" "}
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
                      <p className="sum"> ${totalprice} </p>{" "}
                    </div>{" "}
                  </div>{" "}
                  <hr />
                  <div className="row mx-auto">
                    <div className="col-md-12">
                      <div className="btns">
                        <button className="btnss" onClick={handleSubmit}> Checkout </button>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>
                </div>
               
              </div>
            </div>{" "}
          </div>{" "}
        </section>
        <section>

        </section>{" "}
      </div>
    </DashboardLayout>
  );
};
