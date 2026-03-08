import { useEffect, useState } from "react";
import API from "../services/api";
import "../styles/ExploreEvents.css";

function ExploreEvents() {

    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetchEvents();
    }, []);

    const fetchEvents = async () => {

        try {
            const res = await API.get("/events");
            setEvents(res.data);
        } catch (error) {
            console.error("Error fetching events:", error);
        }

    };

    return (

        <div className="explore-events-page">

            <h2>Explore Events</h2>

            <div className="events-grid">

            {events.map((event) => (

                <div key={event.id} className="event-card">

                    {event.image && (
                        <img
                            src={`http://localhost:5000/uploads/${event.image}`}
                            alt={event.title}
                        />
                    )}

                    <div className="event-card-body">

                        <h3>{event.title}</h3>

                        <p><b>Location:</b> {event.location}</p>

                        <p><b>Date:</b> {event.event_date}</p>

                        <p><b>Time:</b> {event.event_time}</p>

                        <p><b>Price:</b> ₹{event.ticket_price}</p>

                        <p><b>Seats Available:</b> {event.total_seats}</p>

                        <p>{event.description}</p>

                        <button className="book-btn">
                            Book Ticket
                        </button>

                    </div>

                </div>

            ))}

            </div>

        </div>

    );

}

export default ExploreEvents;