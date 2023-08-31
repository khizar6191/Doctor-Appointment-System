import React from 'react';
import '../components/animations.css';
import '../components/main.css';
import '../components/background.css';
import '../components/admin.css';

import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { Link, json } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


function Dashboard() {
    const username = 'John Doe'; 
    const useremail = 'john@example.com'; 
    const doctorrow = { num_rows: 10 }; 
    const patientrow = { num_rows: 20 }; 
    const appointmentrow = { num_rows: 5 }; 
    const schedulerow = { num_rows: 8 }; 


const[ patient, setPatient ]=useState(null);

useEffect(()=>{

 //const userid=JSON.parse(localStorage.getItem("loggedUser")).user_id_;
    //       alert(userid)
    try {
        const storedUser = JSON.parse(localStorage.getItem("loggedUser"));
    
        if (storedUser && storedUser.id_) {
          const userid = storedUser.id_; 
          fetch("http://localhost:8080/getPatientByUId?user_id_="+userid)
            .then(resp => resp.json())
            .then((obj) => {
              console.log("paitient name"+obj.lname_);
              localStorage.setItem("loggedPatient", JSON.stringify(obj));
              setPatient(obj);
            })
            .catch(error => {
              console.error("Error fetching patient data:", error);
            });
        } else {
          console.log("User data not found in localStorage or does not have id_ property");
        }
      } catch (error) {
        console.error("Error parsing user data:", error);
      }
    }, []);
    const navigate=useNavigate();
    const setStorage=(e)=>{

        localStorage.setItem("doctorid",e);
        
    }
    
    
    
    
    
    const [doctors, setDoctors] = useState([]);
    const [selectedDate, setSelectedDate] = useState(new Date()); 
const [selectedLocation, setSelectedLocation] = useState('');
const [selectedSpeciality, setSelectedSpeciality] = useState('');
const [info, setInfo] = useState([]); 
const [info1, setInfo1] = useState([]); 

const mystate = useSelector((state)=>state.logged);
console.log(mystate)
const handleFormSubmit = (event) => {
    event.preventDefault(); 
// Inside the handleFormSubmit function
if (selectedLocation) {
    fetch(`http://localhost:8080/getDocByLId?location_id_=${selectedLocation}`)
      .then(resp => resp.json())
      .then(data => {
        setInfo(data);
        console.log(info);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  } 
  
  
  
  // Rendering part
 
    }  
  

    return (
        <div className=" dashboard-container">
            <div className="menu" >
            
            <table className="menu-container"  border="0">
        <tr>
            <td style={{ padding: '10px' }} colSpan="2">
                <table border="0" className="profile-container">
                    <tr>
                        <td width="30%" style={{ paddingLeft: '20px' }}>
                            <img src="../img/user.png" alt="" width="100%" style={{ borderRadius: '50%' }} />
                        </td>
                        <td style={{ padding: '0px', margin: '0px' }}>
                            <p className="profile-title">{patient && patient.fname_}..</p>
                            <p className="profile-subtitle">{patient && patient.email_} </p>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <a href="/logout"><input type="button" value="Log out" className="logout-btn btn-primary-soft btn" /></a>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        
        <tr className="menu-row">
            <td className="menu-btn menu-icon-home menu-active menu-icon-home-active">
                <a href="/Phame" className="non-style-link-menu non-style-link-menu-active">
                    <div><p className="menu-text">Home</p></div>
                </a>
            </td>
        </tr>
        <tr className="menu-row">
            <td className="menu-btn menu-icon-doctor">
            
                <Link to="/Phame/vsp" className="non-style-link-menu">
                    <div><p className="menu-text">All Doctors</p></div>
                </Link>
            </td>
        </tr>
        
        <tr className="menu-row">
            <td className="menu-btn menu-icon-session">
                <a href="/Phame/viewAllAppoinment" className="non-style-link-menu">
                    <div><p className="menu-text">MY Appointments</p></div>
                </a>
            </td>
        </tr>
      
        <tr className="menu-row">
            <td className="menu-btn menu-icon-settings">
                <a href="#" className="non-style-link-menu">
                    <div><p className="menu-text">Settings</p></div>
                </a>
            </td>
        </tr>
        {/* Other menu rows */}
    </table>
    
            </div>
           
            <div></div>
           
            <div className="dash-body"  style={{ marginTop: '15px'}}>
                <table style={{ borderSpacing: 0, margin: 0, padding: 0, width: '100%' }}>
                    <tbody>
                        <tr>
                            <td colSpan="1" className="nav-bar">
                                <p style={{ fontSize: '23px', paddingLeft: '12px', fontWeight: 600, marginLeft: '20px' }}>Home</p>
                            </td>
                            <td width="25%">
                                {/* Empty column */}
                            </td>
                            <td width="15%">
                                <p style={{ fontSize: '14px', color: 'rgb(119, 119, 119)', padding: 0, margin: 0, textAlign: 'right' }}>
                                    Today's Date
                                </p>
                                <p className="heading-sub12" style={{ padding: 0, margin: 0 }}>
                                    
                                    {/* Date */}
                                </p>
                            </td>
                            <td width="10%">
                                <button className="btn-label" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><img src="../img/calendar.svg" width="100%" alt="Calendar" /></button>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="4">
                                <center>
                                    <table className="filter-container doctor-header patient-header" style={{ border: 'none', width: '95%' }} border="0">
                                        <tr>
                                            <td>
                                               {/* <h3>Welcome!</h3> */}
                                                <h1><p>Welcome {patient && patient.fname_} {patient && patient.lname_}</p></h1>
                                                <p>Haven't any idea about doctors? No problem, let's jump to{' '}
                                                    <a href="#" className="non-style-link"/>
                                                        <b>"All Doctors"</b>
                                                   
                                                   
                                                    <br />
                                                    View your appointments.
                                                    <br />
                                                        <br /><br />
                                                </p>
                                                <h3>Channel a Doctor Here</h3>
                                               {/* <form action="" method="post" style={{ display: 'flex' }}>
                                                    <input type="search" name="search" className="input-text" placeholder="Search Doctor and We will Find The Session Available" list="doctors" style={{ width: '45%' }} />&nbsp;&nbsp;*/}
                                                     <form onSubmit={handleFormSubmit}>
                                                   <select class="form-select" value={selectedLocation} onChange={(event) => setSelectedLocation(event.target.value)}>
                                                        <option value="select">Select Area</option>
                                                        <option value="1">Pimpri Chinchwad</option>
                                                        <option value="2">Viman Nagar</option>
                                                        <option value="3">Baner</option>
                                                        <option value="4">Koregoan Park</option>
                                                        <option value="5">Hadapsar</option>
                                                        <option value="6">Kothrud</option>
                                                        <option value="7">kharadi</option>
                                                        <option value="8">Hinjewadi</option>
                                                        <option value="9">Shivaji Nagar</option>
                                                        <option value="10">Deccan</option>
                                                </select>
                                              
                                                    <input type="Submit" value="Search" className="login-btn btn-primary btn" style={{ paddingLeft: '25px', paddingRight: '25px', paddingTop: '10px', paddingBottom: '10px' ,float:'right'}} />
                                                </form>
                                               
                                                <br />
                                                <br />
                                            </td>
                                        </tr>
                                    </table>
                                </center>
                            </td>
                        </tr>
                        <tr>
                        <td colSpan="4">
                                <div  className="filter-container" style={{ border: 'none',backgroundColor: 'lightgray', textAlign: 'center'  }} border="0">
                                <h1>Doctor List</h1>
                                <div style={{ margin: '20px' }} className="table-responsive">
                                <table className="table table-striped table-bordered">
    <thead className="table-primary">
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Experience</th>
            <th>Qualification</th>
            <th>Address</th>
            <th>Contact</th>
            <th>Description</th>
            <th>Booking</th>
        </tr>
    </thead>
    <tbody>
        {info.map(info1 => (
            <tr key={info1.id_}>
                <td>{info1.fname_} {info1.lname_}</td>
                <td>{info1.email_}</td>
                <td>{info1.gender_}</td>
                <td>{info1.experience_} years</td>
                <td>{info1.qualification_}</td>
                <td>{info1.address_}</td>
                <td>{info1.contact_}</td>
                <td>{info1.description_}</td>
                <td>
                    <button
                        type="button"
                        className="btn btn-primary btn-lg ms-2"
                        onMouseDown={() => setStorage(info1.id_)}
                        onMouseUp={() => navigate("/Phame/viewSchedule")}
                    >
                        Book an Appointment
                    </button>
                </td>
            </tr>
        ))}
    </tbody>
</table>

                                </div>
                                </div>

                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Outlet/> 
        </div>
       
    );
}
export default Dashboard;
