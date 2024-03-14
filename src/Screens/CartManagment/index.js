import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { courseBannerImage } from "../../Assets/images";
import { courseImg01, courseImg02, courseImg03, courseImg04, courseImg05, courseImg06 } from "../../Assets/images";
 
 
import Rectangle1 from '../../Assets/images/Rectangle1.png'
import Rectangle89 from '../../Assets/images/Rectangle89.png'
import Rectangle178 from '../../Assets/images/Rectangle178.png'
import Rectangle91 from '../../Assets/images/Rectangle91.png'

import { Dropdown } from "react-bootstrap";

import { DashboardLayout } from "../../Components/Layout/DashboardLayout";
import CustomTable from "../../Components/CustomTable";
import CustomModal from "../../Components/CustomModal";

import CustomPagination from "../../Components/CustomPagination"
import CustomInput from "../../Components/CustomInput";
import CustomButton from "../../Components/CustomButton";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


import "./style.css";
import { BASE_URL } from "../../Api/apiConfig";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faUserAlt, faPlay, faStar, faTable } from "@fortawesome/free-solid-svg-icons";

export const CartManagement = () => {

    const [data, setData] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const [showModal3, setShowModal3] = useState(false);
    const [showModal4, setShowModal4] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(8);
    const [inputValue, setInputValue] = useState('');

    const navigate = useNavigate();

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

    const filterData = data.filter(item =>
        item?.name.toLowerCase().includes(inputValue.toLowerCase())
    );

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filterData.slice(indexOfFirstItem, indexOfLastItem);



    useEffect(() => {
        document.title = 'Wisdom For Life | User Management';
        const LogoutData = localStorage.getItem('login');
        document.querySelector('.loaderBox').classList.remove("d-none");
        fetch(`${BASE_URL}api/admin/user`,
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
                setData(data.users);
            })
            .catch((error) => {
                document.querySelector('.loaderBox').classList.add("d-none");
                console.log(error)
            })


    }, []);




    return (

        <DashboardLayout>
            <div className="">





                <section>
                <div class="container">
                            <div class="row">

                                <div class="col-md-8">
                                    <div class="cart">
                                        <h3> My Cart </h3>
                                        <div class="table-responsive">
                                        <table class="table tableh">
                                            <tr className="  mb-5 ">
                                                <td className="firsttd mx-auto "><img src={Rectangle1} alt="" class="img-fluid" /></td>
                                                <td className="secountsttd" ><h5>Web Development Beginner - Master <br />| HTML, CSS.</h5>
                                                    <p className="cart-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut</p>
                                                    <button>Remove</button>
                                                </td>
                                                {/* <td><p class="dollar">$99</p></td> */}
                                            </tr>
                                            <tr className="  mb-5 ">
                                                <td className="firsttd mx-auto "><img src={Rectangle89} alt="" class="img-fluid" /></td>
                                                <td className="secountsttd" ><h5>Web Development Beginner - Master <br />| HTML, CSS.</h5>
                                                    <p className="cart-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut</p>
                                                    <button>Remove</button>
                                                </td>
                                                <td><p class="dollar">$99</p></td>
                                            </tr>
                                            

                                            <tr className="  mb-5 ">
                                                <td className="firsttd mx-auto "><img src={Rectangle91} alt="" class="img-fluid" /></td>
                                                <td className="secountsttd" ><h5>Web Development Beginner - Master <br />| HTML, CSS.</h5>
                                                    <p className="cart-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut</p>
                                                    <button>Remove</button>
                                                </td>
                                                <td><p class="dollar">$99</p></td>
                                            </tr>

                                            <tr className="  mb-5 ">
                                                <td className="firsttd mx-auto "><img src={Rectangle178} alt="" class="img-fluid" /></td>
                                                <td className="secountsttd" ><h5>Web Development Beginner - Master <br />| HTML, CSS.</h5>
                                                    <p className="cart-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut</p>
                                                    <button>Remove</button>
                                                </td>
                                                <td><p class="dollar">$99</p></td>
                                            </tr>
                                         
                                        </table>
                                        </div>
                                     
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="cart">
                                        <h3>Cart Summary</h3>
                                        <div class="row" >
                                            <div class="col-md-6">
                                                <p class="summary">Subtotal (4 Items)</p>
                                            </div>
                                            <div class="col-md-6">
                                                <p class="sum">$480</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <p class="summary">Discount</p>
                                            </div>
                                            <div class="col-md-6">
                                                <p class="sum">$35.2</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <p class="summary">Tax</p>
                                            </div>
                                            <div class="col-md-6">
                                                <p class="sum">$0.00</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <p class="summary">Total</p>
                                            </div>
                                            <div class="col-md-6">
                                                <p class="sum">$445</p>
                                            </div>
                                        </div>
                                        <hr />

                                        <div class="row mx-auto" >
                                            <div class="col-md-12">
                                                <div class="btn">
                                                    <button class="btn">Checkout</button>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div class="cart">
                                        <div class="row ">
                                            <div class="col-md-12">
                                                <h3>Have A Coupon?</h3>
                                                <div class="dot" >
                                                    <input type="text" id="fname" name="fname" placeholder="Coupon Code" />
                                                    <button >Apply</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                </section>
            </div>

        </DashboardLayout >

    );
};


