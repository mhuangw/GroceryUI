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
          <Button className="buttonStyle" variant="secondary" size="lg">
            Make Pilot
          </Button>
        </div>
        <div>
          <Button className="buttonStyle" variant="secondary" size="lg">
            Display Pilots
          </Button>
        </div>
        <div style={{ marginTop: "20px", fontSize: "large" }}>
          <Link to="/">Back to Home</Link>
        </div>
      </header>
    </div>
  );
}

export default PilotsPage;