import "../styles/EventCard.jsx";

const EventCard = ({ event }) => {

    return (

        <div className="event-card">

            <img src={event.image} alt={event.name} />

            <h3>{event.name}</h3>

            <p>{event.location}</p>

            <p>{event.date}</p>

            <p>{event.time}</p>

            <p>{event.description}</p>

        </div>

    );
};

export default EventCard;
