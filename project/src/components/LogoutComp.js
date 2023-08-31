import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logout } from "./slice";
import { useNavigate } from "react-router-dom";

export default function LogoutComp() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        localStorage.clear();
        dispatch(logout());
        navigate("/");
    }, [dispatch, navigate]);

    // Render the Home component or any other component you want after the logout
    return <App1 />;
}

// Define the Home component here or import it from the appropriate location
function App1() {
    return <div>This is the home component.</div>;
}
