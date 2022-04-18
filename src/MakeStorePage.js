import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const url = "https://cs6310-14.azurewebsites.net/store/make_store";

function MakeStorePage() {
  const [storeName, setStoreName] = useState("");
  const [storeRevenue, setStoreRevenue] = useState(0);

  const makeStore = () => {
    axios
      .post(url, {
        name: storeName,
        totalRevenue: storeRevenue,
      })
      .then(() => {
        alert("Store created!");
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
            <Form.Group className="mb-3" controlId="storeName">
              <Form.Control
                placeholder="Store Name"
                onChange={(e) => setStoreName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlid="storeRevenue">
              <Form.Control
                placeholder="Initial Revenue"
                onChange={(e) => setStoreRevenue(e.target.value)}
              />
            </Form.Group>
            <Button variant="secondary" onClick={() => makeStore()}>
              Submit
            </Button>
            <div style={{ marginTop: "20px" }}>
              <Link to="/StoresPage">
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

export default MakeStorePage;
