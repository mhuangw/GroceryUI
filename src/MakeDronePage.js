import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const url = "https://cs6310-14.azurewebsites.net/drone/make_drone";

function MakeDronePage() {
  const [storeName, setStoreName] = useState("");
  const [id, setId] = useState("");
  const [weightCapacity, setWeightCapacity] = useState(0);
  const [tripsLeft, setTripsLeft] = useState(0);

  const makeDrone = () => {
    axios
      .post(url, {
        storeName: storeName,
        id: id,
        weightCapacity: weightCapacity,
        trips_left: tripsLeft,
      })
      .then(() => {
        alert("Drone added!");
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
                onChange={(e) => setId(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                placeholder="Weight Capacity"
                onChange={(e) => setWeightCapacity(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                placeholder="Remaining Trips"
                onChange={(e) => setTripsLeft(e.target.value)}
              />
            </Form.Group>
            <Button variant="secondary" onClick={() => makeDrone()}>
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

export default MakeDronePage;
