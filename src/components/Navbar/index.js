import React from 'react'
import './index.css'

const Navbar = () => (
  <>
    <div id="navbar">
      <nav class="navbar navbar-expand-lg navbar-light bg-white p-3">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a className="logo navbar-brand" href="#about">
            <strong>Harikrishna Alwala</strong>
          </a>
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0"></ul>
          <div class="form-inline my-2 my-lg-0">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
              <li class="nav-item active">
                <a className="links nav-link" href="#about">
                  <b>About</b> <span></span>
                </a>
              </li>
              <li class="nav-item active">
                <a className=" links nav-link" href="#projects">
                  <strong>Projects</strong>
                </a>
              </li>
              <li class="nav-item active">
                <a className=" links nav-link" href="#skills">
                  <strong>Skills</strong>
                </a>
              </li>
              <li class="nav-item active">
                <a className="links nav-link" href="#contacts">
                  <b>Contacts</b>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </>
)

export default Navbar
