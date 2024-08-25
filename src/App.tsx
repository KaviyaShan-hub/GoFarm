import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login";
import PaymentFailure from "./Components/PaymentFailure";
import fournotfour from "./Components/fournotfour";
import NoInternet from "./Components/NoInternet";
import ThankYou from "./Components/ThankYou";
import Profile from "./Components/Profile";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" Component={Login} />
          <Route path="/paymentfailure" Component={PaymentFailure} />
          <Route path="/fournotfour" Component={fournotfour} />
          <Route path="/nointernet" Component={NoInternet} />
          <Route path="/thankyou" Component={ThankYou} />
          <Route path="/profile" Component={Profile} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
