import axios from "axios";
import { useEffect, useState } from "react";
import { Table, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const url = "https://cs6310-14.azurewebsites.net/pilot/display_drones";

function DisplayDronesPage() {
  const [storeName, setStoreName] = useState("");
  const [drones, setDrones] = useState([]);

  const getItems = () => {
    async function fetchData() {
      const storeName = document.getElementById("storeName").value;
      await axios
        .get(url + "/" + storeName)
        .then((response) => {
          setDrones(response.data);
        })
        .catch((error) => {
          console.log(error.response);
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
            <Link to="/DronesPage">
              <Button className="buttonStyle" variant="secondary" size="sm">
                Go Back
              </Button>
            </Link>
          </div>
        ) : (
          <>
            <div>
              {drones.length > 0 ? (
                <Table bordered style={{ color: "white" }}>
                  <thead>
                    <tr>
                      <th>Store Name</th>
                      <th>ID</th>
                      <th>Weight Capacity</th>
                      <th>Flown By</th>
                      <th>Trips Left</th>
                      <th>Remaining Capacity</th>
                      <th>Completed Orders</th>
                    </tr>
                  </thead>
                  <tbody>
                    {drones.map((drone) => {
                      return (
                        <tr>
                          <td style={{ color: "white" }}>{drone.storeName} </td>
                          <td style={{ color: "white" }}>{drone.id}</td>
                          <td style={{ color: "white" }}>
                            {drone.weightCapacity}{" "}
                          </td>
                          <td style={{ color: "white" }}>{drone.flown_by}</td>
                          <td style={{ color: "white" }}>
                            {drone.trips_left}{" "}
                          </td>
                          <td style={{ color: "white" }}>
                            {drone.remaining_cap}
                          </td>
                          <td style={{ color: "white" }}>{drone.num_orders}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              ) : (
                <p>No drones found</p>
              )}
            </div>

            <div style={{ marginTop: "20px" }}>
              <Link to="/DronesPage">
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

export default DisplayDronesPage;
