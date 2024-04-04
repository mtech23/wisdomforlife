
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { courseBannerImage } from "../../Assets/images";
import { courseImg01, courseImg02, courseImg03, courseImg04, courseImg05, courseImg06 } from "../../Assets/images";

import { Dropdown } from "react-bootstrap";

import { DashboardLayout } from "../../Components/Layout/DashboardLayout";
import CustomTable from "../../Components/CustomTable";
import CustomModal from "../../Components/CustomModal";

import CustomPagination from "../../Components/CustomPagination"
import CustomInput from "../../Components/CustomInput";
import CustomButton from "../../Components/CustomButton";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

// import Calendar from "@ericz1803/react-google-calendar";
// import { css } from "@emotion/react";


import "./style.css";
import { BASE_URL } from "../../Api/apiConfig";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faUserAlt, faPlay, faStar, faTable } from "@fortawesome/free-solid-svg-icons";

export const InvoiceManagement = () => {



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

    const filterData = data?.filter(item =>
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
            <div className="container-fluid mx-auto ">


                <div className="row">
                    <p className="invoice-title  text-center  =">Invoice</p>
                    <div className=" mx-auto  justify-content-center  col-md-10">

                        <table className="table">
                            <thead>
                                <tr>
                                    <th className=" table-sl  text-white" scope="col">
                                        <span className="   ">SL</span>
                                    </th>
                                    <th className="table-des text-white " scope="col">Item Description</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Qty</th>
                                    <th scope="col">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td className="  p-3  bg-white " >Lorem Ipsum is simply dummy text of the printing and typesetting</td>
                                    <td className="  p-3  " >$50.00</td>
                                    <td className=" bg-white ">2</td>
                                    <td>$50.00</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td className="  p-3  bg-white "  >Lorem Ipsum is simply dummy text of the printing and typesetting</td>
                                    <td className="  p-3  " >$50.00</td>
                                    <td className="  p-3 bg-white " >2</td>
                                    <td className="  p-3  " >$50.00</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td className="  p-3  bg-white "  >Lorem Ipsum is simply dummy text of the printing and typesetting</td>
                                    <td className="  p-3  " >$50.00</td>
                                    <td className="  p-3 bg-white " >2</td>
                                    <td className="  p-3  " >$50.00</td>
                                </tr>
                                <tr>
                                    <th scope="row">4</th>
                                    <td className="  p-3  bg-white "  >Lorem Ipsum is simply dummy text of the printing and typesetting</td>
                                    <td className="  p-3  " >$50.00</td>
                                    <td className="  p-3 bg-white " >2</td>
                                    <td className="  p-3  " >$50.00</td>
                                </tr>
                                <tr>
                                    <th scope="row">5</th>
                                    <td className="  p-3  bg-white "  >Lorem Ipsum is simply dummy text of the printing and typesetting</td>
                                    <td className="  p-3  " >$50.00</td>
                                    <td className="  p-3 bg-white " >2</td>
                                    <td className="  p-3  " >$50.00</td>
                                </tr>
                                <tr>
                                    <th scope="row">6</th>
                                    <td className="  p-3  bg-white "  >Lorem Ipsum is simply dummy text of the printing and typesetting</td>
                                    <td className="  p-3  " >$50.00</td>
                                    <td className="  p-3 bg-white " >2</td>
                                    <td className="  p-3  " >$50.00</td>
                                </tr>
                                <tr>
                                    <th scope="row">7</th>
                                    <td className="  p-3  bg-white "  >Lorem Ipsum is simply dummy text of the printing and typesetting</td>
                                    <td className="  p-3  " >$50.00</td>
                                    <td className="  p-3 bg-white " >2</td>
                                    <td className="  p-3  " >$50.00</td>
                                </tr>
                                <tr>
                                    <th scope="row">8</th>
                                    <td className="  p-3  bg-white "  >Lorem Ipsum is simply dummy text of the printing and typesetting</td>
                                    <td className="  p-3  " >$50.00</td>
                                    <td className="  p-3 bg-white " >2</td>
                                    <td className="  p-3  " >$50.00</td>
                                </tr>
                                <tr>
                                    <th scope="row">9</th>
                                    <td className="  p-3  bg-white "  >Lorem Ipsum is simply dummy text of the printing and typesetting</td>
                                    <td className="  p-3  " >$50.00</td>
                                    <td className="  p-3 bg-white " >2</td>
                                    <td className="  p-3  " >$50.00</td>
                                </tr>
                            </tbody>

                        </table>

                    </div>
                    <div className="col-md-10 mx-auto ">
                        <div className="table_end_details">
                            <span  className="table-subtotal">SubTotol:</span>
                            <span className="table-subtotal">$323</span>
                        </div>
                        <div className="table_end_details">
                            <span className="table-subtotal"> Tax:</span>
                            <span className="table-subtotal">$323</span>
                        </div>
                        <div className="table_end_details-last text-white  mx-auto  justify-content-end  align-content-end ">
                            <span className="table-subtotal text-white ">Totol:</span>
                            <span className="table-subtotal text-white ">$323</span>
                        </div>
                    </div>
                    <div>

                    </div>

                </div>


            </div>

        </DashboardLayout >

    );
};


