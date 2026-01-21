import { useState } from "react";
import { useNavigate } from "react-router-dom";

function BookingForm() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    mobile: ""
  });

  function handleSubmit(e) {
    e.preventDefault();
    navigate("/success", { state: user });
  }

  return (
    <div className="page-center">
      <form className="form-card" onSubmit={handleSubmit}>
        <h2>Enter Details</h2>

        <input
          type="text"
          placeholder="Name"
          required
          onChange={e => setUser({ ...user, name: e.target.value })}
        />

        <input
          type="email"
          placeholder="Email"
          required
          onChange={e => setUser({ ...user, email: e.target.value })}
        />

        <input
          type="tel"
          placeholder="Mobile"
          required
          onChange={e => setUser({ ...user, mobile: e.target.value })}
        />

        <button type="submit">Confirm Booking</button>
      </form>
    </div>
  );
}

export default BookingForm;
