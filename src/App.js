/* eslint-disable react/react-in-jsx-scope */
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminAdd from "./components/pages/admin-add";
import AdminEdit from "./components/pages/admin-edit";
import Home from "./components/pages/home";
import MovieDetail from "./components/pages/movieDetail";
import { Signin } from "./components/pages/auth/signin";
import { Signup } from "./components/pages/auth/signup";
import { Cinema } from "./components/pages/cinema";
import { CinemaDetail } from "./components/pages/cinema-detail";
import { Profile, PaymentPage } from "./components/pages/index";
import store from "./utils/redux";

function App() {
  return (
    <Provider store={store}>
      <Router>
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
    </Provider>
  );
}

export default App;
