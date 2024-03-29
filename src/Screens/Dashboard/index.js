import { useState, useEffect } from "react";
import card1 from '../../Assets/images/card1.png'
import Card from 'react-bootstrap/Card';

import card2 from '../../Assets/images/card2.png'
import card3 from '../../Assets/images/card3.png'
import { DashboardLayout } from "./../../Components/Layout/DashboardLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleDown, faCheckSquare,
} from "@fortawesome/free-solid-svg-icons";
import { CChart } from "@coreui/react-chartjs";
import { SelectBox } from "../../Components/CustomSelect";
import { useApi } from "../../Api";

import man from '../../Assets/images/man.jpg'
import "./style.css";
import CustomButton from "../../Components/CustomButton";
import CustomInput from "../../Components/CustomInput";

export const Dashboard = () => {
  const [data, setData] = useState('');
  const [lead, setLead] = useState('');
  const [recived, setReceived] = useState('');
  const [amount, setAmount] = useState('');
  const { apiData: leadsAmountData, loading: dataLoading } = useApi('admin/leads-amount');
  const { apiData: leadsAmountMonthlyData, loading: leadLoading } = useApi('admin/leads-amount-monthly');
  const { apiData: leadsAmountReceivedData, loading: receivedLoading } = useApi('admin/leads-amount-received');
  const { apiData: leadsAmountReceivedMonthlyData, loading: AmountLoading } = useApi('admin/leads-amount-received-monthly');


  useEffect(() => {

    document.title = 'Wisdom For Life | Dashboard'
  }, []);


  useEffect(() => {
    setData(leadsAmountData)
    setLead(leadsAmountMonthlyData)
    setReceived(leadsAmountReceivedData)
    setAmount(leadsAmountReceivedMonthlyData)

  }, [leadsAmountData, leadsAmountMonthlyData, leadsAmountReceivedData, leadsAmountReceivedMonthlyData])


  return (
    <>
      <DashboardLayout>
        <div className="container-fluid">
          <div className="row mb-3">
            <div className="col-12">
              <div className="dashCard">
                <div className="row">
                  <div className="col-lg-9">
                    <div className="contentCard">
                      <div className="headerCard">
                        <h1 className="text-dark">Welcome Back Steve,</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        <p>lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                      </div>
                      <div className="mainBodyCard">
                        <div className="row">
                          <div className="col-lg-12">
                            <h3 className="text-dark">Day 1</h3>
                            <p>Here are your first day tasks!</p>
                          </div>
                          <div className="col-xl-4 mb-4 col-lg-6">
                            <div className="taskCard text-center shadow p-3 rounded-3">
                              <h4 className="text-dark">Task Name</h4>
                              <p>Lorem Ipsum is simply dummy text of the printing and typesetting </p>
                              <CustomButton text="Details" variant="primaryButton"></CustomButton>
                            </div>
                          </div>
                          <div className="col-xl-4 mb-4 col-lg-6">
                            <div className="taskCard text-center shadow p-3 rounded-3">
                              <h4 className="text-dark">Task Name</h4>
                              <p>Lorem Ipsum is simply dummy text of the printing and typesetting </p>
                              <CustomButton text="Details" variant="primaryButton"></CustomButton>
                            </div>
                          </div>
                          <div className="col-xl-4 mb-4 col-lg-6">
                            <div className="taskCard text-center shadow p-3 rounded-3">
                              <h4 className="text-dark">Task Name</h4>
                              <p>Lorem Ipsum is simply dummy text of the printing and typesetting </p>
                              <CustomButton text="Details" variant="primaryButton"></CustomButton>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>





                    <div className="ProfileSetup mt-4">
                      <div className="row">
                        {/* <div className="col-lg-12">
                        <span className="Profile mt-3">Profile Picture</span>
                        </div> */}
                        <div className="col-xl-6">
                          <span className="Profiles">     Profile Picture</span>
                          <div className="Profile d-flex align-items-baseline mt-3">

                              <span><img src={man} className="profileimg" /></span>
                              {/* <span><p className="upload">  Upload a photo</p></span> */}
                            
                              <div class="form-group uploadBtn">
                              <CustomInput
                                label="Upload a Photo"
                                id="photo"
                                type='file'
                                labelClass="form-control-file uploadButton text-center"
                                inputClass="uploadInput d-none"
                                />

                                <span className="upload_restriction">Min 300 x 300px .JPG oR .PNG</span>
                                
                              </div>

                          </div>





                        </div>
                        <div className="col-xl-6">
                          <div>
                            <div>
                              <CustomInput
                                label='Email Address'
                                required
                                id='userEmail'
                                type='email'
                                placeholder='Enter Your Email Address'
                                labelClass='mainLabel'
                                inputClass='mainInput'

                              />
                            </div>
                            <div>
                              <CustomInput
                                label='Phone No'
                                required
                                id='number'
                                type='number'
                                placeholder='Enter Phone'
                                labelClass='mainLabel text-white'
                                inputClass='mainInput customNumber'

                              />
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>

                    <div className="col-lg-12">

                      <div className="row mt-4">

                        <div className="col-xl-4 mb-4 col-lg-6">

                        <div className="card1">
                          <p className="intro">Introduction To Company</p>
                          <p className="para">Lorem Ipsum is simply dummy text of the printing and typesetting</p>
                        </div> 
                        </div>

                        <div className="col-xl-4 mb-4 col-lg-6">

                        <div className="card2">
                          <p className="intro">Introduction To Company</p>
                          <p className="para">Lorem Ipsum is simply dummy text of the printing and typesetting</p>
                        </div> 

                        </div>

                        <div className="col-xl-4 mb-4 col-lg-6">

                        <div className="card3">
                          <p className="intro">Introduction To Company</p>
                          <p className="para">Lorem Ipsum is simply dummy text of the printing and typesetting</p>
                        </div> 

                        </div>

                        
        

                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="progressCard">
                      <div className="shadow p-3 rounded-2 mb-5">
                        <h3 className="text-dark">Your Progress</h3>

                            <div className="progressbar_main">
                                <div className="progress_front my-3">
                                  <div className="progress_under">
                                  </div>
                                </div>

                                <span className="span_under_progressbar">75%</span>
                            </div>
                          

                          

                        <ul className="first_list">
                          <li><FontAwesomeIcon icon={faCheckSquare}></FontAwesomeIcon>Lorem Ipsum is simply </li>
                          <li><FontAwesomeIcon icon={faCheckSquare}></FontAwesomeIcon>Lorem Ipsum is simply </li>
                          <li><FontAwesomeIcon icon={faCheckSquare}></FontAwesomeIcon>Lorem Ipsum is simply </li>
                          <li><FontAwesomeIcon icon={faCheckSquare}></FontAwesomeIcon>Lorem Ipsum is simply </li>
                          <li><FontAwesomeIcon icon={faCheckSquare}></FontAwesomeIcon>Lorem Ipsum is simply </li>
                        </ul>
                      </div>
                      <div className="shadow p-3 rounded-2">
                        <h3 className="text-dark">Your Progress</h3>

                        <ul className="second_list">
                          <li><span className="numbering">10</span><span className="sample_text">Lorem Ipsum is simply</span></li>
                          <li><span className="numbering">08</span><span className="sample_text">Lorem Ipsum is simply</span></li>
                          <li><span className="numbering">15</span><span className="sample_text">Lorem Ipsum is simply</span></li>
                          <li><span className="numbering">03</span><span className="sample_text">Lorem Ipsum is simply</span></li>
                          <li><span className="numbering">21</span><span className="sample_text">Lorem Ipsum is simply</span></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>




            </div>




          </div>





        </div>
      </DashboardLayout>
    </>
  );
};
