import { useEffect, useState } from "react";
import docImage from'../img/b3.jpg';
import {  useNavigate } from "react-router-dom"; 
import { useSelector } from 'react-redux';

export default function AllDoctorsComp(){
    
    const patientid=JSON.parse(localStorage.getItem("loggedPatient")).id_;
    console.log(patientid)
    const[doctors,setDoctors]=useState([]);
    const[doctorid,setDoctorid]=useState([]);
    const mystate = useSelector((state)=>state.logged);
console.log(mystate)
    //get all doctors
    useEffect(()=>{

        fetch("http://localhost:8080/getAllDoctors")
        .then(resp=>resp.json())                                //resp.json - this will return an object from json response
        .then((obj)=>{

            setDoctors(obj);

        })                                      
    },[])

    const navigate= useNavigate();

    //set doctorid using useState to set it in local storage to fetch schedule
    const handleChange2=(e)=>{

        setDoctorid(e);
    }

    //navigating to view schedule of selected doctor or login page
    const handleChange=(e)=>{
    
            alert("aaaaa")
            localStorage.setItem("doctorid",doctorid);
            navigate("/Phame/viewSchedule")
       

    
    }

    return(
        <div>
            <h2 className="fon">List of Doctors </h2>
            <br/>
            <form>
                <table className="table table-striped">
                    <tbody>
                    {   
                        doctors.map((doctor)=>{
                            return <tr>
                                    <td>
                                      {/*   <img src={'data:image/jpg;base64,doctor.image'} height="150" width="150"/> */}
                                      <img src={docImage} height="150" width="150"/>
                                        
                                        <p> Dr. {doctor.fname_} {doctor.lname_}</p>
                                    </td>
                                    <td>
                                        <p>Email. : {doctor.email_}</p>
                                        <p>Qualification : {doctor.qualification_}</p>
                                        <p>Specialization : {doctor.specialities_id_.specialities_Name_}</p>
                                        <p>Experience : {doctor.experience_}</p>
                                    </td>
                                    <td><button type="submit" className="btn btn-primary btn-lg ms-2" onMouseDown={()=>{return handleChange2(doctor.id_)}}  onMouseUp={handleChange}>Book an Appointment</button></td>
                                </tr>
                        })  
                    }
                    </tbody>
                    </table>
            </form>
            {/*JSON.stringify(doctors)*/}
        </div>
    )
}