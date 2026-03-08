import { useEffect, useState } from "react";
import API from "../services/api";
import "../styles/AdminEvents.css";

function AdminEvents() {

    const [events, setEvents] = useState([]);
    const [editingEvent, setEditingEvent] = useState(null);

    const [title, setTitle] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");

    const token = localStorage.getItem("token");

    useEffect(() => {
        fetchEvents();
    }, []);

    const fetchEvents = async () => {
        try {
            const res = await API.get("/events/admin", {
                headers: { Authorization: `Bearer ${token}` }
            });
            setEvents(res.data);
        } catch (error) {
            console.error(error);
        }
    };

    const deleteEvent = async (id) => {
        try {
            await API.delete(`/events/${id}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            fetchEvents();
        } catch (error) {
            console.error(error);
        }
    };

    const startEdit = (event) => {
        setEditingEvent(event.id);
        setTitle(event.title);
        setLocation(event.location);
        setDescription(event.description);
    };

    const updateEvent = async () => {
        try {
            await API.put(`/events/${editingEvent}`,
                { title, location, description },
                { headers: { Authorization: `Bearer ${token}` } }
            );

            setEditingEvent(null);
            fetchEvents();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="admin-events">

            <h2>Admin Events</h2>

            {editingEvent && (
                <div className="edit-form">

                    <h3>Edit Event</h3>

                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Event Title"
                    />

                    <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="Location"
                    />

                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Description"
                    />

                    <button
                        className="admin-btn admin-btn-primary"
                        onClick={updateEvent}
                    >
                        Update Event
                    </button>

                </div>
            )}

            {events.map((event) => (

                <div key={event.id} className="admin-event-card">

                    <h3>{event.title}</h3>
                    <p><b>Location:</b> {event.location}</p>
                    <p>{event.description}</p>

                    {event.image && (
                        <img
                            src={`http://localhost:5000/uploads/${event.image}`}
                            alt={event.title}
                            width="200"
                        />
                    )}

                    <br /><br />

                    <button
                        className="admin-btn admin-btn-primary"
                        onClick={() => startEdit(event)}
                    >
                        Edit
                    </button>

                    <button
                        className="admin-btn admin-btn-danger"
                        onClick={() => deleteEvent(event.id)}
                    >
                        Delete
                    </button>

                </div>

            ))}

        </div>
    );
}

export default AdminEvents;