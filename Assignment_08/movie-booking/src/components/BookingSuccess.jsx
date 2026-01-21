import { useLocation } from "react-router-dom";
import { useState } from "react";

function BookingSuccess() {
  const { state } = useLocation();

  const [bookingId] = useState(() =>
    Math.floor(Math.random() * 1000000)
  );

  return (
    <div className="page-center">
      <div className="success-card">
        <h2>🎉 Booking Successful</h2>

        <p><strong>Booking ID:</strong> #{bookingId}</p>
        <p><strong>Name:</strong> {state?.name}</p>
        <p><strong>Email:</strong> {state?.email}</p>
        <p><strong>Mobile:</strong> {state?.mobile}</p>

        <span className="success-badge">Enjoy the Movie 🎬</span>
      </div>
    </div>
  );
}

export default BookingSuccess;
