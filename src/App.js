/* eslint-disable react/react-in-jsx-scope */
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
<<<<<<< HEAD
import AdminAdd from "./components/pages/admin-add";
import AdminEdit from "./components/pages/admin-edit";
import Home from "./components/pages/home";
import MovieDetail from "./components/pages/movieDetail";
=======
import ForgotPassword from "./components/pages/auth/Forgot_password";
import ResetPassword from "./components/pages/auth/reset_password";
>>>>>>> f7faa94 (Finish Integration)
import { Signin } from "./components/pages/auth/signin";
import { Signup } from "./components/pages/auth/signup";
import { Cinema } from "./components/pages/cinema";
import { CinemaDetail } from "./components/pages/cinema-detail";
import { Profile, PaymentPage } from "./components/pages/index";
import OrderPage from "./components/pages/order";
import OrderDetail from "./components/pages/orderDetail";
import store from "./utils/redux";

function App() {
  return (
    <Provider store={store}>
      <Router>
<<<<<<< HEAD
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin-add" element={<AdminAdd />} />
        <Route path="/admin-edit" element={<AdminEdit />} />
        <Route path="/sign-in" />
        <Route path="/sign-up" />
        <Route path="/movie-detail/:movieId" element={<MovieDetail />} />
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
=======
        <Routes>
          <Route path="/" />
          <Route path="/admin" />
          <Route path="/sign-in" element={<Signin />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/cinema" element={<Cinema />} />
          <Route path="/cinema/:id_cinema" element={<CinemaDetail />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/payment-page" element={<PaymentPage />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route
            path="/resetpassword/:id_profile"
            element={<ResetPassword />}
          />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/order/:id_booking" element={<OrderDetail />} />
        </Routes>
      </Router>
>>>>>>> f7faa94 (Finish Integration)
    </Provider>
  );
}

export default App;
