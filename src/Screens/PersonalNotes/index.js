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


import "./style.css";
import { BASE_URL } from "../../Api/apiConfig";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faUserAlt, faPlay, faStar, faTable, faPlus, faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

export const PersonalNotes = () => {

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
            <div className="container-fluid">

            <div className="row">

                <div className="col-sm-12 col-lg-4 col-xl-3 mb-4">

    <div className="personal_notes_main">

        <div className="personal_notes_search">

            <div className="w-100">
                <input className="search_input" placeholder="Search Notes"/>
            </div>

            <div className="notes_search_icon">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>

        </div>

        <div className="mynotes_main">

            <div className="mynotes_heading">
                <h4 >my notes</h4>
                <div>
                    <button className="mynotes_plus_icon">
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                </div>
            </div>

        </div>

        <div className="all_personal_notes">

            <div className="user_personal_note mb-3">
                <h6 className="personal_note_title">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</h6>

                <p className="personal_note_content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequ
                </p>

                <p className="user_note_date">Today 2:30 P.M</p>
            </div>

            <div className="user_personal_note mb-3">
                <h6 className="personal_note_title">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</h6>

                <p className="personal_note_content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequ
                </p>

                <p className="user_note_date">Today 2:30 P.M</p>
            </div>

        </div>


    </div>

                </div>

                <div className="col-sm-12 col-lg-8 col-xl-8">

                <div className="personal_note_onright">

                    <div className="personalnote_user_onright">
                        <div>
                            <h6 className="personalnote_title_onright">Personal Notes / Lorem ipsum dolor sit amet</h6>
                            <span className="user_personalnote_date_onright">Today 2:30 P.M</span>
                        </div>

                        <div className="personalnote_top_actionBtn">
                            <button className="personalnote_edit_btn"><FontAwesomeIcon icon={faPenToSquare} /></button>
                            <button className="personalnote_trash_btn"><FontAwesomeIcon icon={faTrash} /></button>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-12 col-lg-10 col-xl-8 mx-auto">

                            <div className="current_personal_note">

                            <h2 className="current_personalnote_title text-center">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                            </h2>

                            <p className="current_personalnote_para">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                            </p>

                            <p className="current_personalnote_para">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea vel vel
                            </p>

                            <p className="current_personalnote_para">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                            </p>

                            </div>

                        </div>
                    </div>

                </div>

                </div>

            </div>
                
            
                


            </div>

        </DashboardLayout >

    );
};


