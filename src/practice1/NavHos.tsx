import { Link } from "react-router-dom"

const NavHos = () => {
    return (
        <div>
            
        <nav
        className="navbar navbar-expand-lg navbar-light bg-white shadow-sm"
        style={{ padding: "10px" }}
      >
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <a href="#" className="ms-4">
              <img
                src="data:image/png;base64,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"
                alt="img"
                height="25"
              />
            </a>
            <a className="nav-link ms-5" style={{ color: "black" }} href="#">
              Race Series
            </a>
          </div>
          <div className="d-flex align-items-center">
            <ul className="nav align-items-center mb-0" style={{ gap: "30px" }}>
              <li className="nav-item">
                {/* <a href="#" style={{ color: "black", textDecoration: "none" }}>
                  <strong>AUTHENTICS</strong>
                </a> */}
                <Link style={{ color: "black", textDecoration: "none" }} to="/adddeatils">REGISTER</Link>
              </li>
              <li className="nav-item">
                {/* <a href="#" style={{ color: "black", textDecoration: "none" }}>
                  <strong>STORE</strong>
                </a> */}
                <Link to='/findblood' style={{ color: "black", textDecoration: "none" }}>FIND BLOOD</Link>
              </li>
              <li className="nav-item">
                <a href="#" style={{ color: "black", textDecoration: "none" }}>
                  <strong>TICKET</strong>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" style={{ color: "black", textDecoration: "none" }}>
                  <strong>HOSPITALITY</strong>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" style={{ color: "black", textDecoration: "none" }}>
                  <strong>EXPERIANCES</strong>
                </a>
              </li>
              <li className="nav-item">
                <button className="btn btn-dark me-2" >HEY</button>
                <button className="btn btn-danger" >WOW</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
        </div>
    )
}

export default NavHos