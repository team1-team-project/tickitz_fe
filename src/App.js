/* eslint-disable react/react-in-jsx-scope */
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminAdd from "./components/pages/admin-add";
import AdminEdit from "./components/pages/admin-edit";
import Home from "./components/pages/home";
import MovieDetail from "./components/pages/movieDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin-add" element={<AdminAdd />} />
        <Route path="/admin-edit" element={<AdminEdit />} />
        <Route path="/sign-in" />
        <Route path="/sign-up" />
        <Route path="/movie-detail" element={<MovieDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
