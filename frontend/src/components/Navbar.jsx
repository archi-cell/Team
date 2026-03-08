import { Link } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
    return (
        <nav className="navbar">

            <h2>FestNest</h2>

            <div className="nav-links">

                <Link to="/">Home</Link>

                <Link to="/admin-dashboard">Admin Dashboard</Link>

                <Link to="/create-event">Create Event</Link>

                <Link to="/admin-events">Admin Events</Link>

                <Link to="/create-hotel">Create Hotel</Link>

                <Link to="/admin-hotels">Admin Hotels</Link>

                <Link to="/login">Login</Link>

                <Link to="/register">Register</Link>

            </div>

        </nav>
    );
}

export default Navbar;