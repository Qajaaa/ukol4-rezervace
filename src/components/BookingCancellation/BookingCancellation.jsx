import './style.css'

export const BookingCancellation = ({ cancellationPolicy }) => {
    return (
      <div className="summary__cancel">
        <h3>Storno podmínky</h3>
        <div className="summary__cancel-text">
          {cancellationPolicy.map((policy, index) => (
            <p key={index}>{policy}</p>
          ))}
        </div>
      </div>
    );
  };