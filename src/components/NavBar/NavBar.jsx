import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { CartWidget } from "../CartWidget/CartWidget";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";

export const NavBar = () => {
  return (
    <nav className="NavBar d-flex between bg-light">
      <Navbar className="NavBar d-flex justify-content-between bg-light">
        <Link className="btn btn-secondary btn-lg m-2" to="/">
          Libros
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <NavDropdown className="btn btn-secondary btn-lg m-2" title="Genero">
          <NavDropdown.Item>
            <Link
              className="btn btn-secondary btn-lg m-2"
              to="/productos/ROMANCE"
            >
              Romance
            </Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link
              className="btn btn-secondary btn-lg m-2"
              to="/productos/FICCION"
            >
              Ficcion
            </Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link
              className="btn btn-secondary btn-lg m-2"
              to="/productos/TERROR"
            >
              Terror
            </Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link
              className="btn btn-secondary btn-lg m-2"
              to="/productos/FANTASIA"
            >
              Fantasia
            </Link>
          </NavDropdown.Item>
        </NavDropdown>
        <div className="d-flex justify-end">
          <Link className="link" to="/cart">
            <CartWidget />
          </Link>
        </div>
      </Navbar>
    </nav>
  );
};
