import { useState } from "react";
import axios from "axios";
import "../styles/CreateEvent.css";

function CreateEvent() {

    const [title, setTitle] = useState("");
    const [hotelName, setHotelName] = useState("");
    const [location, setLocation] = useState("");
    const [eventDate, setEventDate] = useState("");
    const [eventTime, setEventTime] = useState("");
    const [description, setDescription] = useState("");
    const [ticketPrice, setTicketPrice] = useState("");
    const [totalSeats, setTotalSeats] = useState("");
    const [image, setImage] = useState(null);

    const generateDescription = async () => {
        try {

            if (!title) {
                alert("Please enter event title first");
                return;
            }

            const res = await axios.post(
                "http://localhost:5000/api/ai/generate-description",
                { title }
            );

            setDescription(res.data.description);

        } catch (error) {
            console.error(error);
            alert("AI description generation failed");
        }
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const token = localStorage.getItem("token");

            if (!token) {
                alert("You must login first");
                return;
            }

            const formData = new FormData();

            formData.append("title", title);
            formData.append("hotel_name", hotelName);
            formData.append("location", location);
            formData.append("event_date", eventDate);
            formData.append("event_time", eventTime);
            formData.append("description", description);
            formData.append("ticket_price", ticketPrice);
            formData.append("total_seats", totalSeats);
            formData.append("image", image);

            await axios.post(
                "http://localhost:5000/api/events/create",
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "multipart/form-data"
                    }
                }
            );

            alert("Event Created Successfully");

            setTitle("");
            setHotelName("");
            setLocation("");
            setEventDate("");
            setEventTime("");
            setDescription("");
            setTicketPrice("");
            setTotalSeats("");
            setImage(null);

        } catch (error) {

            console.error(error);

            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert("Something went wrong");
            }

        }
    };

    return (

        <div className="create-event-page">

            <h2>Create Event</h2>

            <form
                className="create-event-form"
                onSubmit={handleSubmit}
            >

                <input
                    type="text"
                    placeholder="Event Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Hotel Name"
                    value={hotelName}
                    onChange={(e) => setHotelName(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />

                <input
                    type="date"
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                />

                <input
                    type="time"
                    value={eventTime}
                    onChange={(e) => setEventTime(e.target.value)}
                />

                <button
                    type="button"
                    className="create-btn create-btn-ghost"
                    onClick={generateDescription}
                >
                    Generate Description (AI)
                </button>

                <textarea
                    placeholder="Event Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />

                <input
                    type="number"
                    placeholder="Ticket Price"
                    value={ticketPrice}
                    onChange={(e) => setTicketPrice(e.target.value)}
                />

                <input
                    type="number"
                    placeholder="Total Seats"
                    value={totalSeats}
                    onChange={(e) => setTotalSeats(e.target.value)}
                />

                <input
                    type="file"
                    onChange={(e) => setImage(e.target.files[0])}
                />

                <button
                    type="submit"
                    className="create-btn create-btn-primary"
                >
                    Create Event
                </button>

            </form>

        </div>
    );
}

export default CreateEvent;