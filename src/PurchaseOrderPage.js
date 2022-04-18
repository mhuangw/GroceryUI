import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const url = "https://cs6310-14.azurewebsites.net/order/purchase_order";

function PurchaseOrderPage() {
  const [storeName, setStoreName] = useState("");
  const [orderId, setOrderId] = useState("");

  const purchaseOrder = () => {
    axios
      .post(url, {
        storeName: storeName,
        orderId: orderId,
      })
      .then(() => {
        alert("Order purchased!");
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
                onChange={(e) => setOrderId(e.target.value)}
              />
            </Form.Group>
            <Button variant="secondary" onClick={() => purchaseOrder()}>
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

export default PurchaseOrderPage;
