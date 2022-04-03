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

function StoresPage() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Link to="/StoresPage">
            <Button className="buttonStyle" variant="secondary" size="lg">
              Make Store
            </Button>
          </Link>
        </div>
        <div>
          <Button className="buttonStyle" variant="secondary" size="lg">
            Display Stores
          </Button>
        </div>
        <div style={{ marginTop: "20px", fontSize: "large" }}>
          <Link to="/">Back to Home</Link>
        </div>
      </header>
    </div>
  );
}

export default StoresPage;
