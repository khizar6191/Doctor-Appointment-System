import React from 'react';
import '../components/animations.css';
import '../components/main.css';
import '../components/background.css';
import '../components/admin.css';
import Menu from './CommonMenu';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { Link, json } from 'react-router-dom';
import { Outlet } from 'react-router-dom';


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
              alert("pai"+obj.lname_);
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
        setInfo1(data);
        console.log(info1);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  } else if (selectedSpeciality) {
    fetch(`http://localhost:8080/getDocBySpId?specialities_id_=${selectedSpeciality}`)
      .then(resp => resp.json())
      .then(data => {
        setInfo1(data);
        console.log(info1);
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
                <a href="index.php" className="non-style-link-menu non-style-link-menu-active">
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
                <a href="schedule.php" className="non-style-link-menu">
                    <div><p className="menu-text">Scheduled Sessions</p></div>
                </a>
            </td>
        </tr>
        <tr className="menu-row">
            <td className="menu-btn menu-icon-appoinment">
                <a href="appointment.php" className="non-style-link-menu">
                    <div><p className="menu-text">My Bookings</p></div>
                </a>
            </td>
        </tr>
        <tr className="menu-row">
            <td className="menu-btn menu-icon-settings">
                <a href="settings.php" className="non-style-link-menu">
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
                                                    <a href="doctors.php" className="non-style-link">
                                                        <b>"All Doctors"</b>
                                                    </a> section or{' '}
                                                    <a href="schedule.php" className="non-style-link">
                                                        <b>"Sessions"</b>
                                                    </a>
                                                    <br />
                                                    Track your past and future appointments history.
                                                    <br />
                                                    Also find out the expected arrival time of your doctor or medical consultant.
                                                    <br /><br />
                                                </p>
                                                <h3>Channel a Doctor Here</h3>
                                               {/* <form action="" method="post" style={{ display: 'flex' }}>
                                                    <input type="search" name="search" className="input-text" placeholder="Search Doctor and We will Find The Session Available" list="doctors" style={{ width: '45%' }} />&nbsp;&nbsp;*/}
                                                     <form onSubmit={handleFormSubmit}>
                                                   <select value={selectedLocation} onChange={(event) => setSelectedLocation(event.target.value)}>
                                                        <option value="select">Select Area</option>
                                                        <option value="1">Pune</option>
                                                        <option value="2">Mumbai</option>
                                                        <option value="3">Baner</option>
                                                        <option value="4">Koregoan Park</option>
                                                        <option value="5">Hadapsar</option>
                                                        <option value="6">Kothrud</option>
                                                        <option value="7">kharadi</option>
                                                        <option value="8">Hinjewadi</option>
                                                        <option value="9">Shivaji Nagar</option>
                                                        <option value="10">Deccan</option>
                                                </select>
                                                <select value={selectedSpeciality} onChange={(event) => setSelectedSpeciality(event.target.value)}>
                                                        <option value="select">Select Sepciality</option>
                                                        <option value="1">Cardiology</option>
                                                        <option value="2">Dermatology</option>
                                                        <option value="3">Neurology</option>
                                                        <option value="4">Orthopedics</option>
                                                        <option value="5">gynaecology</option>
                                                        <option value="6">Oncologist</option>
                                                        <option value="7">Gastroenterologist</option>
                                                        <option value="8">Pediatrics</option>
                                            
                                                        <option value="9">Radiology</option>
                                                        
                                                        <option value="10">Endocrinologists</option>
                                            
                                            
                                                </select>
                                                    <input type="Submit" value="Search" className="login-btn btn-primary btn" style={{ paddingLeft: '25px', paddingRight: '25px', paddingTop: '10px', paddingBottom: '10px' }} />
                                                </form>
                                               
                                                            {info.length > 0 && (
                                                            <div class="h1-dashboard">
                                                            
                                                                {info1.map((item, index) => {
                                                                    return(
                                                                <div key={index}>
                                                                    <p>First Name: {item.fname_}</p>
                                                                    <p>Last Name: {item.lname_}</p>
                                                                    <p>Email: {item.email_}</p>
                                                                    <p>Gender: {item.gender_}</p>
                                                                    <p>Experience: {item.experience_}</p>
                                                                    
                                                                    <p>Qualification: {item.qualification_}</p>
                                                                    <p>Description: {item.description_}</p>
                                                                    <p>Status: {item.status_}</p>
                                                                
                                                                    <p>User ID: {item.user_id_.id_}</p>
                                                                    <p>User Email: {item.user_id_.email_}</p>
                                                                    
                                                                    <p>Speciality: {item.specialities_id_.specialities_Name_}</p>
                                                                    <p>Location: {item.location_id_.location_Name_}</p>
                                                                </div>);
                                                            } )}
                                                            </div>
                                                            

                                                            )}
                                                              
     <div>
      <h1>Doctor List</h1>
      <ul>
        {info1.map(info1 => (
          <li key={info1.id_}>
            <p>Name: {info1.fname_} {info.lname_}</p>
            <p>Email: {info1.email_}</p>
            <p>Gender: {info1.gender_}</p>
            <p>Experience: {info1.experience_} years</p>
            <p>Qualification: {info1.qualification_}</p>
            <p>Address: {info1.address_}</p>
            <p>Contact: {info1.contact_}</p>
            <p>Description: {info1.description_}</p>
            {/* Display other properties as needed */}
          </li>
        ))}
      </ul>
    </div>



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
                                <table border="0" width="100%">
                                    <tr>
                                        <td width="50%">
                                            <center>
                                                <table className="filter-container" style={{ border: 'none' }} border="0">
                                                    <tr>
                                                        <td colSpan="4">
                                                            <p style={{ fontSize: '20px', fontWeight: 600, paddingLeft: '12px' }}>Status</p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ width: '25%' }}>
                                                            <div className="dashboard-items" style={{ padding: '20px', margin: 'auto', width: '95%', display: 'flex' }}>
                                                                <div>
                                                                    <div className="h1-dashboard">
                                                                     
                                                                    </div>
                                                                    <br />
                                                                    <div className="h3-dashboard">
                                                                        All Doctors &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                                    </div>
                                                                </div>
                                                                <div className="btn-icon-back dashboard-icons" style={{ backgroundImage: "url('../img/icons/doctors-hover.svg')" }}></div>
                                                            </div>
                                                        </td>
                                                        <td style={{ width: '25%' }}>
                                                            <div className="dashboard-items" style={{ padding: '20px', margin: 'auto', width: '95%', display: 'flex' }}>
                                                                <div>
                                                                    <div className="h1-dashboard">
                                                                        {patientrow.num_rows}
                                                                    </div>
                                                                    <br />
                                                                    <div className="h3-dashboard">
                                                                        All Patients &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                                    </div>
                                                                </div>
                                                                <div className="btn-icon-back dashboard-icons" style={{ backgroundImage: "url('../img/icons/patients-hover.svg')" }}></div>
                                                            </div>
                                                        </td>
                                                        </tr>
                                                        <tr>
                                                        <td style={{ width: '25%' }}>
                                                            <div className="dashboard-items" style={{ padding: '20px', margin: 'auto', width: '95%', display: 'flex' }}>
                                                                <div>
                                                                    <div className="h1-dashboard">
                                                                        {appointmentrow.num_rows}
                                                                    </div>
                                                                    <br />
                                                                    <div className="h3-dashboard">
                                                                        NewBooking &nbsp;&nbsp;
                                                                    </div>
                                                                </div>
                                                                <div className="btn-icon-back dashboard-icons" style={{ marginLeft: '0px', backgroundImage: "url('../img/icons/book-hover.svg')" }}></div>
                                                            </div>
                                                        </td>
                                                        <td style={{ width: '25%' }}>
                                                            <div className="dashboard-items" style={{ padding: '20px', margin: 'auto', width: '95%', display: 'flex', paddingTop: '21px', paddingBottom: '21px' }}>
                                                                <div>
                                                                    <div className="h1-dashboard">
                                                                        {schedulerow.num_rows}
                                                                    </div>
                                                                    <br />
                                                                    <div className="h3-dashboard" style={{ fontSize: '15px' }}>
                                                                        Today Sessions
                                                                    </div>
                                                                </div>
                                                                <div className="btn-icon-back dashboard-icons" style={{ backgroundImage: "url('../img/icons/session-iceblue.svg')" }}></div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </center>
                                        </td>
                                        <td>
                                            <p style={{ fontSize: '20px', fontWeight: 600, paddingLeft: '40px' }} className="anime">Your Upcoming Booking</p>
                                            <center>
                                                <div className="abc scroll" style={{ height: '250px', padding: 0, margin: 0 }}>
                                                    <table width="85%" className="sub-table scrolldown" border="0">
                                                        <thead>
                                                            <tr>
                                                                <th className="table-headin">
                                                                    Appoint. Number
                                                                </th>
                                                                <th className="table-headin">
                                                                    Session Title
                                                                </th>
                                                                <th className="table-headin">
                                                                    Doctor
                                                                </th>
                                                                <th className="table-headin">
                                                                    {/* Table header */}
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                        {/* Table rows */}
                                                    </table>
                                                </div>
                                            </center>
                                        </td>
                                    </tr>
                                </table>
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
