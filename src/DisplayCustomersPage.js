import axios from "axios";
import { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const url = "https://cs6310-14.azurewebsites.net/customer/display_customers";

function DisplayCustomersPage() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      await axios
        .get(url)
        .then((response) => {
          setCustomers(response.data);
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
          {customers.length > 0 ? (
            <Table bordered style={{ color: "white" }}>
              <thead>
                <tr>
                  <th>Account</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Phone Number</th>
                  <th>Rating</th>
                  <th>Credit</th>
                </tr>
              </thead>
              <tbody>
                {customers.map((customer) => {
                  return (
                    <tr>
                      <td style={{ color: "white" }}>{customer.account} </td>
                      <td style={{ color: "white" }}>{customer.firstName}</td>
                      <td style={{ color: "white" }}>{customer.lastName} </td>
                      <td style={{ color: "white" }}>{customer.phoneNumber}</td>
                      <td style={{ color: "white" }}>{customer.rating} </td>
                      <td style={{ color: "white" }}>{customer.credit}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          ) : (
            <p>No customers found</p>
          )}
        </div>
        <div style={{ marginTop: "20px" }}>
          <Link to="/CustomersPage">
            <Button className="buttonStyle" variant="secondary" size="sm">
              Go Back
            </Button>
          </Link>
        </div>
      </header>
    </div>
  );
}

export default DisplayCustomersPage;
