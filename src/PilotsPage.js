import "./App.css";
import React from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function PilotsPage() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Link to="/MakePilotPage">
            <Button className="buttonStyle" variant="secondary" size="lg">
              Make Pilot
            </Button>
          </Link>
        </div>
        <div>
          <Link to="/DisplayPilotsPage">
            <Button className="buttonStyle" variant="secondary" size="lg">
              Display Pilots
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

export default PilotsPage;
