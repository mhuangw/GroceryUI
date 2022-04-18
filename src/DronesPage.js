import "./App.css";
import React from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function DronesPage() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Link to="/MakeDronePage">
            <Button className="buttonStyle" variant="secondary" size="lg">
              Make Drone
            </Button>
          </Link>
        </div>
        <div>
          <Link to="/DisplayDronesPage">
            <Button className="buttonStyle" variant="secondary" size="lg">
              Display Drones
            </Button>
          </Link>
        </div>
        <div>
          <Link to="/FlyDronePage">
            <Button className="buttonStyle" variant="secondary" size="lg">
              Fly Drone
            </Button>
          </Link>
        </div>
        <div style={{ marginTop: "20px", fontSize: "large" }}>
          <Link to="/HomePage">
            <Button className="buttonStyle" variant="secondary" size="sm">
              Back to Home
            </Button>
          </Link>
        </div>
      </header>
    </div>
  );
}

export default DronesPage;
