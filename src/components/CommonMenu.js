function Menu(){

    const username = 'John Doe'; // Replace with actual username
    const useremail = 'john@example.com'; // Replace with actual useremail
    const doctorrow = { num_rows: 10 }; // Replace with actual doctor row data
    const patientrow = { num_rows: 20 }; // Replace with actual patient row data
    const appointmentrow = { num_rows: 5 }; // Replace with actual appointment row data
    const schedulerow = { num_rows: 8 }; // Replace with actual schedule row data

    return(
        <table className="menu-container"  border="0">
        <tr>
            <td style={{ padding: '10px' }} colSpan="2">
                <table border="0" className="profile-container">
                    <tr>
                        <td width="30%" style={{ paddingLeft: '20px' }}>
                            <img src="../img/user.png" alt="" width="100%" style={{ borderRadius: '50%' }} />
                        </td>
                        <td style={{ padding: '0px', margin: '0px' }}>
                            <p className="profile-title">{username.substring(0, 13)}..</p>
                            <p className="profile-subtitle">{useremail.substring(0, 22)}</p>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <a href="../logout.php"><input type="button" value="Log out" className="logout-btn btn-primary-soft btn" /></a>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        
        <tr className="menu-row">
            <td className="menu-btn menu-icon-home menu-active menu-icon-home-active">
                <a href="index.php" className="non-style-link-menu non-style-link-menu-active">
                    <div><p className="menu-text">Home</p></div>
                </a>
            </td>
        </tr>
        <tr className="menu-row">
            <td className="menu-btn menu-icon-doctor">
                <a href="/Dhame" className="non-style-link-menu">
                    <div><p className="menu-text">All Doctors</p></div>
                </a>
            </td>
        </tr>
        <tr className="menu-row">
            <td className="menu-btn menu-icon-session">
                <a href="schedule.php" className="non-style-link-menu">
                    <div><p className="menu-text">Scheduled Sessions</p></div>
                </a>
            </td>
        </tr>
        <tr className="menu-row">
            <td className="menu-btn menu-icon-appoinment">
                <a href="appointment.php" className="non-style-link-menu">
                    <div><p className="menu-text">My Bookings</p></div>
                </a>
            </td>
        </tr>
        <tr className="menu-row">
            <td className="menu-btn menu-icon-settings">
                <a href="settings.php" className="non-style-link-menu">
                    <div><p className="menu-text">Settings</p></div>
                </a>
            </td>
        </tr>
        {/* Other menu rows */}
    </table>

    );
}
export default Menu;