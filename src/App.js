/* eslint-disable react/react-in-jsx-scope */
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ForgotPassword from "./components/pages/auth/Forgot_password";
import ResetPassword from "./components/pages/auth/reset_password";
import OrderPage from "./components/pages/order";
import OrderDetail from "./components/pages/orderDetail";
import { Signin } from "./components/pages/auth/signin";
import { Signup } from "./components/pages/auth/signup";
import { Cinema } from "./components/pages/cinema";
import { CinemaDetail } from "./components/pages/cinema-detail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" />
        <Route path="/admin" />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/resetpassword/:id_profile" element={<ResetPassword />} />
        <Route path="/ticket-result/:id_profile/:id_booking" element={<OrderDetail />} />
        <Route path="/order/:id_profile" element={<OrderPage />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/cinema" element={<Cinema />} />
        <Route path="/cinema/:id_cinema" element={<CinemaDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
