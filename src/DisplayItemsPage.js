import axios from "axios";
import { useState } from "react";
import { Table, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const url = "https://cs6310-14.azurewebsites.net/store/display_items";

function DisplayItemsPage() {
  const [storeName, setStoreName] = useState("");
  const [items, setItems] = useState([]);

  const getItems = () => {
    async function fetchData() {
      const storeName = document.getElementById("storeName").value;
      await axios
        .get(url + "/" + storeName)
        .then((response) => {
          setItems(response.data);
        })
        .catch((error) => {
          alert(error.response.data.message);
        });
    }
    fetchData();
  };

  const handleSubmit = () => {
    const value = document.getElementById("storeName").value;
    setStoreName(value);
    getItems();
  };

  return (
    <div className="App">
      <header className="App-header">
        {!storeName ? (
          <div>
            <Form>
              <Form.Group className="mb-3">
                <Form.Control id="storeName" placeholder="Store Name" />
              </Form.Group>
              <Button variant="secondary" onClick={() => handleSubmit()}>
                Submit
              </Button>
            </Form>
            <br />
            <Link to="/ItemsPage">
              <Button className="buttonStyle" variant="secondary" size="sm">
                Go Back
              </Button>
            </Link>
          </div>
        ) : (
          <>
            <div>
              {items.length > 0 ? (
                <Table bordered style={{ color: "white" }}>
                  <thead>
                    <tr>
                      <th>Store Name</th>
                      <th>Item Name</th>
                      <th>Item Weight</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item) => {
                      return (
                        <tr>
                          <td style={{ color: "white" }}>{item.storeName} </td>
                          <td style={{ color: "white" }}>{item.name}</td>
                          <td style={{ color: "white" }}>{item.weight}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              ) : (
                <p>No items found</p>
              )}
            </div>
            <div style={{ marginTop: "20px" }}>
              <Link to="/ItemsPage">
                <Button className="buttonStyle" variant="secondary" size="sm">
                  Go Back
                </Button>
              </Link>
            </div>
          </>
        )}
      </header>
    </div>
  );
}

export default DisplayItemsPage;
