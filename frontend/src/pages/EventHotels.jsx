import { useEffect, useState } from "react";
import API from "../services/api";
import "../styles/EventHotels.css";

function EventHotels() {

    const [hotels, setHotels] = useState([]);

    useEffect(() => {

        fetchHotels();

    }, []);

    const fetchHotels = async () => {

        const res = await API.get("/hotels/event");
        setHotels(res.data);

    };

    return (

        <div className="event-hotels-page">

            <h2>Hotels For Events</h2>

            <div className="event-hotels-grid">

                {hotels.map(hotel => (

                    <div key={hotel.id} className="event-hotel-card">

                        {/* Hotel Image */}
                        {hotel.image && (
                            <img
                                src={`http://localhost:5000/uploads/${hotel.image}`}
                                alt={hotel.name}
                                className="event-hotel-image"
                            />
                        )}

                        <div className="event-hotel-card-body">

                            <h3>{hotel.name}</h3>

                            <p><b>Location:</b> {hotel.location}</p>

                            <p>{hotel.description}</p>

                            {/* Banquet Hall */}
                            {hotel.banquetHall && (
                                <p>
                                    <b>Banquet Hall:</b> {hotel.banquetHall}
                                </p>
                            )}

                            {hotel.cateringServices && (
                                <p>
                                    <b>Catering Services:</b> {hotel.cateringServices}
                                </p>
                            )}

                            <button className="book-event-btn">
                                Book Event
                            </button>

                        </div>

                    </div>

                ))}

            </div>

        </div>

    );

}

export default EventHotels;