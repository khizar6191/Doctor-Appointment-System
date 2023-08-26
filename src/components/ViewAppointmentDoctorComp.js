import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createRoot } from "react-dom";
export default function ViewAppointmentDoctorComp() {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const doctorid = JSON.parse(localStorage.getItem("loggedDoctor")).id_;
    const [Appointment, setAppointment] = useState([]);
         console.log(doctorid)
    useEffect(() => {
        fetch("http://localhost:8080/getAppointmentsofDoctor?doctor_id_=" + doctorid)
            .then(resp => resp.json())
            .then(obj => {  console.log(obj)
                if (Array.isArray(obj)) {
                    setAppointment(obj);
                } else {
                    console.error("Invalid API response:", obj);
                }
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, [doctorid]);

    const navigate = useNavigate();

    const setStorage = (e) => {
        localStorage.setItem("viewId", e);
    };

    return (
        <div>
            <h1>View Appointments</h1>
            <form>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Day</th>
                            <th>Time</th>
                            <th>Patient Name</th>
                        </tr>
                    </thead>
                    <tbody>
                    {Appointment.map((app) => ( 
    <tr key={app.id_}>
        <td>{app.date_}</td>
        <td>{days[new Date(app.date_).getDay()]}</td>
        <td>{app.time_}</td>
        <td>{app.patient.fname_} {app.patient.lname_}</td>
        <td>
            <button
                type="submit"
                className="btn btn-primary btn-lg ms-2"
                onMouseDown={() => setStorage(app.patient.id_)} // Assuming id_ is the correct property
                onMouseUp={() => navigate("/viewAllPatientInfo")}
            >
                View Info
            </button>
        </td>
    </tr>
))}
            <button className="btn btn-primary btn-lg ms-2" onClick={() => navigate("/Dhame")} > Back</button>
                    </tbody>
                </table>
            </form>
        </div>
    );
}
