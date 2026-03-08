import { useEffect, useState } from "react";
import API from "../services/api";
import "../styles/StayHotels.css";

function StayHotels() {

    const [hotels, setHotels] = useState([]);

    useEffect(() => {

        fetchHotels();

    }, []);

    const fetchHotels = async () => {

        const res = await API.get("/hotels/stay");
        setHotels(res.data);

    };

    return (

        <div className="stay-hotels-page">

            <h2>Hotels For Stay</h2>

            <div className="stay-hotels-grid">

                {hotels.map(hotel => (

                    <div key={hotel.id} className="stay-hotel-card">

                        {/* Hotel Image */}
                        {hotel.image && (
                            <img
                                src={`http://localhost:5000/uploads/${hotel.image}`}
                                alt={hotel.name}
                                className="stay-hotel-image"
                            />
                        )}

                        <div className="stay-hotel-card-body">

                            <h3>{hotel.name}</h3>

                            <p><b>Location:</b> {hotel.location}</p>

                            <p>{hotel.description}</p>

                            {/* Room Details */}
                            {hotel.roomDetails && hotel.roomDetails.length > 0 && (
                                <div className="room-details">

                                    <h4>Room Types</h4>

                                    {hotel.roomDetails.map((room, index) => (

                                        <p key={index}>
                                            {room.type} - ₹{room.charge} / day
                                        </p>

                                    ))}

                                </div>
                            )}

                            {/* Travel Services */}
                            {hotel.travel_services && (
                                <p>
                                    <b>Travel Services:</b> {hotel.travel_services}
                                </p>
                            )}

                            <button className="book-stay-btn">
                                Book Stay
                            </button>

                        </div>

                    </div>

                ))}

            </div>

        </div>

    );

}

export default StayHotels;