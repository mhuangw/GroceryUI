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

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MdOutlineLocalGroceryStore size={100} />
        <p>Welcome to the Grocery Express Delivery Service!</p>
        <p>Select a category to get started: </p>

        <div>
          <Button className="buttonStyle" variant="secondary" size="lg">
            <BiStore /> Stores
          </Button>
        </div>
        <div>
          <Button className="buttonStyle" variant="secondary" size="lg">
            <MdOutlineInventory2 /> Items
          </Button>
        </div>
        <div>
          <Button className="buttonStyle" variant="secondary" size="lg">
            <IoIosAirplane /> Pilots
          </Button>
        </div>
        <div>
          <Button className="buttonStyle" variant="secondary" size="lg">
            <GiDeliveryDrone /> Drones
          </Button>
        </div>
        <div>
          <Button className="buttonStyle" variant="secondary" size="lg">
            <BsFillPersonFill /> Customers
          </Button>
        </div>
        <div>
          <Button className="buttonStyle" variant="secondary" size="lg">
            <MdOutlineAttachMoney /> Orders
          </Button>
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
}
{
}
export default App;
