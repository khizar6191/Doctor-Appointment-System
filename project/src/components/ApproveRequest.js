import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
//THIS COMPONENT WILL DISPLAY PATIENT INFORMATION
export default function ApproveReq(){

    const navigate = useNavigate();
  
    const[info,setInfo]=useState(null);
    
    useEffect(()=>{

        fetch("http://localhost:8080/getApprove")
        .then(resp=>resp.json())

        .then(obj=>{
            console.log(obj)
                setInfo(obj);
        })
    },[""])
   

   
    const handleApprove = (status,id) => {
        status=1;
        console.log("status"+status)
       console.log(id)
        fetch(`http://localhost:8080/approve/${id}/${status}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((response) => response.json())
        .then((result) => {
           alert("Approval result: Success", window.location.reload());
        })
        .catch((error) => {
           alert("Error approving:", error);
        });
    };
    

    return(
        <div>
            <h3>Request Information</h3>
            <table className="table table-striped table-bordered">
    <thead className="thead-dark">
        <tr>
            <th className="py-3">Doctor ID</th>
            <th className="py-3">Doctor Email</th>
            <th className="py-3">Approve</th>
        
       
        </tr>
    </thead>
    <tbody>
        {info && info.map((approve, index) => (

            <tr key={index}>
            <td className="py-2">Dr. {approve.ids_} </td>
                <td className="py-2">Dr. {approve.email_} </td>
                
                <td className="py-2">
                                    <button class="btn btn-primary" onClick={() => handleApprove(approve.status_, approve.id_)}>
                                        Approve
                                    </button>
                                </td>
               

            </tr>
        ))}
    </tbody>
</table>
<button className="btn btn-primary btn-lg ms-2" onClick={() => navigate("/Ahame")} > Back</button>
   
            {/*JSON.stringify(info)*/}
        </div>
    )
}