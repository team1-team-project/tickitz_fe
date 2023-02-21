/* eslint-disable react/react-in-jsx-scope */
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ForgotPassword from "./components/pages/auth/Forgot_password";
import ResetPassword from "./components/pages/auth/reset_password";
import OrderPage from "./components/pages/order";
import OrderDetail from "./components/pages/orderDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" />
        <Route path="/admin" />
        <Route path="/sign-in" />
        <Route path="/sign-up" />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/resetpassword/:id_profile" element={<ResetPassword />} />
        <Route path="/ticket-result/:id_profile/:id_booking" element={<OrderDetail />} />
        <Route path="/order/:id_profile" element={<OrderPage />} />
      </Routes>
    </Router>
  );
}

export default App;
