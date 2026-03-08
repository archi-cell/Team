import { useState } from "react";
import API from "../services/api";
import "../styles/CreateHotel.css";

function CreateHotel() {

    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
    const [hotelType, setHotelType] = useState("STAY");
    const [image, setImage] = useState(null);

    const [roomTypes, setRoomTypes] = useState([{ type: "", charge: "" }]);
    const [travelServices, setTravelServices] = useState("");

    const [banquetHall, setBanquetHall] = useState("");
    const [cateringServices, setCateringServices] = useState("");

    const token = localStorage.getItem("token");

    const generateDescription = async () => {
        try {

            const res = await API.post(
                "/ai/generate-description",
                { name, location, hotel_type: hotelType },
                { headers: { Authorization: `Bearer ${token}` } }
            );

            setDescription(res.data.description);

        } catch (err) {
            console.error(err);
        }
    };

    const createHotel = async (e) => {

        e.preventDefault();

        try {

            const formData = new FormData();

            formData.append("name", name);
            formData.append("location", location);
            formData.append("description", description);
            formData.append("hotel_type", hotelType);

            if (image) formData.append("image", image);

            if (hotelType === "STAY") {
                formData.append("roomDetails", JSON.stringify(roomTypes));
                formData.append("travelServices", travelServices);
            } else {
                formData.append("banquetHall", banquetHall);
                formData.append("cateringServices", cateringServices);
            }

            await API.post("/hotels", formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "multipart/form-data"
                }
            });

            alert("Hotel created successfully!");

        } catch (err) {
            console.error(err);
            alert("Error creating hotel");
        }

    };

    const handleRoomChange = (index, field, value) => {

        const updated = [...roomTypes];
        updated[index][field] = value;
        setRoomTypes(updated);

    };

    const addRoom = () => setRoomTypes([...roomTypes, { type: "", charge: "" }]);

    const removeRoom = (index) =>
        setRoomTypes(roomTypes.filter((_, i) => i !== index));

    return (

        <div className="create-hotel-page">

            <h2>Create Hotel</h2>

            <form className="create-hotel-form" onSubmit={createHotel}>

                <input
                    placeholder="Hotel Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />

                <input
                    placeholder="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required
                />

                {/* <textarea
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                /> */}

                {/* <button
                    type="button"
                    className="hotel-btn hotel-btn-ghost"
                    onClick={generateDescription}
                >
                    Generate AI Description
                </button> */}

                <select
                    value={hotelType}
                    onChange={(e) => setHotelType(e.target.value)}
                >
                    <option value="STAY">Hotel For Stay</option>
                    <option value="EVENT_HOST">Hotel For Events</option>
                </select>

                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setImage(e.target.files[0])}
                />

                {hotelType === "STAY" && (
                    <div className="hotel-section-box">

                        <h3>Room Details</h3>

                        {roomTypes.map((room, index) => (

                            <div className="room-row" key={index}>

                                <input
                                    placeholder="Room Type"
                                    value={room.type}
                                    onChange={(e) =>
                                        handleRoomChange(index, "type", e.target.value)
                                    }
                                />

                                <input
                                    placeholder="Charge per Day"
                                    value={room.charge}
                                    onChange={(e) =>
                                        handleRoomChange(index, "charge", e.target.value)
                                    }
                                />

                                <button
                                    type="button"
                                    className="hotel-btn hotel-btn-danger"
                                    onClick={() => removeRoom(index)}
                                >
                                    Remove
                                </button>

                            </div>

                        ))}

                        <button
                            type="button"
                            className="hotel-btn hotel-btn-ghost"
                            onClick={addRoom}
                        >
                            Add Room
                        </button>

                        <input
                            placeholder="Travel Services"
                            value={travelServices}
                            onChange={(e) => setTravelServices(e.target.value)}
                        />

                    </div>
                )}

                {hotelType === "EVENT_HOST" && (
                    <div className="hotel-section-box">

                        <input
                            placeholder="Banquet Hall Details"
                            value={banquetHall}
                            onChange={(e) => setBanquetHall(e.target.value)}
                        />

                        <input
                            placeholder="Catering Services"
                            value={cateringServices}
                            onChange={(e) => setCateringServices(e.target.value)}
                        />

                    </div>
                )}

                <button
                    type="submit"
                    className="hotel-btn hotel-btn-primary"
                >
                    Create Hotel
                </button>

            </form>

        </div>
    );
}

export default CreateHotel;