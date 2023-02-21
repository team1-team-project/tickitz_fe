/* eslint-disable react/react-in-jsx-scope */
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import store from "./utils/redux";
import { Signin } from "./components/pages/auth/signin";
import { Signup } from "./components/pages/auth/signup";
import { Cinema } from "./components/pages/cinema";
import { CinemaDetail } from "./components/pages/cinema-detail";

function App() {
  return (
    <Provider store={store}>
      <Router>
      <Routes>
        <Route path="/" />
        <Route path="/admin" />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/cinema" element={<Cinema />} />
        <Route path="/cinema/:id_cinema" element={<CinemaDetail />} />
      </Routes>
    </Router>
    </Provider>
  );
}

export default App;
