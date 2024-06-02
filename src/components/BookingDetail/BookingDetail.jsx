import './style.css'

export const BookingDetail = ({ bookingNumber, dates, guests, services, total, checkIn, checkOut }) => {
    return (
      <div className="summary__detail">
        <h3>Detail rezervace</h3>
        <div className="summary__number">Číslo: {bookingNumber}</div>
        <div className="summary__dates">Pobyt: {dates}</div>
        <div className="summary__guests">Hosté: {guests}</div>
        <div className="summary__services">Stravování: {services}</div>
        <div className="summary__room-total">{total}</div>
        <div className="summary__check-in">Check-in: {checkIn}</div>
        <div className="summary__check-out">Check-out: {checkOut}</div>
      </div>
    );
  };