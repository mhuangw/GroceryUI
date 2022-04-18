import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const url = "https://cs6310-14.azurewebsites.net/drone/fly_drone";

function FlyDronePage() {
  const [storeName, setStoreName] = useState("");
  const [droneId, setDroneId] = useState("");
  const [pilotAccount, setPilotAccount] = useState("");

  const flyDrone = () => {
    axios
      .post(url, {
        storeName: storeName,
        droneId: droneId,
        pilotAccount: pilotAccount,
      })
      .then(() => {
        alert("Drone assigned!");
        document.location.reload();
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Form>
            <Form.Group className="mb-3">
              <Form.Control
                placeholder="Store Name"
                onChange={(e) => setStoreName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                placeholder="Drone ID"
                onChange={(e) => setDroneId(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                placeholder="Pilot Account ID"
                onChange={(e) => setPilotAccount(e.target.value)}
              />
            </Form.Group>
            <Button variant="secondary" onClick={() => flyDrone()}>
              Submit
            </Button>
            <div style={{ marginTop: "20px" }}>
              <Link to="/DronesPage">
                <Button className="buttonStyle" variant="secondary" size="sm">
                  Go Back
                </Button>
              </Link>
            </div>
          </Form>
        </div>
      </header>
    </div>
  );
}

export default FlyDronePage;
