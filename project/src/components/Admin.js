import {React,useEffect,useState} from 'react';
import '../components/animations.css';
import '../components/main.css';
import '../components/admin.css';

import '../components/background.css';
import { Link } from 'react-router-dom';

function Admin ()  {
    // const username = 'John Doe'; // Replace with actual username
    // const useremail = 'john@example.com'; // Replace with actual useremail
    // const doctorrow = { num_rows: 10 }; // Replace with actual doctor row data
    // const patientrow = { num_rows: 20 }; // Replace with actual patient row data
    // const appointmentrow = { num_rows: 5 }; // Replace with actual appointment row data
    // const schedulerow = { num_rows: 8 }; // Replace with actual schedule row data



    const[Admin, setAdmin]=useState(null);
    const[pCount, setPcount]=useState(0);
    const[DCount, setDcount]=useState(0);
   
   

    useEffect(()=>{

        const userid=JSON.parse(localStorage.getItem("loggedUser")).id_;
        console.log(userid);
        fetch("http://localhost:8080/getAdminInfo?id="+userid)
        .then(resp=>resp.json())                                //resp.json - this will return an object from json response
        .then((obj)=>{
          
            localStorage.setItem("loggedAdmin",JSON.stringify(obj));
            setAdmin(obj);

        })  
        fetch("http://localhost:8080/getPatientCount")
        .then(resp=>resp.json())                                //resp.json - this will return an object from json response
        .then(data=>{
            setPcount(data);
        })  

        fetch("http://localhost:8080/getDoctorCount")
        .then(resp=>resp.json())                                //resp.json - this will return an object from json response
        .then(data=>{
            setDcount(data);
        }) 

    }
    
    
    
    ,[])


   
    return (
        <div className=" dashboard-container ">
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
                                        <p className="profile-title">{Admin && Admin.id_}..</p>
                                        <p className="profile-subtitle">{Admin && Admin.email_}</p>
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
                            <a href="#" className="non-style-link-menu non-style-link-menu-active">
                                <div><p className="menu-text">Dashboard</p></div>
                            </a>
                        </td>
                    </tr>
                    <tr className="menu-row">
                        <td className="menu-btn menu-icon-doctor ">
                            <Link to="/viewDocA" className="non-style-link-menu">
                                <div><p className="menu-text">Doctors</p></div>
                            </Link>
                        </td>
                    </tr>
                    <tr className="menu-row">
                        <td className="menu-btn menu-icon-patient">
                            <a href="/AdminViewPatientsComp" className="non-style-link-menu">
                                <div><p className="menu-text">Patients</p></div>
                            </a>
                        </td>
                    </tr>
                     <tr className="menu-row">
                        <td className="menu-btn menu-icon-schedule">
                            <a href="/frequent" className="non-style-link-menu">
                                <div><p className="menu-text">Stats</p></div>
                            </a>
                        </td>
                    </tr> 
                    <tr className="menu-row">
                        <td className="menu-btn menu-icon-appoinment">
                            <a href="/viewAppointByAdmin" className="non-style-link-menu">
                                <div><p className="menu-text">All Appoinments</p></div>
                            </a>
                        </td>
                    </tr>
                    <tr className="menu-row">
                        <td className="menu-btn menu-icon-settings">
                            <a href="/requestA" className="non-style-link-menu">
                                <div><p className="menu-text">Approve Request</p></div>
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
                          
                            <td width="25%">
                                {/* Empty column */}
                            </td>
                            <td width="15%">
                                <p style={{ fontSize: '14px', color: 'rgb(119, 119, 119)', padding: 0, margin: 0, textAlign: 'right' }}>
                                    Today's Date
                                </p>
                                <p className="heading-sub12" style={{ padding: 0, margin: 0 }}>
                                {new Date().getDate()}  
                                   
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
                                                { (
                                                    <div>
                                                        <h3>Welcome!!!!!</h3>
                                                        {/* Display the first name */}
                                                        <h1>Admin!!!</h1>
                                                        {/* ... Other content ... */}
                                                    </div>
                                                )}
                                                <p>Haven't any idea about doctors? No problem, let's jump to{' '}
                                                    <a href="#" className="non-style-link">
                                                        <b>"All Doctors"</b>
                                                    </a> section or{' '}
                                                    <a href="#" className="non-style-link">
                                                        <b>"Sessions"</b>
                                                    </a>
                                                    <br />
                                                    Track your past and future appointments history.
                                                    <br />
                                                    Also find out the expected arrival time of your doctor or medical consultant.
                                                    <br /><br />
                                                </p>
                                                <h3>Channel a Doctor Here</h3>
                                               
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
                                                            <div className="dashboard-items" style={{ padding: '30px', margin: 'auto', width: '95%', display: 'flex' }}>
                                                                <div>
                                                                    <div className="h1-dashboard " >
                                                                        {pCount}   
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
                                                            <div className="dashboard-items" style={{ padding: '30px', margin: 'auto', width: '95%', display: 'flex' }}>
                                                                <div>
                                                                    <div className="h1-dashboard">
                                                                        {DCount}
                                                                    </div>
                                                                    <br />
                                                                    <div className="h3-dashboard">
                                                                        All Doctors &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                                    </div>
                                                                </div>
                                                                <div className="btn-icon-back dashboard-icons menu-icon-doctor" style={{ backgroundImage: "url('../img/icons/doctors-hover.svg')" }}></div>
                                                            </div>
                                                        </td>
                                                        
                                                        </tr>
                                                       
                                                </table>
                                            </center>
                                        </td>
                                        <td>
                                           
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
};

export default Admin;
