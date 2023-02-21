/* eslint-disable react/react-in-jsx-scope */
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Signin } from "./components/pages/auth/signin";
import { Signup } from "./components/pages/auth/signup";
import { Cinema } from "./components/pages/cinema";
import { CinemaDetail } from "./components/pages/cinema-detail";
import { Profile, PaymentPage } from "./components/pages/index";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" />
        <Route path="/admin" />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/cinema" element={<Cinema />} />
        <Route path="/cinema/:id_cinema" element={<CinemaDetail />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/payment-page" element={<PaymentPage />} />
      </Routes>
    </Router>
  );
}

export default App;
