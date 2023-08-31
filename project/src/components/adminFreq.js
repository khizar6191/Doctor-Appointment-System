import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminFreq() {
    const [Patients, setPatients] = useState([]);
    const [Doctors, setDoctors] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("https://localhost:7255/api/Appointments/most-frequent-patients")
            .then(resp => resp.json())
            .then(obj => {
                setPatients(obj);
            });

        fetch("https://localhost:7255/api/Appointments/most-frequent-doctors")
            .then(resp => resp.json())
            .then(obj => {
                setDoctors(obj);
            });
    }, []);

    return (
        <div>
            <h1>Most Frequent Patients</h1>
            <form>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Contact</th>
                            <th>Gender</th>
                            <th>Date of Birth</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Patients.map((app, index) => (
                            <tr key={app.id}>
                                <td>{index + 1}</td>
                                <td>{app.fname} {app.lname}</td>
                                <td>{app.email}</td>
                                <td>{app.contact}</td>
                                <td>{app.gender}</td>
                                <td>{app.dob}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button className="btn btn-primary btn-lg ms-2" onClick={() => navigate("/Ahame")}>Back</button>
            </form>

            <h1>Most Frequent Doctors</h1>
            <form>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Contact</th>
                            {/* Add more columns as needed */}
                        </tr>
                    </thead>
                    <tbody>
                        {Doctors.map((doc, index) => (
                            <tr key={doc.id}>
                                <td>{index + 1}</td>
                                <td>{doc.fname} {doc.lname}</td>
                                <td>{doc.email}</td>
                                <td>{doc.contact}</td>
                                {/* Add more cells as needed */}
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button className="btn btn-primary btn-lg ms-2" onClick={() => navigate("/Ahame")}>Back</button>
            </form>
        </div>
    );
}
