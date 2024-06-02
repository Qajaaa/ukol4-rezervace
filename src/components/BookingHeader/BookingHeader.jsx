import './style.css'

export const BookingHeader = ({ photoUrl, hotelName, address, city, rating }) => {
    return (
      <div className="summary__head">
        <img className="summary__photo" src={photoUrl} alt="Hotel" />
        <div className="summary__head-property">
          <h3 className="summary__name">{hotelName}</h3>
          <div className="summary__address">{address}</div>
          <div className="summary__city">{city}</div>
          <div className="summary__rating">{rating}</div>
        </div>
      </div>
    );
  };