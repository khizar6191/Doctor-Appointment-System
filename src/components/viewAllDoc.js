import { useEffect ,useState } from "react"
import { useNavigate } from "react-router-dom";

export default function AdminViewDoctorsComp(){

    const[doctors,setDoctors]=useState([]);

    useEffect(()=>{

        fetch("http://localhost:8080/getAllDoctors")
        .then(resp=>resp.json())                                //resp.json - this will return an object from json response
        .then((obj)=>{

            setDoctors(obj);

        })       
    },[])

    const navigate=useNavigate();
    const setStorage=(e)=>{

        localStorage.setItem("viewId",e);
        
    }

    // const deleteDoctor=(e)=>{
      
    //     fetch("http://localhost:8080/deleteByUId?user_id="+e)
    //     .then(resp=>resp.json())
    //     .then(obj=>  { if(obj===true)
    //                     {
    //                         alert("Doctor removed...");
    //                     }
    //                     else{
    //                         alert("not fired")
    //                     }
                    
    //     })
    // }

    

    return(
        <div>
            <h3 className="fon">Doctors Information</h3>
            <br/>
            <form>
                <table className="table table-striped">
                    <thead>
                        <th>Doctor ID</th>
                        <th>Name</th>
                        <th>Department </th>
                        <th></th>
                    </thead>
                    <tbody>
                    {   
                        doctors.map((doctor)=>{
                            return <tr>
                                        <td>
                                            <p>{doctor.id_}</p>
                                        </td>
                                        <td>
                                            <p> Dr. {doctor.fname_} {doctor.lname_}</p>
                                        </td>
                                        <td>
                                            <p>{doctor.specialities_id_.specialities_Name_}</p>
                                        </td>
                                        <td>
                                            <button type="submit" className="btn btn-primary btn-lg ms-2" onMouseDown={()=>{setStorage(doctor.id_)}}
                                                                                      onMouseUp={()=>{navigate("/ViewDoctorComp")}}>View Info</button>
                                                              </td>
                                </tr>
                        })  
                    }
                    </tbody>
                </table>
             </form>
             <button className="btn btn-primary btn-lg ms-2" onClick={() => navigate("/Ahame")} > Back</button>
            
        </div>
    )
}