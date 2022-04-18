import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const url = "https://cs6310-14.azurewebsites.net/order/start_order";

function StartOrderPage() {
  const [storeName, setStoreName] = useState("");
  const [id, setId] = useState("");
  const [droneId, setDroneId] = useState("");
  const [customerAccount, setcustomerAccount] = useState("");

  const startOrder = () => {
    axios
      .post(url, {
        storeName: storeName,
        id: id,
        droneId: droneId,
        customerAccount: customerAccount,
      })
      .then(() => {
        alert("Order started!");
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
                placeholder="Order ID"
                onChange={(e) => setId(e.target.value)}
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
                placeholder="Customer Account"
                onChange={(e) => setcustomerAccount(e.target.value)}
              />
            </Form.Group>
            <Button variant="secondary" onClick={() => startOrder()}>
              Submit
            </Button>
            <div style={{ marginTop: "20px" }}>
              <Link to="/OrdersPage">
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

export default StartOrderPage;
