import { useEffect, useState } from "react";
import API from "../services/api";
import "../styles/AdminDashboard.css";

function AdminDashboard() {

    const [stats, setStats] = useState({
        users: 0,
        hotels: 0,
        events: 0
    });

    useEffect(() => {
        fetchStats();
    }, []);

    const fetchStats = async () => {
        try {

            const token = localStorage.getItem("token");

            const res = await API.get("/admin/dashboard-stats", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            setStats(res.data);

        } catch (error) {
            console.error("Error fetching dashboard stats:", error);
        }
    };

    return (
        <div className="dashboard">

            <h2 className="dashboard-title">Admin Dashboard</h2>

            <div className="dashboard-cards">

                <div className="card">
                    <h3>Number of Users</h3>
                    <p>{stats.users}</p>
                </div>

                <div className="card">
                    <h3>Number of Hotels</h3>
                    <p>{stats.hotels}</p>
                </div>

                <div className="card">
                    <h3>Number of Events</h3>
                    <p>{stats.events}</p>
                </div>

            </div>

        </div>
    );
}

export default AdminDashboard;
