import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Navbar.module.css';
import Profile from './Profile'; // Adjust the path as needed

const Navbar = ({scrollToTarget}) => {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg ${styles.navbar}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" style={{ fontWeight: 700, fontFamily: 'cursive' }}>
            Task Manager
          </Link>
          <div className="d-flex justify-content-end align-items-center">
            <Link className="nav-link" style={{ fontWeight: 20 }}>
              <img
                src="\istockphoto-1300845620-612x612-removebg-preview.png"
                alt=""
                style={{ width: '50px', height: '50px', cursor: 'pointer' }}
                onClick={scrollToTarget} // Render Profile component onClick
              />
            </Link>
          </div>
          {/* <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div id="navbarNav" className={`collapse navbar-collapse ${styles.navshift}`}>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/" style={{ fontWeight: 700 }}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about" style={{ fontWeight: 700 }}>
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/features" style={{ fontWeight: 700 }}>
                  Features
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/connect" style={{ fontWeight: 700 }}>
                  Connect Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/profile" style={{ fontWeight: 700 }}>
                  Profile
                </Link>
              </li>
            </ul>
          </div> */}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
