import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import MainContext from "../context/MainContext";
import RegistrationInputs from "../components/RegistrationInputs";
const Registration = () => {
  return (
    <div className="center">
      <h2>REGISTRATION</h2>

      <RegistrationInputs />
    </div>
  );
};

export default Registration;
