import { useEffect, useState } from "react"
import { useSelector} from 'react-redux';
export default function ViewAppointmentPatientComp()
{
    const isLoggedIn = useSelector(state => state.logged);
        console.log(isLoggedIn)
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const patientid=JSON.parse(localStorage.getItem("loggedPatient")).id_;
    const[Appointment,setAppointment]=useState([]);

    useEffect(()=>{

        fetch("http://localhost:8080/getAppointmentsofPatient?patient_id="+patientid)   //pending to pass doctor id
        .then(resp=>resp.json())                                //resp.json - this will return an object from json response
        .then((obj)=>{
            setAppointment(obj);
        }) 
    },[])

    const requestCancellation=(e)=>{
      
        alert(" cancellation of appointment succesfull !!!..")
        fetch("http://localhost:8080/appointmentCancellationRequest?app_id="+e)
        .then(resp=>resp.json())
        .then(obj=>  { if(obj===true)
                        {
                            alert(" cancellation of appointment succesfull !!!..");
                        }
                    
        })
    }

    return(

        <div>
            <h1>View Appointments</h1>
            {/*JSON.stringify(Appointment)*/}

            <form>
                    <table className="table table-striped">
                        <thead>
                            <th>Date</th>
                            <th>Day</th>
                            <th>Time </th>
                            <th>Doctor Name</th>
                        </thead>
                        <tbody>
                        {console.log(Appointment)}
                        {
                            
                           Appointment.map((app)=>{
                           
                        
                               return(
                                <tr>
                                    <td>{app.date_}</td>
                                    <td>{days[new Date(app.date).getDay()]}</td>
                                    <td>{app.time_}</td>
                                    
                                    <td>{app.doctors_id_.fname_}  {app.doctors_id_.lname_}</td>
                                    <td> 
                                    
                                       <button type="submit" className="btn btn-danger" disabled={app.status_===1?false:true} onClick={()=>{requestCancellation(app.id_)}}>Cancel</button> 
                                    </td> 
                                    
                                </tr>
                               
                            ) })
                        }
                        </tbody>
                    </table>
                </form>

                {/*JSON.stringify(Appointment)*/}
        </div>

    )
}