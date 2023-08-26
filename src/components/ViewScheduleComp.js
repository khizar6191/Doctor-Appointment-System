import React, { useEffect, useState, useReducer } from "react";
import { useNavigate } from "react-router-dom";

export default function ViewSchedule() {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const init = {
        date_: "",
        doctor_id_: 0,
        patient_id_: 0,
        time_: "",
        status_: ""
    };

    const navigate = useNavigate();
    const doctorid = localStorage.getItem("doctorid");
    
    const [slots, setSlots] = useState([]);
    const [doctor, setDoctor] = useState({});

    const patientid = JSON.parse(localStorage.getItem("loggedPatient")).id_;

    const reducer = (state, action) => {
        switch (action.type) {
            case 'update':
                const { date_, doctor_id_, patient_id_, time_, status_ } = action.data;
                return { ...state, date_, doctor_id_, patient_id_, time_, status_ };
            case 'reset':
                return init;
            default:
                return state;
        }
    };

    const [info, dispatch] = useReducer(reducer, init);

    useEffect(() => {
        fetch("http://localhost:8080/getSchedule?doctor_id_=" +doctorid)
            .then(resp => resp.json())
            .then(obj => {
                setSlots(obj);
            });
    }, []);

    useEffect(() => {
        alert(doctorid)
        fetch("http://localhost:8080/getDoctorBy?doctor_id_=" + doctorid)
            .then(resp => resp.json())
            .then(obj => {
                setDoctor(obj);
            });
    }, []);

    const sendData = (e) => {
        e.preventDefault();
        const reqOptions = {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(info)
        };

        fetch("http://localhost:8080/addAppointment", reqOptions)
            .then(resp => {
                if (resp.ok) {
                    alert("Appointment Book successFully !!!!")
                    navigate("/Phame");
                } else {
                    alert("Failed to add appointment");
                }
            })
            .catch(error => {
                console.error("Error:", error);
                alert("An error occurred while adding the appointment");
            });
    };

    return (
        <div>
            <h3>{/*doctor && doctor.doctor_id.user_id.fname} {doctor && doctor.doctor_id.user_id.lname*/}</h3>

            <form>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Day</th>
                            <th>Slot Timings</th>
                        </tr>
                    </thead>
                    <tbody>
                        {slots.map((sd) => (
                            <tr key={sd.date_}>
                                <td><p>{sd.date_}</p></td>
                                <td><p>{days[new Date(sd.date_).getDay()]}</p></td>
                                <td>
                                    {sd.slots.map((st) => (
                                        <button disabled={st.status?false:true}
                                            key={st.slot_time}
                                            type="button"
                                            className="btn btn-primary btn-lg ms-2"
                                            
                                            onMouseDown={() => {
                                                dispatch({
                                                    type: 'update',
                                                    data: {
                                                        date_: sd.date_,
                                                        doctor_id_: doctorid,
                                                        patient_id_: patientid,
                                                        time_: st.slot_time,
                                                        status_: "1"
                                                    }
                                                });
                                            }}
                                            onMouseUp={(e) => sendData(e)}
                                        >
                                            {st.slot_time}
                                        </button>
                                    ))}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </form>

            {/* JSON.stringify(slots)}
            {JSON.stringify(doctor)}
            {JSON.stringify(info)} */}
        </div>
    );
}
