import './style.css'

export const BookingServices = ({ services }) => {
    return (
      <div className="summary__services">
        <h3>Doplňkové služby</h3>
        {services.map((service, index) => (
          <div key={index} className="summary__service">
            {service}
          </div>
        ))}
      </div>
    );
  };