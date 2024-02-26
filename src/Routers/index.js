import { Route, Routes, BrowserRouter } from "react-router-dom";

import AdminLogin from "../Screens/Auth/Login";
import ForgetPassword from "../Screens/Auth/ForgetPassword";
import ForgetPassword2 from "../Screens/Auth/ForgetPassword2";
import ForgetPassword3 from "../Screens/Auth/ForgetPassword3";
import { Dashboard } from "../Screens/Dashboard";

// import { LeadListing } from "../Screens/LeadListing";
// import DepartDetails from "../Screens/LeadListing/DepartDetails";
// import { UnitListing } from "../Screens/UnitListing";
// import { AddLead } from "../Screens/LeadListing/AddLead";
// import { DetailListing } from "../Screens/LeadListing/DetailListig";

// Book Routes 

import { BookManagement } from "../Screens/BookManagement";
import { AddBook } from "../Screens/BookManagement/AddBook";
import { BookDetails } from "../Screens/BookManagement/BookDetail";
import { EditBook } from "../Screens/BookManagement/EditBook";

import { RecipentManagement } from "../Screens/RecipentManagement";
import { AddRecipent } from "../Screens/RecipentManagement/AddRecipent";

import { BookShareList } from "../Screens/BookShareList";
import { BookShareListDetail } from "../Screens/BookShareList/BookShareListDetail";

import { CategoryManagement } from "../Screens/CategoryManagement";
import { EditCategory } from "../Screens/CategoryManagement/EditCategory";
import { AddCategory } from "../Screens/CategoryManagement/AddCategory";
import { CategoryDetails } from "../Screens/CategoryManagement/CategoryDetails";

import { AdsManagement } from "../Screens/AdsManagement";
import { AddAds } from "../Screens/AdsManagement/AddAds";
import { EditAds } from "../Screens/AdsManagement/EditAds";

import { GenreManagement } from "../Screens/GenreManagement";
import { AddGenre } from "../Screens/GenreManagement/AddGenre";
import { GenreDetail } from "../Screens/GenreManagement/GenreDetail";
import { EditGenre } from "../Screens/GenreManagement/EditGenre";
import { CustomerSupport } from "../Screens/CustomerSupport";
import { CurrencyManagement } from "../Screens/CurrencyManagement";

// end

import { UserManagement } from "../Screens/UserManagement";
import { UserDetail } from "../Screens/UserManagement/UserDetail";
import { AddUser } from "../Screens/UserManagement/AddUser";
import { EditUser } from "../Screens/UserManagement/EditUser";


import Profile from "../Screens/Profile";
import EditProfile from "../Screens/Profile/EditProfile";
import ChangePassword from "../Screens/Profile/ChangePassword";
import { ProtectedRoutes } from "./ProtectedRoutes";
import Error from "../Screens/Error";


export default function AdminRouter() {
  return (
    <BrowserRouter basename="/WisdomForLife">
      <Routes>
        <Route path="/" element={<AdminLogin />} />
        <Route path="/login" element={<AdminLogin />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/forget-password2" element={<ForgetPassword2 />} />
        <Route path="/forget-password3" element={<ForgetPassword3 />} />

        <Route path="/dashboard" element={<ProtectedRoutes Components={Dashboard} />} />

        {/* <Route path="/role-management" element={<ProtectedRoutes Components={Roles} />} /> */}

        {/* <Route path="/lead-listing" element={<ProtectedRoutes Components={LeadListing} />} />
         <Route path="/lead-detail/:id" element={<ProtectedRoutes Components={DetailListing} />} />
        <Route path="/add-lead/" element={<ProtectedRoutes Components={AddLead} />} /> */}

        {/* book routes  */}
        <Route path="/book-management" element={<ProtectedRoutes Components={BookManagement} />} />
        <Route path="/add-book" element={<ProtectedRoutes Components={AddBook} />} />
        <Route path="/book-management/book-details/:slug" element={<ProtectedRoutes Components={BookDetails} />} />
        <Route path="/book-management/edit-book/:slug" element={<ProtectedRoutes Components={EditBook} />} />
        <Route path="/book-share-list" element={<ProtectedRoutes Components={BookShareList} />} />
        <Route path="/recipent-management" element={<ProtectedRoutes Components={RecipentManagement} />} />
        <Route path="/add-recipent" element={<ProtectedRoutes Components={AddRecipent} />} />

        <Route path="/category-management" element={<ProtectedRoutes Components={CategoryManagement} />} />
        <Route path="/add-category" element={<ProtectedRoutes Components={AddCategory} />} />
        <Route path="/category-management/category-details/:id" element={<ProtectedRoutes Components={CategoryDetails} />} />
        <Route path="/category-management/edit-category/:id" element={<ProtectedRoutes Components={EditCategory} />} />

        <Route path="/ads-management" element={<ProtectedRoutes Components={AdsManagement} />} />
        <Route path="/add-ads" element={<ProtectedRoutes Components={AddAds} />} />
        <Route path="/ads-management/edit-ads/:id" element={<ProtectedRoutes Components={EditAds} />} />

        <Route path="/genre-management" element={<ProtectedRoutes Components={GenreManagement} />} />
        <Route path="/add-genre" element={<ProtectedRoutes Components={AddGenre} />} />
        <Route path="/genre-management/genre-details/:id" element={<ProtectedRoutes Components={GenreDetail} />} />
        <Route path="/genre-management/edit-genre/:id" element={<ProtectedRoutes Components={EditGenre} />} />

        <Route path="/customer-support" element={<ProtectedRoutes Components={CustomerSupport} />} />
        <Route path="/currency-management" element={<ProtectedRoutes Components={CurrencyManagement} />} />



        {/* end  */}
        <Route path="/user-management" element={<ProtectedRoutes Components={UserManagement} />} />
        <Route path="/user-detail/:id" element={<ProtectedRoutes Components={UserDetail} />} />
        <Route path="/add-user/" element={<ProtectedRoutes Components={AddUser} />} />
        <Route path="/edit-user/:id" element={<ProtectedRoutes Components={EditUser} />} />

        {/* <Route path="/unit-listing" element={<ProtectedRoutes Components={UnitListing} />} /> */}
        {/* <Route path="/brand-listing" element={<ProtectedRoutes Components={BrandListing} />} /> */}
        {/* <Route path="/department-management/depart-details/:id" element={<ProtectedRoutes Components={DepartDetails} />} /> */}

        {/* <Route path="/target-listing" element={<ProtectedRoutes Components={UnitTarget} />} />
        <Route path="/target-listing/target-detail/:id" element={<ProtectedRoutes Components={TargetDetails} />} /> */}
        <Route path="/profile" element={<ProtectedRoutes Components={Profile} />} />
        <Route path="/profile/edit-profile" element={<ProtectedRoutes Components={EditProfile} />} />
        <Route path="/profile/change-password" element={<ChangePassword />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
