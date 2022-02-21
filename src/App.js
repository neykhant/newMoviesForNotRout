//jshint ignore:start
import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import Customer from "./components/Customer";
import Rental from "./components/Rental";
import NotFound from "./components/NotFound";
import MoviesForm from "./components/MoviesForm";
import LoginForm from "./components/Loginform";


function App() {
  return (
    <React.Fragment>
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/movies/:id" element={<MoviesForm/>} />
          <Route path="/movies" element={<Movies/>} />
          <Route path="/customer" element={<Customer/>} />
          <Route path="/rental" element={<Rental/>} />
          <Route path="/login" element={<LoginForm/>} />
          <Route path="/" element={<Navigate replace to="/movies" />} />
          <Route path="*" element={<NotFound/>} />
          {/* <Route path="*" element={<Navigate replace to="/not-found" />} />
          <Route path="/not-fount" element={<NotFound/>} /> */}
          
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
