import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const url = "https://cs6310-14.azurewebsites.net/order/request_item";

function RequestItemPage() {
  const [storeName, setStoreName] = useState("");
  const [orderId, setOrderId] = useState("");
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);

  const requestItem = () => {
    axios
      .post(url, {
        storeName: storeName,
        orderId: orderId,
        name: name,
        quantity: quantity,
        price: price,
      })
      .then(() => {
        alert("Item requested!");
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
            <Form.Group className="mb-3">
              <Form.Control
                placeholder="Item Name"
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                placeholder="Item Quantity"
                onChange={(e) => setQuantity(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                placeholder="Unit Price"
                onChange={(e) => setPrice(e.target.value)}
              />
            </Form.Group>
            <Button variant="secondary" onClick={() => requestItem()}>
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

export default RequestItemPage;
