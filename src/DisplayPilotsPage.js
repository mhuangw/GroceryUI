import axios from "axios";
import { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const url = "https://cs6310-14.azurewebsites.net/pilot/display_pilots";

function DisplayPilotsPage() {
  const [pilots, setPilots] = useState([]);

  useEffect(() => {
    async function fetchData() {
      await axios
        .get(url)
        .then((response) => {
          setPilots(response.data);
        })
        .catch((error) => {
          alert(error.response.data.message);
        });
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          {pilots.length > 0 ? (
            <Table bordered style={{ color: "white" }}>
              <thead>
                <tr>
                  <th>Account</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Phone Number</th>
                  <th>Tax ID</th>
                  <th>License ID</th>
                  <th>Experience Level</th>
                </tr>
              </thead>
              <tbody>
                {pilots.map((pilot) => {
                  return (
                    <tr>
                      <td style={{ color: "white" }}>{pilot.account} </td>
                      <td style={{ color: "white" }}>{pilot.firstName}</td>
                      <td style={{ color: "white" }}>{pilot.lastName} </td>
                      <td style={{ color: "white" }}>{pilot.phoneNumber}</td>
                      <td style={{ color: "white" }}>{pilot.taxId} </td>
                      <td style={{ color: "white" }}>{pilot.licenseId}</td>
                      <td style={{ color: "white" }}>
                        {pilot.experienceLevel}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          ) : (
            <p>No pilots found</p>
          )}
        </div>
        <div style={{ marginTop: "20px" }}>
          <Link to="/PilotsPage">
            <Button className="buttonStyle" variant="secondary" size="sm">
              Go Back
            </Button>
          </Link>
        </div>
      </header>
    </div>
  );
}

export default DisplayPilotsPage;
