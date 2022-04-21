import axios from "axios";
import { useState } from "react";
import { Table, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const url = "https://cs6310-14.azurewebsites.net/order/display_orders";

function DisplayOrdersPage() {
  const [storeName, setStoreName] = useState("");
  const [orders, setOrders] = useState([]);

  const getItems = () => {
    async function fetchData() {
      const storeName = document.getElementById("storeName").value;
      await axios
        .get(url + "/" + storeName)
        .then((response) => {
          setOrders(response.data);
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
            <Link to="/OrdersPage">
              <Button className="buttonStyle" variant="secondary" size="sm">
                Go Back
              </Button>
            </Link>
          </div>
        ) : (
          <>
            <div>
              {orders.length > 0 ? (
                <Table bordered style={{ color: "white" }}>
                  <thead>
                    <tr>
                      <th>Store Name</th>
                      <th>Order ID</th>
                      <th>Drone ID</th>
                      <th>Customer Account</th>
                      <th>Order Items</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order) => {
                      return (
                        <tr>
                          <td style={{ color: "white" }}>
                            {order.order.storeName}{" "}
                          </td>
                          <td style={{ color: "white" }}>{order.order.id}</td>
                          <td style={{ color: "white" }}>
                            {order.order.droneId}
                          </td>
                          <td style={{ color: "white" }}>
                            {order.order.customerAccount}
                          </td>
                          <td style={{ color: "white" }}>
                            {order.orderItems.map(
                              (item) =>
                                "item name: " +
                                item.name +
                                ", total quantity: " +
                                item.quantity +
                                ", total cost: " +
                                item.totalCost +
                                ", total weight: " +
                                item.totalWeight
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              ) : (
                <p>No orders found</p>
              )}
            </div>
            <div style={{ marginTop: "20px" }}>
              <Link to="/OrdersPage">
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

export default DisplayOrdersPage;
