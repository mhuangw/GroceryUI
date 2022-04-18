import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const url = "https://cs6310-14.azurewebsites.net/store/sell_item";

function SellItemPage() {
  const [storeName, setStoreName] = useState("");
  const [itemName, setItemName] = useState("");
  const [itemWeight, setItemWeight] = useState(0);

  const sellItem = () => {
    axios
      .post(url, {
        storeName: storeName,
        name: itemName,
        weight: itemWeight,
      })
      .then(() => {
        alert("Item added!");
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
                placeholder="Item Name"
                onChange={(e) => setItemName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                placeholder="Item Weight"
                onChange={(e) => setItemWeight(e.target.value)}
              />
            </Form.Group>
            <Button variant="secondary" onClick={() => sellItem()}>
              Submit
            </Button>
            <div style={{ marginTop: "20px" }}>
              <Link to="/ItemsPage">
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

export default SellItemPage;
