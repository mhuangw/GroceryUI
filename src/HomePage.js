import "./App.css";
import React from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BiStore } from "react-icons/bi";
import { MdOutlineInventory2, MdOutlineAttachMoney } from "react-icons/md";
import { IoIosAirplane } from "react-icons/io";
import { GiDeliveryDrone } from "react-icons/gi";
import { BsFillPersonFill } from "react-icons/bs";

import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Welcome, {localStorage.getItem("account")}!</p>
        <p>Select a category to get started: </p>

        <div>
          <Link to="/StoresPage">
            <Button className="buttonStyle" variant="secondary" size="lg">
              <BiStore /> Stores
            </Button>
          </Link>
        </div>
        <div>
          <Link to="/ItemsPage">
            <Button className="buttonStyle" variant="secondary" size="lg">
              <MdOutlineInventory2 /> Items
            </Button>
          </Link>
        </div>
        <div>
          <Link to="/PilotsPage">
            <Button className="buttonStyle" variant="secondary" size="lg">
              <IoIosAirplane /> Pilots
            </Button>
          </Link>
        </div>
        <div>
          <Link to="/DronesPage">
            <Button className="buttonStyle" variant="secondary" size="lg">
              <GiDeliveryDrone /> Drones
            </Button>
          </Link>
        </div>
        <div>
          <Link to="/CustomersPage">
            <Button className="buttonStyle" variant="secondary" size="lg">
              <BsFillPersonFill /> Customers
            </Button>
          </Link>
        </div>
        <div>
          <Link to="/OrdersPage">
            <Button className="buttonStyle" variant="secondary" size="lg">
              <MdOutlineAttachMoney /> Orders
            </Button>
          </Link>
        </div>
        {isAuthenticated && (
          <>
            <div style={{ marginTop: "20px", fontSize: "large" }}>
              <Link to="/">
                <Button
                  className="buttonStyle"
                  variant="secondary"
                  size="sm"
                  onClick={() => handleLogout()}
                >
                  Log Out
                </Button>
              </Link>
            </div>
          </>
        )}
        <hr />
        <div style={{ fontSize: "medium" }}>
          Built by CS6310 Spring 2022 Group 14
          <br />
          Felice A. Ferri, Mark Luka, Michael Huang, Noah Ellis, Sujith Mohan
        </div>
      </header>
    </div>
  );
};

export default HomePage;
