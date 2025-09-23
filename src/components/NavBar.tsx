import React from "react";

const NavBar: React.FC = () => {
  return (
    <div style={{ marginTop: "70px" }}>
      <nav
        className="navbar navbar-expand-lg custom-navbar bg-black sticky-top"
        style={{ marginBottom: "10px" }}
      >
        <div className="container-fluid">
          <img
            height="90"
            src="https://i.pinimg.com/736x/d7/05/3a/d7053a0bfa0e97d5b781807a187b8739.jpg"
            alt="logo"
          />
          <div className="collapse navbar-collapse show ">
            <ul className="navbar-nav" style={{ marginLeft: "10px" }}>
              <li
                className="nav-item"
                style={{ marginLeft: "50px", fontSize: "20px" }}
              >
                <a className="nav-link" href="#" style={{ color: "white" }}>
                  Schedule
                </a>
              </li>
              <li
                className="nav-item"
                style={{ marginLeft: "50px", fontSize: "20px" }}
              >
                <a className="nav-link" href="#" style={{ color: "white" }}>
                  Results
                </a>
              </li>
              <li className="nav-item" style={{ marginLeft: "50px" }}>
                <a
                  className="nav-link"
                  href="#"
                  style={{ color: "white", fontSize: "20px" }}
                >
                  News
                </a>
              </li>
              <li className="nav-item" style={{ marginLeft: "50px" }}>
                <a
                  className="nav-link"
                  href="#"
                  style={{ color: "white", fontSize: "20px" }}
                >
                  Drivers
                </a>
              </li>
              <li className="nav-item" style={{ marginLeft: "50px" }}>
                <a
                  className="nav-link"
                  href="#"
                  style={{ color: "white", fontSize: "20px" }}
                >
                  Teams
                </a>
              </li>
              <li className="nav-item" style={{ marginLeft: "50px" }}>
                <a
                  className="nav-link"
                  href="#"
                  style={{ color: "white", fontSize: "20px" }}
                >
                  Fantasy & Gaming
                </a>
              </li>
              <li className="nav-item" style={{ marginLeft: "50px" }}>
                <a
                  className="nav-link"
                  href="#"
                  style={{ color: "white", fontSize: "20px" }}
                >
                  F1 Members' Area
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
