/* eslint-disable react/react-in-jsx-scope */
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import store from "./utils/redux";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" />
          <Route path="/admin" />
          <Route path="/sign-in" />
          <Route path="/sign-up" />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
