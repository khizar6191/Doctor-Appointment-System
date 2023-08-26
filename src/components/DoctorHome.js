import {React,useState,useEffect} from 'react';
import '../components/animations.css';
import '../components/main.css';
import '../components/admin.css';
import '../components/background.css';

function DoctorDash() {
   // const username = 'John Doe'; // Replace with actual username
    const useremail = 'john@example.com'; // Replace with actual useremail
    const doctorrow = { num_rows: 10 }; // Replace with actual doctor row data
    const patientrow = { num_rows: 20 }; // Replace with actual patient row data
    const appointmentrow = { num_rows: 5 }; // Replace with actual appointment row data
    const schedulerow = { num_rows: 8 }; // Replace with actual schedule row data
    const[ doctor, setDoctor ]=useState(null);
    useEffect(()=>{

        const userid=JSON.parse(localStorage.getItem("loggedUser")).id_;
        
        fetch("http://localhost:8080/getDoctorByUId?user_id=" + userid)
        .then((resp) => {
            if (!resp.ok) {
                throw new Error("Network response was not ok");
            }
            return resp.text();
        })
        .then((text) => text.length ? JSON.parse(text) : {})
        .then((obj) => {
            console.log("Fetched doctor data:", obj);
            localStorage.setItem("loggedDoctor", JSON.stringify(obj));
            setDoctor(obj);
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        })
                                         
    },[])
    return (
        <div className=" dashboard-container">
            <div className="menu">
                <table className="menu-container" border="0">
                    <tr>
                        <td style={{ padding: '10px' }} colSpan="2">
                            <table border="0" className="profile-container">
                                <tr>
                                    <td width="30%" style={{ paddingLeft: '20px' }}>
                                        <img src="../img/user.png" alt="" width="100%" style={{ borderRadius: '50%' }} />
                                    </td>
                                    <td style={{ padding: '0px', margin: '0px' }}>
                                        <p className="profile-title">  {doctor && doctor.fname_}..</p>
                                        <p className="profile-subtitle"> {doctor && doctor.email_}</p>
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
                        <td className="menu-btn menu-icon-dashbord menu-active menu-icon-dashbord-active">
                            <a href="/Dhame" className="non-style-link-menu non-style-link-menu-active">
                                <div><p className="menu-text">Dashboard</p></div>
                            </a>
                        </td>
                    </tr>
                   
                    <tr className="menu-row">
                        <td className="menu-btn menu-icon-session">
                            <a href="/addSh" className="non-style-link-menu">
                                <div><p className="menu-text">Add Sessions</p></div>
                            </a>
                        </td>
                    </tr>
                    <tr className="menu-row">
                        <td className="menu-btn menu-icon-appoinment">
                            <a href="/viewappointDoc" className="non-style-link-menu">
                                <div><p className="menu-text">My Appoinments</p></div>
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
            <div className="dash-body" style={{ marginTop: '15px' }}>
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
                                                {doctor && (
                                                    <div>
                                                        <h3>Welcome!</h3>
                                                        {/* Display the first name */}
                                                        <h1>Dr.{doctor.fname_}.</h1>
                                                        {/* ... Other content ... */}
                                                    </div>
                                                )}
                                                <p>Welcome to Your Doctor's Portal!
We're here to help you provide the best care for your patients.<br/> Stay organized, manage appointments, and access patient information with ease. Your dedication to healthcare is making a difference every day. Thank you for your commitment to the well-being of your patients."
                                                </p>
                                                <h3>Channel your schedule And Appoinments Here...</h3>
                                               
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
                               
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default DoctorDash;
