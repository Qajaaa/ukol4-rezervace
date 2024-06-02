import './style.css';
import { BookingCancellation } from '../BookingCancellation/BookingCancellation.jsx';
import { BookingDetail } from '../BookingDetail/BookingDetail.jsx';
import { BookingHeader } from '../BookingHeader/BookingHeader.jsx';
import { BookingRoom } from '../BookingRoom/BookingRoom.jsx';
import { BookingServices } from '../BookingServices/BookingServices.jsx';

export const BookingSummary = ({ data }) => {
  return (
    <div className="summary">
      <h2 className="summary__title">Booking Summary</h2>
      <BookingHeader 
        photoUrl={data.photoUrl}
        hotelName={data.hotelName}
        address={data.address}
        city={data.city}
        rating={data.rating}
      />
      <BookingRoom 
        roomName={data.roomName}
        roomType={data.roomType}
        roomPrice={data.roomPrice}
      />
      <BookingDetail 
        bookingNumber={data.bookingNumber}
        dates={data.dates}
        guests={data.guests}
        services={data.services}
        total={data.total}
        checkIn={data.checkIn}
        checkOut={data.checkOut}
      />
      <BookingServices services={data.additionalServices} />
      <BookingCancellation cancellationPolicy={data.cancellationPolicy} />
    </div>
  );
};

