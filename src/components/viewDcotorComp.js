import { useEffect, useState } from "react";

//THIS COMPONENT WILL DISPLAY PATIENT INFORMATION
export default function ViewDoctorComp(){

    const did=localStorage.getItem("viewId");
    const[info,setInfo]=useState(null);
    //getting the docotr object by passing patient id that is stored on localstorage
    useEffect(()=>{

        fetch("http://localhost:8080/getDoctorBy?doctor_id_="+did)
        .then(resp=>resp.json())

        .then(obj=>{
            console.log(obj)
                setInfo(obj);
        })
    },[info])

    return(
        <div>
            <h3>Doctor Information</h3>

            <table className="table table-striped">
                <tbody>
                    <tr>
                        <td>Doctor ID : </td>
                        <td>{info && info.id_}</td>
                    </tr>
                    <tr>
                        <td>Name : </td>
                        <td>{info && info.fname_} {info && info.lname_}</td>
                    </tr>
                    <tr>
                        <td> Email :</td>
                        <td>{info && info.email_}</td>
                    </tr>
                    <tr>
                        <td>Gender :</td>
                        <td>{info && info.gender_}</td>
                    </tr>
                    <tr>
                        <td>Qualification :</td>
                        <td>{info && info.qualification_}</td>
                    </tr>
                    <tr>
                        <td>Specialization :</td>
                        <td>{info && info.specialities_id_.specialities_Name_}</td>
                    </tr>
                    <tr>
                        <td>Experience :</td>
                        <td>{info && info.experience_}</td>
                    </tr>
                    <tr>
                        <td>Address :</td>
                        <td>{info && info.address_}</td>
                    </tr>
                    <tr>
                        <td>Contact :</td>
                        <td>{info && info.contact_}</td>
                    </tr>
                    <tr>
                        <td>Description:</td>
                        <td>{info && info.description_}</td>
                    </tr>
                    
               </tbody> 
            </table>
            {/*JSON.stringify(info)*/}
        </div>
    )
}