import { useEffect, useState } from "react";
import API from "../services/api";
import "../styles/AdminHotels.css";

function AdminHotels() {

    const [hotels, setHotels] = useState([]);
    const token = localStorage.getItem("token");

    useEffect(() => {
        fetchHotels();
    }, []);

    const fetchHotels = async () => {
        try {
            const res = await API.get("/hotels", {
                headers: { Authorization: `Bearer ${token}` }
            });
            setHotels(res.data);
        } catch (error) {
            console.error(error);
        }
    };

    const deleteHotel = async (id) => {
        try {
            await API.delete(`/hotels/${id}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            fetchHotels();
        } catch (error) {
            console.error(error);
        }
    };

    const editHotel = async (hotel) => {

        const newName = prompt("Hotel Name:", hotel.name);
        const newLocation = prompt("Location:", hotel.location);
        const newDescription = prompt("Description:", hotel.description);

        if (!newName || !newLocation) return;

        try {
            await API.put(
                `/hotels/${hotel.id}`,
                {
                    name: newName,
                    location: newLocation,
                    description: newDescription,
                    hotel_type: hotel.hotel_type
                },
                { headers: { Authorization: `Bearer ${token}` } }
            );

            fetchHotels();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="admin-hotels">

            <h2>Admin Hotels</h2>

            {hotels.map((hotel) => (

                <div key={hotel.id} className="admin-hotel-card">

                    {hotel.image && (
                        <img
                            src={`http://localhost:5000/uploads/${hotel.image}`}
                            alt={hotel.name}
                        />
                    )}

                    <h3>{hotel.name}</h3>
                    <p><b>Location:</b> {hotel.location}</p>
                    <p><b>Type:</b> {hotel.hotel_type}</p>
                    <p>{hotel.description}</p>

                    {/* STAY */}
                    {hotel.hotel_type === "STAY" && (
                        <div className="hotel-section">
                            <h4>Room Details</h4>

                            {hotel.room_details &&
                                JSON.parse(hotel.room_details).map((room, index) => (
                                    <p key={index}>
                                        🛏 {room.type} - ₹{room.charge}/day
                                    </p>
                                ))
                            }

                            <p><b>Travel Services:</b> {hotel.travel_services}</p>
                        </div>
                    )}

                    {/* EVENT HOST */}
                    {hotel.hotel_type === "EVENT_HOST" && (
                        <div className="hotel-section">
                            <h4>Event Services</h4>
                            <p><b>Banquet Hall:</b> {hotel.banquet_hall_details}</p>
                            <p><b>Catering:</b> {hotel.catering_services}</p>
                        </div>
                    )}

                    <button
                        className="admin-btn admin-btn-primary"
                        onClick={() => editHotel(hotel)}
                    >
                        Edit
                    </button>

                    <button
                        className="admin-btn admin-btn-danger"
                        onClick={() => deleteHotel(hotel.id)}
                    >
                        Delete
                    </button>

                </div>

            ))}

        </div>
    );
}

export default AdminHotels;