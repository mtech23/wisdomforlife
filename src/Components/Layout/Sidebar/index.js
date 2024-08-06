import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";



import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBorderAll,
  faUser,
  faEye,
  faTasks,
  faMountainCity,
  faMoneyBill,
  faHeadphonesAlt,
  faHeadset
} from "@fortawesome/free-solid-svg-icons";
import {
  faMessage,
} from "@fortawesome/free-regular-svg-icons";

import "./style.css";
import { logo } from "../../../Assets/images";

export const Sidebar = (props) => {

  const location = useLocation()
  return (
    <div className={`sidebar ${props.sideClass}`} id="sidebar">
      <Link to={"/dashboard"} className="siteLogo text-center text-decoration-none">
        {/* <h1>Brad <span>Taylor</span></h1> */}
        <img src={logo} className="mw-100 logo_height_" />
      </Link>
      <ul className="list-unstyled">
        <li className="sidebar-li">
          <Link className={`sideLink ${location.pathname.includes('/dashboard') ? 'active' : ''}`} to="/dashboard">
            <span className="sideIcon">
              <FontAwesomeIcon icon={faBorderAll} />
            </span>
            <span className="sideLinkText">Dashboard</span>
          </Link>
        </li>
        {/* <li className="sidebar-li">
          <Link className={`sideLink ${location.pathname.includes('/user-management') ? 'active' : ''}`} to="/user-management">
            <span className="sideIcon">
              <FontAwesomeIcon icon={faBorderAll} />
            </span>
            <span className="sideLinkText">User Management</span>
          </Link>
        </li> */}
        <li className="sidebar-li">
          <Link className={`sideLink ${location.pathname.includes('/course-management') ? 'active' : ''}`} to="/course-management">
            <span className="sideIcon">
              <FontAwesomeIcon icon={faUser} />
            </span>
            <span className="sideLinkText">Courses </span>
          </Link>
        </li>
        {/* <li className="sidebar-li">
          <Link className={`sideLink ${location.pathname.includes('/my-course ') ? 'active' : ''}`} to="/my-course">
            <span className="sideIcon">
              <FontAwesomeIcon icon={faUser} />
            </span>
            <span className="sideLinkText">My Course </span>
          </Link>
        </li> */}
        <li className="sidebar-li">
          <Link className={`sideLink ${location.pathname.includes('/student-forum') ? 'active' : ''}`} to="/student-forum">
            <span className="sideIcon">
              <FontAwesomeIcon icon={faMessage} />
            </span>
            <span className="sideLinkText">Student Forum</span>
          </Link>
        </li>
        <li className="sidebar-li">
          <Link className={`sideLink ${location.pathname.includes('/personal-notes') ? 'active' : ''}`} to="/personal-notes">
            <span className="sideIcon">
              <FontAwesomeIcon icon={faMessage} />
            </span>
            <span className="sideLinkText">Personal Notes</span>
          </Link>
        </li>
        <li className="sidebar-li">
          <Link className={`sideLink ${location.pathname.includes('/events-and-news') ? 'active' : ''}`} to="/events-and-news">
            <span className="sideIcon">
              <FontAwesomeIcon icon={faMessage} />
            </span>
            <span className="sideLinkText">Events & News</span>
          </Link>
        </li>
        <li className="sidebar-li">
          <Link className={`sideLink ${location.pathname.includes('/calendar-management') ? 'active' : ''}`} to="/calendar-management">
            <span className="sideIcon">
              <FontAwesomeIcon icon={faEye} />
            </span>
            <span className="sideLinkText">Calendar</span>
          </Link>
        </li>


        <li className="sidebar-li">
          <Link className={`sideLink ${location.pathname.includes('/board-management') ? 'active' : ''}`} to="/board-management">
            <span className="sideIcon">
              <FontAwesomeIcon icon={faTasks} />
            </span>
            <span className="sideLinkText">Board Management</span>
          </Link>
        </li>




        <li className="sidebar-li">
          <Link className={`sideLink ${location.pathname.includes('/cart-management') ? 'active' : ''}`} to="/cart-management">
            <span className="sideIcon">
              <FontAwesomeIcon icon={faTasks} />
            </span>
            <span className="sideLinkText">Cart Management</span>
          </Link>
        </li>


        <li className="sidebar-li">
          <Link className={`sideLink ${location.pathname.includes('/invoice-management') ? 'active' : ''}`} to="/invoice-management">
            <span className="sideIcon">
              <FontAwesomeIcon icon={faTasks} />
            </span>
            <span className="sideLinkText">Invoice Management</span>
          </Link>
        </li>





        <li className="sidebar-li">
          <Link className={`sideLink ${location.pathname.includes('/profile-management') ? 'active' : ''}`} to="/profile-management">
            <span className="sideIcon">
              <FontAwesomeIcon icon={faTasks} />
            </span>
            <span className="sideLinkText">Profile Management</span>
          </Link>
        </li>
        {/* /invoice-management */}
      </ul>
    </div>
  );
};
