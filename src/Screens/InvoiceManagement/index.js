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

// import Calendar from "@ericz1803/react-google-calendar";
// import { css } from "@emotion/react";

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

export const InvoiceManagement = () => {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [showModal4, setShowModal4] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [inputValue, setInputValue] = useState("");

  const navigate = useNavigate();
  console.log("data", data);
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

  // const filterData = data?.filter(item =>
  //     item?.name.toLowerCase().includes(inputValue.toLowerCase())
  // );

  // const indexOfLastItem = currentPage * itemsPerPage;
  // const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // const currentItems = filterData.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    document.title = "Wisdom For Life | User Management";
    const LogoutData = localStorage.getItem("login");
    document.querySelector(".loaderBox").classList.remove("d-none");
    fetch(`${process.env.REACT_APP_API_URL}api/user/invoice-listing`, {
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
  }, []);

  return (
    <DashboardLayout>
      <div className="container mx-auto ">
        <div className="row">
          <p className="invoice-title  text-center">Invoice</p>
          <div className=" mx-auto  justify-content-center col-md-12">
            <div class="invoice_table">
              <table className="table">
                <thead>
                  <tr className="th_cols">
                    <th
                      className=" table-sl  text-white table_serial_head"
                      scope="col"
                    >
                      <span className="   ">SL</span>
                    </th>
                    <th className="table-des text-white " scope="col">
                      Item Description
                    </th>
                    <th scope="col" className="price_th text-center">
                      Price
                    </th>
                    <th scope="col" className="text-center">
                      Qty
                    </th>
                    <th scope="col" className="text-center">
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data?.map((item, index) => (
                    <tr>
                      <td
                        scope="row"
                        className="table_serial_body font-weight-bold"
                      >
                        {index + 1}
                      </td>
                      <td className="  p-3  bg-white ">
                        {item?.item_description?.slice(0, 14)}
                      </td>
                      <td className="p-3 price_body text-center font-weight-bold">
                        ${item?.price}
                      </td>
                      <td className=" bg-white text-center font-weight-bold">
                        {item?.qty}
                      </td>
                      <td className="text-center font-weight-bold">
                        ${item?.total}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          {/* <div className="col-md-10 mx-auto ">
            <div className="table_end_details">
              <span className="table-subtotal">SubTotol:</span>
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
          </div> */}
          <div className="col-md-12 mx-auto ">
            <div className="invoice_total">
              <div className="invoice_total_item">
                <span>Sub Total</span>
                <span>$220.00</span>
              </div>
              <div className="invoice_total_item">
                <span>Tax</span>
                <span>0.00%</span>
              </div>
              <div className="invoice_total_item invoice_total_item_last">
                <span>Total:</span>
                <span>$220.00</span>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </DashboardLayout>
  );
};
