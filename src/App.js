/* eslint-disable react/react-in-jsx-scope */
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Profile, PaymentPage } from "./components/pages/index";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" />
        <Route path="/admin" />
        <Route path="/sign-in" />
        <Route path="/sign-up" />
        <Route path="/profile" element={<Profile />} />
        <Route path="/payment-page" element={<PaymentPage />} />
      </Routes>
    </Router>
  );
}

export default App;
