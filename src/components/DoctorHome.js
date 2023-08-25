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
                                        <a href="../logout.php"><input type="button" value="Log out" className="logout-btn btn-primary-soft btn" /></a>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    
                    <tr className="menu-row">
                        <td className="menu-btn menu-icon-dashbord menu-active menu-icon-dashbord-active">
                            <a href="index.php" className="non-style-link-menu non-style-link-menu-active">
                                <div><p className="menu-text">Dashboard</p></div>
                            </a>
                        </td>
                    </tr>
                    <tr className="menu-row">
                        <td className="menu-btn menu-icon-patient">
                            <a href="doctors.php" className="non-style-link-menu">
                                <div><p className="menu-text">All Patients</p></div>
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
                                                        <h1>{doctor.fname_}.</h1>
                                                        {/* ... Other content ... */}
                                                    </div>
                                                )}
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
                                                <form action="schedule.php" method="post" style={{ display: 'flex' }}>
                                                    <input type="search" name="search" className="input-text" placeholder="Search Doctor and We will Find The Session Available" list="doctors" style={{ width: '45%' }} />&nbsp;&nbsp;
                                                    <input type="Submit" value="Search" className="login-btn btn-primary btn" style={{ paddingLeft: '25px', paddingRight: '25px', paddingTop: '10px', paddingBottom: '10px' }} />
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
                                                        </tr>
                                                        <tr>
                                                        
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
        </div>
    );
}

export default DoctorDash;
