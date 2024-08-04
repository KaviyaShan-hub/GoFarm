import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login";
import PaymentFailure from "./Components/PaymentFailure";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" Component={Login} />
          <Route path="/paymentfailure" Component={PaymentFailure} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
