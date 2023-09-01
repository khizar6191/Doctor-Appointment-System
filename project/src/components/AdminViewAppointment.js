import { useEffect ,useState } from "react"
import { useNavigate } from "react-router-dom";
export default function AdminViewAppointmentsComp(){

    const[appointments,setAppointments]=useState([]);
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const navigate = useNavigate();
  
    useEffect(()=>{

        fetch("http://localhost:8080/getAllAppointments")
        .then(resp=>resp.json())                                //resp.json - this will return an object from json response
        .then((obj)=>{

            setAppointments(obj);

        })       
    },[])

    return(
        <div>
            <h3 className="fon">Appointments Information</h3>
            <br/>
            <form>
            <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Patient</th>
          <th>Doctor</th>
          <th>Date</th>
          <th>Day</th>
          <th>Time</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {appointments.map((app) => (
          <tr key={app.id_}>
            <td>{app.id_}</td>

          <td> { app.patient.fname_}  {app.patient.lname_}</td>
            
        <td>Dr. {app.doctors_id_.fname_} {app.doctors_id_.lname_}</td>
            <td>{app.date_}</td>
            <td>{days[new Date(app.date_).getDay()]}</td>
            <td>{app.time_}</td>
            <td>{app.status_}</td>
          </tr>
        ))}
      </tbody>
    </table>            </form>
    <button className="btn btn-primary btn-lg ms-2" onClick={() => navigate("/Ahame")} > Back</button>
           
        </div>
    )
}