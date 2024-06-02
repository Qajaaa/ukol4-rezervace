import './style.css'

export const BookingRoom = ({ roomName, roomType, roomPrice }) => {
    return (
      <div className="summary__head-room">
        <h3 className="summary__name">{roomName}</h3>
        <div className="summary__room-type">{roomType}</div>
        <div className="summary__room-price">{roomPrice}</div>
      </div>
    );
  };
  