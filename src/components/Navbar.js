import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg bg-${props.Bcolor} text-white`}>
      <div className="container-fluid   ">
        <a className={`navbar-brand text-${props.Tcolor}`} href="#">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className={`nav-link active text-${props.Tcolor}`}
                aria-current="page"
                href="#"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link text-${props.Tcolor}`} href="#">
                {props.about}
              </a>
            </li>
          </ul>
        </div>
      </div>
   
      <div className="form-check form-switch">
        <input
          onClick={props.ToggleBg}
          className="form-check-input "
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
        />
        <label
          className="form-check-label "
          style={props.modecolor}
          htmlFor="flexSwitchCheckDefault"
        >
          {props.mode}
        </label>
      </div>
      <button type="button" onClick={props.setGreen} style={props.NavGreen} className="btn btn-outline-success mx-2">
        greenMode
      </button>
      <button type="button" onClick={props.setRed} style={props.NavGreen} className="btn btn-outline-danger mx-2">
        redMode
      </button>
      <button type="button" onClick={props.setYellow} style={props.NavGreen} className="btn btn-outline-warning mx-2">
      yellowModes
      </button>
    </nav>
  );
}

navbar.propTypes = {
  title: PropTypes.string,
  about: PropTypes.string,
};

navbar.defaultProps = {
  title: "default title",
  about: "d about",
};
