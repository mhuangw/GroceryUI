import "./App.css";
import React from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BiStore } from "react-icons/bi";
import { MdOutlineInventory2, MdOutlineAttachMoney } from "react-icons/md";
import { IoIosAirplane } from "react-icons/io";
import { GiDeliveryDrone } from "react-icons/gi";
import { BsFillPersonFill } from "react-icons/bs";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="App">
      <header className="App-header">
        <MdOutlineLocalGroceryStore size={100} />
        <p>Welcome to the Grocery Express Delivery Service!</p>
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
