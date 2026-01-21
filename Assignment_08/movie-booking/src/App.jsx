import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";
import BookingForm from "./components/BookingForm";
import BookingSuccess from "./components/BookingSuccess";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/book" element={<BookingForm />} />
          <Route path="/success" element={<BookingSuccess />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
