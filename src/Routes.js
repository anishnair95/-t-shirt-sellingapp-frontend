import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./core/Home";
import Signin from "./user/Signin";
import Signup from "./user/Signup";
export default function Navigations() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/cart" element={<Home />} />
          <Route exact path="/user/dashboard" element={<Home />} />
          <Route exact path="/admin/dashboard" element={<Home />} />
          <Route exact path="/admin/signup" element={<Signup />} />
          <Route exact path="/admin/signin" element={<Signin />} />
          <Route exact path="/admin/signout" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}
