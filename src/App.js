import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route, useLocation } from 'react-router-dom';
import GetBookComp from './components/GetBookComp';
import App1 from './components/Home';
import LoginComp from './components/LoginComp';
import DoctorRegistrationComp from './components/RegisDoc';
import './App.css'; // Import your custom CSS file
import Dashboard from './components/PatientHome';
import DoctorDash from './components/DoctorHome';
import Admin from './components/Admin';
import PatientReges from './components/patientReg';
import AdminHomeComp from './components/aaa';
import AdminViewDoctorsComp from './components/viewAllDoc';
import ViewDoctorComp from './components/viewDcotorComp';
import AdminViewPatientsComp from './components/AdminViewComponent';
import ViewPatientComp from './components/ViewAllPatientInfo';
import ViewSchedules from './components/viewSchedulesAD';
import ApproveReq from './components/ApproveRequest';
import AllDoctorsComp from './components/ViewDocByPatient';
import ViewSchedule from './components/ViewScheduleComp';
import ViewAppointmentDoctorComp from './components/ViewAppointmentDoctorComp';
import AddScheduleComp from './components/AS';
import AdminViewAppointmentsComp from './components/AdminViewAppointment';
import ViewAppointmentPatientComp from './components/patientBooking';
// import ViewAppointmentDoctorComp from './components/ViewAppointmentDoctorComp';

function App() {
  const location = useLocation();
  

  // List of routes where you want to hide the navigation bar
  const hiddenRoutes = ['/login', '/patient', '/doctor', '/Phame', '/Dhame', '/Ahame' ];

  const shouldShowNavBar = !hiddenRoutes.includes(location.pathname);

  return (
    <div>
      {shouldShowNavBar && (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <Link className="navbar-brand" to="/">
                  HOME
                </Link>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    LOGIN
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/patient">
                    PATIENT_REGISTER
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/doctor">
                    DOCTOR_REGISTER
                  </Link>
                </li>
                <li className="nav-item">
                  {/* <Link className="nav-link" to="/Phame">
                    p-Home
                  </Link> */}
                </li>
                <li className="nav-item">
                  {/* <Link className="nav-link" to="/Dhame">
                    D-Home
                  </Link> */}
                </li>
                <li className="nav-item">
                  {/* <Link className="nav-link" to="/Ahame">
                    A-Home
                  </Link> */}
                </li>
              </ul>
            </div>
          </div>
        </nav>
      )}

      <div>
        <Routes>
          <Route path="/" element={<App1 />} />
          <Route path="/patient" element={<PatientReges />} />
          
          <Route path="/login" element={<LoginComp />} />
          <Route path="/doctor" element={<DoctorRegistrationComp />} />
          <Route path="/logic" element={<GetBookComp />} />
          <Route path="/home" element={<App1 />} />
          
          <Route path="/Phame" element={<Dashboard/>} >

          <Route path="/Phame/vsp" element={<AllDoctorsComp/>}  />
           <Route path="/Phame/viewSchedule" element={<ViewSchedule/>}  />
           <Route path="/Phame/viewAllAppoinment" element={<ViewAppointmentPatientComp/>}  />
          </Route>
          
          <Route path="/Dhame" element={<DoctorDash />} />
          <Route path="/Ahame" element={<Admin />} />
          <Route path="/viewDocA" element={<AdminViewDoctorsComp/>} />
          <Route path="/ViewDoctorComp" element={<ViewDoctorComp/>} />
          <Route path="/AdminViewPatientsComp" element={<AdminViewPatientsComp/>} />
          <Route path="/viewAllPatientInfo" element={<ViewPatientComp/>} />
          <Route path="/viewSchedules" element={<ViewSchedules/>} />
          <Route path="/requestA" element={<ApproveReq/>} />
           <Route path="/viewappointDoc" element={<ViewAppointmentDoctorComp/>} />  
          {/* <Route path="/vsp" element={<AllDoctorsComp/>}  />
           <Route path="/viewSchedule" element={<ViewSchedules/>}  /> */}
                 <Route path="/addSh" element={<AddScheduleComp/>} /> 

                 <Route path="/viewAppointByAdmin" element={<AdminViewAppointmentsComp/>} />  

        </Routes>
      </div>
    </div>
  );
}
export default App;
