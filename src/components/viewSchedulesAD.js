import { useEffect, useState } from "react";

//THIS COMPONENT WILL DISPLAY PATIENT INFORMATION
export default function ViewSchedules(){

  
    const[info,setInfo]=useState(null);
    
    useEffect(()=>{

        fetch("http://localhost:8080/getSchedules")
        .then(resp=>resp.json())

        .then(obj=>{
            console.log(obj)
                setInfo(obj);
        })
    },[info])

    return(
        <div>
            <h3>Schedules Information</h3>
            <table className="table table-striped table-bordered">
    <thead className="thead-dark">
        <tr>
            <th className="py-3">Doctor Name</th>
            <th className="py-3">Start Time</th>
            <th className="py-3">End Time</th>
        </tr>
    </thead>
    <tbody>
        {info && info.map((schedule, index) => (
            <tr key={index}>
                <td className="py-2">Dr. {schedule[0]} {schedule[1]}</td>
                <td className="py-2">{schedule[2]}</td>
                <td className="py-2">{schedule[3]}</td>
            </tr>
        ))}
    </tbody>
</table>
            {/*JSON.stringify(info)*/}
        </div>
    )
}